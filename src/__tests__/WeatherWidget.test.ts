import {render, screen}  from '@testing-library/react'
import {describe,it} from 'vitest'

import CityCurrentWeather from '../components/CityCurrentWeather'

describe("City Current weather ", ()=> {

  it('renders weather information correctly', async () => {
    render(CityCurrentWeather)

    await screen.findByTestId()
  })

})