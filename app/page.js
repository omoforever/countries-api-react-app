import Cards from "@/components/Cards";
import CountryCard from "@/components/CountryCard";
import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import SelectDropdown from "@/components/SelectDropdown";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navigation />
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
        marginBlock: "2rem",
        marginInline: "4rem",
      }}>
        <Search />
        <SelectDropdown />
      </Box>
      <Box sx={{
        marginInline: "4rem"
      }}>
        <CountryCard />
      </Box>

    </>
  );
}
