import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function Home() {
  const [data, setData] = useState([]);
  console.log(data);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);
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
        previousLabel="<"
        nextLabel=">"
        onPageChange={handlePageClick}
      />
    </div>
  );
}
