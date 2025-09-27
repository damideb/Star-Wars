import Table from "@/components/reusables/Table";
import { getAllPeople } from "@/services";
import { formatDate, peopleHeader } from "@/utils/utils";

export interface IPeople {
  name: string;
  birth_year: string;
  gender: string;
  hair_color: string;
  height: string;
  created: string;
  skin_color:string
}
export default async function Page() {
  let peopleData;
  try {
    const response = await getAllPeople();
    peopleData =
      response?.data?.results?.map((people: IPeople, i: number) => ({
        name: people.name,
        birthYear: people.birth_year,
        gender: people.gender,
        hairColor: people.hair_color,
        height: `${people.height} CM`,
        created: formatDate(people.created),
        id: String(i + 1),
      })) || [];
  } catch {
    throw new Error("Failed to load People data");
  }

  return (
    <main>
      <div>
        <h2 className=" text-muted">People</h2>
        <Table route="people" headers={peopleHeader} items={peopleData} />
      </div>
    </main>
  );
}
