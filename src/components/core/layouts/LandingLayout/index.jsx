import Footer from './Footer';
import Header from './Header';

function LandingLayout(props) {
  console.log('props', props);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default LandingLayout;
