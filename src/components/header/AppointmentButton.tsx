import React from "react";
import {Button, Typography} from "@mui/material";
import Link from "next/link";

export default function AppointmentButton(): React.ReactElement {
  return (
    <Link href="/#contacts" style={{ textDecoration: "none" }} scroll={false}>
      <Button
        sx={{
          padding: "10px 30px 10px 35px",
          backgroundColor: theme => theme.colors.GRAY,
          transition: theme => theme.constants.transitions.default,
          border: "none",
          borderRadius: 0,
          height: "60px",
          textTransform: "unset",
          color: theme => theme.colors.DARK,
          "&:hover": {
            backgroundColor: theme => theme.colors.DARK2
          }
        }}
      >
        <Typography sx={{ color: theme => theme.colors.LIGHT }} variant="headerDownLink">
          Записаться
        </Typography>
      </Button>
    </Link>
  )
}