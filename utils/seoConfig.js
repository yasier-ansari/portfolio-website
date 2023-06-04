import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const seoConfig = {
    default: {
        title: 'Yasier Ansari | Web Dev',
        description: 'Google DSC web Co-lead | Web Dev | DevOps | AI-ML | Figma Design | Student with a love for all things colorful & creative ...',
        keywords: "YASIER.IN,YASIER ANSARI,  YASIER NORU,  MH SABOO SIDDIK,  GOOGLE DSC WEB,  GDSC WEB LEAD,  ANSARI MD YASIER,  NEXTJS WEB DEVELOPER,  REACTJS WEB DEV,  TAILWINDCSS WEB DEVELOPER,  INDIAN WEB DEVELOPER,  INDIAN GDSC LEAD,  INDIAN GOOGLE DEVELOPER STUDENT CLUB LEAD",
        robots: "index, follow",
        openGraph: {
            title: 'Yasier Ansari | Web Dev',
            description: 'Google DSC CL | Web Dev | Student with a love for all things colorful & creative ...',
            type: 'website',
            locale: 'en_EN',
            site_name: 'Yasier Ansari',
            url: "https://www.yasier.in",
            images: [
                {
                    url: 'https://res.cloudinary.com/yasier/image/upload/c_fill,e_auto_saturation,g_center,h_945,q_90,w_1800/v1676054986/seo/card_fj8hfc.jpg',
                    width: 1800,
                    height: 945,
                    alt: 'Yasier Ansari | Web Dev',
                },
            ],
        },
        twitter: {
            title: 'Yasier Ansari | Web Dev',
            site: '@Yasier_noru',
            cardType: 'summary_large_image',
        },
        canonical: 'https://www.yasier.in/',
    },
    '/tech': {
        title: 'Tech & Tool I use ⚒️ | Yasier Ansari',
        description: 'Just like any other dev, I also spend more time searching and experimenting tools than actually coding some senseful things 😎',
        robots: 'index, follow',
        keywords: 'YASIER.IN,YASIER ANSARI, YASIER NORU, MH SABOO SIDDIK, GOOGLE DSC WEB, GDSC WEB LEAD, ANSARI MD YASIER, NEXTJS WEB DEVELOPER, REACTJS WEB DEV, TAILWINDCSS WEB DEVELOPER, INDIAN WEB DEVELOPER, INDIAN GDSC LEAD, INDIAN GOOGLE DEVELOPER STUDENT CLUB LEAD',
        openGraph: {
            title: 'Tech & Tool I use ⚒️ | Yasier Ansari',
            description: 'Tech Stack and Tools that I use in my everyday life',
            type: 'website',
            locale: 'en_EN',
            site_name: 'Yasier Ansari',
            url: "https://www.yasier.in/tech",
            images: [
                {
                    url: 'https://res.cloudinary.com/yasier/image/upload/c_fill,e_auto_saturation,g_center,h_945,q_90,w_1800/v1676054986/seo/tech_zgv9un.jpg',
                    width: 1800,
                    height: 945,
                    alt: 'Tech Page Image'
                }
            ]
        },
        twitter: {
            title: 'Yasier Ansari | Web Dev',
            site: '@Yasier_noru',
            cardType: 'summary_large_image',
        },
        canonical: 'https://www.yasier.in/tech'
    },
    '/mark': {
        title: "Mark it! 📍 | Yasier Ansari",
        description: "Leave a message for me and others! Share thoughts, appreciation, criticism or anything. I'm always eager to hear some encouraging words 🥰",
        keywords: 'YASIER.IN, YASIER ANSARI, YASIER NORU, MH SABOO SIDDIK, GOOGLE DSC WEB, GDSC WEB LEAD, ANSARI MD YASIER, NEXTJS WEB DEVELOPER, REACTJS WEB DEV, TAILWINDCSS WEB DEVELOPER, INDIAN WEB DEVELOPER, INDIAN GDSC LEAD, INDIAN GOOGLE DEVELOPER STUDENT CLUB LEAD',
        author: "Yasier Ansari",
        robots: "index, follow",
        openGraph: {
            title: "Mark it! 📍 | Yasier Ansari",
            description: "Leave a message for me and others! Share thoughts, appreciation, criticism or anything. I'm always eager to hear some encouraging words 🥰",
            type: "website",
            url: "https://www.yasier.in/mark",
            images: [
                {
                    url: "https://res.cloudinary.com/yasier/image/upload/c_fill,e_auto_saturation,g_center,h_945,q_90,w_1800/v1676054986/seo/mark_vcjwzs.jpg",
                    width: 1800,
                    height: 945,
                    alt: "Yasier Ansari | Web Dev"
                }
            ],
            image: "https://res.cloudinary.com/yasier/image/upload/c_fill,e_auto_saturation,g_center,h_945,q_90,w_1800/v1676054986/seo/mark_vcjwzs.jpg",
        },
        twitter: {
            handle: '@Yasier_noru',
            cardType: 'summary_large_image',
            site: 'https://.yasier.in',
            title: "Mark it! 📍 | Yasier Ansari",
            description: "Leave a message for me and others! Share thoughts, appreciation, criticism or anything.",
            image: "https://res.cloudinary.com/yasier/image/upload/c_fill,e_auto_saturation,g_center,h_750,q_80,w_1500/v1676054986/seo/mark_vcjwzs.jpg",
        },
        canonical: "https://yasier.in/mark"
    },
    '/work': {
        title: "Works 🚀| Yasier Ansari",
        description: "From websites with pastel hues to intelligent ML models, infused with little bit of playfulness. So go ahead, and take a look around 💖",
        keywords: 'YASIER.IN, YASIER ANSARI, YASIER NORU, MH SABOO SIDDIK, GOOGLE DSC WEB, GDSC WEB LEAD, ANSARI MD YASIER, NEXTJS WEB DEVELOPER, REACTJS WEB DEV, TAILWINDCSS WEB DEVELOPER, INDIAN WEB DEVELOPER, INDIAN GDSC LEAD, INDIAN GOOGLE DEVELOPER STUDENT CLUB LEAD',
        author: "Yasier Ansari",
        robots: "index, follow",
        openGraph: {
            title: "Works 🚀| Yasier Ansari",
            description: "Go ahead, and take a look at my pastel and full of positive vibes project 💖",
            type: "website",
            locale: "en_EN",
            site_name: "Yasier Ansari",
            url: "https://www.yasier.in/work",
            images: [
                {
                    url: "https://res.cloudinary.com/yasier/image/upload/c_fill,e_auto_saturation,g_center,h_945,q_90,w_1800/v1676054986/seo/work_oluytx.jpg",
                    width: 1800,
                    height: 945,
                    alt: "Yasier Ansari | Web Dev"
                }
            ],
        },
        twitter: {
            title: 'Yasier Ansari | Web Dev',
            site: '@Yasier_noru',
            cardType: 'summary_large_image',
        },
        canonical: "https://yasier.in/work"
    },
    '/about': {
        title: "About Me 😎 | Yasier Ansari",
        description: "A skilled software developer, web developer & UI-UX designer with a passion for creating intuitive and functional applications with clean code advocacy. Currently pursuing my 4 year Bachelors program - B.E. and residing in mumbai.",
        keywords: 'YASIER.IN, YASIER ANSARI, YASIER NORU, MH SABOO SIDDIK, GOOGLE DSC WEB, GDSC WEB LEAD, ANSARI MD YASIER, NEXTJS WEB DEVELOPER, REACTJS WEB DEV, TAILWINDCSS WEB DEVELOPER, INDIAN WEB DEVELOPER, INDIAN GDSC LEAD, INDIAN GOOGLE DEVELOPER STUDENT CLUB LEAD',
        author: "Yasier Ansari",
        robots: "index, follow",
        openGraph: {
            title: "About Me 😎 | Yasier Ansari",
            description: "Web developer & UI-UX designer with a passion for creating intuitive and functional applications with clean code advocacy",
            type: "website",
            locale: 'en_EN',
            site_name: 'Yasier Ansari',
            url: "https://www.yasier.in/about",
            images: [
                {
                    url: "https://res.cloudinary.com/yasier/image/upload/c_fill,e_auto_saturation,g_center,h_945,q_90,w_1800/v1676054986/seo/about_astopi.jpg",
                    width: 1800,
                    height: 945,
                    alt: 'Yasier Ansari | Web Dev',
                },
            ],
        },
        twitter: {
            title: 'Yasier Ansari | Web Dev',
            site: '@Yasier_noru',
            cardType: 'summary_large_image',
        },
        canonical: "https://yasier.in/about"
    },
};

export default seoConfig;
