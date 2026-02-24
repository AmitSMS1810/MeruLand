export default function Button({ text }) {
  return (
    <button className="bg-black text-white px-6 py-2 rounded-md hover:opacity-90">
      {text}
    </button>
  );
}