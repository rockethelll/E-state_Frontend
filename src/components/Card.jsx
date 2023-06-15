import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <Link
      to={`/show/${data.id}`}
      className="card h-full max-h-[436px] overflow-hidden flex-col bg-[#fff] aspect-[9/10]  w-full max drop-shadow"
    >
      <div className="card__img w-full aspect-[6/4] bg-[#1f1f1f]"></div>
      <div className="card__body flex-col p-5">
        <p className="text-lg font-medium">{data.title}</p>
        <p className="text-2xl font-medium">{data.price} €</p>
        <p className="text-xs font-medium">{data.description}</p>
      </div>
    </Link>
  );
}
