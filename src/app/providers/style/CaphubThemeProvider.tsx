import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles/index.js";
import caphubTheme from "../../../content/style/caphubTheme.js";

interface CaphubThemeProviderProps {
  children: ReactNode;
}

const CaphubThemeProvider: FC<CaphubThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={caphubTheme}>{children}</ThemeProvider>;
};

export default CaphubThemeProvider;
