import {Box, Stack, SxProps, Typography} from "@mui/material";
import React from "react";
import backgroundImage from "../../../../public/image/review-bg.png";
import Image from "next/image";
import SlideObject from "@/components/slider/SlideObject";
import ScrollBox from "@/components/elements/ScrollBox";

export default function Review({ gap }: { gap: number }) {
  return (
    <SlideObject
      gap={gap}
      items={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4
      }}
      gaps={{
        xs: 0,
        sm: 0,
        md: 0,
        lg: 0,
        xl: 0
      }}
      sx={{
        display: "flex",
        height: "170px",
        borderRadius: theme => theme.constants.borders.radiusXS,
        overflow: "hidden",
        minWidth: {
          xs: `calc((100vw - ${2 * gap}px) / ${1})`,
          sm: `calc((100vw - ${3 * gap}px) / ${2})`,
          md: `calc((100vw - ${3 * gap}px) / ${2})`,
          lg: `calc((100vw - ${4 * gap}px) / ${3})`,
          xl: `calc((100vw - ${5 * gap}px) / ${4})`,
        },
        // minWidth: {
        //   xs: `calc((100vw - ${(1 - 1 + 2) * gap + 0}px) / ${1})`,
        //   sm: `calc((100vw - ${(2 - 1 + 2) * gap + 0}px) / ${2})`,
        //   md: `calc((100vw - ${(2 - 1 + 2) * gap + 0}px) / ${2})`,
        //   lg: `calc((100vw - ${(3 - 1 + 2) * gap + 0}px) / ${3})`,
        //   xl: `calc((100vw - ${(4 - 1 + 2) * gap + 0}px) / ${4})`,
        // },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "130px"
        }}
      >
        <Image
          src={backgroundImage.src}
          alt="review background"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: "100%"
          }}
        />
      </Box>
      <Stack width="100%" zIndex={0}>
        <Box height="40px" display="flex" alignItems="end" justifyContent="center">
          <Typography variant="p1">
            Лучшая клиника
          </Typography>
        </Box>
        <ScrollBox sx={{ flex: "1 0", padding: "7px 19px 19px 19px", lineHeight: "0px", textAlign: "center" }}>
          <Typography variant="p4" color={theme => theme.colors.LIGHT}>
            Прием прошел отлично! Врач замечательный! Очень приятный! Проконсультировал и объяснил информацию. Клинику выбрала случайно. Она милая и приятная. Обслужили меня быстро. По итогу денситометрии я получила результат обследования.
          </Typography>
        </ScrollBox>
        <Box
          sx={{
            backgroundColor: theme => theme.colors.PINK,
            width: "100%",
            height: "3px"
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme => theme.colors.LIGHT,
            width: "100%",
            height: "40px",
            minHeight: "40px",
          }}
        >
          <Typography variant="p3" textAlign="center">
            Санкт-Петербург | Ксения | 22 года
          </Typography>
        </Box>
      </Stack>
    </SlideObject>
  );
}