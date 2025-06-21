import data from "@/data.json";
import Cards from "@/components/Cards";
import { Box } from "@mui/system";
import Link from "next/link";


export default function CountryCard({ search, region }) {
    const countries = data;
    let filteredCountries = null;

    if (!search && !region) {
        filteredCountries = countries;
    } else if (search && region) {
        filteredCountries = countries.filter(
            country =>
                country.region === region &&
                country.name.toLowerCase().includes(search.toLowerCase())
        );
    } else if (search) {
        filteredCountries = countries.filter(
            country => country.name.toLowerCase().includes(search.toLowerCase())
        );
    } else if (region) {
        filteredCountries = countries.filter(
            country => country.region === region
        );
    }


    const countryCards = filteredCountries.map((country, index) => (
        <Link key={index} href={`/country/${country.name}`}>
            <Cards flag={country.flags.svg} name={country.name} population={country.population}
                region={country.region} capital={country.capital} />
        </Link>
    ))

    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
            },
            gap: "1rem",
            alignItems: "stretch",
        }}>
            {countryCards}
        </Box>
    );
}