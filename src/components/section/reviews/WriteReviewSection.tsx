import React from "react";
import Section from "@/components/section/Section";
import {Box, Stack, TextareaAutosize, TextField, Typography} from "@mui/material";
import Image from "next/image";
import backgroundImage from "../../../../public/image/review-bg.png";
import OutlineButton from "@/components/input/OutlineButton";

export default function WriteReviewSection(): React.ReactElement {
  return (
    <Section sx={{ backgroundColor: "rgba(56, 56, 58, 0.90)" }} id="writeReview">
      <Box
        sx={{
          mt: "50px",
          position: "relative",
          flex: "1 0",
          zIndex: 0,
          borderRadius: theme => theme.constants.borders.radius,
          overflow: "hidden",
          // height: {
          //   xs: "max-content",
          //   lg: "390px"
          // },
          height: "max-content",
          padding: {
            xs: "30px",
            lg: "50px",
            xl: "70px"
          },
          "&::before": {
            content: "''",
            position: "absolute",
            width: "105%",
            height: "105%",
            top: -5,
            left: -5,
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "cover",
            filter: "blur(3px)",
            zIndex: -1
          }
        }}
      >
        <Stack width="100%" gap="30px">
          <Typography color={theme => theme.colors.DARK} variant="h5" fontSize="25px" >
            Оставьте отзов
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: {
                xs: "20px",
                lg: "50px",
                xl: "70px"
              },
              flexDirection: {
                xs: "column",
                lg: "row"
              }
            }}
          >
            <Stack
              sx={{
                gap: "20px",
                flex: {
                  lg: "1 0"
                }
              }}
            >
              <TextField label="Имя" variant="outlined" />
              <TextField label="Фамилия" variant="outlined" />
              <TextField label="Емейл или телефон" variant="outlined" />
            </Stack>
            <Box
              sx={{
                minHeight: {
                  xs: "180px"
                },
                flex: {
                  lg: "1 0"
                }
              }}
            >
              <TextField
                label="Сообщение"
                inputProps={{
                  style: {
                    height: "calc(16.5px * 4 + 17px * 3 + 40px)"
                    // height: "100%",
                    // maxHeight: "1000px"
                  },
                }}
                fullWidth
                variant="outlined"
                multiline
              />
            </Box>
          </Box>
          <OutlineButton
            sx={{
              alignSelf: "end",
              width: {
                xs: "100%",
                lg: "300px"
              }
            }}
            outlineDirection="tr"
            styleVariant="secondary"
          >
            Отправить
          </OutlineButton>
        </Stack>
      </Box>
    </Section>
  )
}