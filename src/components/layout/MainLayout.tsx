import react from "react";
import {Box} from "@mui/material";
import Header from "@/components/header/Header";
import StaticBackground from "@/components/background/StaticBackground";

export default function MainLayout({
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
      sx={{
        width: "100dvw",
        maxWidth: "100%",
        overflowX: "hidden"
      }}
    >
      <StaticBackground variant="light" />
      <Header layout="index" />
      {children}
    </Box>
  )
}