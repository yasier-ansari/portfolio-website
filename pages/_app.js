import '../styles/globals.css';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
    return (
        <main className="land relative z-10">
            <svg id="texture">
                <filter id="noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency=".85"
                        numOctaves="2"
                        stitchTiles="stitch"
                    ></feTurbulence>
                    <feColorMatrix type="saturate" values="0"></feColorMatrix>
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)"></rect>
            </svg>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </main>
    );
}
export default MyApp;
