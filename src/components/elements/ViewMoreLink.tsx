import {Box, SxProps, Typography} from "@mui/material";
import Image from "next/image";
import arrowRight from "../../../public/icon/arrow-right.svg";
import React from "react";
import {Theme} from "@mui/material/styles";

export default function ViewMoreLink({ sx = {} }: { sx?: SxProps<Theme> }): React.ReactElement {
  return (
    <Box
      sx={{
        mr: "7px",
        justifyContent: "end",
        display: "flex",
        gap: "6px",
        alignItems: "center",
        ...sx
      }}
    >
      <Typography variant="p3">
        Узнать больше
      </Typography>
      <Image
        alt="arrow right"
        src={arrowRight.src}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "auto",
          height: "15px"
        }}
      />
    </Box>
  )
}