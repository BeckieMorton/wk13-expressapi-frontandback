import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const IataCode = () => {
  const { code } = useParams(null);
  const myBackendIataAPI = `https://project-express-api-hcmb.onrender.com/airports/iata/${code}`;

  const [airport, setAirport] = useState({});

  useEffect(() => {
    const fetchIataDetails = async () => {
      try {
        const response = await fetch(myBackendIataAPI);
        if (!response.ok) {
          throw new Error("Network Response Error");
        }
        const json = await response.json();
        setAirport(json);
        console.log("Updated airport state:", airport);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchIataDetails();
  }, [code]);

  console.log(`this is in airport SHOULD BE ONE AIRPORT:`, airport);
  console.log(`this is in code in the iatacode.jsx:`, code);

  const airportName = airport.name;
  const airportCode = airport.iata_code;
  const airportType = airport.type;
  const airportContinent = airport.continent;
  const airportCountry = airport.iso_country;
  const municipality = airport.municipality;

  return (
    <>
      <div>
        <h1>{airportName}</h1>
        <h2>Code: {airportCode}</h2>
        <h2>Type: {airportType}</h2>
        <h2>Continent: {airportContinent}</h2>
        <h2>Country: {airportCountry}</h2>
        <h2>Municipality: {municipality}</h2>
      </div>
    </>
  );
};
