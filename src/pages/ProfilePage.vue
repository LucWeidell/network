<template class="ProfilePage">
  <div class=" row flex-grow-1 align-items-center justify-content-center">
    <!-- TODO : home has create post, ThreadPosts, and Post Component in Thread -->
    <div class="col-md-12 pl-5 py-3">
      <ProfileDescript :router="state.router" />
      <div v-if="state.router.params.id === state.user.id">
        <CreatePost />
      </div>
    </div>
    <PostsThread class="col-md-12 pl-5 py-3" :posts="state.posts" />
    <!-- <div class="d-flex col-md-12 pl-5 py-3 justify-content-around">
      <h6 v-if="newPosts" class="action" @click.stop="loadPosts(state.newPosts)">
        Newer
      </h6>
      <h6 @click.stop="loadPosts(state.oldPosts)" class="action">
        Older
      </h6>
    </div> -->
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'

export default {
  name: 'ProfilePage',
  setup() {
    const router = useRoute()
    const state = reactive({
      router: router,
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    })
    onMounted(async() => {
      try {
        const query = { creatorId: state.router.params.id }
        await postsService.getAllPosts(query)
        state.posts = AppState.posts
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
