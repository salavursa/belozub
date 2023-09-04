import React from "react";
import Section from "@/components/section/Section";
import Greeting from "@/components/section/about/Greeting";
import {Box} from "@mui/material";
import InteractiveView from "@/components/section/about/InteractiveView";
import Documents from "@/components/section/about/Documents";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";

export default function GalleySection(): React.ReactElement {
  return (
    <Section id="gallery">
      <SectionContainer>
        <SectionHeader text="Галлерея" />
      </SectionContainer>
    </Section>
  );
}