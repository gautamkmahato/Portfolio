"use client";

import { useState } from "react";

export default function WidgetForm({ widget = {} }) {
  const [form, setForm] = useState({
    name: widget.name || "",
    greeting: widget.greeting || "Hi! How can I help you?",
    theme: widget.theme || "light",
    position: widget.position || "right",
  });

  const isEditing = !!widget.id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/widgets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form),      
    });

    if (res.ok) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Greeting</label>
        <input
          type="text"
          value={form.greeting}
          onChange={(e) => setForm({ ...form, greeting: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Theme</label>
        <select
          value={form.theme}
          onChange={(e) => setForm({ ...form, theme: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Position</label>
        <select
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="right">Bottom Right</option>
          <option value="left">Bottom Left</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        {isEditing ? "Update Widget" : "Create Widget"}
      </button>
    </form>
  );
}
