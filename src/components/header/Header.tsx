import React, {useState, useEffect, useCallback} from "react";
import {Box, keyframes, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import LinkStack from "@/components/header/LinkStack";
import NavLinkUpper from "@/components/header/NavLink";
import Image from "next/image";
import belSvg from "../../../public/icon/brandings/svg-bel-header.svg";
import belSvgMobile from "../../../public/icon/brandings/svg-title-half-xs.svg";
import AppointmentButton from "@/components/header/AppointmentButton";
import MobileMenuButton from "@/components/header/MobileMenuButton";
import bgStatic from "../../../public/image/bg-static.png";
import bgStaticDark from "../../../public/image/bg-static-dark.png";
import StyledLink from "@/components/elements/StyledLink";

const shouldHeaderBeShown = (alwaysShow: boolean): boolean => {
  if (alwaysShow) {
    return true;
  }

  if (typeof window !== "undefined") {
    return window.innerWidth < 1000
      ? window.scrollY >= window.innerHeight * .5
      : window.scrollY >= window.innerHeight * .6;
  }

  return false;
}

const rotate = keyframes`
  0% {
    transform: translateX(0px);
  }
  60% {
    transform: translateX(0px);
  }
  85% {
    transform: translateX(-215px); 
  }
  86% {
    transform: translateX(-200px);
  }
  97% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0px); 
  }
`;

export default function Header({ alwaysOn = false, layout }: { alwaysOn?: boolean, layout: "index" | "other" }): React.ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

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
  }, [alwaysOn, handleHeaderScroll])

  return (
    <Box
      sx={{
        transitionProperty: "opacity",
        transitionDuration: theme => theme.constants.transitions.duration,
        opacity: showHeader ? 1 : 0,
        pointerEvents: showHeader ? "auto" : "none",
        width: "100dvw",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        position: alwaysOn ? "relative" : "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "0 10px",
            lg: "0 30px"
          },
          zIndex: 100,
          backgroundColor: theme => theme.colors.LIGHT2,
          display: "flex",
          height: "40px",
          width: "100dvw",
          justifyContent: "space-between",
          overflowX: "scroll",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}
      >
        <LinkStack links={[
          <NavLinkUpper key={0} href="/#about" text="О нас" variant="upper" />,
          <NavLinkUpper key={1} href="/#documents" text="Документы" variant="upper" />,
          <NavLinkUpper key={2} href="/#team" text="Команда" variant="upper" />,
          <NavLinkUpper key={3} href="/#works" text="Работы" variant="upper" />,
          <NavLinkUpper key={4} href="/#services" text="Виды лечения" variant="upper" />,
          <NavLinkUpper key={5} href="/#reviews" text="Отзовы" variant="upper" />,
          <NavLinkUpper key={6} href="/#gallery" text="Галерея" variant="upper" />,
          <NavLinkUpper key={7} href="/#contacts" text="Контакты" variant="upper" />
        ]} />
        {!isMobile && (
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
        )}
      </Box>
      <Box
        sx={{
          zIndex: 100,
          padding: {
            xs: "0 0px 0 11px",
            lg: "0 0 0 30px"
          },
          backgroundColor: theme => theme.colors.DARK2,
          display: "flex",
          height: "60px",
          width: "100dvw",
          justifyContent: "space-between"
        }}
      >
        {!isMobile && (
          <LinkStack links={[
            <NavLinkUpper key={0} href="/treatment" text="Лечение" variant="bottom" />,
            <NavLinkUpper key={1} href="/hygiene" text="Гигиена" variant="bottom" />,
            <NavLinkUpper key={2} href="/implantation" text="Имплантация" variant="bottom" />,
            <NavLinkUpper key={3} href="/plastic" text="Пластика" variant="bottom" />,
            <NavLinkUpper key={4} href="/aesthetic" text="Эстетическая стоматология" variant="bottom" />,
            <NavLinkUpper key={5} href="/services" text="Все услуги" variant="bottom" />,
            <NavLinkUpper key={6} href="/blog" text="Блог" variant="bottom" />
          ]} />
        )}
        <Stack direction="row" alignItems="center">
          {isMobile ? (
            <Box
              sx={{
                height: "60px",
                width: "265px",
                overflow: "hidden"
              }}
            >
              <StyledLink href="/#main">
                <Box sx={{ animation: `${rotate} 20s linear infinite` }}>
                  <Image
                    src={belSvgMobile}
                    style={{
                      width: "auto",
                      height: "60px",
                    }}
                    alt="Belozub mini icon"
                  />
                </Box>
              </StyledLink>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  height: "60px",
                  width: "75px",
                  zIndex: 1
                }}
              >
                <StyledLink onClick={() => setMenuOpen(false)} href="/#main">
                  <Image
                    src={belSvg}
                    style={{
                      position: "absolute",
                      width: "100px",
                      height: "60px",
                    }}
                    alt="Belozub mini icon"
                  />
                </StyledLink>
              </Box>
              <AppointmentButton />
            </>
          )}
        </Stack>

        {isMobile && (
          <MobileMenuButton toggled={isMenuOpen} toggle={setMenuOpen} />
        )}
      </Box>

      {isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: "100px",
            left: 0,
            transition: ".3s opacity",
            width: "100%",
            height: "calc(100dvh - 99px)",
            opacity: isMenuOpen ? 1 : 0,
            pointerEvents: isMenuOpen ? "default" : "none",
            // backgroundColor: "#fff",
            zIndex: 98,
            "&::before": {
              zIndex: 97,
              content: "''",
              position: "absolute",
              top: -15,
              left: -10,
              height: "120%",
              width: "120%",
              filter: "blur(5px)",
              background: layout === "other"
                ? `linear-gradient(0deg, rgba(244, 244, 244, 0.6), rgba(244, 244, 244, 0.6)), url(${bgStatic.src})`
                : `linear-gradient(0deg, rgba(56, 56, 58, 0.80) 0%, rgba(56, 56, 58, 0.80) 100%), url(${bgStaticDark.src}), lightgray 50% / cover no-repeat`,
            }
          }}
        />
      )}
    </Box>
  )
}