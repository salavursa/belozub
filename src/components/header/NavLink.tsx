import React from "react";
import {Button, Typography} from "@mui/material";
import StyledLink from "@/components/elements/StyledLink";

export default function NavLink({ href, text, variant = "upper" }: { href: string, text: string, variant: "upper" | "bottom" }): React.ReactElement {
  return (
    <StyledLink href={href}>
      <Button
        sx={{
          padding: "10px",
          transitionProperty: "backgroundColor",
          transitionDuration: theme => theme.constants.transitions.duration,
          backgroundColor: "transparent",
          border: "none",
          borderRadius: 0,
          height: variant === "upper" ? "40px" : "60px",
          textTransform: "unset",
          color: theme => theme.colors.DARK,
          "&:hover": {
            backgroundColor: theme => variant === "upper" ? theme.colors.PINK : theme.colors.GRAY
          }
        }}
      >
        {variant === "upper" ? (
          <Typography sx={{ color: theme => theme.colors.DARK }} noWrap variant="headerUpLink">
            {text}
          </Typography>
        ) : (
          <Typography sx={{ color: theme => theme.colors.LIGHT }} noWrap variant="headerDownLink">
            {text}
          </Typography>
        )}
      </Button>
    </StyledLink>
  )
}