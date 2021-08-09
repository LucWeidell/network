<template>
  <div class="home row flex-grow-1 align-items-center justify-content-center">
    <!-- TODO : home has create post, ThreadPosts, and Post Component in Thread -->
    <div v-if="user.isAuthenticated" class="col-md-12 pl-5 py-3">
      <CreatePost />
    </div>
    <PostsThread class="col-md-12 pl-5 py-3" :posts="posts" />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    return {
      user: computed(() => AppState.user),
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
