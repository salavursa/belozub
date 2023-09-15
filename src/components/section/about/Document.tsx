import React from "react";
import {Box} from "@mui/material";
import Image from "next/image";
import StyledLink from "@/components/elements/StyledLink";
import SlideObject from "@/components/slider/SlideObject";

type Props = {
  documentId: string;
  gap: number;
};

export default function Document({ documentId, gap }: Props): React.ReactElement {
  return (
    <SlideObject
      // gap={gap}
      sx={{
        minWidth: {
          xs: "calc((100vw - 50px))",
          sm: "calc((100vw - 122px) / 2)",
          md: "calc((100vw - 244px) / 3)",
          lg: "calc((100vw - 406px) / 4)",
          xl: "calc((100vw - 428px) / 5)",
        },
        borderRadius: theme => theme.constants.borders.radius,
        overflow: "hidden",
      }}
    >
      <StyledLink target="_blank" rel="noopener noreferrer" href={`/document/${documentId}.pdf`}>
        <Box
          sx={{
            position: "relative",
            borderRadius: theme => theme.constants.borders.radius,

            "&:before": {
              position: "absolute",
              content: "''",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              borderRadius: theme => theme.constants.borders.radius,
              border: "1px solid",
              borderTop: "0px solid",
              borderBottom: "3px solid",
              borderImage: "linear-gradient(to bottom, transparent, #fff) 1",
            },

            "&:after": {
              transitionProperty: "opacity",
              transitionDuration: theme => theme.constants.transitions.duration,
              opacity: 0,
              position: "absolute",
              content: "''",
              top: 0,
              width: "100%",
              height: "100%",
              left: 0,
              zIndexBoost: 1,
              background: "linear-gradient(0deg, #D9D9D9 8.35%, rgba(244, 244, 244, 0.22) 61.33%, rgba(244, 244, 244, 0.08) 91.65%)",
              // background: "linear-gradient(0deg, #FBBDAB 8.35%, rgba(244, 244, 244, 0.00) 91.65%)",

              borderRadius: theme => theme.constants.borders.radius,
              border: "1px solid",
              borderBottom: "3px solid",
              borderColor: theme => theme.colors.LIGHT,
            },

            "&:hover": {
              borderColor: theme => theme.colors.LIGHT,
              "&::after": {
                opacity: 1,
              },
              "& img": {
                // opacity: .6
              }
            }
          }}
        >
          <Image
            alt="document"
            src={`/document/${documentId}-preview.webp`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              zIndex: -1,
              width: '100%',
              height: '100%',
              transitionProperty: "opacity",
              transitionDuration: ".2s",
            }}
          />
        </Box>
      </StyledLink>
    </SlideObject>
  )
}