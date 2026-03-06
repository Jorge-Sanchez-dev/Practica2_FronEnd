
import { api } from "./axios"
import type { Country } from "@/type";

export async function searchCountries(q: string): Promise<Country[]> {
    const res = await api.get<Country[]>(`/name/${q}?fields=name,flags,population`);
    return res.data;
}

export async function getAllCountries(): Promise<Country[]> {
    const res = await api.get<Country[]>(`/all?fields=name,flags,population`);
    return res.data;
}

export async function getCountryByName(name: string): Promise<Country> {
  const res = await api.get<Country[]>(`/name/${name}?fullText=true`);
  return res.data[0];
}
