import { api } from '../services/AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'

class ExtrasService {
  async getAllExtras(query = {}) {
    const res = await api.get('api/ads/' + convertToQuery(query))
    AppState.extras = res.data
  }
}

export const extrasService = new ExtrasService()
