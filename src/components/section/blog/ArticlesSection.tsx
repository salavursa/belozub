import React from "react";
import Section from "@/components/section/Section";
import Greeting from "@/components/section/about/Greeting";
import {Box} from "@mui/material";
import InteractiveView from "@/components/section/about/InteractiveView";
import Documents from "@/components/section/about/Documents";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import Article from "@/components/section/blog/Article";
import OutlineButton from "@/components/input/OutlineButton";

export default function ArticlesSection(): React.ReactElement {
  return (
    <Section id="articles">
      <SectionContainer>
        <SectionHeader text="Последние статьи" sx={{ alignSelf: "center" }} />
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            gap: "0px",
            width: "100%",
            height: "500px",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: "15px",
            borderRadius: theme => theme.constants.borders.radiusXS
          }}
        >
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </Box>
        <OutlineButton
          styleVariant="secondary"
          sx={{
            alignSelf: "center",
            mt: "20px",
            width: {
              xs: "calc((100% - 30px * 1) / 1)",
              sm: "calc((100% - 30px * 1) / 1)",
              md: "calc((100% - 30px * 2) / 2)",
              lg: "calc((100% - 30px * 2) / 2)",
              xl: "calc((100% - 30px * 3) / 3)",
            }
          }}
        >
          Все статьи
        </OutlineButton>
      </SectionContainer>
    </Section>
  );
}