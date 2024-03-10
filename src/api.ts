import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const getAugments = () =>
  instance.get("augments/").then((response) => response.data);

export const getChampions = () =>
  instance.get("champions/").then((response) => response.data);

export const getChampion = ({ queryKey }: QueryFunctionContext) => {
  const [_, championPk] = queryKey;
  return instance
    .get(`champions/${championPk}`)
    .then((response) => response.data);
};

export const getComps = () =>
  instance.get("comps/").then((response) => response.data);

export const getChampionsByOrigin = ({ queryKey }: QueryFunctionContext) =>{
  const [_,championName] = queryKey;
  return instance
    .get(`synergies/origins/${queryKey}`)
    .then((response) => response.data);
}