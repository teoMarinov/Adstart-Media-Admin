import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes";
import Header from "./component/Header";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
