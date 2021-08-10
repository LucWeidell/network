<template>
  <div class="PostsCard row border border-card mt-3 shadow">
    <div class=" col-md-2 mx-0 d-flex align-items-center justify-content-center">
      <router-link :to="{ name: 'Profile',
                          params:{ id: post.creator.id, user: post.creator, account: state.account}}"
      >
        <img :src="post.creator.picture" alt="creator-pic" class="circularPic post-img w-100">
      </router-link>
    </div>
    <div class="col-md-10 d-flex flex-column pt-1">
      <!-- FIXME open a model here on click -->
      <div class="row">
        <div class="col-md-12 d-flex flex-column pr-2 align-items-end">
          <i @click="removePost" class="mdi mdi-dots-horizontal"></i>
          <!-- TODO add a drop down for edit -->
          <!-- <a href="">
            <div v-if="post.creator.id === state.account.id" class="dropdown">
              <button class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
              >

              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <h6 class="dropdown-item" @click="editPost">Edit</h6>
                <h6 class="dropdown-item" @click="removePost">Delete</h6>
              </div>
            </div>
          </a> -->
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 d-flex flex-column p-0 align-items-start">
          <p class="m-0">
            <b>{{ post.creator.name }}</b>
          </p>
          <div>
            <p>
              {{ postAge }}
              <i v-if="post.creator.graduated" class="mdi mdi-account-group pl-2"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 d-flex flex-column align-items-start text-left mx-3">
      <p>{{ post.body }}</p>
    </div>
    <div class="col-md-12 px-0">
      <img :src="post.imgUrl" alt="blog-post" class="blog-post w-100">
    </div>
    <div class="col-md-12 d-flex flex-column align-items-end pr-2">
      <p>
        <!-- FIXME add like function on click -->
        <i v-if="isSelfLiked" @click="editPostLike" class="mdi mdi-heart"></i>
        <i v-else @click="editPostLike" class="mdi mdi-heart-outline"></i>
        {{ state.editPost.likeIds.length }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'
import { postAgeTag } from '../utils/PostTimeTagger'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  name: 'PostsCard',
  setup(props) {
    const state = reactive({
      editPost: computed(() => props.post),
      postMadeAt: new Date(props.post.createdAt),
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    return {
      state,
      postAge: postAgeTag(state.postMadeAt),

      async removePost() {
        try {
          if (await Pop.confirm()) {
            await postsService.removePost(props.post.id)
            Pop.toast('Delorted', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async editPostLike() {
        try {
          const storedIndex = state.editPost.likeIds.indexOf(state.account.id)
          if (storedIndex > -1) {
            state.editPost.likeIds.splice(storedIndex, 1)
            await postsService.editPost(state.editPost)
          } else {
            state.editPost.likeIds.push(state.account.id)
            await postsService.editPost(state.editPost)
          }
          Pop.toast('success', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      // FIXME need to work on the edit functionality
      // Open a model edit then change post after confirm edit
      async editPost() {
        try {
          if (await Pop.confirm()) {
            await postsService.editPost(props.post.id, state.editPost)
            Pop.toast('Edited Post', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      // NOTE im assumeing this ex: was correct
      // ex post.likeIds: {{ 0: "61104e40d7ce6b36aeacba8e"}}
      isSelfLiked: computed(() => state.editPost.likeIds.includes(state.account.id))
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-post{
  height: 30vh;
  object-fit: auto;
}

</style>
