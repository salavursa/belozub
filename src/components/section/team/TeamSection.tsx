import React from "react";
import Section from "@/components/section/Section";
import {Box, Grid} from "@mui/material";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import TeamMember from "@/components/section/team/TeamMember";

import member1 from "../../../../public/image/team/team-belozub.jpeg";

export default function TeamSection(): React.ReactElement {
  return (
    <Section id="team">
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