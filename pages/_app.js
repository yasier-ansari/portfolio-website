import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <ThemeProvider enableSystem={true} attribute="class">
                <main className="land relative z-10">
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </main>
            </ThemeProvider>
        </SessionProvider>
    );
}
export default MyApp;
