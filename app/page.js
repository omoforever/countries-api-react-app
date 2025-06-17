'use client'
import React from 'react'
import Cards from "@/components/Cards";
import CountryCard from "@/components/CountryCard";
import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import SelectDropdown from "@/components/SelectDropdown";
import { Box } from "@mui/material";

export default function Home() {

  const [search, setSearch] = React.useState("");
  const [region, setRegion] = React.useState("");

  // console.log("search:", search);
  // console.log("region", region)

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
        <SelectDropdown region={region} setRegion={setRegion} />
      </Box>
      <Box sx={{
        marginInline: "4rem"
      }}>
        <CountryCard search={search} region={region} />
      </Box>

    </>
  );
}
