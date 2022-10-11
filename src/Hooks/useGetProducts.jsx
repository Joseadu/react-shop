import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetProducts(API) {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API);
      setProducts(response.data);
    }
    fetchData();
  });

  return products;
}