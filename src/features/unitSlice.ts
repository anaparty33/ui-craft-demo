import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from '@reduxjs/toolkit'

type UnitType = "metric" | "imperial"; 

const initialState = {
  unit: "metric"
}

export const unitSlice = createSlice({
  name:'unit',
  initialState,
  reducers: {
    updateUnits: (state, action: PayloadAction<UnitType>) =>{
      state.unit = action.payload
    }
  }
}) 

export const {updateUnits} =unitSlice.actions
export default unitSlice.reducer