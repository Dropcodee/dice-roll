import AuthService from '@/services/AuthService'

const state = () => {
  return {
    user: null
  }
}

const getters = {
  GetUser (state) {
    return state.user
  }
}

const mutations = {
  SET_USER_DATA (state, resData) {
    state.user = resData
  }
}

const actions = {
  async LoginUser (context, payload) {
    try {
      const response = await AuthService.login(payload)
      context.commit('SET_USER_DATA', response.data)
    } catch (error) {
      if (error.response) {
      	// backend error
      	console.log(`Backend Error:- ${error.response.data}`)
      } else if (error.request) {
      	// axios request error
      	console.log(`Network Error maybe:- ${error.request}`)
      } else if (error) {
      	console.log(`Unknown Error:- ${error}`)
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
