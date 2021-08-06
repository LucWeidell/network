// NOTE use the if idead but make 0 for everything and

<template>
  <main class="container-fluid">
    <div v-if="user.isAuthenticated" class="container m-0 p-0 profile-side">
      <div class="row shadow-sm p-0">
        <div class="col-md-12 my-5 py-4 align-items-center justify-content-center">
          <!-- FIXME login component here -->
          <img src="//placebeard.it/150x150" alt="profile-pic" class="circularPic">
          <div class="my-4">
            <p class="mb-0">
              Graduation Year HERE
            </p>
            <h5>Profile Name HERE</h5>
          </div>
          <div>
            <i class="mdi mdi-github">GITHUB URL</i><br>
            <i class="mdi mdi-transit-connection-variant">Linkdin URL</i><br>
            <i class="mdi mdi-file-account">Resume File</i><br>
          </div>
        </div>
      </div>
    </div>
    <div class="container m-0 p-0">
      <div class="row">
        <!-- NOTE login component done above: ^ -->
        <div class="col-md-12 nav">
          <!-- FIXME navbar compoent here -->
          <div class="row text-light">
            <div class="col-md-12 d-flex flex-row">
              <img src="./assets/img/vibin-logo.jpg" alt="vive-zone-logo" class="logo-img">
              <p><b>Vibe With Friends</b></p>
              <form @submit.prevent="searchFunctionHERE">
                <div class="form-group">
                  <!-- input is v-model but only search on click -->
                  <input type="text"
                         class="form-control"
                         name=""
                         id=""
                         aria-describedby="helpId"
                         placeholder="Search ..."
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
// import { mdiGithub } from 'mdi'
export default {
  name: 'Old',
  setup() {
    return {
      user: computed(() => AppState.user)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
