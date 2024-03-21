import { useState } from 'react';
import './App.css';

let id = 0;

function App() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    const newTodoList = todoList.concat({
      id: id++,
      text,
    });
    setTodoList(newTodoList);
    setText('');
    e.preventDefault();
    console.log(todoList);
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleCheck = (id) => {
    setIsComplete(todoList.find((item) => item.id === id) ? !isComplete : null);
  };

  return (
    <div className="container">
      <div className="todo_container">
        <form className="todo_form" onSubmit={handleSubmit}>
          <div className="input_container">
            <input
              className="todo_input"
              type="text"
              placeholder="해야 할 일을 입력해주세요."
              onChange={onChangeInput}
              value={text}
            ></input>
            <button className="addBtn"></button>
          </div>
          <hr></hr>
        </form>
        <div className="list_container">
          <ul>
            {todoList.map((item) => {
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    onClick={() => handleCheck(item.id)}
                    className="checkbox"
                  ></input>
                  <span className={isComplete ? 'complete' : ''}>
                    {item.text}
                  </span>
                  <span className="editBtn">📝</span>
                  <span
                    className="delBtn"
                    onClick={() => handleDelete(item.id)}
                  >
                    🗑️
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
