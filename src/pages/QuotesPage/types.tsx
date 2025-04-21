export interface QuoteRequest {
  id: number;
  service: string;
  priceRange: string;
  createdAt: string;
  company: string;
}

export interface QuoteRequestFull extends QuoteRequest {
  email: string;
  phoneNumber: string;
  fullname: string;
}

export enum QuoteRequestPriceRange {
  LOW = "$5.000-$10.000",
  MEDIUM = "$10.000-$20.000",
  HIGH = "$20.000-$50.000",
  HIGHEST = "$50.000+",
}
