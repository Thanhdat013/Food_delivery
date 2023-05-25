import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isAuthenticated: false,
  isLoading: true,
}

//  handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // set các giá trị khi đăng nhập thành công
    doLoginAction: (state, action) => {
      state.isAuthenticated = true
      state.isLoading = false
      state.user = action.payload
    },

    doLogOutAction: (state) => {
      localStorage.removeItem('access_token')
      state.isLoading = true
      state.isAuthenticated = false
      state.user = {}
    },
  },
})

export const { doLoginAction, doLogOutAction } = usersSlice.actions
export default usersSlice.reducer
