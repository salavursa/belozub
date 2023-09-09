import React, {useRef} from "react";
import Section from "@/components/section/Section";
import Greeting from "@/components/section/about/Greeting";
import {Box} from "@mui/material";
import InteractiveView from "@/components/section/about/InteractiveView";
import Documents from "@/components/section/about/Documents";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import Article from "@/components/section/blog/Article";
import OutlineButton from "@/components/input/OutlineButton";
import Review from "@/components/section/reviews/Review";
import SliderContainer, {SliderInterface} from "@/components/slider/SliderContainer";

export default function ArticlesSection(): React.ReactElement {
  const sliderRef = useRef<SliderInterface>({
    slideRight: () => {},
    slideLeft: () => {}
  });

  return (
    <Section id="articles">
      <SectionContainer>
        <SectionHeader text="Последние статьи" sx={{ alignSelf: "center" }} />

        <SliderContainer
          sx={{
            height: "500px",
            scrollPaddingLeft: "15px"
          }}
          ref={sliderRef}
        >
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </SliderContainer>

        <Box
          display="flex"
          mt="20px"
          alignItems="center"
          justifyContent="center"
          gap={{ xs: "25px", sm: "30px" }}
          width="100%"
        >
          <OutlineButton onClick={() => sliderRef.current.slideLeft()} radius="xs" styleVariant="secondary" sx={{ width: "50px", height: "50px", p: 0 }}>
            {"<"}
          </OutlineButton>
          <OutlineButton
            sx={{
              minWidth: {
                md: "calc((100% - 30px * 2) / 2)",
                lg: "calc((100% - 30px * 2) / 2)",
                xl: "calc((100% - 30px * 3) / 3)",
              }
            }}
            outlineDirection="t"
            styleVariant="secondary"
          >
            Все статьи
          </OutlineButton>
          <OutlineButton onClick={() => sliderRef.current.slideRight()} radius="xs" outlineDirection="tr" styleVariant="secondary" sx={{ width: "50px", height: "50px", p: 0 }}>
            {">"}
          </OutlineButton>
        </Box>
      </SectionContainer>
    </Section>
  );
}