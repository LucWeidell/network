
<template>
  <main class="container-fluid">
    <div class="row flex-grow-1">
      <Login />
      <!-- REVIEW make it disappear but I can do this anymore Moving on:
      its possible it work: Look at the m-0 and p0 EVERYTHING FOR rows and cols -->

      <!-- NOTE login component done above: ^ -->
      <div class="col-md-9 d-flex flex-column p-0 m-0 ">
        <!-- FIXME navbar compoent here -->
        <NavBar />
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
