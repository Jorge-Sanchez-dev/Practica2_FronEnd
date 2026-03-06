//Componente de la pagina principal
import Link from "next/link";
import type { Country } from "@/type";
import "./styles.css";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  const flag = country.flags?.png ?? country.flags?.svg ?? "";

  return (
    <Link href={`/country/${country.name.common}`}>
      <div className="country-card">
        {flag ? <img src={flag}/> : <div>Sin bandera</div>}
        <h3>{country.name.common}</h3>
        <p>Población: {country.population} habitantes.</p>
      </div>
    </Link>
  );
}
