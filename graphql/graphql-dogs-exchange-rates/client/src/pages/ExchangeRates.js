import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const EXCHANGE_RATES = gql`
  query getRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (error) return `Error! ${error}`;

  return (
    <div>
      <h1>Exchange Rates</h1>
      {loading && <p>Loading...</p>}
      {!loading && data.rates.map(({ currency, rate, name }) => (
        <p key={currency}>
          {name} ({currency}): {rate}
        </p>
      ))}
    </div>
  );
}

export default ExchangeRates;
