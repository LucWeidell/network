import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  /** @type {[Object]} */
  posts: [],
  /** @type {Integer: {Object}} */
  extras: {},
  profile: {},

  /** @type {String} String of the url for next 20 posts */
  newerPosts: null,
  /** @type {String} String of the url for previous 20 posts */
  previousPosts: null
})
