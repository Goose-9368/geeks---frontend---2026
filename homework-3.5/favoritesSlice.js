import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload
      const productIndex = state.items.findIndex(
        (item) => item.id === product.id,
      )

      if (productIndex === -1) {
        state.items.push(product)
      } else {
        state.items.splice(productIndex, 1)
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions

export const selectFavoritesCount = (state) => state.favorites.items.length

export const selectIsFavoriteById = (state, productId) =>
  state.favorites.items.some((item) => item.id === productId)

export default favoritesSlice.reducer

