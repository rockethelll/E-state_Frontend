import { useEffect, useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import useDataFetching from "../custom/useFetch";

export default function Home() {
  let [, sendGetRequest] = useDataFetching();

  let [data, setData] = useState(null);

  useEffect(() => {
    sendGetRequest({
      url: "https://estate-api.herokuapp.com/estates",
      method: "GET",
      action: getData,
    });
  }, []);

  function getData(response) {
    console.log(response)
    const responseData = response.json();
    responseData.then((d) => {
      setData(d);
    });
  }

  return (
    <>
      <Hero />
      <main className="mt-10">
        <h2 className="mb-10 text-3xl font-semibold">
          Découvrez les dernières annonces
        </h2>
        <div className="auto-grid">
          {data ? (
            data.map((element) => <Card key={element.id} data={element} />)
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </main>
    </>
  );
}
