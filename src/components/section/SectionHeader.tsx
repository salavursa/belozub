import React from "react";
import {SxProps, Typography} from "@mui/material";
import {Theme} from "@mui/material/styles";

type Props = {
  text: string,
  sx?: SxProps<Theme>
}

export default function SectionHeader({ text, sx = {} }: Props): React.ReactNode {
  return (
    <Typography
      sx={{
        color: theme => theme.colors.DARK,
        paddingBottom: "25px",
        paddingTop: "120px",
        ...sx,
      }}
      variant="h2"
    >
      {text}
    </Typography>
  )
}