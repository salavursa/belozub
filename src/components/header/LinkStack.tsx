import React from "react";
import {Stack} from "@mui/material";

export default function LinkStack({ links }: { links: React.ReactElement[] }): React.ReactElement {
  return (
    <Stack
      direction="row"
    >
      { links }
    </Stack>
  )
}