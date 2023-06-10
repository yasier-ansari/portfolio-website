import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import Image from "next/image";
import { FiGithub, FiPenTool } from 'react-icons/fi'
import Im from '../public/pfpimg.jpeg'
import { createTweet, fetchTweetsWithUserProfiles } from "../utils/config";
import useSession from "../utils/useSession";
import { NextSeo } from "next-seo";
import seoConfig from "../utils/seoConfig";
import { toast } from "react-hot-toast";
import TimeRender from "../components/TimeRender";
import PageDivider from "../components/PageDivider";
// import { toast } from "react-toastify";


const Mark = () => {
    const { userInfo, authReady } = useContext(AuthContext);
    const [loggedin, setLoggedin] = useState(false);
    const [loadDone, setLoadDone] = useState(false);
    const { login, logout } = useSession();
    const [tweetContent, setTweetContent] = useState("");
    const [tweetLimitExceeded, setTweetLimitExceeded] = useState(0);
    const [tweetCooldown, setTweetCooldown] = useState(false);
    const [textareaheight, setTextareaheight] = useState(1);
    const [data, setData] = useState(null);
    const [flag, setFlag] = useState(false);
    const textAreaRef = useRef(null);

    const handleMark = async (e) => {
        e.preventDefault();
        if (tweetLimitExceeded >= 5) {
            toast(
                "Only 5 comments can be posted per user",
                {
                    duration: 1500,
                    icon: "😓"
                }
            );
            return
        } else if (tweetCooldown) {
            toast(
                "Only 1 comments per 24 hours",
                {
                    duration: 1500,
                    icon: "😓"
                }
            );
            return
        } else {
            try {
                if (tweetContent === "") {
                    toast("Mark a valid/non-empty post", {
                        icon: "😐",
                        duration: 1500
                    })
                    return
                } else {
                    await createTweet(userInfo, tweetContent);
                    setTweetCooldown(true);
                    const incr = tweetLimitExceeded + 1
                    setTweetLimitExceeded(incr);
                    toast("Mark posted successfully", {
                        icon: "🥳",
                        duration: 2000
                    })
                    setTweetContent("");
                    setFlag(!flag);
                }
            }
            catch (e) {
                toast(`${e.message}`, { duration: 1500, icon: "🤒" })
                console.log(e);
            }
        }
        setTweetCooldown(true);
        setTweetLimitExceeded(tweetLimitExceeded => tweetLimitExceeded + 1)
    }
    const inputHandler = (e) => {
        setTweetContent(e.target.value);
        const textarea = textAreaRef.current;
        textarea.style.height = 'auto'; // Reset the height to auto to recalculate the height

        const height = textarea.scrollHeight;
        textarea.style.height = height + 'px';
    }
    const getData = async () => {
        if (userInfo) {
            const res = await fetchTweetsWithUserProfiles();
            console.log(res);
            setData(res);
            setLoggedin(true)
            setLoadDone(false);
            if (
                userInfo?.lastTweetAt &&
                Math.floor(
                    (Date.now() - userInfo?.lastTweetAt?.toMillis()) / (24 * 60 * 60 * 1000)
                ) < 1
            ) {
                setTweetCooldown(true)
            } else {
                setTweetCooldown(false);
            }
            setTweetLimitExceeded(userInfo?.tweetCount);
            setLoadDone(false);
        } else {
            setLoggedin(false)
        }
    }
    useEffect(() => {
        getData();
    }, [authReady, userInfo]);
    const getTweet = async () => {
        const res = await fetchTweetsWithUserProfiles();
        setData(res);
    }
    useEffect(() => {
        getTweet();
    }, [flag, tweetCooldown, tweetLimitExceeded]);
    console.log(userInfo)
    console.log(tweetCooldown, "cooldown");
    console.log(tweetLimitExceeded, "tweet limit");
    return (
        <>
            <NextSeo {...seoConfig['/mark']} />
            <main className="px-6 xs:px-10 sm:px-20 md:px-32 lg:mb-0 lg:px-60 mx-auto h-full w-full ">
                <div className="pt-8 h-full flex flex-col items-center mx-auto">
                    <h2
                        className={` selection:text-black/40 dark:selection:text-white/40  bg-gradient-to-tr from-fuchsia-500 via-purple-400 to-sky-700 bg-clip-text text-transparent items-center mx-auto text-3xl xs:text-4xl lg:text-5xl xl:text-6xl font-extrabold`}
                    >
                        Mark-it!
                    </h2>
                    <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg xl:text-xl mb-2 ">
                        Leave a message for me and others! Share thoughts, appreciation,criticism or
                        anything.
                    </p>
                    {
                        !authReady ? (
                            <div className="flex bg-gray-300/10 dark:bg-rose-100/20 px-4 md:px-6 lg:px-10 py-3 md:py-4 lg:pb-6 rounded-lg  relative flex-col items-center w-[85%]  sm:w-[75%] md:w-[65%] max-w-3xl space-y-4 xs:space-y-5 md:space-y-auto  jusitfy-center " >
                                <div class=" absolute inset-0 top-[50%] left-[50%] animate-spin inline-block w-6 h-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 border-[3.5px] md:border-[4px] lg:border-[5px] border-current border-t-transparent z-20 text-purple-400 rounded-full " aria-label="loading">
                                </div>
                                <div class="absolute top-0 left-0 backdrop-blur-[1.5px] h-full w-full z-10 "></div>
                                <div className="flex animate-pulse bg-gray-200/60 dark:bg-gray-100/40 h-6 sm:h-8 md:h-10 lg:h-[2.6rem] rounded-lg shadow-lg grow w-full" >
                                </div>
                                <div className="flex animate-pulse bg-gray-100 dark:bg-gray-100/30 self-start h-3 sm:h-4 md:h-6 rounded-lg shadow-lg grow w-[50%]" >
                                </div>
                                <div className="flex animate-pulse bg-purple-200/80 dark:bg-purple-400/40 h-6 sm:h-8 md:h-10 rounded-lg shadow-lg grow w-[60%] md:w-[40%] items-center " >
                                </div>
                            </div>

                        ) :
                            !userInfo ? (
                                <div className="select-none flex w-[85%] sm:w-[75%] md:w-[65%] max-w-3xl justify-center items-center mt-2 text-gray-400">
                                    <div className="flex mx-auto items-center bg-gradient-to-tr px-4 md:px-6 lg:px-10 py-2 md:py-4 lg:pb-6 rounded-lg dark:from-[#eefcff20] dark:via-[#faf5ff30] dark:to-[#fff2ec15] from-[#ebeded] via-[#e7e6e8] to-[#eae6e5] lg:bg-gradient-to-tr lg:hover:dark:from-[#eefcff20] lg:hover:dark:via-[#faf5ff30] lg:hover:dark:to-[#fff2ec15] flex-col gap-2 ">
                                        <p className="dark:text-white text-black/80"> Sign in to post a message</p>
                                        <div className="flex justify-center gap-4 ">
                                            <button
                                                onClick={login}
                                                className="max-w-max rounded-lg flex items-center jusity-center dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-100 text-zinc-900 py-2 px-6 hover:shadow-xl duration-200 "
                                            >
                                                <FiGithub className="inline-block mr-2 h-4 w-4 md:h-5 md:w-5 " />
                                                Sign In
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col w-[85%] sm:w-[80%] md:w-[65%] max-w-2xl justify-center items-center mt-2 dark:bg-zinc-300/20 bg-zinc-200/60 border dark:border-stone-100/20 border-stone-300 shadow-lg rounded-xl p-5 lg:p-8 " >
                                    <form className="w-full mx-auto flex flex-col items-center"
                                        onSubmit={(e) => handleMark(e)}>
                                        <textarea
                                            value={tweetContent}
                                            ref={textAreaRef}
                                            onInput={inputHandler}
                                            placeholder="Share your thoughts"
                                            maxLength={200}
                                            rows={textareaheight}
                                            style={{ maxHeight: "35rem" }}
                                            className="w-[100%] rounded-lg resize-none leading-normal flex items-center text-sm lg:text-base 2xl:text-lg dark:bg-[#333] bg-white focus:outline-gray-400 dark:focus:outline-gray-100/20 dark:text-white p-2 md:p-3 xl:p-4 "
                                        ></textarea>
                                        <span className="self-start dark:text-gray-400 text-gray-500 px-2 mt-2 mb-3 text-xs md:text-sm" > {200 - tweetContent.length} chracters remaining</span>
                                        <button type="submit" className=" flex items-center justify-center -mb-1 py-2 md:py-3 px-4 sm:px-5 lg:px-6 font-medium dark:text-zinc-200 text-zinc-800 bg-purple-300/50 dark:bg-purple-600/50  rounded-lg shadow-2xl border border-gray-300 group ">
                                            mark it <FiPenTool className="ml-3 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 rotate-90 group-hover:rotate-[135deg] transition-all duration-200 " />
                                        </button>
                                    </form>
                                </div>
                            )
                    }
                    <div className="flex justify-center select-none space-x-6 md:space-x-8 w-full mt-12">
                        <PageDivider text={"marked 📍"} />
                    </div>
                    {/* <div className="flex flex-col w-full justify-center space-y-4 items-center "> */}
                    <div className="flex mx-auto w-[95%] xs:w-[90%] sm:w-[75%] md:w-[65%] lg:w-[50%] max-w-3xl items-center bg-gradient-to-tr mt-4 py-2 md:py-4 lg:py-6 rounded-lg flex-col space-y-4 md:space-y-6 lg:space-y-8 ">
                        <div key={-1} className="flex flex-col max-w-3xl p-4 md:p-5 lg:p-6 space-y-4 rounded-xl border-[0.1px] border-stone-300 shadow-xl  dark:border-zinc-500  " >
                            <div className="flex justify-between items-center" >
                                <div className="flex items-center h-max " >
                                    <Image src={Im} width={50} height={50} alt="user" className="rounded-full mr-3 h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 md:w-11 md:h-11 xl:h-16 xl:w-16" />
                                    <div className="flex flex-col -space-y-2 " >
                                        <p className="text-[0.95rem] xs:text-base sm:text-lg md:text-xl xl:text-2xl font-[500] text-gray-800 dark:text-gray-200 " >noru</p>
                                        <p className="font-[450] text-gray-500 text-xs xs:text-base " >@yasier-ansari</p>
                                    </div>
                                </div>
                                <a href={`https://github.com/yasier-ansari`} className="rounded-lg p-2 lg:p-3 bg-purple-100 dark:bg-purple-100/20 " target="_blank" rel="noreferrer" >
                                    <FiGithub className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 " />
                                </a>
                            </div>
                            <p className=" text-[0.9rem] xs:text-[0.94rem] sm:text-[1.05rem] md:text-[1.09rem] lg:text-[1.1rem] leading-5 sm:leading-normal " >hello there, welcome to mark area, be sure to spread positivity here ✌🏻🍀🕊️☮️ </p>
                        </div>
                        {
                            data?.map((el, idx) => (
                                <div key={idx} className="flex flex-col w-full max-w-3xl p-4 md:p-5 lg:p-6 space-y-4 rounded-xl border-[0.1px] border-stone-300 shadow-xl  dark:border-zinc-500  " >
                                    <div className="flex justify-between items-center" >
                                        <div className="flex items-center h-max " >
                                            <Image src={el?.userProfile.imgUrl} width={50} height={50} alt="user" className="rounded-full mr-3 h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 md:w-11 md:h-11 xl:h-16 xl:w-16 " />
                                            <div className="flex flex-col -space-y-2 " >
                                                <p className=" text-[0.95rem] xs:text-base sm:text-lg md:text-xl xl:text-2xl font-[500] text-gray-800 dark:text-gray-200  " >{el?.userProfile.name.toLowerCase()}</p>
                                                <p className="font-[450] text-gray-500 text-xs xs:text-base " >@{el?.userProfile.githubUsername}</p>
                                            </div>
                                        </div>
                                        <a href={`https://github.com/${el?.userProfile?.githubUsername}`} className="rounded-lg p-2 lg:p-3 bg-purple-100 dark:bg-purple-100/20 " target="_blank" rel="noreferrer" >
                                            <FiGithub className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 " />
                                        </a>
                                    </div>
                                    <p className=" text-[0.9rem] xs:text-[0.94rem] sm:text-[1.05rem] md:text-[1.09rem] lg:text-[1.1rem] " >{el?.tweet?.tweet} </p>
                                    <TimeRender dateObj={el?.tweet?.createdAt} />
                                </div>
                            ))
                        }
                    </div>
                    {/* </div> */}
                </div>
            </main>
        </>
    );
}

export default Mark;
