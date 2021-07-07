import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [{
      'id': 1,
      'title': 'Zadanie do zrobienia 1',
      'completed': false,
      'editing': false,
    },
      {
        'id': 2,
        'title': 'Zadanie do zrobienia 2',
        'completed': false,
        'editing': false,
      },
      {
        'id': 3,
        'title': 'Zadanie do zrobienia 3 ',
        'completed': false,
        'editing': false,
      },
    ],
    filter: 'all',
  },
  getters: {
    remaining(state) {
      return state.todos.filter(todo => !todo.completed).length;
    },
    anyRemaining(state, getters) {
      return getters.remaining != 0;
    },
    todosFiltered(state) {
      if (state.filter === 'all') {
        return state.todos
      } else if (state.filter === 'active') {
        return state.todos.filter(todo => !todo.completed)
      } else if (state.filter === 'completed') {
        return state.todos.filter(todo => todo.completed)
      }
      return state.todos;
    },
    showClearCompletedButton(state) {
      return state.todos.filter(todo => todo.completed).length > 0
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false,
      });
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(item => item.id === todo.id);
      state.todos.splice(index, 1, {
        'id': todo.id,
        'title': todo.title,
        'completed': todo.completed,
        'editing': todo.editing,
      });
    },
    deleteTodo(state, index) {
      // const index = state.todos.findIndex(item => item.id == id)
      state.todos.splice(index, 1)
    },
    checkAll(state, checked) {
      state.todos.forEach(todo => (todo.completed = checked))
    },
    updateFilter(state, filter) {
      state.filter = filter;
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    }
  },
  actions: {
    addTodo(context, todo) {
      setTimeout(() => {
        context.commit('addTodo', todo);
      }, 1000)
    },
    updateTodo(context, todo) {
      context.commit('updateTodo', todo);
    },
    deleteTodo(context, id) {
      context.commit('deleteTodo', id);
    },
    checkAll(context, checked) {
      context.commit('checkAll', checked);
    },
    updateFilter(context, filter) {
      context.commit('updateFilter', filter);
    },
    clearCompleted(context) {
      context.commit('clearCompleted');
    }
  }
})
