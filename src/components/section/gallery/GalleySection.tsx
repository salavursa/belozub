import React from "react";
import Section from "@/components/section/Section";
import {Box, keyframes} from "@mui/material";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";

import Image from "next/image";

import bathroomImg from "../../../../public/image/gallery/bathroom.jpg";
import bathroomImgC from "../../../../public/image/gallery/bathroom-min.jpg";

import cabinet1 from "../../../../public/image/gallery/cabinet-1.jpg";
import cabinet1C from "../../../../public/image/gallery/cabinet-1-min.jpg";

import cabinet2 from "../../../../public/image/gallery/cabinet-2.jpg";
import cabinet2C from "../../../../public/image/gallery/cabinet-2-min.jpg";

import cabinet3 from "../../../../public/image/gallery/cabinet-3.jpg";
import cabinet3C from "../../../../public/image/gallery/cabinet-3-min.jpg";

import coworking from "../../../../public/image/gallery/coworking.jpg";
import coworkingC from "../../../../public/image/gallery/coworking-min.jpg";

import doctors from "../../../../public/image/gallery/doctors.jpg";
import doctorsC from "../../../../public/image/gallery/doctors-min.jpg";

import face from "../../../../public/image/gallery/face.jpg";
import faceC from "../../../../public/image/gallery/face-min.jpg";

import flowersClose from "../../../../public/image/gallery/flowers-close.jpg";
import flowersCloseC from "../../../../public/image/gallery/flowers-close-min.jpg";

import fotostudia from "../../../../public/image/gallery/fotostudia.jpg";
import fotostudiaC from "../../../../public/image/gallery/fotostudia-min.jpg";

import hallDesc from "../../../../public/image/gallery/hall-desc.jpg";
import hallDescC from "../../../../public/image/gallery/hall-desc-min.jpg";

import hallFlowers from "../../../../public/image/gallery/hall-flowers.jpg";
import hallFlowersC from "../../../../public/image/gallery/hall-flowers-min.jpg";

import hallSofa from "../../../../public/image/gallery/hall-sofa.jpg";
import hallSofaC from "../../../../public/image/gallery/hall-sofa-min.jpg";

import instrumenti1 from "../../../../public/image/gallery/instrumenti-1.jpg";
import instrumenti1C from "../../../../public/image/gallery/instrumenti-1-min.jpg";

import instrumenti2 from "../../../../public/image/gallery/instrumenti-2.jpg";
import instrumenti2C from "../../../../public/image/gallery/instrumenti-2-min.jpg";

import outside from "../../../../public/image/gallery/outside.jpg";
import outsideC from "../../../../public/image/gallery/outside-min.jpg";

import people from "../../../../public/image/gallery/people.jpg";
import peopleC from "../../../../public/image/gallery/people-min.jpg";

import process from "../../../../public/image/gallery/process.jpg";
import processC from "../../../../public/image/gallery/process-min.jpg";

import secondFloor1 from "../../../../public/image/gallery/second-floor-1.jpg";
import secondFloor1C from "../../../../public/image/gallery/second-floor-1-min.jpg";

import shower from "../../../../public/image/gallery/shower.jpg";
import showerC from "../../../../public/image/gallery/shower-min.jpg";
import ImageBox from "@/components/section/gallery/ImageBox";

const gridAreas: {
  gridArea: React.CSSProperties["gridArea"],
  imageFull: any,
  imageCompressed: any,
}[] = [
  { gridArea: "1 / 1 / 5 / 5", imageFull: process, imageCompressed: processC },
  { gridArea: "5 / 1 / 8 / 3", imageFull: bathroomImg, imageCompressed: bathroomImgC },
  { gridArea: "5 / 3 / 8 / 5", imageFull: shower, imageCompressed: showerC },
  { gridArea: "1 / 5 / 4 / 8", imageFull: outside, imageCompressed: outsideC },
  { gridArea: "4 / 5 / 8 / 8", imageFull: instrumenti1, imageCompressed: instrumenti1C },
  { gridArea: "1 / 8 / 5 / 11", imageFull: coworking, imageCompressed: coworkingC },
  { gridArea: "5 / 8 / 8 / 10", imageFull: flowersClose, imageCompressed: flowersCloseC },
  { gridArea: "1 / 11 / 5 / 14", imageFull: hallDesc, imageCompressed: hallDescC },
  { gridArea: "5 / 10 / 8 / 12", imageFull: face, imageCompressed: faceC },
  { gridArea: "5 / 12 / 8 / 14", imageFull: hallFlowers, imageCompressed: hallFlowersC },
  { gridArea: "1 / 14 / 4 / 17", imageFull: people, imageCompressed: peopleC },
  { gridArea: "4 / 14 / 8 / 17", imageFull: cabinet3, imageCompressed: cabinet3C },
  { gridArea: "1 / 17 / 5 / 20", imageFull: cabinet1, imageCompressed: cabinet1C },
  { gridArea: "5 / 17 / 8 / 20", imageFull: instrumenti2, imageCompressed: instrumenti2C },
  { gridArea: "1 / 20 / 4 / 23", imageFull: secondFloor1, imageCompressed: secondFloor1C },
  { gridArea: "4 / 20 / 8 / 26", imageFull: doctors, imageCompressed: doctorsC },
  { gridArea: "1 / 23 / 4 / 26", imageFull: fotostudia, imageCompressed: fotostudiaC },
  { gridArea: "1 / 26 / 5 / 31", imageFull: hallSofa, imageCompressed: hallSofaC },
  { gridArea: "5 / 26 / 8 / 31", imageFull: cabinet2, imageCompressed: cabinet2C },
];

const rotate = keyframes`
  0% {
    transform: translateX(0px); 
  }
  1.5% {
    transform: translateX(0px); 
  }
  50% {
    transform: translateX(calc(100vw - 100%)); 
  }
  51.5% {
    transform: translateX(calc(100vw - 100%)); 
  }
  100% {
    transform: translateX(0px); 
  }
`;

export default function GalleySection(): React.ReactElement {
  return (
    <Section
      id="gallery"
      sx={{
        backgroundColor: "rgba(56, 56, 58, 0.90)",
        paddingLeft: 0,
        paddingRight: 0
      }}
    >
      <SectionContainer>
        <SectionHeader
          text="Галлерея"
          sx={{
            color: theme => theme.colors.PINK,
            pl: {
              xs: "25px",
              sm: "50px",
              md: "100px",
              lg: "170px",
            },
          }}
        />
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            width: "100%",
            height: {
              xs: "70vh",
              lg: "755px",
            },
            overflow: "hidden",
            overflowX: "scroll",
            "&::-webkit-scrollbar": {
              display: "none"
            },
          }}
        >
          <Box
            sx={{
              // animation: {
              //   xs: `${spin} 90s linear infinite`,
              //   lg: `${spin} 60s linear infinite`,
              // },
              height: "100%",
              padding: {
                xs: "15px 25px",
                lg: "15px 35px",
              },
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(30, 70px)",
                lg: "repeat(30, 85px)"
              },
              gridTemplateRows: {
                xs: "repeat(7, calc((100% - 6 * 15px) / 7))",
                lg: "repeat(7, calc((100% - 6 * 35px) / 7))",
              },
              gridColumnGap: {
                xs: "15px",
                lg: "35px",
              },
              gridRowGap: {
                xs: "15px",
                lg: "35px",
              }
            }}
          >
            {gridAreas.map((imageBundle, index: number) => (
              <ImageBox key={index} gridArea={imageBundle.gridArea} compressed={imageBundle.imageCompressed} />
            ))}
          </Box>
        </Box>
      </SectionContainer>
    </Section>
  );
}