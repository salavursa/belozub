import react from "react";
import {Box} from "@mui/material";
import Header from "@/components/header/Header";
import StaticBackground from "@/components/background/StaticBackground";

export default function HeaderLayout({
  children
}: {
  children: react.ReactNode
}) {
  return (
    <Box
      width="100dvw"
      minHeight="100dvh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap="20px"
      sx={{
        overflowX: "hidden"
      }}
    >
      <StaticBackground variant="dark" />
      <Header alwaysOn />
      <Box
        sx={{
          width: "100%",
          flexGrow: "1 0",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}