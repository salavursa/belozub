import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {Box, Typography} from "@mui/material";
import {ImgProps} from "next/dist/shared/lib/get-img-props";

export default function ImageBox({ compressed, gridArea }: { gridArea: React.CSSProperties["gridArea"], compressed: ImgProps }): React.ReactElement {
  const boxRef = useRef<null | HTMLDivElement>(null);

  const [stretchAxe, setStretchAxe] = useState<"width" | "height" | "loading">("loading");

  useEffect(() => {
    if (boxRef.current instanceof HTMLDivElement && compressed.height && compressed.width) {
      const h = compressed.height / boxRef.current.clientHeight;
      const w = compressed.width / boxRef.current.clientWidth;

      setStretchAxe(h > w ? "width" : "height");
    }
    else {
      setStretchAxe("width");
    }
  }, [boxRef, compressed.height, compressed.width])

  return (
    <Box
      ref={boxRef}
      sx={{
        position: "relative",
        gridArea: gridArea,
        objectFit: "contain",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.67)",
        // boxShadow: theme => theme.constants.borders.lightShadow,
        borderRadius: theme => theme.constants.borders.radiusXS,
      }}
    >
      {stretchAxe === "loading" ? (
        <Typography variant="p3">Loading...</Typography>
      ) : (
        <Image
          alt="Интерьер клиники"
          src={compressed.src}
          width={0}
          height={0}
          sizes="100vw"
          // loading='lazy'
          style={stretchAxe === "width" ? {
            width: "100%",
            height: "auto"
          } : {
            width: "auto",
            height: "100%"
          }}
        />
      )}
    </Box>
  )
}