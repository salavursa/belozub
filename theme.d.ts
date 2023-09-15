import {
  Theme,
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions
} from "@mui/material/styles";
import React from "react";

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
    duration: React.CSSProperties["transitionDuration"];
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
    headerUpLink: React.CSSProperties;
    headerDownLink: React.CSSProperties;
    a: React.CSSProperties;
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    h6: React.CSSProperties;
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
    p4: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headerUpLink: React.CSSProperties;
    headerDownLink: React.CSSProperties;
    a: React.CSSProperties;
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    h6: React.CSSProperties;
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
    p4: React.CSSProperties;
  }

  export function createTheme(options?: ThemeOptions): Theme;
  export function useTheme(options?: ThemeOptions): Theme;
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headerUpLink: true;
    headerDownLink: true;
    a: true;
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    p1: true;
    p2: true;
    p3: true;
    p4: true;
  }
}