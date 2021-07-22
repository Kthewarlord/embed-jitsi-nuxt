export const state = () => ({
  name: '',
  room: '/ken/testroom',
  videodisplay: 'none',
  buttondisplay: 'block'
})
export const mutations = {
  setName(state,payload){
      state.name = payload
  },
  setRoom(state,payload){
      state.room = payload
  },
  setVideoDisplay(state,payload){
    state.videodisplay = payload
  },
  setButtonDisplay(state,payload){
    state.buttondisplay = payload
  }
}