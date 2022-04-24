import { useEffect, useState } from "react";

export default function Pagination(props) {
  const { total, currentPage, click } = props;
  const [page, setPage] = useState([]);

  useEffect(() => {
    let list = [];
    let firstItem;
    let lastItem;
    let addLast = ["...", total];
    let addFirst = [1, "..."];

    if (total > 7) {
      if (currentPage > total - 4) {
        lastItem = total;
        firstItem = currentPage - 2;
      } else if (currentPage < 5) {
        lastItem = currentPage + 2;
        firstItem = 1;
      } else if (currentPage > 4) {
        lastItem = currentPage + 2;
        firstItem = currentPage - 2;
      }

      while (firstItem <= lastItem) {
        list.push(firstItem);
        firstItem++;
      }

      if (currentPage < total - 3) {
        list = [...list, ...addLast];
      }

      if (currentPage > 4) {
        list = [...addFirst, ...list];
      }
    } else {
      for (let i = 1; i <= total; i++) {
        list.push(i);
      }
    }

    setPage([...list]);
  }, [total, currentPage]);

  return (
    <div className="Pagination">
      {currentPage > 1 && (
        <span onClick={() => click({ type: "prev" })}>{"<"}</span>
      )}
      {page.map((item, index) => (
        <span
          key={index}
          onClick={() => click({ type: "add", number: item })}
          className={currentPage === item ? "active" : ""}
        >
          {item}
        </span>
      ))}
      {currentPage < total && (
        <span onClick={() => click({ type: "next" })}>{">"}</span>
      )}
    </div>
  );
}
