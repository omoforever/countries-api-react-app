import data from "@/data.json";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from "next/image";

export default async function Page({ params }) {
    const slug = await params;
    const { countryId } = slug;


    const countryData = data.find(country => country.name === countryId)
    console.log("Found", countryData)

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
                marginBlock: "2rem",
                marginInline: "4rem",
            }}>
                <Box>
                    <Button variant="contained" sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        gap: "0.5rem",
                        paddinBlock: "1rem",
                        paddingInline: "1rem"
                    }}>
                        <Link href="/">
                            <ArrowBackIcon />
                            Back
                        </Link>
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                        gap: "6rem"
                    }}
                >
                    <Image
                        src={countryData.flags.svg}
                        width={500}
                        height={500}
                        alt={`Picture of ${countryData.name}`}
                    />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        <Box>
                            <Typography variant="h4" gutterBottom>
                                {countryData.name}
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            gap: "6rem"
                        }}
                        >
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem"
                            }}>
                                <Typography>Native Name: {countryData.nativeName}</Typography>
                                <Typography>Population: {countryData.population}</Typography>
                                <Typography>Region: {countryData.region}</Typography>
                                <Typography>Sub Region: {countryData.subregion}</Typography>
                                <Typography>Capital: {countryData.capital}</Typography>
                            </Box>

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem"
                            }}>
                                <Typography>Top Level Domain: {countryData.topLevelDomain}</Typography>
                                <Typography>Currencies: {countryData.currencies[0].name}</Typography>
                                <Typography>Languages: {countryData.languages[0].name}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginTop: "2rem"
                        }}>
                            {/* <Typography>Border Countries: {countryData.borders[1]}</Typography> */}
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    );
}