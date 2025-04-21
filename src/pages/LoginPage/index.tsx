import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const { user, logout, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await login(values);
        navigate("/quotes");
      } catch (error: unknown) {
        console.error("Login failed:", error);
        setErrors({ username: "Invalid credentials" });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Welcome back
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Please log in to your account
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "20px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h6" fontWeight="medium" mb={2}>
            Login details
          </Typography>

          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            sx={{ mb: 4 }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "16px",
              p: 1.5,
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
