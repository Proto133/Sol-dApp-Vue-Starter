import { createStore } from 'vuex'

export type User = {
  wallet: string
  username: string
}
export interface State {
  connected: boolean;
  user: User
}
export default createStore<State>({
  state: {
    connected: false,
    user:{
      wallet: '',
      username: ''
    }
  },
  mutations: {
    setConnected(state, value: boolean) {
    state.connected = value
    },
    setUser(state, value: string) {
      state.user.wallet = value
    }
  },
  actions: {
  },
  modules: {
  }
})
