<template>
  <div class="PostsThread">
    <PostsCard v-for="p in posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
import { logger } from '../utils/Logger'

export default {
  name: 'PostsThread',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    logger.log('Posts Array:', props)
    // onMounted(async() => {
    //   try {
    //     await postsService.getAllPosts()
    //     Pop.toast('success', 'success')
    //     logger.log('USER?', AppState.user)
    //   } catch (error) {
    //     Pop.toast(error, 'error')
    //   }
    // })
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
