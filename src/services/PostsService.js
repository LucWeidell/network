import { api } from '../services/AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'

class PostsService {
  async getAllPosts(query = {}) {
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log('Sandbox posts getter return:', res.data)
    AppState.posts = res.data.posts
    AppState.newerPosts = res.data.newer
    AppState.previousPosts = res.data.older
  }

  async addPost(rawPost) {
    const res = await api.post('api/posts', rawPost)
    logger.log('Sandbox posts Create return:', res.data)
    AppState.posts = res.data
  }

  async removePost(id) {
    await api.delete('api/posts' + id)
    logger.log('Delorted Post')
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }

  async editPost(editedPost) {
    const res = await api.put('api/posts' + editedPost.id, editedPost)
    logger.log('SandBox: edited Post:', res)
    // TODO this appstate switch may be overkill
    let foundPost = AppState.posts.find(p => p.id === editedPost.id)
    foundPost = editedPost
  }
}

export const postsService = new PostsService()
