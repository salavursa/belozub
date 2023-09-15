import React from "react";
import {Box, Divider, Typography} from "@mui/material";
import SlideObject from "@/components/slider/SlideObject";
import {ArticleType} from "../../../../pages/api/articles";
import Image from "next/image";
import ScrollBox from "@/components/elements/ScrollBox";
import StyledLink from "@/components/elements/StyledLink";

export default function Article({ data, gap }: { data: ArticleType, gap: number }): React.ReactElement {
  return (
    <SlideObject
      gap={gap}
      items={{
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3
      }}
      sx={{
        height: "450px",

        zIndex: 0,
        overflow: "hidden",
        border: "1px solid transparent",
        borderBottom: "3px solid transparent",
        borderRadius: theme => theme.constants.borders.radiusXS,

        "&:hover": {
          "& #bg": {
            backgroundColor: "rgba(255,255,255,0)",
          },
          borderImage: "none",
          borderColor: "rgba(244, 244, 244, 0.82)",

          "&::after": {
            opacity: 1
          }
        },

        "&::after": {
          opacity: 0,
          zIndex: -2,
          transitionProperty: "opacity",
          transitionDuration: theme => theme.constants.transitions.duration,
          position: "absolute",
          content: "''",
          top: 0,
          width: "100%",
          height: "100%",
          left: 0,
          background: "linear-gradient(0deg, #FBBDAB 8.35%, rgba(244, 244, 244, 0.00) 91.65%)",
        }
      }}
    >
      <StyledLink
        href={`/articles/${data.title}`}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50%",
            minHeight: "50%",
            position: "relative",
            objectFit: "cover"
          }}
        >
          <Image
            alt={data.title}
            src={data.imageUrl}
            fill={true}
            objectFit="cover"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "3px",
            minHeight: "3px",
            backgroundColor: theme => theme.colors.PINK
          }}
        />
        <Box
          id="bg"
          sx={{
            transitionDuration: theme => theme.constants.transitions.duration,
            backgroundColor: "rgba(255,255,255,0.33)",
            padding: "18px 18px 20px 18px",
            flex: "1 0",
            display: "flex",
            minHeight: 0,
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <Typography lineHeight="normal" variant="h5">{data.title}</Typography>
          <Divider orientation="horizontal" />
          <ScrollBox sx={{ flex: "1 1" }} >
            <Typography variant="p2">{data.description}</Typography>
          </ScrollBox>
        </Box>
      </StyledLink>
    </SlideObject>
  )
}