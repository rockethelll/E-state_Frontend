import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDataFetching from "../custom/useFetch";
export default function Show() {
  const { id } = useParams();
  let [, sendGetRequest] = useDataFetching();
  let [data, setData] = useState(null);

  useEffect(() => {
    sendGetRequest({
      url: `https://estate-api.herokuapp.com/estates/${id}`,
      method: "GET",
      action: getData,
    });
  }, []);

  function getData(response) {
    console.log(response);
    const responseData = response.json();
    responseData.then((d) => {
      setData(d);
    });
  }
  return (
    <main className="mt-[5rem]">
      {data ? (
        <>
          <h2 className="text-3xl font-semibold">{data.title}</h2>
          <p className="my-2">Centre val de Loire - Angers - 49000</p>
          <h3 className="text-3xl font-semibold mt-2 mb-5">{data.price} €</h3>
          <div>
            <button className="btn">Contacter le vendeur</button>
            <button className="btn">Voir le bien sur la carte</button>
          </div>
          <div className="h-full max-h-[700px]">
            <div className=" mt-5 grid h-fit grid-rows-2 grid-cols-2 gap-3  max-w-[40vw]">
              <div className="cell-1">Test</div>
              <div className="cell-2">Test</div>
              <div className="cell-3">Test</div>
            </div>
          </div>
          <p className="max-w-[40vw]">
            {data.description}
            {data.description}
            {data.description}
            {data.description}
            {data.description}
          </p>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </main>
  );
}
