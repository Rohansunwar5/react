import { useEffect, useState } from "react";
// useeffect is used whenever a dependency array lifecycle is triggered
const useCurrencyInfo = (currency) => {
  const [data, SetData] = useState({})
  useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
     .then((response) => (
      response.json())
      )
      .then((response) => SetData(response[currency])) // instead of dot 
    }, [currency]) // whenever the currency is changed the function calls itself 
    console.log(data);
    return data
}

export default useCurrencyInfo;