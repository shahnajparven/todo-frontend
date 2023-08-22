
export const first = (payload) => ({
  type: 'second',
  payload
})


const initialState = {
    name:'user',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}
