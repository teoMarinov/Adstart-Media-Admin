import React from "react";
import { QuoteRequestFull } from "../../types";
import { Modal, Box, Typography, Button, Divider } from "@mui/material";

interface QuoteRequestModalProps {
  open: boolean;
  onClose: () => void;
  data: QuoteRequestFull | null;
}

const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  open,
  onClose,
  data,
}) => {
  if (!data) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          p: 3,
          top: "50%",
          left: "50%",
          width: 500,
          boxShadow: 24,
          borderRadius: 1,
          maxWidth: "90dvw",
          border: `divider`,
          position: "absolute",
          bgcolor: "background.paper",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textAlign: "center",
          }}
        >
          Quote Request Details
        </Typography>

        <Typography variant="subtitle2" gutterBottom color="textSecondary">
          Created At: {new Date(data.createdAt).toLocaleString()}
        </Typography>

        <Divider sx={{ mb: 1.5, borderColor: "divider" }} />

        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Price Range:</strong> {data.priceRange}
        </Typography>

        <Divider sx={{ my: 1.5, borderColor: "divider" }} />

        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Full Name:</strong> {data.fullname}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Service:</strong> {data.service}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Email:</strong> {data.email}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Phone Number:</strong> {data.phoneNumber}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Company:</strong> {data.company}
        </Typography>

        <Box mt={2} textAlign="right">
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "20px",
              textTransform: "none",
              px: 3,
              "&:hover": { backgroundColor: "primary.light" },
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default QuoteRequestModal;
