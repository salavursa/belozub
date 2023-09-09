import React from "react";
import Section from "@/components/section/Section";
import {Box, Grid, useMediaQuery, useTheme} from "@mui/material";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import TeamMember from "@/components/section/team/TeamMember";

import member1 from "../../../../public/image/team/team-belozub.jpeg";
import shelveImg from "../../../../public/image/shelve.png";
import Image from "next/image";

export default function TeamSection(): React.ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Section
      id="team"
      sx={{
        position: "relative",
        padding: {
          md: "0 100px 0 170px",
        }
      }}
    >
      {!isMobile && (
        <Image
          src={shelveImg}
          style={{
            position: "absolute",
            left: isMobile ? "-40px" : 0,
            top: isMobile ? "280px" : "100px",
            width: isMobile ? "120px" : "150px",
            height: "auto",
          }}
          alt="Belozub mini icon"
        />
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