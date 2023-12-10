import React, { useEffect, useState } from "react";

const ShowData = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res?.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data && <div data-testid="title">{data?.title}</div>}
      <button>Hello</button>
    </div>
  );
};

export default ShowData;
