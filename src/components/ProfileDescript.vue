<template>
  <div class="ProfileDescript row py-2 px-0 mx-0 border border-card mt-3 shadow">
    <div class="col-md-12 p-0">
      <img :src="state.profile.coverImg" alt="bio-img" class="w-100 bio-cover">
    </div>
    <!-- TODO may need to do spillover for the profile pic -->
    <div class="col-md-12 d-flex justify-content-between p-2">
      <div>
        <img :src="state.profile.picture" alt="account-pic" class="circularPic bio-img">
        <i v-if="state.profile.graduated" class="mdi mdi-account-group pl-2"></i>
      </div>
      <div class="d-flex flex-row align-items-end justify-cotent-end p-0 my-4">
        <a :href="state.profile.github">
          <i class="mdi mdi-github"></i>
        </a><br>
        <a :href="state.profile.linkedin">
          <i class="mdi mdi-transit-connection-variant"></i>
        </a><br>
        <a :href="state.profile.resume">
          <i class="mdi mdi-file-account"></i>
        </a><br>
      </div>
    </div>
    <div class="d-flex flex-column align-items-start text-left mx-3">
      <p v-if="state.profile.graduated" class="pt-0 m-0">
        {{ state.profile.class }}
      </p>
      <h3 class="py-0">
        {{ state.profile.name }}
      </h3>
    </div>
    <div class="col-md-12 d-flex flex-column align-items-start text-left">
      <p>{{ state.profile.bio }}</p>
    </div>
    <div class="col-md-12 d-flex flex-column align-items-end">
      <button type="button" class="btn btn-primary">
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { profilesService } from '../services/profilesService'
import Pop from '../utils/Notifier'
// import { logger } from '../utils/Logger'

export default {
  props: {
    router: {
      type: Object,
      required: true
    }
  },
  name: 'ProfileDescript',
  setup(props) {
    onMounted(async() => {
      try {
        await profilesService.getProfileById(props.router.params.id)
        // logger.log('Profile info:', AppState.profile)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    const state = reactive({
      user: computed(() => AppState.user),
      profile: computed(() => AppState.profile),
      isCreator: computed(() => props.router.params.id === state.user.id)

    })
    return {
      state,
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style lang="scss" scoped>
.bio-cover{
  object-fit: cover;
}

.bio-img{
  height: 10vh;
}

</style>
