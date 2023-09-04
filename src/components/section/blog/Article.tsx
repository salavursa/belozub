import React from "react";
import {Box} from "@mui/material";

export default function Article(): React.ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100% - 30px)",
        minWidth: {
          xs: "calc((100% - 30px * 1) / 1)",
          sm: "calc((100% - 30px * 1) / 1)",
          md: "calc((100% - 30px * 2) / 2)",
          lg: "calc((100% - 30px * 2) / 2)",
          xl: "calc((100% - 30px * 3) / 3)",
        },
        backgroundColor: "rgba(255,255,255,0.67)",
        boxShadow: theme => theme.constants.borders.lightShadow,
        borderRadius: theme => theme.constants.borders.radiusXS,
        ml: "15px",
        mr: "15px",
        scrollSnapAlign: "start",
      }}
    >

    </Box>
  )
}