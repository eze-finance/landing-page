import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "#4a4747",
        // backgroundClip: "padding-box, border-box",
        // backgroundOrigin: "padding-box, border-box",
        // backgroundImage:
        //   "linear-gradient(#000, #000), linear-gradient(#2599fa, #c4a51d)",
      },
      input: {
        "&:-webkit-autofill": {
          "-webkit-box-shadow": "0 0 0 100px #000 inset",
          "-webkit-text-fill-color": "#fff",
        },
      },
      root: {
        boxSizing: " border-box",
        border: " 2px solid transparent",

        borderRadius: "5px",
        fontSize: "16px",
        transition: "0.5s",
        height: "46px",
        fontWeight: "700",
        "&:hover": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4a4747",
          },
        },
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4a4747",
          },
        },
      },
    },

    MuiTableCell: {
      root: {
        borderBottom: "0",
        fontSize: "13px",
        padding: "7px 15px",

      },
      body: { color: "#a19d9d", },
      head: {
        color: "#c4a51d",
        backgroundColor: "#29292a",
        padding: "9px 15px",
      },
    },
    MuiTableRow: {
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: "#141414",
        },
      },
    },
    MuiPaper: {
      elevation8: {
        backgroundColor: "#000",
      },
    },
    MuiAppBar: {
      positionFixed: {
        backgroundColor: "#272a30",
      },
      positionAbsolute: {
        top: "10",
        left: "auto",
        right: "0",
        position: "absolute",
      },
    },
    MuiButton: {
      containedSizeSmall: {
        padding: "4px 35px",
      },
      containedSecondary: {
        backgroundColor: "#efc437",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        color: "#000",
        minWidth: "85px",
        fontSize: "16px",
        transition: "0.5s",
        height: "42px",
        borderRadius: "4px",
        fontWeight: "700",
        boxSizing: " border-box",


        "@media (max-width:767px)": {
          fontSize: "12px !important",
          minWidth: "120px",
        },
        "&:hover": {
          backgroundColor: "#efc437",
          color: "#fff",
        },
      },
      containedPrimary: {
        backgroundColor: "#292109",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        color: "#f3c138",
        minWidth: "85px",
        fontSize: "16px",
        transition: "0.5s",
        height: "42px",
        borderRadius: "10px",
        fontWeight: "700",
        boxSizing: " border-box",


        "@media (max-width:767px)": {
          fontSize: "12px !important",
          minWidth: "120px",
        },
        "&:hover": {
          backgroundColor: "#efc437",
          color: "#fff",
        },
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "0",
      },
    },
  },
};

const themesOptions = {
  typography: {
    fontWeight: 400,
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    type: "light",
    action: {
      primary: "#20509e",
    },
    background: {
      default: "#FBFBFD",
      dark: "#f3f7f9",
      paper: colors.common.white,
    },
    primary: {
      main: "#fff",
      dark: "#c3c5d5",
      light: "#de0d0d",
    },
    secondary: {
      main: "#f3c23a",
    },
    warning: {
      main: "#ffae33",
      dark: "#ffae33",
      light: "#fff1dc",
    },
    success: {
      main: "#54e18c",
      dark: "#54e18c",
      light: "#e2faec",
    },
    error: {
      main: "#ff7d68",
      dark: "#ff7d68",
      light: "#ffe9e6",
    },
    text: {
      primary: "#52565c",
      secondary: "#999999",
    },
    common: {
      black: "#222222",
    },
  },
};

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
