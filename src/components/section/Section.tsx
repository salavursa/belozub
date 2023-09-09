import React from "react";
import {Box, BoxProps} from "@mui/material";

type Props = {
  id: string
} & BoxProps

export default function Section({sx = {}, children, id}: Props): React.ReactElement {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        // paddingTop: "100px",
        scrollBehavior: "smooth",
        width: "100%",
        minHeight: "400px",
        paddingLeft: {
          xs: "25px",
          sm: "50px",
          md: "100px",
          lg: "170px",
        },
        paddingRight: {
          xs: "25px",
          sm: "50px",
          md: "100px",
          lg: "170px",
        },
        ...sx
      }}
    >
      {children}
    </Box>
  )
}