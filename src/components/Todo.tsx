import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GET_TODOS } from '../consts/apiRoutes';
import { TodoItemInterface } from '../interface/commonInterfaces';

const Todo = () => {
  const BASE_URL = 'http://localhost:5072/';

  const [todosList, setTodosList] = useState<TodoItemInterface[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}${GET_TODOS}`).then((response) => {
      setTodosList(response.data);
      console.log(response.data);
    });
  }, []);

  const Listed = todosList.length ? (
    todosList.map(({ id, name, isComplete }) => (
      <li
        key={id}
        className={`todoItem mb-4 ${isComplete ? 'completed' : 'notCompleted'}`}
      >
        {id}. {name}
      </li>
    ))
  ) : (
    <h3>No current todos Add one to view the list.</h3>
  );

  return (
    <div className='todosList'>
      {Listed}
    </div>
  );
};

export default Todo;
