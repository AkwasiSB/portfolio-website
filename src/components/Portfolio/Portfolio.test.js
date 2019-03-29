import Portfolio from './Portfolio';

it('should render <Portfolio /> correctly', () => {
    const portfolioWrapper = shallow(<Portfolio />);

    expect(portfolioWrapper).toMatchSnapshot();
});
