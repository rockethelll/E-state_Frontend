import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import axiosClient from "../axiosClient";

function useEstate(id) {
  return useQuery({
    queryKey: ["estate"],
    queryFn: async () => {
      const { data } = await axiosClient.get(`/estates/${id}`);
      return data;
    },
  });
}

export default function Show() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useEstate(id);

  return (
    <main className="mt-[5rem]">
      {status === "loading" ? (
        <p>Loading ...</p>
      ) : status === "error" ? (
        <p>Error : {error.message}</p>
      ) : (
        <>
          <h2 className="text-3xl font-semibold">{data.title}</h2>
          <p className="my-2">Centre val de Loire - Angers - 49000</p>
          <h3 className="text-3xl font-semibold mt-2 mb-5">{data.price} €</h3>
          <div>
            <a href={`mailto:thomasleboss@yopmail.com`} className="btn">Contacter le vendeur</a>
            <a className="btn">Voir le bien sur la carte</a>
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
      )}
    </main>
  );
}
