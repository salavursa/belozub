import React from "react";
import {Box} from "@mui/material";
import bgStatic from "../../../public/image/bg-static.png";
import bgStaticDark from "../../../public/image/bg-static-dark.png";

export default function StaticBackground({ variant }: { variant: "light" | "dark" }): React.ReactElement {
  return (
    <Box
      sx={{
        position: "fixed",
        top: -15,
        left: -15,
        bottom: 0,
        right: 0,
        zIndex: -1,
        width: "105dvw",
        height: "105dvh",
        filter: "blur(5px)",
        background: variant === "light"
          ? `linear-gradient(0deg, rgba(244, 244, 244, 0.6), rgba(244, 244, 244, 0.6)), url(${bgStatic.src})`
          : `linear-gradient(0deg, rgba(56, 56, 58, 0.80) 0%, rgba(56, 56, 58, 0.80) 100%), url(${bgStaticDark.src}), lightgray 50% / cover no-repeat`,
        backgroundSize: "cover"
      }}
    />
  )
}