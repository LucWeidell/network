<template>
  <div class="PostsThread">
    <PostsCard v-for="p in posts" :key="p.id" :post="p" />
  </div>
</template>

<script>

export default {
  name: 'PostsThread',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
