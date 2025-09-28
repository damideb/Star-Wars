import { getAllPeople, getSinglePeople } from "@/services";
import { IPeople } from "../page";
import DetailLayout from "@/components/DetailLayout";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
const response = await getSinglePeople(id);
  const people = response.data;
  return {
    title: people.name,
  };
};

export async function generateStaticParams() {
  try {
    const response = await getAllPeople();
    const peoples = response?.data?.results || [];

    return peoples.map((people: IPeople, i: number) => ({
      id: String(i + 1),
    }));
  } catch {
    return [];
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  try {
    const response = await getSinglePeople(id);
    const people = response.data;

    return (
      <DetailLayout
        imageSrc="/people.png"
        imageAlt={people.name}
        title={people.name}
        details={{
          Gender: people.gender,
          "Year of birth": people.birth_year,
          "Skin Color": people.skin_color,
          Height: `${people.height}CM`,
        }}
      />
    );
  } catch {
    throw new Error("Failed to get people data");
  }
}
