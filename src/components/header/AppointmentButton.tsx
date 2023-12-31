import React from "react";
import {Button, Typography} from "@mui/material";
import StyledLink from "@/components/elements/StyledLink";

export default function AppointmentButton(): React.ReactElement {
  return (
    <StyledLink href="/#contacts">
      <Button
        sx={{
          padding: "10px 30px 10px 45px",
          backgroundColor: theme => theme.colors.GRAY,
          transitionProperty: "backgroundColor",
          transitionDuration: theme => theme.constants.transitions.duration,
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
    </StyledLink>
  )
}