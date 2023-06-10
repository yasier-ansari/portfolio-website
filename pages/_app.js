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
                    {/* <main className={`land relative flex grow w-full justify-center mx-auto font-cal z-10 `}>
                        <Header />
                        <Component {...pageProps} />
                        <Footer />
                    </main>
                    <Toaster /> */}
                    <div className={` relative land flex flex-col w-full h-full font-out min-h-screen `} >
                        <Header />
                        <main className="flex w-full grow h-full justify-center mx-auto pt-8" >
                            <Component {...pageProps} />
                        </main>
                        <Footer />
                        <Toaster />
                    </div>
                </AuthContextProvider>
            </ThemeProvider >
        </>
    );
    // return (
    //     <>
    //         <ThemeProvider enableSystem={true} attribute="class">
    //             <AuthContextProvider>
    //                 <div className="flex flex-col min-h-screen">
    //                     <div className="flex-grow">
    //                         <Header />
    //                         <main className="container mx-auto pt-8">
    //                             <Component {...pageProps} />
    //                         </main>
    //                     </div>
    //                     <Footer />
    //                 </div>
    //                 <Toaster />
    //             </AuthContextProvider>
    //         </ThemeProvider>
    //     </>
    // );
}
export default MyApp;

