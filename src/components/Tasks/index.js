import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Tasks.css";

export default function Task({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.length === 0 && (
        <span className="no-task">Nenhuma tarefa foi encontrada</span>
      )}

      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <div>
            <button>
              <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            </button>
            <button>
              <FaWindowClose
                onClick={(e) => handleDelete(e, index)}
                className="delete"
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
