import React from "react";
import {Box, BoxProps} from "@mui/material";

export type SlideObjectItems = {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number
}

type Props = {
  gap?: number,
  items?: SlideObjectItems,
  gaps?: SlideObjectItems,
} & BoxProps

export default function SlideObject({
  gap = 0,
  items = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  },
  gaps = {
    xs: 50,
    sm: 100,
    md: 200,
    lg: 340,
    xl: 340
  },
  sx = {},
  children,
  ...otherProps
}: Props): React.ReactElement {
  const {
    xs,
    sm,
    md,
    lg,
    xl
  } = items;

  const {
    xs: xsGap,
    sm: smGap,
    md: mdGap,
    lg: lgGap,
    xl: xlGap
  } = gaps;

  return (
    <Box
      sx={{
        position: "relative",
        minWidth: {
          xs: `calc((100vw - ${(xs - 1) * gap + xsGap}px) / ${xs})`,
          sm: `calc((100vw - ${(sm - 1) * gap + smGap}px) / ${sm})`,
          md: `calc((100vw - ${(md - 1) * gap + mdGap}px) / ${md})`,
          lg: `calc((100vw - ${(lg - 1) * gap + lgGap}px) / ${lg})`,
          xl: `calc((100vw - ${(xl - 1) * gap + xlGap}px) / ${xl})`,
        },
        scrollSnapAlign: "start",
        ...sx
      }}
      {...otherProps}
    >
      { children }
    </Box>
  )
}