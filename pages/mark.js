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
                        duration: 2000
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
    console.log(tweetCooldown, "cooldown");
    console.log(tweetLimitExceeded, "tweet limit");
    return (
        <>
            <NextSeo {...seoConfig['/mark']} />
            <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto">
                <main className="min-h-screen max-w-screen ">
                    <div className="pt-20 flex flex-col items-center mx-auto">
                        <h2
                            className={` selection:text-black/40 dark:selection:text-white/40  bg-gradient-to-tr from-fuchsia-500 via-purple-400 to-sky-700 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold`}
                        >
                            Mark-it!
                        </h2>
                        <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg mb-2 ">
                            Leave a message for me and others! Share thoughts, appreciation,criticism or
                            anything.
                        </p>
                        {
                            !userInfo ? (
                                <div className="select-none flex w-[85%] sm:w-[75%] md:w-[65%] max-w-3xl justify-center space-x-4 items-center mt-2 text-gray-400">
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
                                            placeholder="Share your thoughts here"
                                            maxLength={200}
                                            rows={textareaheight}
                                            style={{ minHeight: '3rem', maxHeight: "35rem" }}
                                            className="w-[100%] rounded-lg resize-none leading-normal text-sm lg:text-base 2xl:text-lg dark:bg-[#333] bg-white focus:outline-gray-400 dark:focus:outline-gray-100/20 dark:text-white p-2 md:p-3 xl:p-4 "
                                        ></textarea>
                                        <span className="self-start dark:text-gray-400 text-gray-500 px-2 mt-2 mb-3 text-xs md:text-sm" > {200 - tweetContent.length} chracters remaining</span>
                                        <button type="submit" className=" flex items-center justify-center -mb-1 py-2 md:py-3 px-4 sm:px-5 lg:px-6 font-medium dark:text-zinc-200 text-zinc-800 bg-purple-300/50 dark:bg-purple-600/50  rounded-lg shadow-2xl border border-gray-300 group ">
                                            mark it <FiPenTool className="ml-3 h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 rotate-90 group-hover:rotate-[135deg] transition-all duration-200 " />
                                        </button>
                                    </form>
                                </div>
                            )
                        }
                        <div className="flex justify-center select-none space-x-8 items-center mt-12">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="124"
                                height="14"
                                fill="currentColor"
                                className=" fill-gray-400  rotate-180"
                            >
                                <path d="M0.466181 9.35938C1.28178 11.6167 3.44138 14 6.28256 14L6.40126 13.9497C7.46574 13.917 8.6719 13.5571 9.63683 12.8442C10.3414 12.3223 10.9196 11.6108 11.2144 10.6987C11.3982 10.0728 11.4556 9.4126 11.3791 8.76221C11.3025 8.11182 11.0919 7.48584 10.7664 6.92579C10.3184 6.20362 9.69044 5.62452 8.9476 5.25293C8.20475 4.88135 7.37767 4.73145 6.55825 4.81934C6.47401 4.82325 6.38977 4.84473 6.31319 4.88331C6.23661 4.92188 6.16768 4.97657 6.11025 5.04346C6.05664 5.11036 6.01069 5.18848 5.98389 5.27295C5.96091 5.35791 5.94943 5.44727 5.95708 5.53614C5.95708 5.62696 5.9724 5.71729 6.01069 5.80079C6.04515 5.88379 6.09876 5.95801 6.16385 6.01758C6.22895 6.07764 6.30553 6.12159 6.38977 6.14698C6.47401 6.17237 6.56208 6.17872 6.65015 6.16504C7.15941 6.08985 7.684 6.15137 8.16646 6.34375C8.64893 6.53614 9.07778 6.85303 9.41474 7.26465C9.7517 7.67676 9.98145 8.1709 10.0848 8.70069C10.1882 9.23047 10.1614 9.7793 10.0121 10.2964C9.49133 11.9565 7.56913 12.6104 6.40126 12.648C4.22634 12.7236 2.35392 10.8057 1.65703 8.875C1.45791 8.34717 1.33538 7.79346 1.28943 7.23243C1.25497 6.78614 1.27029 6.33497 1.33538 5.88868C1.48472 4.88086 1.88294 3.93262 2.49942 3.14014C3.64815 1.75049 5.49376 1.12159 7.68783 1.3667C10.2495 1.65625 12.0147 3.49854 12.8609 4.37891C13.0141 4.54737 13.1787 4.73926 13.351 4.94581L13.7263 5.41016C15.2503 7.30323 17.5401 10.1704 21.6065 8.32178C22.1771 8.01563 22.6557 7.55323 22.9927 6.98389C23.2645 6.53174 23.4368 6.0254 23.4981 5.5H123.51C123.659 5.5 123.789 5.4336 123.877 5.32862C123.954 5.24073 124 5.12598 124 5C124 4.72364 123.782 4.5 123.51 4.5H23.4598C23.3488 3.93848 23.1075 3.41211 22.7476 2.97266C22.2613 2.38233 21.5951 1.98584 20.8599 1.85108C20.4923 1.81055 20.1209 1.83838 19.7647 1.93067C19.5159 1.99561 19.2746 2.09229 19.0449 2.21973C18.4858 2.52881 18.0302 3.00489 17.7315 3.58643C17.6817 3.66358 17.6434 3.75147 17.6243 3.84424L17.6166 3.93897C17.6128 4.00147 17.6166 4.06397 17.6281 4.125C17.6511 4.21729 17.6894 4.30372 17.743 4.37891C17.8004 4.45459 17.8694 4.51661 17.9459 4.56153L18.057 4.60987C18.1068 4.62598 18.1565 4.63624 18.2063 4.64014C18.2638 4.64454 18.325 4.64014 18.3825 4.62647L18.4705 4.60059C18.5548 4.56788 18.6352 4.51661 18.6964 4.4502C18.7386 4.40723 18.773 4.35791 18.8037 4.30469L18.8458 4.21534C19.0181 3.86573 19.2861 3.57813 19.6154 3.3877C19.9485 3.19727 20.3238 3.11377 20.699 3.14649C21.1317 3.2417 21.5185 3.4878 21.8018 3.84375C22.0852 4.2002 22.2422 4.646 22.2498 5.1084C22.2307 5.51172 22.1158 5.9043 21.9167 6.24903C21.7176 6.59424 21.4342 6.88086 21.1011 7.08301C17.9 8.57325 16.2037 6.45411 14.7065 4.56788L14.6261 4.46241C14.3121 4.08252 14.0364 3.73633 13.7646 3.44825C12.8839 2.53663 10.8353 0.398442 7.82568 0.0590868C5.20658 -0.230464 2.96657 0.549321 1.53449 2.28516C0.979278 2.99317 0.565737 3.8042 0.30536 4.67237C0.209633 4.99805 0.133051 5.33155 0.0832729 5.67041C-0.104352 6.91358 0.0258367 8.18702 0.466181 9.35938Z"></path>
                            </svg>
                            <h5 className="text-gray-500 font-space text-sm ">Marked 📍 </h5>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="124"
                                height="14"
                                fill="currentColor"
                                className=" fill-gray-400  rotate-0"
                            >
                                <path d="M0.466181 9.35938C1.28178 11.6167 3.44138 14 6.28256 14L6.40126 13.9497C7.46574 13.917 8.6719 13.5571 9.63683 12.8442C10.3414 12.3223 10.9196 11.6108 11.2144 10.6987C11.3982 10.0728 11.4556 9.4126 11.3791 8.76221C11.3025 8.11182 11.0919 7.48584 10.7664 6.92579C10.3184 6.20362 9.69044 5.62452 8.9476 5.25293C8.20475 4.88135 7.37767 4.73145 6.55825 4.81934C6.47401 4.82325 6.38977 4.84473 6.31319 4.88331C6.23661 4.92188 6.16768 4.97657 6.11025 5.04346C6.05664 5.11036 6.01069 5.18848 5.98389 5.27295C5.96091 5.35791 5.94943 5.44727 5.95708 5.53614C5.95708 5.62696 5.9724 5.71729 6.01069 5.80079C6.04515 5.88379 6.09876 5.95801 6.16385 6.01758C6.22895 6.07764 6.30553 6.12159 6.38977 6.14698C6.47401 6.17237 6.56208 6.17872 6.65015 6.16504C7.15941 6.08985 7.684 6.15137 8.16646 6.34375C8.64893 6.53614 9.07778 6.85303 9.41474 7.26465C9.7517 7.67676 9.98145 8.1709 10.0848 8.70069C10.1882 9.23047 10.1614 9.7793 10.0121 10.2964C9.49133 11.9565 7.56913 12.6104 6.40126 12.648C4.22634 12.7236 2.35392 10.8057 1.65703 8.875C1.45791 8.34717 1.33538 7.79346 1.28943 7.23243C1.25497 6.78614 1.27029 6.33497 1.33538 5.88868C1.48472 4.88086 1.88294 3.93262 2.49942 3.14014C3.64815 1.75049 5.49376 1.12159 7.68783 1.3667C10.2495 1.65625 12.0147 3.49854 12.8609 4.37891C13.0141 4.54737 13.1787 4.73926 13.351 4.94581L13.7263 5.41016C15.2503 7.30323 17.5401 10.1704 21.6065 8.32178C22.1771 8.01563 22.6557 7.55323 22.9927 6.98389C23.2645 6.53174 23.4368 6.0254 23.4981 5.5H123.51C123.659 5.5 123.789 5.4336 123.877 5.32862C123.954 5.24073 124 5.12598 124 5C124 4.72364 123.782 4.5 123.51 4.5H23.4598C23.3488 3.93848 23.1075 3.41211 22.7476 2.97266C22.2613 2.38233 21.5951 1.98584 20.8599 1.85108C20.4923 1.81055 20.1209 1.83838 19.7647 1.93067C19.5159 1.99561 19.2746 2.09229 19.0449 2.21973C18.4858 2.52881 18.0302 3.00489 17.7315 3.58643C17.6817 3.66358 17.6434 3.75147 17.6243 3.84424L17.6166 3.93897C17.6128 4.00147 17.6166 4.06397 17.6281 4.125C17.6511 4.21729 17.6894 4.30372 17.743 4.37891C17.8004 4.45459 17.8694 4.51661 17.9459 4.56153L18.057 4.60987C18.1068 4.62598 18.1565 4.63624 18.2063 4.64014C18.2638 4.64454 18.325 4.64014 18.3825 4.62647L18.4705 4.60059C18.5548 4.56788 18.6352 4.51661 18.6964 4.4502C18.7386 4.40723 18.773 4.35791 18.8037 4.30469L18.8458 4.21534C19.0181 3.86573 19.2861 3.57813 19.6154 3.3877C19.9485 3.19727 20.3238 3.11377 20.699 3.14649C21.1317 3.2417 21.5185 3.4878 21.8018 3.84375C22.0852 4.2002 22.2422 4.646 22.2498 5.1084C22.2307 5.51172 22.1158 5.9043 21.9167 6.24903C21.7176 6.59424 21.4342 6.88086 21.1011 7.08301C17.9 8.57325 16.2037 6.45411 14.7065 4.56788L14.6261 4.46241C14.3121 4.08252 14.0364 3.73633 13.7646 3.44825C12.8839 2.53663 10.8353 0.398442 7.82568 0.0590868C5.20658 -0.230464 2.96657 0.549321 1.53449 2.28516C0.979278 2.99317 0.565737 3.8042 0.30536 4.67237C0.209633 4.99805 0.133051 5.33155 0.0832729 5.67041C-0.104352 6.91358 0.0258367 8.18702 0.466181 9.35938Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center space-y-4 items-center ">
                            <div className="flex mx-auto items-center bg-gradient-to-tr mt-4 px-4 md:px-6 lg:px-10 py-2 md:py-4 lg:py-6 rounded-lg flex-col space-y-4 md:space-y-6 lg:space-y-8 ">
                                <div key={-1} className="flex flex-col  w-[95%] sm:w-[85%] md:w-[65%] max-w-3xl p-4 md:p-5 lg:p-6 space-y-4 rounded-xl border-[0.1px] border-stone-300 shadow-xl  dark:border-zinc-500  " >
                                    <div className="flex justify-between items-center" >
                                        <div className="flex items-center h-max " >
                                            <Image src={Im} width={50} height={50} alt="user" className="rounded-full mr-3" />
                                            <div className="flex flex-col -space-y-2 " >
                                                <p className="text-lg md:text-xl xl:text-2xl " >noru</p>
                                                <p>@yasier-ansari</p>
                                            </div>
                                        </div>
                                        <a href={`https://github.com/yasier-ansari`} className="rounded-lg p-2 lg:p-3 bg-purple-100 dark:bg-purple-100/20 " target="_blank" rel="noreferrer" >
                                            <FiGithub className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 " />
                                        </a>
                                    </div>
                                    <p className="text-[1.05rem]" >hello there, welcome to mark area, be sure to spread positivity here ✌🏻🍀🕊️☮️ </p>
                                </div>
                                {
                                    data?.map((el, idx) => (
                                        <div key={idx} className="flex flex-col w-[95%] sm:w-[85%] md:w-[65%] max-w-3xl p-4 md:p-5 lg:p-6 space-y-4 rounded-xl border-[0.1px] border-stone-300 shadow-xl  dark:border-zinc-500  " >
                                            <div className="flex justify-between items-center" >
                                                <div className="flex items-center h-max " >
                                                    <Image src={el?.userProfile.imgUrl} width={50} height={50} alt="user" className="rounded-full mr-3" />
                                                    <div className="flex flex-col -space-y-2 " >
                                                        <p className="text-lg md:text-xl xl:text-2xl " >{el?.userProfile.name}</p>
                                                        <p>@{el?.userProfile.githubUsername}</p>
                                                    </div>
                                                </div>
                                                <a href={`https://github.com/${el?.userProfile?.githubUsername}`} className="rounded-lg p-2 lg:p-3 bg-purple-100 dark:bg-purple-100/20 " target="_blank" rel="noreferrer" >
                                                    <FiGithub className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 " />
                                                </a>
                                            </div>
                                            <p className="text-[1.05rem] " >{el?.tweet?.tweet} </p>
                                            <div className="flex justify-between text-xs text-gray-600 " >
                                                <p>{el?.tweet?.createdAt?.toDate().toLocaleDateString()}</p>
                                                <p>{el?.tweet?.createdAt?.toDate().toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Mark;
