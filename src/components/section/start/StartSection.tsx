import React, {useCallback, useState, useEffect, useMemo} from "react";
import Section from "@/components/section/Section";

import imgStart from "../../../../public/image/bg-start.png";
import svgTitle from "../../../../public/icon/brandings/svg-title.svg";
import svgDdh from "../../../../public/icon/brandings/svg-ddh-pink-logo.svg";
import arrowDownSvg from "../../../../public/icon/arrow-down.svg";
import Image from "next/image";
import {Box, Button, Typography, useMediaQuery, useTheme} from "@mui/material";
import Link from "next/link";

const startClipPercentage = 60;

// function debounce<T extends any[]>(func: (...args: T) => void, delay: number) {
//   let timeoutId: NodeJS.Timeout;
//   return function (...args: T) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// const handleScroll = useCallback(debounce(
//   () => {
//     if (window.scrollY < window.innerHeight * .8) {
//       setScrollTop(window.scrollY);
//     } else {
//       setScrollTop(1000);
//     }
//   }, .5
// ), []);

export default function StartSection(): React.ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const arrowDelta: number = useMemo(() => isMobile ? 1.04 : 1.24, [ isMobile ]);

  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY < window.innerHeight * .8) {
      setScrollTop(window.scrollY);
    } else {
      setScrollTop(1000);
    }
  }, []);

  useEffect(() => {
    setScrollTop(window.scrollY);

    // document.addEventListener("scroll", handleScroll);

    return () => {
      // document.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <Section
      id="main"
      sx={{
        height: "100svh",
        width: "100svw",
        padding: {
          xs: 0,
          sm: 0,
          md: 0,
          lg: 0
        },
        position: "relative"
      }}
    >
      <Image
        alt="start-background"
        src={imgStart}
        className="object-cover absolute"
        style={{
          objectFit: "cover",
          position: "absolute",
          zIndex: "-1",
          width: "100%",
          height: "100%",
          WebkitClipPath: `ellipse(${isMobile ? "95" : "65"}% ${startClipPercentage - (scrollTop / 8)}% at 50% 36%)`,
          clipPath: `ellipse(${isMobile ? "95" : "65"}% ${startClipPercentage - (scrollTop / 8)}% at 50% 36%)`,
        }}
      />
      <Image
        src={svgTitle}
        style={{
          width: isMobile ? "100%" : "90%",
          height: "auto"
        }}
        alt="belozub clinic alphabetic logo"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: {
            xs: "23%",
            sm: "15%",
            md: "10svh",
          },
          gap: {
            xs: "40px",
            md: "20px",
          },
          width: {
            xs: "100%"
          },
          maxWidth: {
            xs: "100svw",
            md: "90svw",
            lg: "70svw"
          },
          padding: {
            xs: "0 20px",
            sm: "0 0 0 50px",
            md: "0 0 0 10dvh",
            lg: "0 0 0 10dvh",
          },
          transform: `translateY(${-scrollTop*0.8}px)`
        }}
      >
        <Typography sx={{ color: theme => theme.colors.LIGHT }} variant="h1">
          Авторская клиника <br/> эстетической стоматологии
        </Typography>
        <Typography sx={{ color: theme => theme.colors.LIGHT }} variant="p1">
          Качество улыбки имеет значение, ведь нет ничего, что она не могла бы сделать лучше. Доверьтесь нам и мы поможем создать улыбку вашей мечты.
        </Typography>
        <Box display="flex" gap="20px" alignItems="center">
          <Link style={{ textDecoration: "none" }} href="/#contacts">
            <Button>
              <Typography variant="p2">
                записаться на прием
              </Typography>
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/#about">
            <Typography variant="a">
              узнать больше о клинике
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          bottom: "50px",
          transform: `translateY(${-scrollTop * arrowDelta}px)`
        }}
      >
        <Image
          alt="dental design health"
          src={svgDdh}
          style={{
            height: "auto",
            width: "80px"
          }}
        />
        <Image
          alt="arrow"
          src={arrowDownSvg}
          style={{
            height: "auto",
            width: "50px"
          }}
        />
      </Box>
    </Section>
  );
}