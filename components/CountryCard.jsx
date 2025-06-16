import data from "@/data.json";
import Cards from "@/components/Cards";
import { Box } from "@mui/system";


export default function CountryCard() {
    const countries = data;

    const countryCards = countries.map((country, index) => (
        <Cards key={index} flag={country.flags.svg} name={country.name} population={country.population}
            region={country.region} capital={country.capital} />
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