import { useEffect, useState } from 'react';
import axiosInstance from '../../config/axios';
import { QuoteRequestFull } from './types';

const useQuoteRequest = () => {
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequestFull[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuoteRequests = async () => {
      try {
        const response = await axiosInstance.get('/quote-request');
        setQuoteRequests(response.data.data.content);
      } catch (error) {
        console.error('Error fetching quote requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuoteRequests();
  }, []);

  return { quoteRequests, loading };
};

export default useQuoteRequest;
