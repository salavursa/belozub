import React from "react";
import Section from "@/components/section/Section";
import Greeting from "@/components/section/about/Greeting";
import {Box} from "@mui/material";
import InteractiveView from "@/components/section/about/InteractiveView";
import Documents from "@/components/section/about/Documents";
import SectionContainer from "@/components/section/SectionContainer";
import SectionHeader from "@/components/section/SectionHeader";

export default function AboutSection(): React.ReactElement {
  return (
    <Section id="about">
      <Box
        sx={{
          display: "flex",
          // gap: "30px",
          flexDirection: "column"
        }}
      >
        <SectionContainer>
          <SectionHeader text="О нас" />
        </SectionContainer>
        <Greeting />
        <InteractiveView />
        <Documents />
      </Box>
    </Section>
  );
}