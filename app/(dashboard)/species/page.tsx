import Table from "@/components/reusables/Table";
import { getAllSpecies } from "@/services";
import { formatDate, speciesHeader } from "@/utils/utils";
export interface ISpecies {
  name: string;
  eye_colors: string;
  classification: string;
  hair_colors: string;
  average_height: string;
  created: string;
  url: string;
  designation: string;
  language: string;
  average_lifespan:string
}
export default async function Page() {

   let speciesData;
    try {
      const response = await getAllSpecies();
      speciesData =
        response?.data?.results?.map((species: ISpecies) => ({
          name: species?.name,
          classification: species?.classification,
          eyeColor: species.eye_colors,
          hairColor: species.hair_colors,
          height: species.average_height !=='n/a'?`${species.average_height} CM`:'N/A',
          created: formatDate(species.created),
          id: species.url.split("/").filter(Boolean).pop()
        })) || [];
    } catch {
      throw new Error("Failed to load species data");
    }
  
  return (
    <main >
      <div className="">
        <h2 className=" text-muted">Species</h2>
        <Table route="species" headers={speciesHeader} items={speciesData} />
      </div>
    </main>
  );
}
