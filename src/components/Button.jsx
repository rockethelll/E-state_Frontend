export default function Button({ content, action, className, type }) {
  switch (className) {
    case "primary":
      return (
        <button type={type} className="btn bg-black text-white" onClick={action}>
          {content}
        </button>
      );
    case "secondary":
      return (
        <button type={type} className="btn bg-white black" onClick={action}>
          {content}
        </button>
      );
  }
}
