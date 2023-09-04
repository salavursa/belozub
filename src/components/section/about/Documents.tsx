import React from "react";
import {Box, Typography} from "@mui/material";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import Document from "@/components/section/about/Document";

export default function Documents(): React.ReactElement {
  return (
    <SectionContainer id="documents">
      <SectionHeader text="Лицензии и сертификаты" sx={{ alignSelf: "center" }} />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          gap: "0px",
          width: "100%",
          height: "400px",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: "15px",
          borderRadius: theme => theme.constants.borders.radiusXS
        }}
      >
        <Document />
        <Document />
        <Document />
        <Document />
        <Document />
        <Document />
        <Document />
        <Document />
        <Document />
      </Box>
    </SectionContainer>
  );
}