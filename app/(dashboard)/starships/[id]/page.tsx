import { getAllStarships, getSingleStarship } from "@/services";
import { IStar } from "../page";
import DetailLayout from "@/components/DetailLayout";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  const response = await getSingleStarship(id);
  const star = response.data;
  return {
    title: star.name,
  };
};

export async function generateStaticParams() {
  try {
    const response = await getAllStarships(1);
    const stars = response?.data?.results || [];

    return stars.map((star: IStar) => ({
      id: star.url.split("/").filter(Boolean).pop(),
    }));
  } catch {
    return [];
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  try {
    const response = await getSingleStarship(id);
    const star = response.data;

    return (
      <DetailLayout
        imageSrc="/starship.png"
        imageAlt={star.name}
        title={star.name}
        details={{
          Model: star?.model,
          Passengers: star?.passengers,
          Pilots: star?.pilots.length ? star?.pilots.join(", ") : "--",
        }}
      />
    );
  } catch {
    throw new Error("Failed to get star data");
  }
}
