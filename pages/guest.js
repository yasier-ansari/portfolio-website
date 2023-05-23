import Image from 'next/image';
import Contact from '../components/Contact';
import Blob from '../components/Blob';
import Experience from '../components/Experience';
import { useTheme } from 'next-themes';
import Main from '../public/image.png';
import Head from 'next/head';
import { FaLinkedinIn } from 'react-icons/fa';
import { signIn, useSession } from 'next-auth/react';
import { RiGithubLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

export default function Home() {
    const { theme, setTheme } = useTheme();
    const { data: session } = useSession();
    console.log(session);
    return (
        <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto">
            <Head>
                <title> My Projects ☁️ Yasier Ansari </title>
            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-24 flex flex-col items-center mx-auto">
                    <h2
                        className={` selection:text-black/40 font-sat dark:selection:text-white/40  bg-gradient-to-tr from-fuchsia-300 via-purple-400 to-indigo-600 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black`}
                    >
                        Guest 🔖
                    </h2>
                    <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg mb-2 ">
                        Leave a message for me and others! Share thoughts, appreciation,criticism or
                        anything. Stay friendly, spread positivity! Can&apos;t wait to hear from
                        you!
                    </p>
                    <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
                        {!session ? (
                            <div className="flex mx-auto items-center bg-gradient-to-tr px-4 md:px-6 lg:px-10 py-2 md:py-4 lg:py-6 rounded-lg dark:from-[#eefcff20] dark:via-[#faf5ff30] dark:to-[#fff2ec15] from-[#ebeded] via-[#e7e6e8] to-[#eae6e5] lg:bg-gradient-to-tr lg:hover:dark:from-[#eefcff20] lg:hover:dark:via-[#faf5ff30] lg:hover:dark:to-[#fff2ec15] flex-col gap-2 ">
                                <p className="text-black/80"> Sign in to post a message</p>
                                <div className="flex justify-center gap-4 ">
                                    {/* <button
                                        className="max-w-max rounded-lg dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-100 text-zinc-900 py-2 px-6 hover:shadow-xl duration-200 "
                                        onClick={() => SignIn('twitter')}
                                    >
                                        <SiTwitter className="inline-block mr-2" />
                                        Sign In
                                    </button> */}
                                    <button
                                        className="max-w-max rounded-lg flex items-center jusity-center dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-100 text-zinc-900 py-2 px-6 hover:shadow-xl duration-200 "
                                        onClick={() => signIn('linkedin')}
                                    >
                                        <FaLinkedinIn className="inline-block mr-2 h-4 w-4 md:h-5 md:w-5" />
                                        Sign In
                                    </button>
                                    <button
                                        className="max-w-max rounded-lg flex items-center jusity-center dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-100 text-zinc-900 py-2 px-6 hover:shadow-xl duration-200 "
                                        onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000' })}
                                    >
                                        <FiGithub className="inline-block mr-2 h-4 w-4 md:h-5 md:w-5 " />
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <p>Hello there {session.user.name}</p>
                                <Image src={session.user.image} width={80} height={80} alt="user image" />
                            </>
                        )
                        }
                    </div>
                </div>
                {/* <div className="mt-12 flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12 mx-auto items-center w-full md:w-[80%] lg:w-[75%]">
                    <WorkCard
                        title={'Google DSC'}
                        link={'/work/gdsc'}
                        description={
                            'Elegant and minimalistic Google DSC website made for M.H. Saboo Siddik College of Engineering'
                        }
                        arr={[1, null, 1, null, 1, null, null, null]}
                        img={'portfolio/gdsc-main_gnptrp'}
                        alt={'gdsc-website'}
                    />
                    <WorkCard
                        title={'Portfolio'}
                        link={'/work/portfolio'}
                        description={`full of life & colorful website you're seeing right now, is also a work of mine 😁`}
                        arr={[1, null, null, 1, 1, null, null, null]}
                        img={'portfolio/port_q37won'}
                        alt={'portoflio-website'}
                    />
                    <WorkCard
                        title={'muPy Chatbot'}
                        link={'/work/chatbot'}
                        description={
                            'A powerful intelligent Ai Chatbot made for National Level Hackathon Competition'
                        }
                        arr={[
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            1,
                            1,
                            null,
                        ]}
                        img={'portfolio/chat-main_xgrmyl'}
                        alt={'chat-bot'}
                    />
                    <WorkCard
                        title={'wordle Clone'}
                        link={'/work/wordle'}
                        alt={'wordle-clone'}
                        description={
                            'A fully fledged working clone of a popular word puzzle game by Times, Wordle'
                        }
                        arr={[
                            1,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            1,
                            null,
                        ]}
                        img={'portfolio/wordle-1_fwq19g'}
                    />
                    <WorkCard
                        title={'Zeyn eComm'}
                        link={'/work/zeyn'}
                        description={
                            'Completely secure and Robust Online Marketplace made with Java and kotlin'
                        }
                        arr={[
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            1,
                            1,
                            null,
                            null,
                            null,
                            null,
                            1,
                            1,
                        ]}
                        img={'portfolio/zeyn-main_rlkyvj'}
                        alt={'zeyn-ecomm'}
                    />
                    <WorkCard
                        title={'Da-tree '}
                        link={'/work/da-tree'}
                        description={
                            'showcase your online presence and portfolios with nothing but a json file, Linktree alternative'
                        }
                        arr={[
                            null,
                            1,
                            1,
                            1,
                            1,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                        ]}
                        img={'portfolio/da-tree_wx1q6z'}
                        alt={'da-tree'}
                    />
                    <WorkCard
                        title={'Cryplog '}
                        link={'/work/cryplog'}
                        description={
                            'showcase your online presence and portfolios with nothing but a json file, Linktree alternative'
                        }
                        arr={[
                            null,
                            1,
                            1,
                            1,
                            1,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                        ]}
                        img={'portfolio/cryplog-1_xh93ti'}
                        alt={'cryplog'}
                    />
                </div> */}
            </main>
        </div>
    );
}
