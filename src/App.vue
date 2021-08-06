<template>
  <main class="container-fluid d-flex flex-column">
    <div v-if="user.isAuthenticated" class="row">
      <div class="col-md-3">
        <!-- FIXME login component here -->
        <img src="//placebeard.it/150x150" alt="profile-pic" class="circularPic">
        <p>Graduation Year HERE</p>
        <h5>Profile Name HERE</h5>
        <i class="mdi mdi-github">GITHUB URL</i>
        <i class="mdi mdi-transit-connection-variant">Linkdin URL</i>
        <i class="mdi mdi-file-account">Resume File</i>
      </div>
      <!-- NOTE login component done above: ^ -->
      <div class="col-md-9">
        <!-- FIXME navbar compoent here -->
        <div class="row nav text-light">
          <div class="col-md-12 d-flex">
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
    </div>
    <div v-else class="row">
      <!-- NOTE if login not done Nav Component now in md-12 -->
      <!-- FIXME Navbar component here -->
      <!-- <NavBar /> -->
    </div>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
// import { mdiGithub } from 'mdi'
export default {
  name: 'App',
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
