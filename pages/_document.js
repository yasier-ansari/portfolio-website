import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className="scroll-smooth" prefix="https://ogp.me/ns/website#" lang="en" >
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

            </Head>
            <body className="back w-full h-max min-w-screenfont-out mx-auto bg-[#fffdfd] dark:bg-[#313131] lg:transform-gpu ">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
