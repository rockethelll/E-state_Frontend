import { useEffect, useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import axiosClient from "../axiosClient";
import { useQuery, useQueryClient } from "react-query";

function useEstates() {
  return useQuery({
    queryKey: ["estates"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/estates");
      return data;
    },
  });
}

export default function Home() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useEstates();
  console.log({ status, data, error, isFetching });

  return (
    <>
      <Hero />
      <main className="mt-10">
        <h2 className="mb-10 text-3xl font-semibold">
          Découvrez les dernières annonces
        </h2>
        {status === "loading" ? (
          <p>Loading ...</p>
        ) : status === "error" ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            <div>{isFetching ? "Background Updating..." : " "}</div>
            <div className="auto-grid">
              {data.map((element) => (
                <Card key={element.id} data={element} />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
