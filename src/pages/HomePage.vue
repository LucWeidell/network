<template>
  <div class="home row flex-grow-1 align-items-center justify-content-center">
    <!-- TODO : home has create post, ThreadPosts, and Post Component in Thread -->
    <div v-if="user.isAuthenticated" class="col-md-12 pl-5 py-3">
      <CreatePost />
    </div>
    <PostsThread class="col-md-12 pl-5 py-3" :posts="state.posts" />
    <div class="d-flex col-md-12 pl-5 py-3 justify-content-around">
      <h6 v-if="state.newPosts != null" class="action" @click.stop="loadPosts(state.newPosts)">
        Newer
      </h6>
      <h6 v-if="state.oldPosts" @click.stop="loadPosts(state.oldPosts)" class="action">
        Older
      </h6>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      postsService.getAllPosts()
    })
    const state = reactive({
      newPosts: computed(() => AppState.newerPosts),
      oldPosts: computed(() => AppState.previousPosts),
      posts: computed(() => AppState.posts)
    })
    return {
      state,
      user: computed(() => AppState.user),
      async loadPosts(url) {
        try {
          const condition = url.split('=')
          const query = { page: condition[1] }
          await postsService.getAllPosts(query)
          state.posts = AppState.posts
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
