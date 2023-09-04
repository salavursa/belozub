import {
  Theme,
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions
} from "@mui/material/styles";
import React from "react";
import {TypographyOptions} from "@mui/material/styles/createTypography";

interface Colors {
  LIGHT: React.CSSProperties["color"],
  LIGHT2: React.CSSProperties["color"],
  PINK: React.CSSProperties["color"],
  DARK: React.CSSProperties["color"],
  DARK2: React.CSSProperties["color"],
  DARK3: React.CSSProperties["color"],
  GRAY: React.CSSProperties["color"]
}

interface Constants {
  transitions: {
    default: React.CSSProperties["transition"];
  },
  borders: {
    lightShadow: React.CSSProperties["boxShadow"];
    pinkShadow: React.CSSProperties["boxShadow"];
    radiusXS: React.CSSProperties["borderRadius"];
    radius: React.CSSProperties["borderRadius"];
  }
}

declare module "@mui/material/styles" {
  interface Theme extends MUITheme {
    name: string;
    colors: Colors;
    constants: Constants;
  }

  interface ThemeOptions extends MUIThemeOptions {
    name: string;
    colors: Colors;
    constants: Constants;
  }

  interface TypographyVariants {
    headerUpLink: TypographyOptions;
    headerDownLink: TypographyOptions;
    p1: TypographyOptions;
    p2: TypographyOptions;
    p3: TypographyOptions;
  }

  interface TypographyVariantsOptions {
    headerUpLink: TypographyOptions;
    headerDownLink: TypographyOptions;
    p1: TypographyOptions;
    p2: TypographyOptions;
    p3: TypographyOptions;
  }

  export function createTheme(options?: ThemeOptions): Theme;
  export function useTheme(options?: ThemeOptions): Theme;
}