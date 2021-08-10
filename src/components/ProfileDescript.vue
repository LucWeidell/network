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
      <button v-if="state.isCreator" type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModalId">
        Edit
      </button>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade"
       id="editModalId"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Edit Profile
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editProfile">
            <div class="form-group">
              <label for="coverImg">Cover Img Url</label>
              <input v-model="state.newProfile.coverImg"
                     type="text"
                     class="form-control"
                     name="coverImg"
                     id="coverImg"
                     aria-describedby="helpId"
                     placeholder="Image Url..."
              >
            </div>
            <div class="form-group">
              <label for="profileImg">Profile Img Url</label>
              <input v-model="state.newProfile.picture"
                     type="text"
                     class="form-control"
                     name="profileImg"
                     id="profileImg"
                     placeholder="Image Url..."
              >
            </div>
            <div class="form-group">
              <label for="attendingClass">Attending Class</label>
              <input v-model="state.newProfile.class"
                     type="text"
                     class="form-control"
                     name="attendingClass"
                     id="attendingClass"
                     placeholder="Image Url..."
              >
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input v-model="state.newProfile.isGraduated"
                       type="checkbox"
                       class="form-check-input"
                       name=""
                       id=""
                       value="checkedValue"
                       checked
                >
                Display value
              </label>
            </div>
            <div class="form-group">
              <label for="github">Github</label>
              <input v-model="state.newProfile.github"
                     type="text"
                     class="form-control"
                     name="github"
                     id="github"
                     placeholder="Url..."
              >
            </div>
            <div class="form-group">
              <label for="linkedin">Linkedin</label>
              <input v-model="state.newProfile.linkedin"
                     type="text"
                     class="form-control"
                     name="linkedin"
                     id="linkedin"
                     placeholder="Url..."
              >
            </div>
            <div class="form-group">
              <label for="resume">Resume</label>
              <input v-model="state.newProfile.resume"
                     type="text"
                     class="form-control"
                     name="resume"
                     id="resume"
                     placeholder="Url..."
              >
            </div>
            <div class="form-group">
              <label for="attendingClass">Bio</label>
              <input v-model="state.newProfile.bio"
                     type="text"
                     class="form-control"
                     name="attendingClass"
                     id="attendingClass"
                     placeholder="Tell us about yourself...."
              >
            </div>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { profilesService } from '../services/ProfilesService'
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
      isCreator: computed(() => props.router.params.id === AppState.account.id),
      newProfile: computed(() => AppState.profileCopy)

    })
    return {
      state,
      account: computed(() => AppState.account),
      async editProfile() {
        try {
          await profilesService.editProfile(state.newProfile)
        // logger.log('Profile info:', AppState.profile)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
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
