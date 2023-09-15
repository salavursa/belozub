import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import Image from "next/image";
import phoneSvg from "../../../../public/icon/phone.svg";
import mapSvg from "../../../../public/icon/map.svg";
import clockSvg from "../../../../public/icon/clock.svg";
import StyledLink from "@/components/elements/StyledLink";

export default function ContactsInfo(): React.ReactElement {
  return (
    <Stack gap="10px">
      <Box display="flex" gap="10px" alignItems="center">
        <Image
          src={phoneSvg}
          style={{
            alignSelf: "end",
            width: "35px",
            height: "35px",
          }}
          alt="phone"
        />
        <Typography variant="h5" fontSize="20px" color={theme => theme.colors.LIGHT}>
          Телефон:
        </Typography>
        <StyledLink href="tel:+79219450135">
          <Typography sx={{ fontVariantNumeric: "lining-nums proportional-nums", fontWeight: "300" }} variant="a" color={theme => theme.colors.LIGHT} >
            +7 921 945-01-35
          </Typography>
        </StyledLink>
      </Box>
      <Box display="flex" gap="10px" alignItems="center">
        <Image
          src={mapSvg}
          style={{
            alignSelf: "end",
            width: "35px",
            height: "35px",
          }}
          alt="phone"
        />
        <Typography variant="h5" fontSize="20px" color={theme => theme.colors.LIGHT}>
          Адрес:
        </Typography>
        <StyledLink href="https://yandex.ru/maps/org/belozub_clinic/156978678052/?ll=30.156907%2C59.851857&z=15.47">
          <Typography sx={{ fontVariantNumeric: "lining-nums proportional-nums", fontWeight: "300" }} variant="a" color={theme => theme.colors.LIGHT} >
            Ул. Катерников 7
          </Typography>
        </StyledLink>
      </Box>
      <Box display="flex" gap="10px" alignItems="center">
        <Image
          src={clockSvg}
          style={{
            alignSelf: "end",
            width: "35px",
            height: "35px",
          }}
          alt="phone"
        />
        <Typography variant="h5" fontSize="20px" color={theme => theme.colors.LIGHT}>
          Часы работы:
        </Typography>
        <Typography sx={{ fontWeight: "300" }} variant="a" color={theme => theme.colors.LIGHT} >
          Пн-Сб 9-20
        </Typography>
      </Box>
    </Stack>
  )
}