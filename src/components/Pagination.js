import React, { useEffect, useState } from "react";
import "./Pagination.css";
import { useGlobalContext } from "./context";
import Button from "./Button";

const Pagination = () => {
  const { currentPage, getNextPage, getPrevPage } = useGlobalContext();
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Adjust the threshold as needed
    setIsAtBottom(scrollY + windowHeight >= documentHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`pagination ${isAtBottom ? "visible" : ""}`}>
      <Button onClick={getPrevPage} disabled={currentPage === 1} text="Prev" />
      <span>Page {currentPage}</span>
      <Button onClick={getNextPage} disabled={currentPage === 4} text="Next" />
    </div>
  );
};

export default Pagination;
