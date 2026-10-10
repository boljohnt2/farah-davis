import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Coaching from '../components/Coaching';
import About from '../components/About';
import Quote from '../components/Quote';
import Proof from '../components/Proof';
import BookCta from '../components/BookCta';
import More from '../components/More';
import Kitchen from '../components/Kitchen';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="fn">
      <a className="skip" href="#coaching">
        Skip to coaching
      </a>

      <main id="top">
        <Hero />
      </main>

      <Ticker />
      <Coaching />
      <About />
      <Quote />
      <Proof />
      <BookCta />
      <More />
      <Kitchen />
      <Footer />
    </div>
  );
}
