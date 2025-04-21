import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        boxShadow: "none",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo and brand */}
        <Box display="flex" alignItems="center" sx={{ userSelect: "none" }}>
          <img
            src="/site-icon.svg"
            alt="logo"
            style={{ height: "28px", marginRight: "10px" }}
          />
          <Typography variant="h6" component="div">
            <span style={{ color: "black", fontWeight: "600" }}>brix </span>
            <Box
              component={"span"}
              sx={{
                display: "inline",
                color: "primary.main",
                fontWeight: "600",
              }}
            >
              Admin
            </Box>
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={logout}
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "20px",
            textTransform: "none",
            px: 3,
            "&:hover": { backgroundColor: "primary.light" },
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
