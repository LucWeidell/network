import { api } from './AxiosService'
import { AppState } from '../AppState'
import { convertToQuery } from '../utils/Query'

class ProfilesService {
  async getAllProfile(query = {}) {
    const res = await api.get('api/profiles' + convertToQuery(query))
    AppState.profile = res.data
    AppState.profileCopy = res.data
  }

  async getProfileById(query) {
    const res = await api.get('api/profiles/' + query)
    AppState.profile = res.data
    AppState.profileCopy = res.data
  }

  async editProfile(rawProfile) {
    const res = await api.put('api/profiles/' + rawProfile.id, rawProfile)
    AppState.profile = res.data
    AppState.profileCopy = res.data
  }
}

export const profilesService = new ProfilesService()
