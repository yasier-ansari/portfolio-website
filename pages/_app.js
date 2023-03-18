import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider enableSystem={true} attribute="class" >
            <main className="land relative z-10">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </main>
        </ThemeProvider>
    );
}
export default MyApp;
