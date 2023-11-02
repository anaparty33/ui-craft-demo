# Intuit UI craft demo Application

# Weather App

![image](https://github.com/anaparty33/ui-craft-demo/assets/47445074/e0ce7397-a775-48df-948d-c5cda33f50d5)

[Link to weather app](https://elaborate-starship-16546e.netlify.app/)


While rendering, this app by default takes the Los Angeles City and displays weather information for it.

I recommend playing around using the search input field  (which is powered by Google Autocomplete for places ), navigation logo, and units option to the top right 

# Features
- User can search for  any city, or place or use a postal code to search for important weather information
- User can check the current location weather by clicking the navigate icon
- Crisp Weather information for the next 14 days.
- Can toggle units  Celsius and Fahrenheit.  Unit conversion is done by local utilities which can save another call to OpenWeaher API
- Details like Current city  i.e latitude and longitude information stored in Local Storage
- Centralised Redux store, which has state values for unit and location coordinates


# Improvements
- still need to add  more responsive styling to more different layouts like iPad, and mobile. Add tailwind variables in my index.css to avoid repeating styles
- Adding a mock server to fetch data / making some mock data and using it in test cases.
- Could add more strict types as it contains some type warnings, I kind of skipped these in `vite build`
- Minifying builds
- using CMS for text instead of hardcoding in React components.
- Adding Data attributes to elements to ease up the testing process. Writing more accessible semantic HTML, ARIA labels in components
