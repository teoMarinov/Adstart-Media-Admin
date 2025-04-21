import { useEffect, useState } from 'react';
import axiosInstance from '../../config/axios';
import { QuoteRequestFull } from './types';

const useQuoteRequest = (page: number) => {
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequestFull[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchQuoteRequests = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/quote-request?page=${page}`);
        setQuoteRequests(response.data.data.content);
        setTotalPages(response.data.data.totalPages);
      } catch (error) {
        console.error('Error fetching quote requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuoteRequests();
  }, [page]);

  return { quoteRequests, loading, totalPages };
};

export default useQuoteRequest;
