import React from "react";
import {Box, Button, ButtonProps} from "@mui/material";

type Props = {
  styleVariant?: "primary" | "secondary"
} & ButtonProps

export default function OutlineButton({children , styleVariant = "primary", sx, ...otherProps }: Props): React.ReactElement {
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
            top: 0,
            left: 0,
            borderColor: theme => theme.colors.DARK,
          },
          color: theme => theme.colors.LIGHT,
        },
        ...styleVariant === "secondary" ? {
          border: "none",
          position: "relative",
          borderRadius: theme => theme.constants.borders.radius,
          backgroundColor: "transparent",
          zIndex: 0,
          "&::after": {
            content: "''",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "-2px",
            left: "-4px",
            borderRadius: theme => theme.constants.borders.radius,
            transition: theme => theme.constants.transitions.default,
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
            left: "4px",
            borderRadius: theme => theme.constants.borders.radius,
            transition: theme => theme.constants.transitions.default,
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