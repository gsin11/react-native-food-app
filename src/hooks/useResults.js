import React, { useState, useEffect } from "react";
import server from "../api/server";

export default function useResults() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await server.get("data.json");
      setResults(response.data);
    } catch (error) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
}
