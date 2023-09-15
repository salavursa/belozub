import React, {useRef} from "react";
import Section from "@/components/section/Section";
import {Box} from "@mui/material";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import Review from "@/components/section/reviews/Review";
import OutlineButton from "@/components/input/OutlineButton";
import SliderContainer, {SliderInterface} from "@/components/slider/SliderContainer";

export default function ReviewsSection(): React.ReactElement {
  const sliderRef = useRef<SliderInterface>({} as SliderInterface);

  return (
    <Section
      id="reviews"
      sx={{
        mt: "100px",
        backgroundColor: "rgba(56, 56, 58, 0.90)",
        paddingLeft: 0,
        paddingRight: 0
      }}
    >
      <SectionContainer>
        <SectionHeader
          text="Клиенты о нас"
          sx={{
            alignSelf: "end",
            color: theme => theme.colors.PINK ,
            pr: {
              xs: "25px",
              sm: "50px",
              md: "100px",
              lg: "170px",
            },
          }}
        />

        <SliderContainer
          gap={30}
          ref={sliderRef}
          sx={{
            scrollPaddingLeft: "30px",
            "& > div:first-child": {
              ml: "30px",
            },
            "& > div:last-child": {
              mr: "30px",
            },
          }}
        >
          <Review gap={30} />
          <Review gap={30} />
          <Review gap={30} />
          <Review gap={30} />
          <Review gap={30} />
          <Review gap={30} />
          <Review gap={30} />
          <Review gap={30} />
        </SliderContainer>

        <Box display="flex" mt="25px" alignItems="center" justifyContent="center" gap={{ xs: "25px", sm: "30px" }} >
          <OutlineButton onClick={() => sliderRef.current.slideLeft()} radius="xs" styleVariant="secondary" sx={{ width: "45px", height: "45px", p: 0 }}>
            {"<"}
          </OutlineButton>
          <OutlineButton onClick={() => sliderRef.current.slideRight()} radius="xs" outlineDirection="tr" styleVariant="secondary" sx={{ width: "45px", height: "45px", p: 0 }}>
            {">"}
          </OutlineButton>
        </Box>
      </SectionContainer>
    </Section>
  );
}