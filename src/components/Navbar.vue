<template>
  <div class="NavBar row text-light nav p-0 m-0">
    <div class="col-md-12 d-flex align-items-center justify-content-around">
      <img src="../assets/img/vibin-logo.jpg" alt="vive-zone-logo" class="logo-img">
      <p><b>Vibe With Friends</b></p>
      <form @submit.prevent="searchFunctionHERE">
        <div class="form-group d-flex">
          <!-- input is v-model but only search on click -->
          <input type="text"
                 class="form-control"
                 name=""
                 id="search"
                 placeholder="Search ..."
          >
          <button type="submit" class="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";

</style>
