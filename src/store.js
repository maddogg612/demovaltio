import { proxy, useSnapshot } from 'valtio';

export const filters = ['all', 'completed'];

export const store = proxy({ todos: [], filter: 'all' });

let id = 0;
export const actions = {
  addToDo(todos) {
    store.todos.push({ ...todos, id: id++ });
    console.log(store.todos);
  },
  toggleTodo(id, value) {
    const todo = store.todos.find((todo) => todo.id === id);
    if (todo && value) {
      todo.completed = value;
      //console.log('in the initial statement', todo.completed);
    } else if (todo) {
      todo.completed = !todo.completed;
      //console.log('in else startement', todo.completed);
    }
  },
  removeTodo(id) {
    store.todos = store.todos.filter((todo) => todo.id !== id);
    //console.log(store.todos);
  },
  toggleFilter(filter) {
    store.filter = filter;
  },
  removeAll() {
    store.todos = [];
  },
};

export function useTodos() {
  const snapShot = useSnapshot(store);
  //return snapShot.todos;

  switch (snapShot.filter) {
    case 'all':
      return snapShot.todos;
    case 'completed':
      return snapShot.todos.filter((todo) => todo.completed);
    default:
      throw Error('Error: unsupported filter');
  }
}

export function useFilter() {
  return useSnapshot(store).filter;
}
