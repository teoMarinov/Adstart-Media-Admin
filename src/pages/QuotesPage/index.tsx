import React, { useState } from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import useQuoteRequest from "./hook";
import QuoteRequestCard from "./components/QuoteRequestCard";
import QuoteRequestModal from "./components/QuoteRequestModal";
import { QuoteRequestFull } from "./types";

const QuotesPage: React.FC = () => {
  const { quoteRequests, loading } = useQuoteRequest();
  const [selectedQuote, setSelectedQuote] = useState<null | QuoteRequestFull>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (quoteRequest: QuoteRequestFull) => {
    setSelectedQuote(quoteRequest);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedQuote(null);
  };

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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          {quoteRequests.map((quoteRequest) => (
            <Box
              key={quoteRequest.id}
              onClick={() => handleCardClick(quoteRequest)}
            >
              <QuoteRequestCard
                company={quoteRequest.company}
                service={quoteRequest.service}
                priceRange={quoteRequest.priceRange}
                createdAt={quoteRequest.createdAt}
              />
            </Box>
          ))}
        </Box>
      )}

      <QuoteRequestModal
        open={isModalOpen}
        onClose={handleCloseModal}
        data={selectedQuote}
      />
    </Container>
  );
};

export default QuotesPage;
