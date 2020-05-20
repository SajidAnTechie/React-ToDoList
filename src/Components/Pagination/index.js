import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationList = ({
  contactsPerPage,
  tottalContacts,
  paginate,
  currentPageNum,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(tottalContacts / contactsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="w-50 mt-5 mx-auto">
      <p>
        {" "}
        Pages : {currentPageNum} / {pageNumber.length}
      </p>

      <Pagination>
        {pageNumber.map((number) => {
          return (
            <Pagination.Item onClick={() => paginate(number)} key={number}>
              {number}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};

export default PaginationList;
