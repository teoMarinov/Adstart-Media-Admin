import React from "react";
import { Paper, Typography } from "@mui/material";
import { QuoteRequestPriceRange } from "../../types";

interface QuoteRequestCardProps {
  service: string;
  priceRange: string;
  createdAt: string;
}

const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({
  service,
  priceRange,
  createdAt,
}) => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        backgroundColor: "white",
        mb: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: "#4A3AFF", fontWeight: "600", mb: 1 }}>
        {service}
      </Typography>
      <Typography variant="body1" sx={{ mb: 0.5 }}>
        <strong>Price Range:</strong>{" "}
        {QuoteRequestPriceRange[
          priceRange as keyof typeof QuoteRequestPriceRange
        ] || priceRange}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        <strong>Created At:</strong> {new Date(createdAt).toLocaleString()}
      </Typography>
    </Paper>
  );
};

export default QuoteRequestCard;
