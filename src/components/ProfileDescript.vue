<template>
  <div v-if="user.isAuthenticated" class="ProfileDescript row py-2 border border-card m-0 shadow">
    <div class="col-md-12 p-0">
      <img :src="router.params.creator.coverImg" alt="bio-img" class="w-100 bio-cover">
    </div>
    <!-- TODO may need to do spillover for the profile pic -->
    <div class="col-md-12 px-0">
      <div>
        <router-link :to="{ name: 'Profile', params:{ id: user.id}}">
          <img :src="user.picture" alt="account-pic" class="circularPic bio-img">
        </router-link>
      </div>
      <div>
      </div>
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
import { reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  router: useRoute(),
  name: 'ProfileDescript',
  setup(router) {
    const state = reactive({
      user: computed(() => AppState.user)
    })
    return {
      state,
      creator: router.params.creator,
      isCreator: computed(() => router.params.id.id === state.user.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.bio-cover{
  object-fit: cover;
}

.bio-img{
  height: 10vh;
}

</style>
