import React, {Suspense} from "react";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import Articles from "@/components/section/blog/Articles";
import NoSSRWrapper from "@/util/NoSSRWrapper";

export default function ArticlesSection() {
  return (
    <Section id="articles">
      <SectionContainer>
        <SectionHeader text="Последние статьи" sx={{ alignSelf: "center" }} />

        <NoSSRWrapper>
          <Articles />
        </NoSSRWrapper>
      </SectionContainer>
    </Section>
  );
}