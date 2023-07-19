import React from "react";
import ProductionCard from "../cards/productionCard";
import CardRow from "../cardRow";

const styles = {
  text: {
    fontFamily: 'sans-serif'
  }
};

const ProductionCompaniesRow = ({companies}) => {
  let prodCards = [];

  if (companies) {
    prodCards = companies.map((company) => (
      <ProductionCard key={company.id} company={company} />
    ))
  }

  return (
    <>
      <br/>
      <h3 style={styles.text}>Production companies</h3>
      <CardRow>
        {prodCards}
      </CardRow>
    </>

  )
};
export default ProductionCompaniesRow;