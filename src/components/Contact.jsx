import axios from "axios";
import { useState, useEffect } from "react";

export default function Contact() {
  const [data, setData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;

  const numOfTotalPage = Math.ceil(data.length / dataPerPage);
  const pages = [...Array(numOfTotalPage + 1).keys()].slice(1);

  const visibleData = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  const handlePrev = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage !== numOfTotalPage) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <h2>Pagination Implemented</h2>

      <div style={{ padding: "16px" }}>
        {visibleData.map((d) => (
          <p key={d.id}>
            {d.id}. {d.title.slice(0, 30)}
          </p>
        ))}

        <ul className="pagination">
          <span
            className={`page-link ${currentPage === 1 && "disabled"}`}
            onClick={handlePrev}
          >
            Prev
          </span>
          {pages.map((p, i) => (
            <li key={i} className="page-link" onClick={() => setCurrentPage(p)}>
              {p}
            </li>
          ))}

          <span
            className={`page-link ${
              currentPage === numOfTotalPage && "disabled"
            }`}
            onClick={handleNext}
          >
            Next
          </span>
        </ul>
      </div>
    </>
  );
}
