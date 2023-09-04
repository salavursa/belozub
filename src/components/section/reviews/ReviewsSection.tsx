import React from "react";
import Section from "@/components/section/Section";
import Greeting from "@/components/section/about/Greeting";
import {Box} from "@mui/material";
import InteractiveView from "@/components/section/about/InteractiveView";
import Documents from "@/components/section/about/Documents";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";

export default function ReviewsSection(): React.ReactElement {
  return (
    <Section id="reviews">
      <SectionContainer>
        <SectionHeader text="Отзовы" />
      </SectionContainer>
    </Section>
  );
}