
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
      elevation={3}
      sx={{ padding: "16px", display: "flex", flexDirection: "column" }}
    >
      <Typography variant="h6">{service}</Typography>
      <Typography variant="body1">
        <strong>Price Range:</strong>{" "}
        {QuoteRequestPriceRange[
          priceRange as keyof typeof QuoteRequestPriceRange
        ] || priceRange}
      </Typography>
      <Typography variant="body2">
        <strong>Created At:</strong> {new Date(createdAt).toLocaleString()}
      </Typography>
    </Paper>
  );
};

export default QuoteRequestCard;
