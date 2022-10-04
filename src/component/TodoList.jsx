import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { COMPLETED_TODO, DELETE_TODO } from "../redux/todoSlice";
import deleteIcon from "../assets/img/delete.png";

function TodoList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.data);
  
  return (
    <div className="box mb-3 p-3">
      {data.length > 0 ? (
        <>
          {data.map((element, index) => {
            return (
              <div
                className="list border-bottom border-dark p-2"
                key={element.id}
              >
                <input
                  type="checkbox"
                  defaultChecked={element.completed}
                  onClick={() => {
                    dispatch(COMPLETED_TODO(index));
                  }}
                />

                {element.completed ? (
                  <span className="btn-warning ps-3 pe-3">
                    <s style={{ color: "red" }}>{element.title}</s>
                  </span>
                ) : (
                  <span className="ps-1">{element.title}</span>
                )}
                <button
                  onClick={() => dispatch(DELETE_TODO(element.id))}
                  style={{
                    background: "transparent",
                    border: "none",
                  }}
                >
                    <img srcSet={deleteIcon} alt="" style={{ width: "30px" }} />
                  </button>
                </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TodoList;
