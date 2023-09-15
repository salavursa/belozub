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
        transitionProperty: "backgroundColor",
        transitionDuration: theme => theme.constants.transitions.duration,
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
          priority
          style={{
            transition: "transform .3s",
            width: "25px",
            height: "50px",
            transform: toggled ? "translateX(20.5px)" : "translateX(0px)"
          }}
          alt="Belozub mini icon"
        />
        <Image
          src={smileSvg}
          priority
          style={{
            transition: "opacity .1s",
            width: "55px",
            height: "50px",
            opacity: toggled ? 0 : 1,
          }}
          alt="Belozub mini icon"
        />
        <Image
          src={smileSvgActiveRight}
          priority
          style={{
            transition: "transform .3s",
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