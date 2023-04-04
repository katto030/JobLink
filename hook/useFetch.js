import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from '@env';

const rapidApiKey = rapidApiKey;

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
};

const options = {
  method: "GET",
  url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
  params: {
    query: "Python developer in Texas, USA",
    page: "1",
    num_pages: "1",
  },
  headers: {
    "X-RapidAPI-Key": PROCESS,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};