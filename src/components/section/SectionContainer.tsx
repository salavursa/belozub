import React from "react";
import {Box} from "@mui/material";

type Props = {
  children: React.ReactElement | React.ReactElement[],
  id?: string
}

export default function SectionContainer({ children, ...other }: Props): React.ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}
      {...other}
    >
      {children}
    </Box>
  )
}