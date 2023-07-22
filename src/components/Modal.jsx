export default function Modal({ open, onClose, children }) {
  return (
    <div onClick={onClose}>
      <h3
        className="p-4 mt-4 bg-primary text-white"
        onClick={(e) => e.stopPropagation()}
      >
        Hello World
      </h3>
    </div>
  );
}
