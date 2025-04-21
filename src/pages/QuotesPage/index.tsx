import React from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import useQuoteRequest from "./hook";
import QuoteRequestCard from "./components/QuoteRequestCard";

const QuotesPage: React.FC = () => {
  const { quoteRequests, loading } = useQuoteRequest();

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#4A3AFF", textAlign: "center" }}
      >
        Project Quote Requests
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          {quoteRequests.map((quoteRequest) => (
            <Box key={quoteRequest.id}>
              <QuoteRequestCard
                service={quoteRequest.service}
                priceRange={quoteRequest.priceRange}
                createdAt={quoteRequest.createdAt}
              />
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default QuotesPage;
