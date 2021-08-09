<template>
  <div class="home row flex-grow-1 align-items-center justify-content-center">
    <!-- TODO : home has create post, ThreadPosts, and Post Component in Thread -->
    <div v-if="user.isAuthenticated" class="col-md-12 pl-5 py-3">
      <CreatePost />
    </div>
    <div v-if="user.isAuthenticated" class="col-md-12 pl-5 py-3">
      {{ posts }}
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Notifier'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAllPosts()
      } catch (error) {
        // eslint-disable-next-line no-console
        Pop.toast(error, 'error')
      }
    })
    return {
      user: computed(() => {
        return AppState.user
      }),
      posts: computed(() => AppState.posts)
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
