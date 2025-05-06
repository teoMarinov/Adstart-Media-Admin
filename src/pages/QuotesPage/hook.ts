import { useEffect, useState } from "react";
import axiosInstance from "../../config/axios";
import { QuoteRequestFull, UseQuoteRequestOptions } from "./types";

const useQuoteRequest = ({
  page,
  service,
  fromDate,
  toDate,
}: UseQuoteRequestOptions) => {
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequestFull[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchQuoteRequests = async () => {
      setLoading(true);

      const params: Record<string, string | number> = { page };

      if (service) params.service = service;
      if (fromDate) params.fromDate = fromDate;
      if (toDate) params.toDate = toDate;

      try {
        const response = await axiosInstance.get("/quote-request", { params });
        setQuoteRequests(response.data.data.content);
        setTotalPages(response.data.data.totalPages);
      } catch (error) {
        console.error("Error fetching quote requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuoteRequests();
  }, [page, service, fromDate, toDate]);

  return { quoteRequests, loading, totalPages };
};

export default useQuoteRequest;
