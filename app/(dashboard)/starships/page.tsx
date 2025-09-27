"use client";
import Table from "@/components/reusables/Table";
import TableLoading from "@/components/reusables/TableLoading";
import { getAllStarships } from "@/services";
import { starshipHeader } from "@/utils/utils";
import { useEffect, useState } from "react";

export interface IStar {
  name: string;
  class: string;
  length: string;
  model: string;
  character: string;
  passengers: string;
  url:string;
  pilots:string[]
}
export default function Page() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading]= useState(true)
  const [starshipData, setStarshipData] = useState([]);

  const getStarShip = async (pageNumber:number) => {
    try {
      const response = await getAllStarships(pageNumber);
      const data =
        response?.data?.results?.map((star: IStar,) => ({
          name: star.name,
          model: star.model,
          class: "Starfighter",
          passenger: star.passengers,
          length: star.length + " Meters",
          character: "https://swapi.dev/api/people",
          id:  star.url.split("/").filter(Boolean).pop()
        })) || [];
      setStarshipData(data);
      setCount(response?.data?.count || 0);
      setLoading(false)
    } catch {
      throw new Error("Failed to load Starship data");
    }
  };

  useEffect(() => {
    getStarShip(page);
  },[page]);
  const totalPages = Math.ceil(count / 10); 
  return (
    <main>
      {loading ? (
        <TableLoading />
      ) : (
        <>
          <div>
            <h2 className=" text-muted">Starships ({count})</h2>
            <Table route="starships" headers={starshipHeader} items={starshipData} />
          </div>
          <div className="flex items-center justify-center text-sm  gap-2 mt-5">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1 border bg-primary text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 border rounded bg-primary text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}
