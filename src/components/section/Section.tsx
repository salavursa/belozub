import React from "react";
import {Box, SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

export default function Section({sx = {}, children, id}: { sx?: SxProps<Theme>, children: React.ReactElement | React.ReactElement[], id: string}): React.ReactElement {
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