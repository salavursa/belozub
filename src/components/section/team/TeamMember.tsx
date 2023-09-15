import React from "react";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import Image from "next/image";
import ddhIcon from "../../../../public/icon/brandings/svg-ddh-dark-logo.svg";
import ViewMoreLink from "@/components/elements/ViewMoreLink";
import StyledLink from "@/components/elements/StyledLink";

type Props = {
  src: string,
  displayName: string,
  title: string,
  slogan: string,
}

export default function TeamMember({
  src,
  displayName,
  title,
  slogan
}: Props): React.ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <StyledLink href="/team/">
      <Box
        sx={{
          height: "260px",
          width: isMobile ? "auto" : "500px",
          flex: isMobile ? "1 0" : "0 0",
          display: "flex",

          "&:hover #info::before": {
            opacity: 0
          },
          "&:hover #info::after": {
            opacity: 1
          },
        }}
      >
        <Box
          sx={{
            padding: {
              xs: "0 15px 0 0",
              sm: "0 30px 0 0",
              md: "20px 30px"
            },
            minWidth: {
              sm: "200px"
            },
            width: isMobile ? "140px" : "200px",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "46% 46% 46% 46% / 36% 36% 36% 36%",
              overflow: "hidden",
              // boxShadow: theme => theme.constants.borders.lightShadow,
            }}
          >
            <Image
              alt={displayName}
              src={src}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "auto",
                height: "100%"
              }}
            />
          </Box>
        </Box>
        <Box
          id="info"
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: "100%",
            flex: "1 0",
            padding: "0 8px 0 18px",
            borderRadius: "0px 7px 7px 0px",
            border: ".7px solid",
            borderColor: theme => theme.colors.GRAY,
            borderLeft: theme => `3px solid ${theme.colors.DARK}`,
            zIndex: -1,
            "&:before": {
              zIndex: -3,
              transitionProperty: "opacity",
              transitionDuration: theme => theme.constants.transitions.duration,
              borderRadius: "0px 7px 7px 0px",
              opacity: 1,
              position: "absolute",
              content: "''",
              top: 0,
              width: "100%",
              height: "100%",
              left: 0,
              background: "linear-gradient(-140deg, #D9D9D9 8.35%, rgba(244, 244, 244, 0.22) 61.33%, rgba(244, 244, 244, 0.00) 91.65%)",
            },
            "&:after": {
              zIndex: -2,
              transitionProperty: "opacity",
              transitionDuration: theme => theme.constants.transitions.duration,
              borderRadius: "0px 7px 7px 0px",
              opacity: 0,
              position: "absolute",
              content: "''",
              top: 0,
              width: "100%",
              height: "100%",
              left: 0,
              background: "linear-gradient(-140deg, #FBBDAB 8.35%, rgba(244, 244, 244, 0.00) 91.65%)",
            }
          }}
        >
          <Typography padding="30px 0" variant="p3">
            {title}
          </Typography>
          <Typography paddingBottom="15px" variant="h5">
            {displayName}
          </Typography>

          <Box
            sx={{
              overflowY: "scroll",
              flex: "1 0"
            }}
          >
            <Typography lineHeight="4px" variant="p2">
              {slogan}
            </Typography>
          </Box>

          <ViewMoreLink sx={{ padding: "20px 0 15px 0", }} />

          <Image
            alt={displayName}
            src={ddhIcon.src}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              position: "absolute",
              top: "4px",
              right: "4px",
              width: "45px",
              height: "45px"
            }}
          />
        </Box>
      </Box>
    </StyledLink>
  )
}