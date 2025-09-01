import { useState, useEffect } from "react";

function useCurrencyRates(currency = "USD") {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setRates(res.rates || {});
      })
      .catch((err) => {
        console.error("Error fetching rates:", err);
      });
  }, [currency]);

  return rates ;
}

export default useCurrencyRates;
