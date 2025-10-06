"use client";

import { useEffect, useState, FormEvent } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Mail, User, Phone, Globe, MessageSquare } from "lucide-react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  country: string | null;
  message: string;
  created_at: string;
}

export default function AdminMessagesPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [replyTo, setReplyTo] = useState<ContactMessage | null>(null);
  const [replyMessage, setReplyMessage] = useState<string>("");
  const [sentMessage, setSentMessage] = useState<boolean>(false);
  const [deleteMessageId, setDeleteMessageId] = useState<number | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);

  // 🔐 Protect page: redirect to login if not authenticated
  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) router.replace("/admin/login");
    };
    checkAdmin();
  }, [router]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching messages:", error.message);
    else if (data) setMessages(data as ContactMessage[]);

    setLoading(false);
  };

  const sendReply = async (e: FormEvent) => {
    e.preventDefault();
    if (!replyTo) return;

    const res = await fetch("/api/reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: replyTo.email,
        subject: `Reply from Impact Plus Group`,
        message: replyMessage,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setSentMessage(true);
      setReplyMessage("");
    } else {
      alert("Failed to send email: " + result.error);
    }
  };

  const handleDelete = async (id: number) => {
    const res = await fetch("/api/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const result = await res.json();
    if (result.success) {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
      setDeleteMessageId(id);
      setDeleteSuccess(true);
      setTimeout(() => setDeleteSuccess(false), 3000);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-16 lg:px-32">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Impact Plus Group Messages
      </h1>

      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No contact messages yet.</p>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-xl transition-all"
            >
              {/* Message info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="flex items-center">
                  <User className="w-5 h-5 text-blue-600 mr-2" /> {msg.name}
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" /> {msg.email}
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" /> {msg.phone || "N/A"}
                </p>
                <p className="flex items-center">
                  <Globe className="w-5 h-5 text-blue-600 mr-2" /> {msg.country || "N/A"}
                </p>
              </div>

              {/* Message content */}
              <div className="mt-4 flex items-start">
                <MessageSquare className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                <p>{msg.message}</p>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Received: {new Date(msg.created_at).toLocaleString()}
              </p>

              {/* Action buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={() => {
                    setReplyTo(msg);
                    setSentMessage(false);
                  }}
                >
                  Reply
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(msg.id)}
                >
                  Delete
                </button>
              </div>

              {/* Delete confirmation */}
              {deleteSuccess && deleteMessageId === msg.id && (
                <p className="text-red-600 font-semibold mt-2">
                  Message deleted successfully!
                </p>
              )}

              {/* Reply form */}
              {replyTo?.id === msg.id && (
                <form className="mt-4 border-t pt-4" onSubmit={sendReply}>
                  <textarea
                    className="w-full p-2 border rounded mb-2"
                    rows={4}
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Type your reply here..."
                    required
                  />
                  <div className="flex gap-2 mb-2">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Send Reply
                    </button>
                    <button
                      type="button"
                      className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                      onClick={() => {
                        setReplyTo(null);
                        setReplyMessage("");
                        setSentMessage(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                  {sentMessage && (
                    <p className="text-green-600 font-semibold">
                      Email sent successfully!
                    </p>
                  )}
                </form>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
