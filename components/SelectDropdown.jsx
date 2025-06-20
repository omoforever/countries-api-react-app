'use client'

import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDropdown({ region, setRegion }) {

    return (
        <Box sx={{ minWidth: "25ch" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    label="Filter by Region"
                    onChange={(e) => setRegion(e.target.value)}
                >
                    <MenuItem value={"Africa"}>Africa</MenuItem>
                    <MenuItem value={"Americas"}>Americas</MenuItem>
                    <MenuItem value={"Asia"}>Asia</MenuItem>
                    <MenuItem value={"Europe"}>Europe</MenuItem>
                    <MenuItem value={"Oceania"}>Oceania</MenuItem>
                </Select>
            </FormControl>
        </Box>);
}