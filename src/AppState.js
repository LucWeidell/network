import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  /** @type {[Object]} */
  posts: [],
  /** @type {[Object]} */
  extras: [],

  /** @type {String} String of the url for next 20 posts */
  newerPosts: '',
  /** @type {String} String of the url for previous 20 posts */
  previousPosts: ''
})
