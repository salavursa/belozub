import React from "react";
import Section from "@/components/section/Section";
import {Box, Grid} from "@mui/material";
import SectionHeader from "@/components/section/SectionHeader";
import SectionContainer from "@/components/section/SectionContainer";
import Service from "@/components/section/services/Service";

import glassesImg from "../../../../public/image/glasses.png";

import service1 from "../../../../public/icon/services/kostnaya-plastika-service.svg";
import service2 from "../../../../public/icon/services/plastika-recesii-desni-service.svg";
import service3 from "../../../../public/icon/services/ispravlenie-prikusa-na-elainere-service.svg";
import service4 from "../../../../public/icon/services/professionalnaya-gigiena-service.svg";
import service5 from "../../../../public/icon/services/dentalnaya-implantaciya-service.svg";
import service6 from "../../../../public/icon/services/lechenie-service.svg";
import service7 from "../../../../public/icon/services/hudozhestvennaya-restovraciya-service.svg";
import service8 from "../../../../public/icon/services/otbelivanie-zubov-service.svg";
import service9 from "../../../../public/icon/services/desnevaya-plastica-service.svg";
import service10 from "../../../../public/icon/services/udalenie-zubov-service.svg";
import service11 from "../../../../public/icon/services/protezirovanie-na-implantah-service.svg";
import service12 from "../../../../public/icon/services/koronki-i-viniri-service.svg";
import Image from "next/image";
import OutlineButton from "@/components/input/OutlineButton";

export default function ServicesSection(): React.ReactElement {
  return (
    <Section id="services">
      <SectionContainer>
        <SectionHeader text="Виды лечения" />
        <Box flex="1 0" position="relative" >
          <Box
            sx={{
              transform: "scale(-1, 1) rotate(-15deg)",
              position: "absolute",
              height: {
                xl: "450px",
                lg: "370px",
                sm: "350px",
                xs: "250px"
              },
              right: {
                sm: "-5%",
                xs: "-20%"
              },
              top: {
                xl: "-340px",
                lg: "-270px",
                sm: "-270px",
                xs: "-210px",
              }
            }}
          >
            <Image
              alt="icon"
              src={glassesImg}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                height: "100%",
                width: "auto"
              }}
            />
          </Box>
          <Grid container rowSpacing="25px" columnSpacing="25px">
            <Service href="/services/service-id" src={service1.src} title="Костная пластика" description="Наращивание объёма кости по ширине и высоте при помощи современных микрохирургических методик." />
            <Service href="/services/service-id" src={service2.src} title="Пластика рецессии десны" description="Современный способ, позволяющий вернуть положение десны на первоначальный уровень" />
            <Service href="/services/service-id" src={service3.src} title="Исправление прикуса на элайнерах" description="Установка прозрачных капп, которые перемещают зубы и выравнивают их в зубном ряду." />
            <Service href="/services/service-id" src={service4.src} title="Исправление прикуса на элайнерах" description="Cпа процедура полости рта на лучшем оборудовании и премиум препаратами." />
            <Service href="/services/service-id" src={service5.src} title="Дентальная имплантация" description="Современный способ заместить утраченный зуб в зубном ряду и дать вам возможность полноценно улыбаться." />
            <Service href="/services/service-id" src={service6.src} title="Лечение" description="Лечение кариеса и корневых каналов с использованием высококачественных материалов и оборудования." />
            <Service href="/services/service-id" src={service7.src} title="Художественная реставрация" description="Прямое восстановление зуба с сохранением природной анатомии, оптических свойств, твёрдых тканей за один приём." />
            <Service href="/services/service-id" src={service8.src} title="Отбеливание зубов" description="Безвредная процедура профессиональной системой холодного отбеливания с устойчивым результатом." />
            <Service href="/services/service-id" src={service9.src} title="Десневая пластика в области импланта" description="Процедура позволяющая увеличить срок службы зубного импланта пересадки другого типа." />
            <Service href="/services/service-id" src={service10.src} title="Удаление зубов" description="Процедура по удалению зубов профессионалами с использованием самых эффективных анестетиков." />
            <Service href="/services/service-id" src={service11.src} title="Протезирование на имплантах" description="Традиционное протезирование ППЗ, осуществляемое полными съемными протезами." />
            <Service href="/services/service-id" src={service12.src} title="Высокоэстетичные коронки и виниры" description="Создание нового дизайна улыбки с использованием тонких накладок из премиум керамики." />
          </Grid>
        </Box>
        <Box mt="25px" pr="4px">
          <Grid container spacing="25px" direction="row-reverse">
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <OutlineButton styleVariant="secondary" fullWidth>
                Прайс Лист
              </OutlineButton>
            </Grid>
          </Grid>
        </Box>
      </SectionContainer>
    </Section>
  );
}