import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useQuery } from "react-query";
import React from 'react';
import Spinner from '../../components/spinner';
import ProductionCompanies from "../../dataStore/production-companies.json"
import { getProduction } from "../../api/tmdb-api";

const AddProduction = ({ onAction }) => {
  

  const prodCompNames = ProductionCompanies.map((prodComp) => prodComp.name);
  console.log("prodCompNames", prodCompNames);

  const handleProdSelection = (prodName) => {
    const prodObject = ProductionCompanies.filter((o) => o.name === prodName);
    
    getProduction(prodObject[0].id)
    .then((prod) => {
      const data = {
        type: "production",
        value: {
          name: prod.name,
          logo_path: prod.logo_path,
          id: prod.id,         
        }
      }
      onAction(data);
    })
    .catch((error) => {
      console.error("Error retrieving production:", error);
    });
  }

  return (
    <Autocomplete
      disablePortal
      id="prod-comp-auto"
      options={prodCompNames}
      sx={{ width: 300 }}
      onChange={(e) => {
        console.log("Selected Value:", e.target.innerText);
        handleProdSelection(e.target.innerText);
      }}
      renderInput={(params) => <TextField {...params} label="Productions" />}
    />
  );
};

export default AddProduction;