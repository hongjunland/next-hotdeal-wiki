import { createTheme } from "@mui/material/styles";

const typograph = {
  h1: {
    fontSize: "2.25rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  h2: {
    fontSize: "1.75rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
  },
  h4: {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  h5: {
    fontSize: "1rem",
    fontWeight: 600,
    marginBottom: "0.25rem",
  },
  h6: {
    fontSize: "0.875rem",
    fontWeight: 600,
    marginBottom: "0.25rem",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
    marginBottom: "1rem",
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    marginBottom: "1rem",
  },
};

const palette = {
  primary: {
    main: "rgba(245, 0, 87, 0.87)",
  },
  secondary: {
    main: "rgba(96, 144, 192, 0.87)",
  },
  
  completed: {
    main: "rgba(0, 0, 0, 0.40)",
  },
  success: {
    main: "#4caf50",
  },
  error: {
    main: "#f44336",
  },
  warning: {
    main: "#ff9800",
  },
  info: {
    main: "#2196f3",
  },
};

const theme = createTheme({
  typography: typograph,
  palette: palette,
});

export default theme;
