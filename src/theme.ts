import { Raleway } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const COLORS = {
  LIGHT: "#F4F4F4",
  LIGHT2: "#D9D9D9",
  PINK: "#E3AA9A",
  DARK: "#38383A",
  DARK2: "#2A2929",
  DARK3: "#1A171B",
  GRAY: "#858384"
};

const CONSTANTS = {
  transitions: {
    default: ".3s all"
  },
  sizes: {
    button: {
      height: "50px"
    }
  },
  borders: {
    lightShadow: "1px 1px 10px 5px #D9D9D9, 1px 1px 10px 5px #D9D9D9 inset",
    pinkShadow: "1px 1px 10px 5px #E3AA9A, 1px 1px 10px 5px #E3AA9A inset",
    radiusXS: "7px",
    radius: "10px",
  }
};

export const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const intermediateTheme = createTheme();

// Create a theme instance.
const theme = createTheme({
  name: "colored",
  colors: COLORS,
  constants: CONSTANTS,
  typography: {
    fontFamily: `${raleway.style.fontFamily}`,

    allVariants: {
      fontStyle: "normal",
      lineHeight: "normal",
      fontVariant: "tabular-mums",
      fontVariantNumeric: "lining-nums proportional-nums",

      color: COLORS.DARK,
    },

    headerUpLink: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "17px",
      fontStyle: "normal",
      fontWeight: 200,
      lineHeight: "normal",
      letterSpacing: "0.85px",
      color: COLORS.DARK,
    },

    headerDownLink: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "17px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "0.85px",
      color: COLORS.DARK,
    },

    h1: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "73px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "88.9%",
      letterSpacing: "0.03em",
      color: COLORS.DARK,
      [intermediateTheme.breakpoints.between("lg", "xl")]: {
        fontSize: "60px",
      },
      [intermediateTheme.breakpoints.between("sm", "lg")]: {
        fontSize: "65px",
      },
      [intermediateTheme.breakpoints.down("sm")]: {
        fontSize: "45px",
      },
    },

    h2: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "47px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "88.9%",
      color: COLORS.DARK,
    },

    h3: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "33px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "88.9%",
      color: COLORS.DARK,
    },

    h4: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "21px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "88.9%",
      color: COLORS.DARK,
    },

    h5: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "88.9%",
      color: COLORS.DARK,
    },

    h6: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "100%",
      color: COLORS.DARK,
    },

    p1: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "21px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "25px",
      letterSpacing: "0.05em",
      color: COLORS.DARK,
      [intermediateTheme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
    },

    p2: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "0.05em",
      color: COLORS.DARK,
      [intermediateTheme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },

    p3: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "15px",
      letterSpacing: "0.05em",
      color: COLORS.DARK,
      [intermediateTheme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
    },

    p4: {
      fontFamily: `${raleway.style.fontFamily}`,
      fontVariant: "tabular-mums",
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "15px",
      letterSpacing: "0.05em",
      color: COLORS.DARK,
      [intermediateTheme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
    },

    a: {
      textUnderlineOffset: "5px",
      textDecoration: "underline",
      transition: CONSTANTS.transitions.default,
      color: COLORS.LIGHT,
      [intermediateTheme.breakpoints.down("sm")]: {
        textUnderlineOffset: "2px",
      },
      // "&:hover": {
      //   color: COLORS.PINK,
      // }
    }
  },
  components: {
    // MuiInputBase: {
    //   styleOverrides: {
    //     input: {
    //       // color: COLORS.LIGHT,
    //       transition: CONSTANTS.transitions.default,
    //       height: "17px",
    //       padding: "16.5px 14px"
    //     },
    //   },
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          transition: CONSTANTS.transitions.default,
          height: "17px",
          padding: "16.5px 14px",
          "& textarea": {
            p: "0 !important"
          }
        },
        inputMultiline: {
          padding: 0,
        },
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          minWidth: "32px",
          minHeight: "0px"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid",
          borderRadius: "1rem",
          transition: CONSTANTS.transitions.default,
          height: CONSTANTS.sizes.button.height,
          borderColor: COLORS.PINK,
          backgroundColor: COLORS.PINK,
          color: COLORS.DARK2,
          minWidth: 0,
          padding: "15px 30px",
          "&:hover": {
            color: COLORS.PINK,
            backgroundColor: "transparent",
            "& img": {
              color: COLORS.PINK,
            }
          },
          "& img": {
            color: COLORS.DARK2,
            transition: CONSTANTS.transitions.default,
          },
          "&:disabled": {
            color: COLORS.DARK,
            "& img": {
              color: COLORS.DARK,
            }
          }
        }
      }
    }
  }
});

export default theme;
