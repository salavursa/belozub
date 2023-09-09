import {Box, Stack, SxProps, Typography} from "@mui/material";
import React from "react";
import {Theme} from "@mui/material/styles";
import backgroundImage from "../../../../public/image/review-bg.png";
import Image from "next/image";
import circularSlogan from "../../../../public/image/about/circular-text.png";
import SlideObject from "@/components/slider/SlideObject";

export default function Review({ sx = {} }: { sx?: SxProps<Theme> }) {
  return (
    <SlideObject
      sx={{
        display: "flex",
        height: "170px",
        borderRadius: theme => theme.constants.borders.radiusXS,
        overflow: "hidden",
        ...sx
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
        <Typography variant="p4" textAlign="center" sx={{ flex: "1 0", color: theme => theme.colors.LIGHT, padding: "7px 19px 19px 19px", maxHeight: "87px", overflowY: "auto" }}>
          Прием прошел отлично! Врач замечательный! Очень приятный! Проконсультировал и объяснил информацию. Клинику выбрала случайно. Она милая и приятная. Обслужили меня быстро. По итогу денситометрии я получила результат обследования.
        </Typography>
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