import React from "react";
import {Box, BoxProps} from "@mui/material";

export default function ScrollBox({ sx, children, ...otherProps }: BoxProps): React.ReactElement {
  return (
    <Box
      sx={{
        minHeight: 0,
        overflowY: "auto",
        "&:hover::-webkit-scrollbar-thumb": {
          visibility: "visible",
        },
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          // border: "1px solid #000"
        },
        "&::-webkit-scrollbar-thumb": {
          visibility: "hidden",
          borderRadius: "2px",
          maxHeight: "20px",
          backgroundColor: "rgba(133,131,132,0.27)",
          "&:hover": {
            backgroundColor: "rgba(133,131,132,0.63)",
          }
        },
        ...sx
      }}
      {...otherProps}
    >
      {children}
    </Box>
  )
}