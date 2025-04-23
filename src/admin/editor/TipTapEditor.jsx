import React, { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TiptapEditor = ({ onSave }) => {
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  const handleSave = () => {
    if (!title || !editor) return;
    const content = editor.getHTML();
    onSave({ title, content });
    setTitle("");
    editor.commands.setContent("");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2"
      />

      <div className="border border-gray-300 rounded-md p-2 min-h-[200px]">
        <EditorContent editor={editor} />
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Save Post
      </button>
    </div>
  );
};

export default TiptapEditor;
