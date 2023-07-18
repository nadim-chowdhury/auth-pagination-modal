import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [rData, setrData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setrData(res.data));
  }, []);

  return (
    <>
      {rData.map((d) => (
        <div key={d.id} class="user">
          <h3>{d.name}</h3>
          <p>{d.email}</p>
        </div>
      ))}
    </>
  );
}
