import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [],
  }),
  actions: {
    async fetchTodos() {
      const { data }: any = await useFetch('https://jsonplaceholder.typicode.com/todos');
      if (data.value) {
        this.todos = data.value;
      }
    },
  },
});