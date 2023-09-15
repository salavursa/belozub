import React from "react";
import {Box, Grid, Stack, Typography} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ViewMoreLink from "@/components/elements/ViewMoreLink";

type Props = {
  src: string,
  title: string,
  description: string,
  href: string,
}

export default function Service({ href, title, src, description }: Props): React.ReactElement {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <Link href={href} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            padding: {
              xs: "0 20px",
              md: "0 10px",
            },
            position: "relative",
            width: "100%",
            height: "210px",
            zIndex: 0,

            borderRadius: theme => theme.constants.borders.radiusXS,
            overflow: "hidden",

            "&:hover::before": {
              opacity: 0,
            },

            "&:hover::after": {
              opacity: 1,
            },

            "&:before": {
              zIndex: -3,
              transitionProperty: "opacity",
              transitionDuration: theme => theme.constants.transitions.duration,
              opacity: 1,
              position: "absolute",
              content: "''",
              top: 0,
              width: "100%",
              height: "100%",
              left: 0,
              background: "linear-gradient(0deg, #D9D9D9 8.35%, rgba(244, 244, 244, 0.22) 61.33%, rgba(244, 244, 244, 0.08) 91.65%)",

              borderRadius: theme => theme.constants.borders.radiusXS,
              border: "1px solid",
              borderTop: "0px solid",
              borderBottom: "3px solid",
              borderImage: "linear-gradient(to bottom, transparent, #fff) 1",
            },
            "&:after": {
              zIndex: -2,
              transitionProperty: "opacity",
              transitionDuration: theme => theme.constants.transitions.duration,
              opacity: 0,
              position: "absolute",
              content: "''",
              top: 0,
              width: "100%",
              height: "100%",
              left: 0,
              background: "linear-gradient(0deg, #FBBDAB 8.35%, rgba(244, 244, 244, 0.00) 91.65%)",

              borderRadius: theme => theme.constants.borders.radiusXS,
              border: "1px solid",
              borderBottom: "3px solid",
              borderColor: "rgba(244, 244, 244, 0.82)"
            }
          }}
        >
          <Stack alignItems="center" width="100%" height="100%" >
            <Box
              sx={{
                padding: "15px",
                height: "80px",
                width: "80px"
              }}
            >
              <Image
                alt="icon"
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
            <Stack pt={{ xs: "15px", md: 0 }} height="100%" alignItems="center" justifyContent="center">
              <Typography textAlign="center" variant="h6">
                {title}
              </Typography>
              <Typography textAlign="center" mt="7px" variant="p2">
                {description}
              </Typography>
              <Box flexGrow={1} display="flex" alignItems="end" width="100%" paddingBottom="15px" justifyContent="flex-end">
                <ViewMoreLink />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Grid>
  );
}