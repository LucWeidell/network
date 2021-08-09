import { api } from '../services/AxiosService'
import { AppState } from '../AppState'
import { convertToQuery } from '../utils/Query'

class ProfilesService {
  async getAllProfile(query = {}) {
    const res = await api.get('api/profiles' + convertToQuery(query))
    AppState.profile = res.data
  }

  async getProfileById(query) {
    const res = await api.get('api/profiles/' + query)
    AppState.profile = res.data
  }
}

export const profilesService = new ProfilesService()
