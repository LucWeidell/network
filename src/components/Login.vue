<template>
  <div v-if="user.isAuthenticated"
       class=" Login col-md-3 shadow-sm p-0 mx-0 mb-5 pb-5
      d-flex flex-column align-items-center justify-content-center"
  >
    <!-- FIXME login component here -->
    <img src="//placebeard.it/150x150" alt="profile-pic" class="circularPic">
    <p class="pt-2">
      Graduation Year HERE
    </p>
    <h5>Profile Name HERE</h5>
    <i class="mdi mdi-github">GITHUB URL</i><br>
    <i class="mdi mdi-transit-connection-variant">Linkdin URL</i><br>
    <i class="mdi mdi-file-account">Resume File</i><br>

    <button type="button" @click="logout" class="btn btn-primary action hoverable">
      logout
    </button>
  </div>

  <div v-else
       class="Login col-md-3 shadow-sm p-0 mx-0 mb-5 pb-5
      d-flex flex-column align-items-center justify-content-center"
  >
    <button
      class="btn btn-outline-primary text-uppercase"
      @click="login"
      v-if="!user.isAuthenticated"
    >
      Login
    </button>
  </div>
</template>

<script>

import { computed, reactive } from 'vue'
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
export default {
  name: 'Login',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
