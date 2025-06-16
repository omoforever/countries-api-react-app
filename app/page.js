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
        flexWrap: "wrap",
        margin: "1rem",
      }}>
        <Search />
        <SelectDropdown />
      </Box>

    </>

  );
}
