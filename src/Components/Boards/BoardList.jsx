import React from "react";
import { useContext } from "react";
import { BoardContext } from "../../Contexts/boardContext";

import BoardItem from "./BoardItem";

const BoardList = () => {
  const { boards } = useContext(BoardContext);
  return (
    <div className="container">
      <div className="row">
        {boards?.map((item) => (
          <div className="col-md-4 mt-5" key={item.id}>
            <BoardItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardList;
