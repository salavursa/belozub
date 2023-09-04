import React from "react";
import {Box, keyframes, Typography} from "@mui/material";
import Image from "next/image";
import aboutComposition from "../../../../public/image/about/about-composition.png";
import circularSlogan from "../../../../public/image/about/circular-text.png";

export default function Greeting(): React.ReactElement {
  const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          lg: "row"
        },
        gap: "46px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          // gap: { sm: "30px", lg: 0 },
          // mt: "40px",
          flex: { lg: "1 0", xl: "1.2 0" },
          justifyContent: "space-evenly",
          // alignItems: "space-between"
        }}
      >
        <Typography variant="p1">
          Любимое слово команды Belozub Clinic - “Эмпатия”, ведь помимо профессионализма и высокого уровня сервиса мы всегда стремимся окружать пациента искренней заботой и вниманием, а также создавать атмосферу уюта и комфорта, чтобы вам было приятно находиться в нашей клинике.
        </Typography>
        <Typography variant="p1">
          Елена Анатольевна сформировала свою авторскую концепцию Face Integrate Smile, которая позволяет создать улыбку с учетом пропорций лица, золотого сечения и всех эстетических законов.
        </Typography>
        <Typography variant="p1">
          Улыбка - это визитная карточка человека, по которой оценивают состояние здоровья, привлекательность и молодость лица. Вот уже на протяжении 17 лет практики в области эстетической стоматологии мы помогаем нашим клиентам обрести здоровую, красивую и гармоничную улыбку, которая по-настоящему меняет жизнь.
        </Typography>
        <Typography variant="h4">
          Елена Белозуб
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          maxWidth: {
            sm: "500px",
            md: "auto",
          },
          alignSelf: "center",
          width: "100%",
          flex: { lg: "1 0", xl: "0.8 0" },
        }}
      >
        <Image
          alt="Интерьер клиники белозуб"
          src={aboutComposition.src}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'max-content'
          }}
        />
        <Box
          sx={{
            animation: `${spin} 14s linear infinite`,
            top: "53%",
            left: "7%",
            position: "absolute",
            width: "35%",
            height: "max-content",
            maxWidth: "150px",
            maxHeight: "150px",
          }}
        >
          <Image
            alt="Круговой текст"
            src={circularSlogan.src}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '100%',
              height: "100%"
            }}
          />
        </Box>

      </Box>
    </Box>
  );
}