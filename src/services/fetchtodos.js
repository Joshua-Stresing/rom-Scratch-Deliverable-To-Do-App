import { checkError, client } from './client';

export async function fetchTodos() {
  const data = await client.from('todos').select('*');
  return checkError(data);
}

export async function addTodo(todo) {
  const data = await client.from('todos').insert(todo);
  return checkError(data);
}

//{todo: "userinput", completed: false}

// export async function toggleComplete() {

// }