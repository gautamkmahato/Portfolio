// components/WidgetCard.tsx
import Link from "next/link";

export default function WidgetCard({ widget }) {
  return (
    <div className="border rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold">{widget.name}</h2>
      <p className="text-sm text-gray-500 mb-2">
        Widget ID: <code>{widget.id}</code>
      </p>
      <p className="text-sm bg-gray-100 p-2 rounded font-mono">
        &lt;script src="https://yourdomain.com/widget.js" data-widget-id="{widget.id}" async&gt;&lt;/script&gt;
      </p>

      <div className="flex gap-2 mt-4">
        <Link
          href={`/dashboard/${widget.id}/edit`}
          className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </Link>
        <form action={`/api/widgets/${widget.id}/delete`} method="POST">
          <button
            type="submit"
            className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
