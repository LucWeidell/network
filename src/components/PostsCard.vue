<template>
  <div class="PostsCard row border border-card mt-3 shadow">
    <div class=" col-md-2 mx-0 d-flex align-items-center justify-content-center">
      <router-link :to="{ name: 'Profile', params:{ id: post.creator}}">
        <img :src="post.creator.picture" alt="creator-pic" class="circularPic post-img w-100">
      </router-link>
    </div>
    <div class="col-md-10 d-flex flex-column pt-1">
      <!-- FIXME open a model here on click -->
      <div class="row">
        <div class="col-md-12 d-flex flex-column pr-2 align-items-end">
          <a href="">
            <i v-if="post.creator.id === state.account.id" class="mdi mdi-dots-horizontal"></i>
          </a>
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
        <i v-if="isSelfLiked" class="mdi mdi-heart"></i>
        <i v-else class="mdi mdi-heart-outline"></i>
        {{ post.likes.length }}
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
      editPost: props.post,
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
      isSelfLiked: computed(() => {
        const likes = props.post.likeIds
        let result = false
        for (const keys in likes) {
          result = (likes[keys] === state.account.id)
        }
        return result
      })
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
