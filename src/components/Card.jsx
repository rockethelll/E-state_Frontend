export default function Card({ data }) {
  return (
    <div className="card flex-col bg-[#fff] aspect-[9/10] w-full drop-shadow">
      <div className="card__img w-full aspect-[6/4] bg-[#1f1f1f]">test</div>
      <div className="card__body flex-col p-5">
        <p className="text-lg font-medium">{data.title}</p>
        <p className="text-2xl font-medium">{data.price} €</p>
        <p className="text-xs font-medium">{data.description}</p>
      </div>
    </div>
  );
}
