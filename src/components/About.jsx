import axios from "axios";
import { useEffect, useState } from "react";

export default function About() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / dataPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <h2>This is About Page</h2>

      {records.map((d) => (
        <div key={d.id}>
          <h3>
            <span>{d.id}</span> &nbsp;
            {d.title.slice(10, 40)}
          </h3>
        </div>
      ))}

      <ul className="pagination">
        <li className="page-item" onClick={prevPage}>
          <a href="#" className="page-link">
            Prev
          </a>
        </li>

        {numbers.map((n, i) => (
          <li
            className={`page-item ${currentPage === n ? "active" : ""}`}
            key={i}
            onClick={() => changePage(n)}
          >
            <a href="#" className="page-link">
              {n}
            </a>
          </li>
        ))}

        <li className="page-item" onClick={nextPage}>
          <a href="#" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </>
  );
}
