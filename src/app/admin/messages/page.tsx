"use client";

import { useEffect, useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Mail, User, Phone, Globe, MessageSquare, Loader2 } from "lucide-react";

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
  const [sendingReply, setSendingReply] = useState<boolean>(false);

  // 🔐 Protect page
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

    setSendingReply(true);
    setSentMessage(false);

    try {
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
    } catch (err) {
      console.error("Error sending reply:", err);
      alert("Something went wrong while sending your reply.");
    } finally {
      setSendingReply(false);
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
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-16 lg:px-32 text-gray-900 font-[Montserrat,sans-serif]">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 font-[Georgia,serif]">
        Impact Plus Group Messages
      </h1>

      {loading ? (
        <p className="text-gray-700">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-gray-700">No contact messages yet.</p>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-xl transition-all"
            >
              {/* Message info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-900">
                <p className="flex items-center font-[Montserrat,sans-serif]">
                  <User className="w-5 h-5 text-blue-600 mr-2" /> {msg.name}
                </p>
                <p className="flex items-center font-[Montserrat,sans-serif]">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" /> {msg.email}
                </p>
                <p className="flex items-center font-[Montserrat,sans-serif]">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" /> {msg.phone || "N/A"}
                </p>
                <p className="flex items-center font-[Montserrat,sans-serif]">
                  <Globe className="w-5 h-5 text-blue-600 mr-2" /> {msg.country || "N/A"}
                </p>
              </div>

              {/* Message content */}
              <div className="mt-4 flex items-start text-gray-800 font-[Montserrat,sans-serif]">
                <MessageSquare className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                <p>{msg.message}</p>
              </div>

              <p className="mt-2 text-sm text-gray-500 font-[Montserrat,sans-serif]">
                Received: {new Date(msg.created_at).toLocaleString()}
              </p>

              {/* Action buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition font-[Montserrat,sans-serif]"
                  onClick={() => {
                    setReplyTo(msg);
                    setSentMessage(false);
                    setReplyMessage("");
                  }}
                >
                  Reply
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition font-[Montserrat,sans-serif]"
                  onClick={() => handleDelete(msg.id)}
                >
                  Delete
                </button>
              </div>

              {/* Delete confirmation */}
              {deleteSuccess && deleteMessageId === msg.id && (
                <p className="text-red-600 font-semibold mt-2 font-[Montserrat,sans-serif]">
                  Message deleted successfully!
                </p>
              )}

              {/* Reply form */}
              {replyTo?.id === msg.id && (
                <form className="mt-4 border-t pt-4" onSubmit={sendReply}>
                  <textarea
                    className="w-full p-3 border-2 border-gray-300 rounded-md mb-3 focus:border-blue-700 focus:ring-2 focus:ring-blue-300 outline-none text-gray-900 placeholder-gray-500 transition-all font-[Montserrat,sans-serif]"
                    rows={4}
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Type your reply here..."
                    required
                    disabled={sendingReply}
                  />

                  <div className="flex gap-2 items-center">
                    <button
                      type="submit"
                      className={`flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition font-medium font-[Montserrat,sans-serif] ${
                        sendingReply ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                      disabled={sendingReply}
                    >
                      {sendingReply && (
                        <Loader2 className="h-5 w-5 animate-spin text-white" />
                      )}
                      {sendingReply ? "Sending..." : "Send Reply"}
                    </button>
                    <button
                      type="button"
                      className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition font-[Montserrat,sans-serif]"
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
                    <p className="text-green-600 font-semibold mt-3 font-[Montserrat,sans-serif]">
                      ✅ Email sent successfully!
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
