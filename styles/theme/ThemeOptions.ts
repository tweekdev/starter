import { createTheme } from "@mui/material/styles";

const ThemeOptions = createTheme(
    {
      palette: {
        primary: {
          light: "#EDF1F7",
          main: "#003290",
          dark: "#001C52",
        },
        secondary: {
          light: "#FFFDEB",
          main: "#FDEC3C",
          dark: "#E0C61B",
        },
      },
      typography: {
          allVariants: {
              fontFamily: 'Poppins, sans-serif'
          }
      }
    },
    // accordionTheme,
    // buttonTheme,
    // cardTheme,
    // textFieldTheme,
    // linkTheme,
    // typographyTheme
  )

export default ThemeOptions;
