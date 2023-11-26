import { useEffect, useState } from "react";
import { getCurrency } from "./../../api/CurrencyReq";
// import Currency from './../../types/Currency';

// interface CurrencyRates<T extends string> {
//   date: string;
//   rates: Record<T, number>;
// }

// function getExchangeRate<T extends string>(
//   data: CurrencyRates<T>,
//   currencyCode: T
// ): number | undefined {
//   return data.rates[currencyCode];
// }

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState({});
  useEffect(() => {
    // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    // .then((res) => res.json())
    // .then((res) => setData(res[currency]))
    // console.log("currency: ", currency);
    new Promise(() => {
      getCurrency(currency)
        .then((response) => {
          if (response) setData(response.data[currency]);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    });
    // console.log("data: ", data);
  }, [currency]);
  console.log("data: ", data);
  return data;
}

export default useCurrencyInfo;
