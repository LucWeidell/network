<template>
  <div v-if="user.isAuthenticated"
       class=" Login col-md-3 shadow-sm px-4 mx-0 my-5 py-5
      d-flex flex-column align-items-center justify-content-start text-left "
  >
    <router-link :to="{ name: 'Profile', params: { id: account.id}}">
      <img :src="account.picture" alt="profile-pic" class="circularPic w-100 px-3">
    </router-link>
    <!-- NOTE if graduated add the p Tage with class and year -->
    <p v-if="account.graduated" class="pt-2">
      {{ account.class }}
    </p>
    <h4>{{ account.name }}</h4>
    <div class="d-flex flex-column align-items-start my-4">
      <a :href="account.github">
        <i class="mdi mdi-github">{{ account.github }}</i>
      </a><br>
      <a :href="account.linkedin">
        <i class="mdi mdi-transit-connection-variant">{{ account.linkedin }}</i>
      </a><br>
      <a :href="account.resume">
        <i class="mdi mdi-file-account">Resume</i>
      </a><br>
      <button type="button" @click="logout" class="btn btn-primary action hoverable">
        logout
      </button>
    </div>
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
      account: computed(() => AppState.account),
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
