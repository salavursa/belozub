import React, {Dispatch, SetStateAction} from "react";
import {Button, Typography, ToggleButton, Box} from "@mui/material";
import Link from "next/link";
import smileSvg from "../../../public/icon/brandings/svg-header-toggle.svg";
import smileSvgActiveLeft from "../../../public/icon/brandings/svg-header-toggle-active-left.svg";
import smileSvgActiveRight from "../../../public/icon/brandings/svg-header-toggle-active-right.svg";
import Image from "next/image";

export default function MobileMenuButton({ toggled, toggle }: { toggled: boolean, toggle: Dispatch<SetStateAction<boolean>> }): React.ReactElement {
  return (
    <ToggleButton
      sx={{
        overflow: "hidden",
        width: "60px",
        height: "60px",
        // backgroundColor: theme => theme.colors.GRAY,
        transition: theme => theme.constants.transitions.default,
        border: "none",
        borderRadius: 0,
        textTransform: "unset",
        color: theme => theme.colors.DARK,
        "&:hover": {
          backgroundColor: theme => theme.colors.DARK2
        }
      }}
      onClick={() => toggle(prev => !prev)}
      value={toggle}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        <Image
          src={smileSvgActiveLeft}
          style={{
            transition: ".3s all",
            width: "25px",
            height: "50px",
            transform: toggled ? "translateX(20.5px)" : "translateX(0px)"
          }}
          alt="Belozub mini icon"
        />
        <Image
          src={smileSvg}
          style={{
            transition: ".1s all",
            width: "55px",
            height: "50px",
            opacity: toggled ? 0 : 1,
          }}
          alt="Belozub mini icon"
        />
        <Image
          src={smileSvgActiveRight}
          style={{
            transition: ".3s all",
            width: "25px",
            height: "50px",
            transform: toggled ? "translateX(-20.5px)" : "translateX(0px)"
          }}
          alt="Belozub mini icon"
        />
      </Box>
    </ToggleButton>
  )
}