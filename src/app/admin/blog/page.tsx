"use client";

import { useEffect, useState, FormEvent } from "react";
import { supabase } from "../../../lib/supabaseClient";

interface Blog {
  id: string;
  title: string;
  subject: string;
  slug: string;
  file_url: string | null;
  tags: string[];
  created_at: string;
  author_id: string | null;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Upload form states
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [tags, setTags] = useState("");
  const [uploading, setUploading] = useState(false);

  // Edit form states
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editSubject, setEditSubject] = useState("");
  const [editFile, setEditFile] = useState<File | null>(null);
  const [editTags, setEditTags] = useState("");
  const [updating, setUpdating] = useState(false);

  // Fetch blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setBlogs(data as Blog[]);
    setLoading(false);
  };

  // Upload a new blog
  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    setUploading(true);

    let fileUrl: string | null = null;
    if (file) {
      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("blog-files")
        .upload(fileName, file);

      if (uploadError) {
        console.error(uploadError.message);
        setUploading(false);
        return;
      }

      const { data: urlData } = supabase.storage
        .from("blog-files")
        .getPublicUrl(fileName);
      fileUrl = urlData.publicUrl;
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const { error } = await supabase.from("blogs").insert([
      { title, subject, slug, file_url: fileUrl, tags: tags.split(",").map(t => t.trim()) }
    ]);

    if (error) {
      console.error(error.message);
    } else {
      setTitle("");
      setSubject("");
      setTags("");
      setFile(null);
      fetchBlogs();
    }
    setUploading(false);
  };

  const startEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setEditTitle(blog.title);
    setEditSubject(blog.subject);
    setEditTags(blog.tags.join(", "));
  };

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    setUpdating(true);

    let updatedFileUrl = editingBlog?.file_url;
    if (editFile) {
      const fileName = `${Date.now()}-${editFile.name}`;
      await supabase.storage.from("blog-files").upload(fileName, editFile);
      const { data: urlData } = supabase.storage.from("blog-files").getPublicUrl(fileName);
      updatedFileUrl = urlData.publicUrl;
    }

    await supabase.from("blogs").update({
      title: editTitle,
      subject: editSubject,
      file_url: updatedFileUrl,
      tags: editTags.split(",").map(t => t.trim())
    }).eq("id", editingBlog?.id);

    setEditingBlog(null);
    fetchBlogs();
    setUpdating(false);
  };

  const handleDelete = async (id: string) => {
    await supabase.from("blogs").delete().eq("id", id);
    fetchBlogs();
  };

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black">Blogs</h1>

      {/* Upload form */}
      <form onSubmit={handleUpload} className="mb-6 space-y-3 bg-white p-4 rounded shadow">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className="border p-2 w-full rounded text-black"
        />
        <textarea
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
          className="border p-2 w-full rounded text-black"
        />
        <input
          type="file"
          onChange={e => setFile(e.target.files?.[0] || null)}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={e => setTags(e.target.value)}
          className="border p-2 w-full rounded text-black"
        />
        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded font-semibold"
        >
          {uploading ? "Uploading..." : "Upload Blog"}
        </button>
      </form>

      {/* Blogs list */}
      {loading ? (
        <p className="text-black">Loading...</p>
      ) : blogs.length === 0 ? (
        <p className="text-black">No blogs yet.</p>
      ) : (
        blogs.map(blog => (
          <div key={blog.id} className="border rounded p-4 mb-4 bg-white shadow">
            <h2 className="text-xl font-semibold text-black">{blog.title}</h2>
            <p className="text-black mt-1">{blog.subject}</p>
            <p className="text-black font-medium mt-1">Tags: {blog.tags.join(", ")}</p>
            {blog.file_url && (
              <a
                href={blog.file_url}
                target="_blank"
                className="text-blue-700 underline mt-1 block"
              >
                View File
              </a>
            )}
            <div className="mt-2 space-x-2">
              <button
                onClick={() => startEdit(blog)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded font-semibold"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded font-semibold"
              >
                Delete
              </button>
            </div>

            {/* Edit form */}
            {editingBlog?.id === blog.id && (
              <form onSubmit={handleUpdate} className="mt-3 space-y-2 bg-gray-100 p-3 rounded">
                <input
                  type="text"
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  required
                  className="border p-2 w-full rounded text-black"
                />
                <textarea
                  value={editSubject}
                  onChange={e => setEditSubject(e.target.value)}
                  required
                  className="border p-2 w-full rounded text-black"
                />
                <input
                  type="file"
                  onChange={e => setEditFile(e.target.files?.[0] || null)}
                  className="border p-2 w-full rounded"
                />
                <input
                  type="text"
                  value={editTags}
                  onChange={e => setEditTags(e.target.value)}
                  className="border p-2 w-full rounded text-black"
                />
                <button
                  type="submit"
                  disabled={updating}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold"
                >
                  {updating ? "Updating..." : "Update Blog"}
                </button>
              </form>
            )}
          </div>
        ))
      )}
    </section>
  );
}
