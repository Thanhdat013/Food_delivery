import { createSlice } from '@reduxjs/toolkit'

//

const initialState = {
  cartItems: [],
  cartShow: false,
}

//  handle actions in your reducers:
const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    // set các giá trị khi đăng nhập thành công
    doAddCartItemsAction: (state, action) => {
      let cartItems = state.cartItems
      const item = action.payload
      if (cartItems) {
        let isExistedId = cartItems?.findIndex((c) => c.id === item.id)

        if (isExistedId > -1) {
          cartItems[isExistedId].qty = +cartItems[isExistedId].qty + item.qty
        } else {
          cartItems.push(action.payload)
        }
      }

      state.cartItems = cartItems
    },

    doAddQtyCartAction: (state, action) => {
      let cartItems = state.cartItems
      const item = action.payload
      let isExistedId = cartItems?.findIndex((c) => c.id === item.id)
      if (isExistedId > -1) {
        cartItems[isExistedId].qty = cartItems[isExistedId].qty + 1
      }
      state.cartItems = cartItems
      console.log(action)
    },
    doRemoveQtyCartAction: (state, action) => {
      let cartItems = state.cartItems
      const item = action.payload
      let isExistedId = cartItems?.findIndex((c) => c.id === item.id)
      if (isExistedId > -1) {
        if (cartItems[isExistedId].qty === 1) {
          cartItems = cartItems.filter((c) => c.id !== action.payload.id)
        } else {
          cartItems[isExistedId].qty = cartItems[isExistedId].qty - 1
        }
      }
      state.cartItems = cartItems
    },

    doShowCartAction: (state) => {
      state.cartShow = !state.cartShow
      console.log(state.cartShow)
    },
    doClearCartAction: (state) => {
      state.cartShow = false
      state.cartItems = []
    },
  },
})

export const {
  doAddCartItemsAction,
  doShowCartAction,
  doClearCartAction,
  doAddQtyCartAction,
  doRemoveQtyCartAction,
} = cartSlice.actions
export default cartSlice.reducer
