import Header from './Header';

it('should render <Header /> correctly', () => {
  const wrapper = shallow(<Header isSticky={false} activeNavLink='Home' />);

  expect(wrapper).toMatchSnapshot();
})