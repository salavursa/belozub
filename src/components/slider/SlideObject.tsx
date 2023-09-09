import React from "react";
import {Box, BoxProps} from "@mui/material";

export default function SlideObject({ sx = {}, children, ...otherProps }: BoxProps): React.ReactElement {
  return (
    <Box
      sx={{
        position: "relative",
        minWidth: {
          xs: "calc((100% - 25px * 2) / 1)",
          sm: "calc((100% - 30px * 3) / 2)",
          md: "calc((100% - 30px * 3) / 2)",
          lg: "calc((100% - 30px * 5) / 4)",
          xl: "calc((100% - 30px * 5) / 4)",
        },
        ml: {
          xs: "25px",
          sm: "30px"
        },
        scrollSnapAlign: "start",
        ...sx
      }}
    >
      { children }
    </Box>
  )
}