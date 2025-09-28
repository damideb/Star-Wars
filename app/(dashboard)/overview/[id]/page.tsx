import { getSingleFilm, getAllFilms } from "@/services";
import { IFilm } from "../page";
import { formatFullDate } from "@/utils/utils";
import DetailLayout from "@/components/DetailLayout";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;

  const response = await getSingleFilm(id);
  const film = response.data;
  return {
    title: film.title,
  };
};

export async function generateStaticParams() {
  try {
    const response = await getAllFilms();
    const films = response?.data?.results || [];

    return films.map((film: IFilm) => ({
      id: film.episode_id.toString(),
    }));
  } catch {
    return [];
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  try {
    const response = await getSingleFilm(id);
    const film = response.data;

    return (
      <DetailLayout
        imageSrc="/overview.png"
        imageAlt={film.title}
        title={film.title}
        details={{
          Producer: film.producer,
          Director: film.director,
          "Release Date": formatFullDate(film.release_date),
        }}
      />
    );
  } catch {
    throw new Error("Failed to get film data");
  }
}
