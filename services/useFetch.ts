import { useEffect, useState } from "react";
import { fetchMovies } from "./api";

interface PaginatedData {
  results: any[];
  page: number;
  total_pages: number;
  total_results: number;
}

const useFetch = <T>(initialQuery?: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  //Pagination states
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState(initialQuery || "");

  const loadData = async (pageNumber: number, currentQuery: string) => {
    if (loading || (pageNumber > 1 && pageNumber > totalPages)) return;

    setLoading(true);
    setError(null);
    try {
      const response: PaginatedData = await fetchMovies({
        page: pageNumber,
        query: currentQuery,
      });
      setTotalPages(response.total_pages);
      setData(
        (prevData) =>
          pageNumber === 1
            ? (response.results as T[]) // Replace data for new search/initial load
            : [...prevData, ...(response.results as T[])] // Append new pages
      );
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    loadData(1, query);
  }, [query]);

  const loadNextPage = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      setPage(nextPage);
      loadData(nextPage, query);
    }
  };

  return {
    data,
    loading,
    error,
    setQuery,
    loadNextPage,
    refetch: () => loadData(1, query),
    canLoadMore: page < totalPages,
  };
};

export default useFetch;
