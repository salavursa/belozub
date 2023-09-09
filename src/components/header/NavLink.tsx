import React from "react";
import Link from "next/link";
import {Button, Typography} from "@mui/material";

export default function NavLink({ href, text, variant = "upper" }: { href: string, text: string, variant: "upper" | "bottom" }): React.ReactElement {
  return (
    <Link style={{ textDecoration: "none" }} href={href} scroll={false}>
      <Button
        sx={{
          padding: "10px",
          transition: theme => theme.constants.transitions.default,
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
    </Link>
  )
}