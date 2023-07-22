import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function Home() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <div className="mx-4">
        {currentItems.map(
          (
            d // Fix: Use 'currentItems' instead of 'items'
          ) => (
            <div key={d.id}>
              <h3>
                {d.id}. {d.title}
              </h3>
            </div>
          )
        )}
        <ReactPaginate
          breakLabel="..."
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          breakLinkClassName={"page-link"}
          pageClassName={"page-link"}
          previousClassName={"page-link"}
          nextClassName={"page-link"}
          containerClassName={"pagination"}
        />
      </div>
    );
  }

  return <PaginatedItems itemsPerPage={5} />;
}
