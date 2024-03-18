import {FlightProps} from '../../types';

export const sortFlightsByPrice = (flights: FlightProps[], sortBy: string) => {
  return [...flights].sort((a: any, b: any) => {
    if (sortBy === 'priceLowToHigh') {
      return a?.price - b?.price;
    } else {
      return b?.price - a?.price;
    }
  });
};

export const filterFlightsByAirline = (
  flights: FlightProps[],
  query: string,
) => {
  return flights.filter(
    flight =>
      flight?.airline?.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );
};
