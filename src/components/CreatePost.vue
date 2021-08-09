<template>
  <div v-if="state.user.isAuthenticated" class="CreatePost row py-2 border border-card m-0 shadow">
    <div class="col-md-2 px-0">
      <router-link :to="{ name: 'Profile', params:{ id: state.user.id, user: state.user, account: state.account}}">
        <img :src="state.account.picture" alt="account-pic" class="circularPic post-img">
      </router-link>
    </div>
    <div class="col-md-10 px-0 pr-1">
      <!-- FIXME NEEDED to add post, functionality here -->
      <form @submit.prevent="addPost">
        <div class="form-group px-0">
          <textarea v-model="state.post.body"
                    class="form-control"
                    name="body"
                    id=""
                    rows="3"
                    placeholder="Share your vibes.."
          ></textarea>
        </div>
        <div class="d-flex  justify-content-between">
          <!-- NOTE STRETCH: Photo and Video -->
          <button type="button" class="btn btn-primary">
            Photo/Video
          </button>
          <button type="submit" class="btn btn-primary">
            Post
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from '@vue/reactivity'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'

export default {

  name: 'CreatePost',
  setup() {
    const state = reactive({
      post: {},
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)

    })
    return {
      state,
      async addPost() {
        try {
          state.post.creatorId = state.user.id
          await postsService.addPost(state.post)
          Pop.toast('success', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
