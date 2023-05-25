import { createSlice } from '@reduxjs/toolkit'

//

const initialState = {
  foodItems: [],
  isLoading: true,
}

//  handle actions in your reducers:
const foodSlice = createSlice({
  name: 'foodItems',
  initialState,
  reducers: {
    // set các giá trị khi đăng nhập thành công
    doGetFoodItemsAction: (state, action) => {
      state.foodItems = action.payload
    },
  },
})

export const { doGetFoodItemsAction } = foodSlice.actions
export default foodSlice.reducer
