import Head from 'next/head';
import Image from 'next/image';
import CategoryCard from '../components/About-cat';

export default function About() {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto">
            <Head>
                <title>noru ✨ web dev ✨ student </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" min-h-screen max-w-screen ">
                <div className=" mx-auto pt-16 ">
                    <div className="mt-12 mx-auto flex flex-col ">
                        <div className="mx-auto">
                            <Image
                                src={'/pfpimg.jpeg'}
                                height={150}
                                width={150}
                                className="rounded-2xl drop-shadow-md shadow-2xl border border-white"
                                alt="yasier ansari"
                                priority
                            />
                        </div>
                        <div className="text-center mx-auto mt-8 z-20">
                            <h3 className="mx-auto font-nun font-extrabold text-lg lg:text-xl xl:text-2xl">
                                Yasier Ansari
                            </h3>
                            <p className="text-gray-400 font-semibold text-xs sm:text-sm md:text-md lg:text-lg ">
                                NOOB web dev, PRO crastinator
                            </p>
                        </div>
                    </div>
                    {/* <div className="flex items-center font-semibold justify-between w-[60%]  mx-auto mt-6 mb-8 ">
                        <div className=" bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4] rounded-[0.89rem] px-3 text-[#cf3903]">
                            design
                        </div>
                        <div className=" bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem] px-3 text-[#097360]">
                            full-stack
                        </div>
                        <div className=" bg-gradient-to-l from-[#cde1ff] to-[#f9d2ff] rounded-[0.89rem] px-3 text-[#4e0aa2]">
                            data science
                        </div>
                        <div className=" bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-3 text-[#690c58]">
                            web3
                        </div>
                    </div> */}
                    <CategoryCard />
                    <div className="text-sm md:text-md lg:text-lg xl:text-xl mx-auto font-[450]">
                        <p className="mt-6 mb-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus inventore
                            similique aliquid corporis numquam tempora earum praesentium placeat nam
                            quisquam autem voluptatem quam, optio modi, dolore ratione itaque sunt.
                            Ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                            quidem incidunt cupiditate ex vero nam ab perspiciatis enim qui, optio
                            et iste nemo, assumenda sed ut eligendi. Maxime, ad facere!{' '}
                        </p>

                        <Image
                            src={'/about-gdsc.jpg'}
                            width={500}
                            height={350}
                            className="flex mx-auto rounded-3xl mb-12"
                            alt="gdsc image"
                        />

                        <p className="pb-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                            expedita saepe et suscipit aliquid natus maxime asperiores non ut dicta
                            porro, praesentium, eveniet repudiandae minus, eum adipisci ducimus
                            architecto sit? Dolorum harum voluptates ipsam eum, unde in maxime
                            numquam exercitationem quo dicta doloremque aliquam, possimus aspernatur
                            distinctio reprehenderit recusandae quisquam labore impedit
                            perspiciatis, ab consequatur optio. Tempora iure nulla eligendi!
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
