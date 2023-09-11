import React, {useLayoutEffect, useRef} from "react";
import Section from "@/components/section/Section";
import {Box, Grid, useMediaQuery, useTheme} from "@mui/material";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import TeamMember from "@/components/section/team/TeamMember";

import member1 from "../../../../public/image/team/team-belozub.jpeg";
import shelveImg from "../../../../public/image/shelve.png";
import Image from "next/image";
import {gsap} from "gsap";

export default function TeamSection(): React.ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = useRef<HTMLDivElement | null>();
  const imgRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!isMobile && imgRef) {
      let ctx = gsap.context(() => {
        gsap.to(
          imgRef.current,
          {
            duration: 10,
            scrollTrigger: {
              trigger: imgRef.current,
              toggleActions: "restart pause reverse pause",
              scrub: 1,
            },

            scale: .7,
            translateY: isMobile ? "-500px" : "-180px",
            translateX: "-200px",
          }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isMobile]);

  return (
    <Section
      ref={containerRef}
      id="team"
      sx={{
        position: "relative",
        padding: {
          md: "0 100px 0 170px",
        }
      }}
    >
      {!isMobile && (
        <Box
          ref={imgRef}
          sx={{
            position: "absolute",
            transform: isMobile ? "translate(-40, 280px)" : "translate(-170px, 500px)",
            width: isMobile ? "120px" : "150px",
          }}
        >
          <Image
            src={shelveImg}
            style={{
              height: "auto",
            }}
            alt="Belozub mini icon"
          />
        </Box>
      )}
      <SectionContainer>
        <SectionHeader text="Команда" sx={{ alignSelf: "end" }} />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            rowGap: "25px",
            justifyContent: "space-evenly",
            flexWrap: "wrap"
          }}
        >
          <TeamMember src={member1.src} displayName="Елена Белозуб" title="Ведущий врач" slogan="Мы меняем этот мир к лучшему, с нами ваша улыбка никогда не останется незамеченной. В нашей клинике мы ценим качество и время клиентов" />
          <TeamMember src={member1.src} displayName="Елена Белозуб" title="Ведущий врач" slogan="Мы меняем этот мир к лучшему, с нами ваша улыбка никогда не останется незамеченной. В нашей клинике мы ценим качество и время клиентов" />
          <TeamMember src={member1.src} displayName="Елена Белозуб" title="Ведущий врач" slogan="Мы меняем этот мир к лучшему, с нами ваша улыбка никогда не останется незамеченной. В нашей клинике мы ценим качество и время клиентов" />
          <TeamMember src={member1.src} displayName="Елена Белозуб" title="Ведущий врач" slogan="Мы меняем этот мир к лучшему, с нами ваша улыбка никогда не останется незамеченной. В нашей клинике мы ценим качество и время клиентов" />
          <TeamMember src={member1.src} displayName="Елена Белозуб" title="Ведущий врач" slogan="Мы меняем этот мир к лучшему, с нами ваша улыбка никогда не останется незамеченной. В нашей клинике мы ценим качество и время клиентов" />
          <TeamMember src={member1.src} displayName="Елена Белозуб" title="Ведущий врач" slogan="Мы меняем этот мир к лучшему, с нами ваша улыбка никогда не останется незамеченной. В нашей клинике мы ценим качество и время клиентов" />
        </Box>
      </SectionContainer>
    </Section>
  );
}