// src/pages/QuotesPage/index.tsx

import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material";
import useQuoteRequest from "./hook";
import QuoteRequestCard from "./components/QuoteRequestCard";

const QuotesPage: React.FC = () => {
  const { quoteRequests, loading } = useQuoteRequest();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Quote Requests
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {quoteRequests.map((quoteRequest) => (
            <Grid
              key={quoteRequest.id}
              component="div"  // Ensure 'component' is set
            >
              <QuoteRequestCard
                service={quoteRequest.service}
                priceRange={quoteRequest.priceRange}
                createdAt={quoteRequest.createdAt}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default QuotesPage;
