import Head from 'next/head';
import Image from 'next/image';
import Contact from '../components/Contact';
import Blob from '../components/Blob';

export default function Home() {
    return (
        <div className=" px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto">
            <Head>
                <title>noru ✨ web dev ✨ student </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-screen min-h-screen">
                <Blob />
                <div className=" flex flex-col justify-center space-y-8 lg:flex-row lg:py-20 lg:space-x-20 items-center lg:justify-between">
                    <div className="flex flex-col lg:basis-[50%] space-y-12 ">
                        <div className="flex mt-20 -mb-3 -space-x-0 items-end justify-center lg:justify-start">
                            <h2 className="font-space animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl lg:text-4xl xl:text-5xl font-black">
                                Noru_{' '}
                            </h2>
                            <p className=" rounded-2xl px-3 py-0 bg-purple-300 font-semibold text-base">
                                yasier
                            </p>
                        </div>
                        <p className="mt-12 font-base text-sm md:text-md lg:text-lg xl:text-xl ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                            fugiat provident labore maxime dignissimos, unde rem quae natus neque
                            quisquam quaerat optio ipsam! Dignissimos consectetur doloremque
                            nostrum. Doloremque, molestias cupiditate.
                        </p>
                    </div>
                    <div className="lg:basis-[50%] xl:basis-[60%] pt-6 md:pt-0 ">
                        <Image
                            src={'/main.png'}
                            width={600}
                            height={400}
                            alt={'main image'}
                            className=" w-60 h-52 md:w-80 md:h-72 lg:w-[20rem] lg:h-[18rem] xl:w-[24rem] xl:h-[22rem] "
                        />
                    </div>
                </div>
                <div class="mt-28 mx-auto">
                    <Contact />
                </div>
            </div>
        </div>
    );
}
