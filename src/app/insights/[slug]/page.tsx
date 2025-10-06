"use client";
import { useState, useEffect, FormEvent } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

interface Blog {
  id: string;
  title: string;
  subject: string;
  content: string;
  file_url: string | null;
  tags: string[];
  created_at: string;
  author_id: string;
}

interface Comment {
  id: string;
  blog_id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function BlogPage() {
  const { slug } = useParams(); // get slug from URL
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Fetch blog by slug
  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const { data: blogsData, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching blog:", error.message);
        setBlog(null);
      } else {
        setBlog(blogsData as Blog);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [slug]);

  // Fetch comments
  useEffect(() => {
    if (!blog) return;

    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("blog_id", blog.id)
        .order("created_at", { ascending: true });

      if (error) console.error("Error fetching comments:", error.message);
      else if (data) setComments(data as Comment[]);
    };

    fetchComments();
  }, [blog]);

  // Submit comment
  const handleCommentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !blog) return;

    setSubmitting(true);

    const { error } = await supabase.from("comments").insert([
      {
        blog_id: blog.id,
        name,
        message,
      },
    ]);

    if (error) {
      alert("Failed to submit comment: " + error.message);
    } else {
      setComments((prev) => [
        ...prev,
        { id: crypto.randomUUID(), blog_id: blog.id, name, message, created_at: new Date().toISOString() },
      ]);
      setName("");
      setMessage("");
    }

    setSubmitting(false);
  };

  if (loading) return <p className="text-center py-16">Loading blog...</p>;
  if (!blog) return <p className="text-center py-16">Blog not found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 md:px-16">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-2">
        Published: {new Date(blog.created_at).toLocaleDateString()}
      </p>
      {blog.tags.length > 0 && (
        <p className="text-gray-400 mb-6">Tags: {blog.tags.join(", ")}</p>
      )}

      {/* Blog Content */}
      {blog.file_url && (
        <div className="mb-6">
          {blog.file_url.endsWith(".pdf") ? (
            <iframe
              src={blog.file_url}
              className="w-full h-[400px] border rounded"
            />
          ) : (
            <img
              src={blog.file_url}
              alt={blog.title}
              className="w-full h-auto rounded mb-4"
            />
          )}
        </div>
      )}

      <p className="text-gray-700 mb-12">{blog.subject}</p>

      {/* Comments Section */}
      <div className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">💬 Comments</h2>

        {comments.length === 0 ? (
          <p className="text-gray-500 mb-4">No comments yet. Be the first!</p>
        ) : (
          <ul className="mb-6 space-y-4">
            {comments.map((c) => (
              <li key={c.id} className="border-b pb-2">
                <p className="text-gray-800 font-semibold">{c.name}</p>
                <p className="text-gray-600">{c.message}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(c.created_at).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Post Comment"}
          </button>
        </form>
      </div>
    </div>
  );
}
