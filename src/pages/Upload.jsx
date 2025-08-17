import { useState } from "react";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the post
    console.log({
      title,
      content,
      file
    });

    alert("Post submitted! (not saved yet)");
    
    // Reset form
    setTitle("");
    setContent("");
    setFile(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-orange-600">Upload Post</h1>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4"
      >
        {/* Title */}
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded-lg"
          required
        />

        {/* Content */}
        <textarea
          placeholder="Write your post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded-lg min-h-[120px]"
          required
        />

        {/* File Upload */}
        <input
          type="file"
          accept="image/*, video/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded-lg"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
