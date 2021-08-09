<template>
  <div v-if="user.isAuthenticated"
       class=" Login col-md-3 shadow-sm p-0 mx-0 my-5 py-5
      d-flex flex-column align-items-center justify-content-start "
  >
    <router-link :to="{ name: 'Profile', params:{ id: user.id}}">
      <img :src="user.picture" alt="profile-pic" class="circularPic">
    </router-link>
    <!-- NOTE if graduated add the p Tage with class and year -->
    <p v-if="user.graduated" class="pt-2">
      {{ user.class }} {{ user.year }}
    </p>
    <h4>{{ user.name }}</h4>
    <i class="mdi mdi-github">{{ user.github }}</i><br>
    <i class="mdi mdi-transit-connection-variant">{{ user.linkedin }}</i><br>
    <i class="mdi mdi-file-account">
      <a :href="user.resume">Resume</a></i><br>

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

import { reactive, computed } from 'vue'
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
