import React, { useState } from "react";
import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Container,
  Pagination,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Dayjs } from "dayjs";
import useQuoteRequest from "./hook";
import { QuoteRequestFull } from "./types";
import { DatePicker } from "@mui/x-date-pickers";
import QuoteRequestCard from "./components/QuoteRequestCard";
import QuoteRequestModal from "./components/QuoteRequestModal";
import { serviceOptions } from "./config";

const QuotesPage = () => {
  const [page, setPage] = useState(0);

  const [service, setService] = useState("");
  const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  const [toDate, settoDate] = useState<Dayjs | null>(null);

  const { quoteRequests, loading, totalPages } = useQuoteRequest({
    page,
    service: service || undefined,
    fromDate: fromDate ? fromDate.format("YYYY-MM-DD") : undefined,
    toDate: toDate ? toDate.format("YYYY-MM-DD") : undefined,
  });

  const [selectedQuote, setSelectedQuote] = useState<null | QuoteRequestFull>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (quoteRequest: QuoteRequestFull) => {
    setSelectedQuote(quoteRequest);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedQuote(null);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
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

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={3}>
          <TextField
            label="Service"
            select
            fullWidth
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {serviceOptions.map(({ title, value }) => (
              <MenuItem key={value} value={value}>
                {title}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid>
          <DatePicker
            label="From Date"
            value={fromDate}
            onChange={(date) => setFromDate(date)}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </Grid>

        <Grid>
          <DatePicker
            label="End Date"
            value={toDate}
            onChange={(date) => settoDate(date)}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </Grid>
      </Grid>

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
