import MetricCard from "@/components/reusables/MetricCard";
import Table from "@/components/reusables/Table";
import {
  getAllFilms,
  getAllPeople,
  getAllSpecies,
  getAllStarships,
} from "@/services";
import { overviewHeader } from "@/utils/utils";

export interface IFilm {
  title: string;
  director: string;
  release_date: string;
  episode_id: string;
  producer: string;
  characters: string[];
}
interface MetricData {
  films: number;
  people: number;
  starships: number;
  species: number;
}
export default async function Page() {
  let films = [];
  let metrics: MetricData;

  try {
    const results = await Promise.allSettled([
      getAllFilms(),
      getAllPeople(),
      getAllStarships(1),
      getAllSpecies(),
    ]);

    const filmsRes =
      results[0].status === "fulfilled" ? results[0].value.data.results : [];
      const filmCount =
        results[0].status === "fulfilled" ? results[0].value.data.count:0;
    const peopleCount =
      results[1].status === "fulfilled" ? results[1].value.data.count : 0;
    const starshipCount =
      results[2].status === "fulfilled" ? results[2].value.data.count : 0;
       const speciesCount =
      results[2].status === "fulfilled" ? results[2].value.data.count : 0

      metrics = {
        films: filmCount,
        people: peopleCount,
        starships: starshipCount,
        species: speciesCount,
      };

    films =
      filmsRes?.map((film: IFilm) => ({
        title: film.title,
        director: film.director,
        date: film.release_date,
        id: film.episode_id,
        producer: film.producer,
        character: film.characters?.[0] || "N/A",
      })) || [];
  } catch {
    throw new Error("Failed to load dashboard data");
  }

  return (
    <main className="flex flex-col gap-5">
      <div className="flex flex-col lg:w-[90%] md:flex-row gap-12">
        <MetricCard
          metric={{
            category: "Films",
            amount: metrics?.films,
            color: "#A9FFE0",
          }}
        />
        <MetricCard
          metric={{
            category: "Starship",
            amount: metrics?.starships,
            color: "#A9C1FF",
          }}
        />
        <MetricCard
          metric={{
            category: "People",
            amount: metrics?.people,
            color: "#FFA9EC",
          }}
        />
        <MetricCard
          metric={{
            category: "Species",
            amount: metrics.species,
            color: "#FDFFA9",
          }}
        />
      </div>

      <div className="mt-10 ">
        <h2 className="text-muted">Films</h2>
        <Table route='overview' headers={overviewHeader} items={films} />
      </div>
    </main>
  );
}
