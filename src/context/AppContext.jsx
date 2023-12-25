import { useState } from "react";
import { createContext } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    const url = `${baseUrl}?page=${page}`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (e) {
      console.log("Phatt Gaya ", e);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  const value = {
    loading,
    posts,
    page,
    totalPages,
    setLoading,
    setPage,
    setPosts,
    setTotalPages,
    handlePageChange,
    fetchBlogPosts,
  };
  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
