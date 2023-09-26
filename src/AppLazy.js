import React, { useState, useEffect, lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
// import ListItem from "./ListItem";

const useFetch = (url) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((list) => setList(list));
  }, [url]);

  return [list];
};

const RenderList = lazy(() => import("./ListItem"));

export default function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/photos");

  return (
    <>
      <LazyLoad height={900}>
        <Suspense fallback={<div>Loading...</div>}>
          <ul>
            <RenderList data={data} />
          </ul>
        </Suspense>
      </LazyLoad>
    </>
  );
}
