"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import type { Country } from "@/type";
import { getCountryByName } from "@/app/lib/pais";
import "./styles.css";

export default function CountryPage() {
  const { name } = useParams<{ name: string }>();

  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const data = await getCountryByName(name);
        setCountry(data);
      } catch (error) {
        console.error("Error cargando país");
      }
    }
    if (name) fetchCountry();
  }, [name]);

  if (!country) return <p>Cargando...</p>;

  return (
  <div className="country-container">

    <div className="back-button">
      <Link href="/">
        <button>← Volver</button>
      </Link>
    </div>

    <h1>{country.name.common}</h1>

    <img className="country-flag" src={country.flags.png} />

    <div className="country-info">
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Subregión:</strong> {country.subregion}</p>
      <p><strong>Lenguajes:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
      <p><strong>Monedas:</strong> {country.currencies ? Object.values(country.currencies).map((v) => v.name).join(", ") : "N/A"}</p>
      <p><strong>Población:</strong> {country.population}</p>
      <p><strong>Región:</strong> {country.region}</p>
    </div>

  </div>
);
}
