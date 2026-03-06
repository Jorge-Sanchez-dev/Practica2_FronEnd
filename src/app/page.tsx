"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Country } from "@/type";
import CountryCard from "./component/country";
import { searchCountries, getAllCountries } from "./lib/pais";

export default function Home() {
  const [text, setText] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getAllCountries();
        setCountries(data);
      } catch (e) {
        setError("Error. No se han podido cargar los países.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onSearch = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await searchCountries(text);
      setCountries(data);
    } catch (e) {
      setError("Error. No se han podido cargar los países.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Países</h1>

      <div className="search-box">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nombre del país"
        />
        <button onClick={onSearch}>Buscar</button>
      </div>

      {loading && <p>Cargando países…</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="countries-container">
          {countries.map((c) => (
            <CountryCard key={c.name.common} country={c} />
          ))}
        </div>
      )}
    </div>
  );
}
