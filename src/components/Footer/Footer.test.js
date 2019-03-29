import Footer from './Footer';

it('should render <Footer /> correctly', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper).toMatchSnapshot();
});
