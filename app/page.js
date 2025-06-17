'use client'
import React from 'react'
import CountryCard from "@/components/CountryCard";
import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import SelectDropdown from "@/components/SelectDropdown";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';


export default function Home() {
  const [search, setSearch] = React.useState("");
  const [region, setRegion] = React.useState("");

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
        <Search search={search} setSearch={setSearch} />
        <Box sx={{
          display: "flex",
          gap: "1rem"
        }}>
          <SelectDropdown region={region} setRegion={setRegion} />
          <Button variant="text" onClick={() => setRegion("")}>Clear</Button>
        </Box>
      </Box>
      <Box sx={{
        marginInline: "4rem"
      }}>
        <CountryCard search={search} region={region} />
      </Box>

    </>
  );
}
