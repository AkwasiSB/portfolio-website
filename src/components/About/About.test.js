import About from './About';

it('should render <About /> correctly', () => {
    const aboutWrapper = shallow(<About />);

    expect(aboutWrapper).toMatchSnapshot();
});
