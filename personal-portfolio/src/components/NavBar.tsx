export default function NavBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 flex justify-between px-10 py-5 border-b z-50"
      style={{
        background: "var(--color-bg-nav)",
        borderColor: "var(--color-border-nav)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div>
        <h1 className="font-bold text-white">AV</h1>
      </div>
      <ul className="flex gap-6">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Work</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}
