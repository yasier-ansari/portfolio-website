import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from "next-themes";
import { AuthContextProvider } from "../utils/AuthContext";
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class" >
                <AuthContextProvider>
                    <main className={`land relative font-cal z-10 `}>
                        <Header />
                        <Component {...pageProps} />
                        <Footer />
                    </main>
                    <Toaster />
                </AuthContextProvider>
            </ThemeProvider >
        </>
    );
}
export default MyApp;

