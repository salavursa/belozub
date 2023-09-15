import React, {useRef} from "react";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import Document from "@/components/section/about/Document";
import SliderContainer, {SliderInterface} from "@/components/slider/SliderContainer";
import OutlineButton from "@/components/input/OutlineButton";
import {Box} from "@mui/material";

export default function Documents(): React.ReactElement {
  const sliderRef = useRef<SliderInterface>({} as SliderInterface);

  return (
    <SectionContainer id="documents">
      <SectionHeader text="Лицензии и сертификаты" sx={{ alignSelf: "center" }} />

      <SliderContainer gap={22} ref={sliderRef}>
        <Document documentId="license" gap={22} />
        <Document documentId="license" gap={22} />
        <Document documentId="license" gap={22} />
        <Document documentId="license" gap={22} />
        <Document documentId="license" gap={22} />
        <Document documentId="license" gap={22} />
        <Document documentId="license" gap={22} />
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
  );
}