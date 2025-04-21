import React, { useState } from "react";
import { Container, Typography, Box, CircularProgress, Pagination } from "@mui/material";
import useQuoteRequest from "./hook";
import QuoteRequestCard from "./components/QuoteRequestCard";
import QuoteRequestModal from "./components/QuoteRequestModal";
import { QuoteRequestFull } from "./types";

const QuotesPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const { quoteRequests, loading, totalPages } = useQuoteRequest(page);
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

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.main", textAlign: "center" }}
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

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      <QuoteRequestModal
        open={isModalOpen}
        onClose={handleCloseModal}
        data={selectedQuote}
      />
    </Container>
  );
};

export default QuotesPage;
