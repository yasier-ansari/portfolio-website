import WorkCard from '../components/WorkCard';
import { CldImage } from "next-cloudinary";
import { NextSeo } from "next-seo";
import seoConfig from "../utils/seoConfig";
import PageDivider from "../components/PageDivider";
export default function Work() {
    return (
        <>
            <NextSeo {...seoConfig['/work']} />
            <main className="px-10 sm:px-20 md:px-32 lg:mb-0 lg:px-48 mx-auto h-full">
                <div className="pt-12 flex flex-col items-center mx-auto">
                    <h2
                        className={` selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-4xl lg:text-5xl xl:text-6xl font-extrabold`}
                    >
                        Works
                    </h2>
                    <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg xl:text-xl mb-2 ">
                        From websites with pastel hues to intelligent ML models, infused with little
                        bit of playfulness. So go ahead, and take a look around 💖
                    </p>
                    <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
                        <PageDivider text={"✦"} />
                    </div>
                </div>
                <div className="mt-12 flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12 mx-auto items-center w-full md:w-[85%] lg:w-[80%]">
                    <WorkCard
                        title={'Google DSC'}
                        link={'/work/gdsc'}
                        description={
                            'Elegant and minimalistic Google DSC website made for M.H. Saboo Siddik College of Engineering'
                        }
                        arr={[1, null, 1, null, 1, null, null, null]}
                        img={'portfolio/gdsc-main_gnptrp'}
                        alt={"gdsc-website"}
                    />
                    <WorkCard
                        title={'Portfolio'}
                        link={'/work/portfolio'}
                        description={`full of life & colorful website you're seeing right now, is also a work of mine 😁`}
                        arr={[1, null, null, 1, 1, null, null, null]}
                        img={'portfolio/port_q37won'}
                        alt={"portoflio-website"}
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
                        alt={"wordle-clone"}
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
                        alt={"zeyn-ecomm"}
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
                        alt={"da-tree"}
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
                        alt={"cryplog"}
                    />
                </div>
            </main>
        </>
    );
}
