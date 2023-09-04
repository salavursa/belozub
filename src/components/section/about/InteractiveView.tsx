import React from "react";
import {Box, Typography} from "@mui/material";
import SectionHeader from "@/components/section/SectionHeader";

export default function InteractiveView(): React.ReactElement {
  return (
    <Box
      sx={{
        width: "100%"
      }}
    >
      <SectionHeader text="Атмосфера" />
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "75vh",
            md: "540px"
          },
          backgroundColor: "rgba(255,255,255,0.67)",
          boxShadow: theme => theme.constants.borders.lightShadow,
          borderRadius: theme => theme.constants.borders.radiusXS
        }}
      >

      </Box>
    </Box>
  );
}