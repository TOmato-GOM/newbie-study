const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const editBtn = document.getElementsByClassName('edit_btn');
const deleteBtn = document.getElementsByClassName('delete_btn');
const newLi = document.querySelector('li');

function addTodoList() {
  if (window.event.keyCode === 13 && input.value !== '') {
    createTodoList();
  } else if (input.value === '' && window.event.keyCode === 13)
    alert('할 일 추가하기에 할 일을 적어주세요.');
}

const btnAddTodoList = () => {
  if (input.value !== '') {
    createTodoList();
  } else if (input.value === '') alert('할 일 추가하기에 할 일을 적어주세요.');
};

const clearList = () => {
  if (todoList.textContent === '') return alert('지울 할 일이 없습니다.');
  const checkedClear = confirm('모두 지우시겠습니까?');
  if (checkedClear === true) {
    todoList.textContent = '';
    alert('모두 지웠습니다.');
  }
};

const createTodoList = () => {
  const newLi = document.createElement('li');
  const newBtn = document.createElement('button');
  const newSpan = document.createElement('span');
  const newSpanEdit = document.createElement('span');
  const newSpanDelete = document.createElement('span');

  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  newLi.appendChild(newSpanEdit);
  newLi.appendChild(newSpanDelete);

  newSpanEdit.className = 'edit_btn';
  newSpanDelete.className = 'delete_btn';

  newSpan.textContent = input.value;
  newSpanEdit.textContent = '📝';
  newSpanDelete.textContent = '🗑️';
  todoList.appendChild(newLi);

  input.value = '';

  newSpanDelete.addEventListener('click', () => {
    handleDelete();
  });

  newBtn.addEventListener('click', () => {
    handleEdit();
  });

  const handleEdit = () => {
    if (newSpan.classList.contains('complete'))
      newSpan.classList.remove('complete');
    else if ((newSpan.classList = 'complete'));
  };

  const handleDelete = () => {
    newLi.remove();
  };
};
