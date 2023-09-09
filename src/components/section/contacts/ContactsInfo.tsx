import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import Image from "next/image";
import phoneSvg from "../../../../public/icon/phone.svg";
import Link from "next/link";
import mapSvg from "../../../../public/icon/map.svg";
import clockSvg from "../../../../public/icon/clock.svg";

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
        <Link style={{ textDecoration: "none" }} href="phone:${+7 921 945-01-35}">
          <Typography sx={{ fontVariantNumeric: "lining-nums proportional-nums", fontWeight: "300" }} variant="a" color={theme => theme.colors.LIGHT} >
            +7 921 945-01-35
          </Typography>
        </Link>
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
        <Link style={{ textDecoration: "none" }} href="phone:${+7 921 945-01-35}">
          <Typography sx={{ fontVariantNumeric: "lining-nums proportional-nums", fontWeight: "300" }} variant="a" color={theme => theme.colors.LIGHT} >
            Ул. Катерников 7
          </Typography>
        </Link>
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
        <Link style={{ textDecoration: "none" }} href="phone:${+7 921 945-01-35}">
          <Typography sx={{ fontWeight: "300" }} variant="a" color={theme => theme.colors.LIGHT} >

          </Typography>
        </Link>
      </Box>
    </Stack>
  )
}