import React, { useState } from "react";
import "./ProductTable.css";

type Product = {
  srNo: number;
  productName: string;
  therapeuticAction: string;
  line: string;
  activePrinciple: string;
};

const ProductTable: React.FC<{ data: Product[] }> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Product Name</th>
            <th>Therapeutic Action</th>
            <th>Line</th>
            <th>Active Principle</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((product) => (
            <tr key={product.srNo}>
              <td>{product.srNo}</td>
              <td>{product.productName}</td>
              <td>{product.therapeuticAction}</td>
              <td>{product.line}</td>
              <td>{product.activePrinciple}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <p>
        Showing {itemsPerPage * (currentPage - 1) + 1} to{" "}
        {Math.min(itemsPerPage * currentPage, data.length)} of {data.length}{" "}
        entries
      </p>
    </div>
  );
};

export default ProductTable;
