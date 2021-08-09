<template>
  <div class="ExtrasCard row pt-3 ml-1 mr-2">
    <div class="col-md-12 shadow p-0">
      <a :href="'https://' + extra.linkURL">
        <img :src="extra.tall" :alt="extra.title" class="extra-post w-100">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExtrasCard',
  props: {
    extra: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.extra-post{
  height: 35vh;
  object-fit: auto;
}

</style>
