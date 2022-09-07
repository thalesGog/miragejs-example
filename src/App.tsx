import { useCallback, useEffect, useState } from "react";
import { API_BASE_URL } from "./constants";

import Details from "./Details";

import "./index.css";

export default function App() {
  const [quotes, setQuotes] = useState<{ _id: string; author: string }[]>([]);

  const [quoteDetails, setQuoteDetails] = useState<{
    _id: string;
    content: string;
    authorSlug: string;
    tags: string[];
  }>();

  const [loading, setLoading] = useState(false);

  const getQuotes = useCallback(async () => {
    const response = await fetch(`${API_BASE_URL}/quotes`);
    const data = await response.json();
    setQuotes(data.results);
  }, []);

  const getQuoteById = async (id: string) => {
    setLoading(true);
    const response = await fetch(`${API_BASE_URL}/quotes/${id}`);
    const data = await response.json();
    setQuoteDetails(data);
    setLoading(false);
  };

  useEffect(() => {
    getQuotes();
  }, [getQuotes]);

  return (
    <div>
      <h1>Quotes List</h1>
      <ul>
        {quotes.map((quote) => (
          <li
            className="author"
            key={quote._id}
            onClick={() => getQuoteById(quote._id)}
          >
            {quote.author}
          </li>
        ))}
      </ul>
      <hr />
      {quoteDetails && <Details details={quoteDetails} loading={loading} />}
    </div>
  );
}
