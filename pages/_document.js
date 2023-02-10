import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';

export default function Document() {
    return (
        <Html className="scroll-smooth" prefix="https://ogp.me/ns/website#">
            <Head>
                {/* facebook card */}
                <meta property="og:site_name" content="Yasier Ansari | Noru 💖" itemProp="name" />
                <meta property="og:url" content="https://noru.vercel.app/" />
                <meta property="og:description" itemProp="description" content="Google DSC web Co-lead | Web Dev | Student with a love for all things colorful & creative.Always looking for ways to deepen my expertise in technology and coding. When not coding, ✨cats and ✨books are my escape plan" />
                <meta property="og:image" itemProp="image" content="https://res.cloudinary.com/dwpxnfbhz/image/upload/c_fill,e_auto_saturation,g_center,h_945,q_50,w_1800/v1676054986/seo/port_oyaskk.jpg" />
                <meta property="og:image:height" content="1200" />
                <meta property="og:image:width" content="800" />
                <meta property="og:type" content="website" />
                {/* twitter card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Yasier_noru" />
                <meta property="twitter:url" content="@Yasier_noru" />
                <meta property="twitter:title" content="Yasier Ansari | Noru  " />
                <meta property="twitter:description" content="Google DSC web Co-lead | Web Dev | Student with a love for all things colorful & creative. always looking for ways to deepen my expertise in technology and coding" />
                <meta property="twitter:image" content="https://res.cloudinary.com/dwpxnfbhz/image/upload/c_fill,e_auto_saturation,g_center,h_784,q_50,w_1500/v1676054986/seo/port_oyaskk.jpg" />
                {/* canonical links */}
                <link rel="search" href="/opensearch.xml" type="application/opensearchdescription+xml" title="Yasier Ansari Noru" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Krona+One&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Outfit:wght@300;400;500;600;700;800;900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Quicksand:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="back font-quick mx-auto bg-[#fffdfd] overflow-x-hidden lg:transform-gpu">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
