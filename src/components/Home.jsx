import { useEffect, useState } from "react";
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
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <div>
        {data.map((d) => (
          <div key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </div>
        ))}
        <ReactPaginate
          breakLabel="..."
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />
      </div>
    );
  }
}
