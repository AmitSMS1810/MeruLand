export default function Avatar({ src }) {
  return (
    <img
      src={src}
      alt="avatar"
      className="w-10 h-10 rounded-full object-cover border"
    />
  );
}