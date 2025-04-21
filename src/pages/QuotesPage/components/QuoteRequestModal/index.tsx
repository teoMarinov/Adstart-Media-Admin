import React from "react";
import { Modal, Box, Typography, Button, Divider } from "@mui/material";
import { QuoteRequestFull } from "../../types";

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
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          maxWidth: '90dvw',
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 1,
          border: `#D9DBE9`
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#4A3AFF", textAlign: "center" }}
        >
          Quote Request Details
        </Typography>
        <Typography variant="subtitle2" gutterBottom color="textSecondary">
          Created At: {new Date(data.createdAt).toLocaleString()}
        </Typography>
        <Divider sx={{ mb: 1, borderColor: "#D9DBE9" }} />{" "}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Price Range:</strong> {data.priceRange}
        </Typography>
        <Divider sx={{ my: 1, borderColor: "#D9DBE9" }} />{" "}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Service:</strong> {data.service}
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Full Name:</strong> {data.fullname}
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Email:</strong> {data.email}
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Phone Number:</strong> {data.phoneNumber}
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Company:</strong> {data.company}
        </Typography>
        <Box mt={2} textAlign="right">
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: "#4A3AFF",
              borderRadius: "20px",
              textTransform: "none",
              px: 3,
              "&:hover": { backgroundColor: "#3a2ed8" },
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
