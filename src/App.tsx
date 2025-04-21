import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes";
import Header from "./component/Header";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
