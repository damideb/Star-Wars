import { getAllSpecies, getSingleSpecie } from "@/services";
import { ISpecies } from "../page";
import DetailLayout from "@/components/DetailLayout";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  const response = await getSingleSpecie(id);
  const specie = response.data;
  return {
    title: specie.name,
  };
};
export async function generateStaticParams() {
  try {
    const response = await getAllSpecies();
    const species = response?.data?.results || [];

    return species.map((specie: ISpecies) => ({
      id: specie.url.split("/").filter(Boolean).pop(),
    }));
  } catch {
    return [];
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  try {
    const response = await getSingleSpecie(id);
    const specie = response.data;

    return (
      <DetailLayout
        imageSrc="/wookie.png"
        imageAlt={specie.name}
        title={specie.name}
        details={{
          Designation: specie?.designation,
          Language: specie?.language,
          "Eye Colors": specie?.eye_colors,
          "Average Lifespan": specie?.average_lifespan,
        }}
      />
    );
  } catch {
    throw new Error("Failed to get specie data");
  }
}
