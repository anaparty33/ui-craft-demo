// import { render, fireEvent, waitFor } from '@testing-library/react';
// import DailyWeather from '../components/CityCurrentWeather'; // Import your component
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store'; // Use redux-mock-store for testing
// import { act } from 'react-dom/test-utils'; // Use act to handle async actions
// import { myAction } from './actions'; // Import your Redux Toolkit actions
// import { selectData } from './selectors'; // Import your Redux Toolkit selectors
// import { updateCoords } from '../features/coordinatesSlice';

// const middlewares = [];
// const mockStore = configureStore(middlewares);

// describe('MyComponent', () => {
//   let store;

//   beforeEach(() => {
//     store = mockStore({
//       // Initialize the Redux store state here, if needed
//       data: 'Initial Data',
//     });
//   });

//   it('renders with the correct initial data from Redux', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <DailyWeather />
//       </Provider>
//     );

//     expect(getByText('Initial Data')).toBeInTheDocument();
//   });

//   it('dispatches an action and updates the data', async () => {
//     const { getByText, getByTestId } = render(
//       <Provider store={store}>
//         <DailyWeather />
//       </Provider>
//     );

//     // Dispatch your Redux Toolkit action
//     store.dispatch(updateCoords('New Data'));

//     // Wait for the component to re-render due to the action
//     await waitFor(() => expect(getByText('New Data')).toBeInTheDocument());
//   });

//   it('displays data from Redux Toolkit selector', () => {
//     const customData = 'Custom Data';
//     store = mockStore({
//       data: customData,
//     });

//     const { getByText } = render(
//       <Provider store={store}>
//         <DailyWeather />
//       </Provider>
//     );

//     expect(getByText(customData)).toBeInTheDocument();
//   });

//   it('handles async actions using act', async () => {
//     const { getByText, getByTestId } = render(
//       <Provider store={store}>
//         <DailyWeather />
//       </Provider>
//     );

//     // Dispatch an asynchronous action (assuming myAsyncAction is an async Redux Toolkit action)
//     await act(async () => {
//       store.dispatch(myAsyncAction('Async Data'));
//     });

//     // Wait for the component to re-render due to the async action
//     await waitFor(() => expect(getByText('Async Data')).toBeInTheDocument());
//   });
// });
