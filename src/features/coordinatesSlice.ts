import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from '@reduxjs/toolkit'
import {isNull}  from 'lodash'

interface Coordinates {
  latitude: number;
  longitude: number;
};

const storedCoords = localStorage.getItem('coordinates')

let latitude = 34.0549076;
let longitude = -118.242643;

if(!isNull(storedCoords)) {
  latitude = JSON.parse(storedCoords).latitude
  longitude = JSON.parse(storedCoords).longitude
}

const initialState = {
  coordinates: {
    latitude,
    longitude
  }
}

  export const coordinatesSlice = createSlice({
    name:'coordinates',
    initialState,
    reducers: {
      //redux-toolkit uses Immer to track changes applied in reducers
      updateCoords: (state,action:PayloadAction<Coordinates>) => {
     

      localStorage.setItem(
        "coordinates",
        JSON.stringify(action.payload)
      );
      state.coordinates = action.payload
      }
    }

  })

  export const {updateCoords} = coordinatesSlice.actions
  export default coordinatesSlice.reducer

