import React from "react";
import { Paper, Typography } from "@mui/material";
import { QuoteRequest, QuoteRequestPriceRange } from "../../types";

type QuoteRequestCardProps = Omit<QuoteRequest, "id">;

const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({
  service,
  priceRange,
  createdAt,
  company,
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
        cursor: "pointer",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#4A3AFF",
          fontWeight: "600",
          mb: 1,
        }}
      >
        {service} - {company}
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
