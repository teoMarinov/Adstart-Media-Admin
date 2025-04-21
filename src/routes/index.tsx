import React, { JSX } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginPage from "../pages/LoginPage";
import QuotesPage from "../pages/QuotesPage";

// PrivateRoute wrapper
const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

// Routes component
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth" element={<LoginPage />} />
      <Route
        path="/quotes"
        element={
          <PrivateRoute>
            <QuotesPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};

export default AppRoutes;
