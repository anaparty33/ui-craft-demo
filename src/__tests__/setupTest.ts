
import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
import { mockCurrentWeatherData } from './mockCurrentWeather'
import { beforeAll, afterAll,afterEach } from 'vitest'
 
// Describe the network.
const handlers = [
  http.get('https://api.openweathermap.org/data/2.5', ({ params }) => {
    return HttpResponse.json(mockCurrentWeatherData)
  }),
]
 
// Enable API mocking anywhere.
const worker = setupWorker(...handlers)
worker.start()



//closer server after all tests
afterAll(()=>worker.stop())

afterEach(()=>worker.resetHandlers())