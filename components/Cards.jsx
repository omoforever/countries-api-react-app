import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box } from "@mui/system";




export default function Cards({ flag, name, population, region, capital }) {
    return (
        <Card sx={{
            minWidth: 275,
            height: "100%",
            display: "flex",
            flexDirection: "column"

        }}>
            <Box sx={{ width: '100%', height: 200, position: 'relative' }}>
                <Image
                    src={flag}
                    alt={`${name} flag`}
                    fill
                    style={{ objectFit: 'fit' }}
                />
            </Box>
            <CardContent sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}>
                    <Typography sx={{
                        fontFamily: 'var(--font-nunito-sans), sans-serif',
                        fontWeight: 700
                    }}>
                        {name}
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'var(--font-nunito-sans), sans-serif',
                        fontWeight: 600
                    }}>
                        <span>Population</span>: {population}
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'var(--font-nunito-sans), sans-serif',
                        fontWeight: 600
                    }}>
                        <span>Region</span>: {region}
                    </Typography>

                    <Typography sx={{
                        fontFamily: 'var(--font-nunito-sans), sans-serif',
                        fontWeight: 600
                    }}>
                        <span>Capital</span>: {capital}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}