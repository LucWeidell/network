
<template>
  <main class="container-fluid">
    <div class="row flex-grow-1">
      <Login />
      <!-- REVIEW make it disappear but I can do this anymore Moving on:
      its possible it work: Look at the m-0 and p0 EVERYTHING FOR rows and cols -->

      <!-- NOTE login component done above: ^ -->
      <div class="col-md-9 flex-grow-1 d-flex flex-column p-0 m-0 ">
        <!-- FIXME navbar compoent here -->
        <NavBar />
        <div class="row flex-grow-1">
          <div class="col-md-9 flex-grow-1">
            <router-view />
          </div>
          <div class="col-md-3">
            <!-- FIXME  Ad component here -->
            <ExtrasCard v-for="e in appState.extras" :key="e.id" :extra="e" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from './AppState'

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
