import React, {useState, useEffect, useCallback, useMemo} from "react";
import {Box, Stack, Typography} from "@mui/material";
import LinkStack from "@/components/header/LinkStack";
import NavLinkUpper from "@/components/header/NavLink";
import Image from "next/image";
import belSvg from "../../../public/image/svg-bel-header.svg";
import AppointmentButton from "@/components/header/AppointmentButton";
import Link from "next/link";

const shouldHeaderBeShown = (alwaysShow: boolean): boolean => {
  if (alwaysShow) {
    return true;
  }

  if (typeof window !== "undefined") {
    return window.scrollY >= window.innerHeight * .4;
  }

  return false;
}

export default function Header({ alwaysOn = false }: { alwaysOn?: boolean }): React.ReactElement {
  const [showHeader, setShowHeader] = useState<boolean>(false);

  const handleHeaderScroll = useCallback(() => {
    setShowHeader(shouldHeaderBeShown(alwaysOn));
  }, [alwaysOn]);

  useEffect(() => {
    setTimeout(() => {
      handleHeaderScroll();
    }, 10);

    if (!alwaysOn && typeof window !== "undefined") {
      document.addEventListener("scroll", handleHeaderScroll);
    }

    return () => {
      if (!alwaysOn && typeof window !== "undefined") {
        document.removeEventListener("scroll", handleHeaderScroll);
      }
    }
  }, [])

  return (
    <Box
      sx={{
        transition: theme => theme.constants.transitions.default,
        opacity: showHeader ? 1 : 0,
        pointerEvents: showHeader ? "auto" : "none",
        width: "100dvw",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        position: alwaysOn ? "relative" : "fixed",
        top: 0,
        left: 0,
        zIndex: 1
      }}
    >
      <Box
        sx={{
          padding: "0 30px",
          backgroundColor: theme => theme.colors.LIGHT2,
          display: "flex",
          height: "40px",
          width: "100dvw",
          justifyContent: "space-between"
        }}
      >
        <LinkStack links={[
          <NavLinkUpper key={0} href="/#about" text="О нас" variant="upper" />,
          <NavLinkUpper key={1} href="/#documents" text="Документы" variant="upper" />,
          <NavLinkUpper key={2} href="/#team" text="Команда" variant="upper" />,
          <NavLinkUpper key={3} href="/#works" text="Работы" variant="upper" />,
          <NavLinkUpper key={4} href="/#services" text="Виды лечения" variant="upper" />,
          <NavLinkUpper key={5} href="/#gallery" text="Галерея" variant="upper" />,
          <NavLinkUpper key={6} href="/#reviews" text="Отзовы" variant="upper" />,
          <NavLinkUpper key={7} href="/#contacts" text="Контакты" variant="upper" />
        ]} />
        <Stack direction="row" alignItems="center" gap="20px">
          <Typography variant="headerUpLink">
            +7 (921) 945-01-35
          </Typography>
          <Typography variant="headerUpLink">
            Пн-Сб
          </Typography>
          <Typography variant="headerUpLink">
            10:00-20:00
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          padding: "0 0 0 30px",
          backgroundColor: theme => theme.colors.DARK2,
          display: "flex",
          height: "60px",
          width: "100dvw",
          justifyContent: "space-between"
        }}
      >
        <LinkStack links={[
          <NavLinkUpper key={0} href="/treatment" text="Лечение" variant="bottom" />,
          <NavLinkUpper key={1} href="/hygiene" text="Гигиена" variant="bottom" />,
          <NavLinkUpper key={2} href="/implantation" text="Имплантация" variant="bottom" />,
          <NavLinkUpper key={3} href="/plastic" text="Пластика" variant="bottom" />,
          <NavLinkUpper key={4} href="/aesthetic" text="Эстетическая стоматология" variant="bottom" />,
          <NavLinkUpper key={5} href="/services" text="Все услуги" variant="bottom" />,
          <NavLinkUpper key={6} href="/blog" text="Блог" variant="bottom" />
        ]} />
        <Stack direction="row" alignItems="center" gap="20px">
          <Box
            sx={{
              height: "60px",
              zIndex: 1,
              transition: theme => theme.constants.transitions.default,
              "&:hover ": {
                filter: "hue-rotate(180deg)"
              }
            }}
          >
            <Link href="/#main" style={{ textDecoration: "none" }} scroll={false}>
              <Image
                src={belSvg}
                style={{
                  width: "100px",
                  height: "60px",
                  transform: "translateX(30px)",
                }}
                alt="Belozub mini icon"
              />
            </Link>
          </Box>
          <AppointmentButton />
        </Stack>
      </Box>
    </Box>
  )
}