import React, {useRef} from "react";
import Section from "@/components/section/Section";

import {Box, Button, Typography, useMediaQuery, useTheme} from "@mui/material";

import { gsap } from "gsap";
import imgStart from "../../../../public/image/bg-start.png";
import Image from "next/image";
import svgTitle from "../../../../public/icon/brandings/svg-title.svg";
import Link from "next/link";
import svgDdh from "../../../../public/icon/brandings/svg-ddh-pink-logo.svg";
import arrowDownSvg from "../../../../public/icon/arrow-down.svg";
import useIsomorphicLayoutEffect from "@/util/useIsomorphicLayoutEffect";

export default function StartSectionV2(): React.ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const startContainer = useRef<HTMLDivElement | null>(null);
  const smile = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(
        smile.current,
        {
          duration: 10,
          scrollTrigger: {
            trigger: smile.current,
            toggleActions: "restart pause reverse pause",
            start: "start 2px",
            scrub: .2,
            // markers: true
          },

          translateY: isMobile ? "-500px" : "-280px",
          borderBottomLeftRadius: "50% 1%",
          borderBottomRightRadius: "50% 1%",
        }
      );
    }, startContainer);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div
      ref={startContainer}
    >
      <Section
        id="main"
        sx={{
          willChange: "transform",
          height: "100vh",
          width: "110vw",
          padding: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0
          },
          position: "relative",
        }}
      >
        <Box
          className="smile"
          ref={smile}
          sx={{
            willChange: "transform",
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "97%",
            padding: "0 5vw",
            borderBottomLeftRadius: {
              xs: "50% 22%",
              md: "50% 51%",
            },
            borderBottomRightRadius: {
              xs: "50% 22%",
              md: "50% 51%",
            },
            overflow: "hidden",
            borderBottom: theme => `6px solid ${theme.colors.PINK}`
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
              top: 0,
              width: "110vw",
              height: "100vh",
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
              width: "100vw",
              alignItems: "center",
              bottom: "25px",
            }}
          >
            <Image
              alt="dental design health"
              src={svgDdh}
              style={{
                height: "auto",
                width: isMobile ? "65px" : "80px"
              }}
            />
            <Image
              alt="arrow"
              src={arrowDownSvg}
              style={{
                height: "auto",
                width: isMobile ? "39px" : "45px"
              }}
            />
          </Box>
        </Box>
      </Section>
    </div>
  );
}