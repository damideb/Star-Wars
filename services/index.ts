import { IFilm } from "@/app/(dashboard)/overview/page";
import { IPeople } from "@/app/(dashboard)/people/page";
import { ISpecies } from "@/app/(dashboard)/species/page";
import { IStar } from "@/app/(dashboard)/starships/page";
import axios from "axios";

const baseUrl = "https://swapi.dev/api/";

const api = axios.create({
  baseURL: baseUrl,
});

export const getAllFilms = () => {
  const url = "films/";
  return api.get(url);
};
export const getSingleFilm = (id: string):Promise<{data:IFilm}> => {
  const url = `films/${id}`;
  return api.get(url);
};
export const getAllPeople = () => {
  const url = "people/";
  return api.get(url);
};
export const getSinglePeople = (id: string):Promise<{data:IPeople}> => {
  const url = `people/${id}`;
  return api.get(url);
};
export const getAllSpecies = () => {
  const url = "species/";
  return api.get(url);
};
export const getSingleSpecie = (id: string):Promise<{data:ISpecies}> => {
  const url = `species/${id}`;
  return api.get(url);
};
export const getAllStarships = (page:number) => {
  const url = `starships/?page=${page}`;
  return api.get(url);
};
export const getSingleStarship = (id: string):Promise<{data:IStar}> => {
  const url = `starships/${id}`;
  return api.get(url);
};
