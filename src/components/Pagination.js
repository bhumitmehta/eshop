// Pagination.js

import React from "react";
import { useGlobalContext } from "./context";
import Button from "./Button";
const Pagination = () => {
  const { currentPage, getNextPage, getPrevPage } = useGlobalContext();

  return (
    <div className="pagination">
      <Button onClick={getPrevPage} disabled={currentPage === 1} text="Prev"/>
     
      <span>Page {currentPage}</span>
      <Button onClick={getNextPage} disabled={currentPage === 4}text="Next" />
    </div>
  );
};

export default Pagination;
