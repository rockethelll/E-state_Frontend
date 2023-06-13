import React from "react";

export default function Button({ content, action, type }) {
  switch (type) {
    case "primary":
      return (
        <button className="btn bg-black text-white" onClick={action}>
          {content}
        </button>
      );
    case "secondary":
      return (
        <button className="btn bg-white black" onClick={action}>
          {content}
        </button>
      );
  }
}
