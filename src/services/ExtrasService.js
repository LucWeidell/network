import { api } from 'axios'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToJson } from '../utils/Query'

class ExtrasService {
  async getAllExtras(query = {}) {
    const res = await api.get('api/ads' + convertToJson(query))
    logger.log('Sandbox ads return:', res.data)
    AppState.extras = res.extras
  }
}

export const extrasService = new ExtrasService()
