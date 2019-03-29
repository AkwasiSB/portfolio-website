import App from './App';

test('should render <App /> correctly', () => {
  const appWrapper = shallow(<App />);

  expect(appWrapper).toMatchSnapshot();
})
