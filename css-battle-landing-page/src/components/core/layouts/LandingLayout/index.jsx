import Footer from './Footer';
import Header from './Header';

function LandingLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default LandingLayout;
