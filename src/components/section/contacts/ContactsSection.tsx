import React from "react";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import Map from "@/components/section/contacts/Map";
import NoSSRWrapper from "@/util/NoSSRWrapper";
import {Box} from "@mui/material";
import smilePhraseSvg from "../../../../public/icon/smile-footer.svg";
import statueImg from "../../../../public/image/statue.png";
import Image from "next/image";
import ContactsInfo from "@/components/section/contacts/ContactsInfo";

export default function ContactsSection(): React.ReactElement {
  return (
    <Section
      id="contacts"
      sx={{
        paddingBottom: {
          xs: "25px",
          sm: "50px",
          md: "75px",
          lg: "95px",
        },
        overflow: "hidden",
        backgroundColor: "rgba(56, 56, 58, 0.90)"
      }}
    >
      <SectionContainer>
        <SectionHeader text="Как нас найти" sx={{ alignSelf: "end", color: theme => theme.colors.PINK }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row"
            },
            // overflow: "hidden",
            // borderRadius: theme => theme.constants.borders.radius,
            gap: {
              xs: "25px",
              sm: "25px",
              md: "50px",
            }
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              minWidth: {
                md: "350px"
              },
              width: {
                xs: "100%",
                md: "auto"
              },
              "& #statue": {
                opacity: {
                  xs: 0,
                  md: 1
                }
              }
            }}
          >
            <ContactsInfo />
            <Image
              id="statue"
              src={statueImg}
              style={{
                position: "absolute",
                border: 0,
                left: 0,
                width: "140%",
                height: "auto",
                zIndex: "1",
                pointerEvents: "none",
                transform: "rotate(20deg) translate(-9%, 22%)"
              }}
              alt="Улыбайся"
            />
          </Box>
          <Box flex="1 0" zIndex={0} gap="25px" display="flex" flexDirection="column" >
            <NoSSRWrapper>
              <Map height="500px" />
            </NoSSRWrapper>
            <Image
              src={smilePhraseSvg}
              style={{
                alignSelf: "end",
                width: "80%",
                height: "auto",
              }}
              alt="Улыбайся"
            />
          </Box>
        </Box>
      </SectionContainer>
    </Section>
  );
}