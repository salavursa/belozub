import React from "react";
import {Box, Button, ButtonProps} from "@mui/material";

type Props = {
  styleVariant?: "primary" | "secondary",
  radius?: "xs" | "md",
  outlineDirection?: "tl" | "tr" | "t"
} & ButtonProps

export default function OutlineButton({ children, radius = "md", outlineDirection = "tl", styleVariant = "primary", sx, ...otherProps }: Props): React.ReactElement {
  return (
    <Button
      {...otherProps}
      sx={{
        color: theme => styleVariant === "primary" ? theme.colors.DARK : theme.colors.LIGHT,
        "&:hover": {
          "&::before": {
            top: 0,
            left: 0,
          },
          "&::after": {
            width: "100%",
            top: 0,
            left: 0,
            borderColor: theme => theme.colors.PINK,
          },
          color: theme => theme.colors.PINK,
        },
        ...styleVariant === "secondary" ? {
          border: "none",
          position: "relative",
          borderRadius: theme => radius === "xs" ? theme.constants.borders.radiusXS : theme.constants.borders.radius,
          backgroundColor: "transparent",
          zIndex: 0,
          "&::after": {
            content: "''",
            height: "100%",
            position: "absolute",
            ...(outlineDirection === "tl" ? {
              width: "100%",
              left: "-4px"
            } : {}),
            ...(outlineDirection === "tr" ? {
              width: "100%",
              left: "4px"
            } : {}),
            ...(outlineDirection === "t" ? {
              width: "calc(100% - 16px)",
              left: "8px"
            } : {}),
            top: "-2px",
            borderRadius: theme => radius === "xs" ? theme.constants.borders.radiusXS : theme.constants.borders.radius,
            transitionProperty: "width, top, left, borderColor",
            transitionDuration: theme => theme.constants.transitions.duration,
            border: "1px solid",
            borderColor: theme => theme.colors.LIGHT,
            zIndex: 1,
            pointerEvents: "none",
          },
          "&::before": {
            content: "''",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "2px",
            ...(outlineDirection === "tl" ? {
              left: "4px"
            } : {}),
            ...(outlineDirection === "tr" ? {
              left: "-4px"
            } : {}),
            ...(outlineDirection === "t" ? {
              left: "0px"
            } : {}),
            borderRadius: theme => radius === "xs" ? theme.constants.borders.radiusXS : theme.constants.borders.radius,
            transitionProperty: "top, left",
            transitionDuration: theme => theme.constants.transitions.duration,
            backgroundColor: theme => theme.colors.DARK,
            zIndex: -1,
            pointerEvents: "none",
          }
        } : {},
        ...sx
      }}
    >
      {children}
    </Button>
  )
}