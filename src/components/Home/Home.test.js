import Home from './Home';

it('should render <Home /> correctly', () => {
    const homeWrapper = shallow(<Home isHeaderSticky={false} />);

    expect(homeWrapper).toMatchSnapshot();
});
