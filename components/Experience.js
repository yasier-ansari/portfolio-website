import Image from 'next/image';
import { FiFileText } from 'react-icons/fi';
import { BsArrowUpRight } from 'react-icons/bs';
import Link from 'next/link';
import { CldImage } from "next-cloudinary";
import PageDivider from "./PageDivider";

const Experience = () => {
    return (
        <div className=" mt-32 lg:mt-8 flex flex-col justify-start space-y-12 mx-auto items-center md:mt-20 lg:min-h-screen">
            <div className="bg-purple-300 w-36 h-36 rounded-lg p-4 select-none ">
                <div className="bg-purple-400  h-28 w-28 flex-col justify-end mx-auto blur-none z-40 items-center text-center text-xl text-white font-medium rounded-lg p-2">
                    <div className="basis-[60%] text-5xl font-black ">
                        <h2 className="text-border mt-1 ">03</h2>
                    </div>
                    <div className="basis-[30%] text-xs mt-3 font-bold"> Years of Experience</div>
                </div>
            </div>
            <div className="w-[80%] mx-auto">
                <div className="text-center max-w-2xl mx-auto tracking-normal leading-5 text-base sm:text-[1.1rem] lg:text-lg xl:text-xl">
                    During these 3 years, I have developed a strong problem-solving and critical
                    thinking skills, and am able to quickly adapt to new technologies and methods of
                    working.Given are some skill-set that I have learned and am still actively
                    learning as days goes by
                </div>
                <div className="flex justify-center select-none space-x-8 items-center  my-4">
                    <PageDivider text={"Experience"} />
                </div>
            </div>
            <div className="flex flex-col relative space-y-16  xs:w-[80%] sm:w-[75%] md:w-full md:space-y-10 lg:space-y-8 items-center">
                <div className="absolute left-[0%] md:left-[10%] lg:left-[50%] w-[3px]  h-full top-8 md:top-4 bg-gradient-to-b from-teal-400 via-purple-400 to-orange-400  rounded-full"></div>
                <div className="self-start drop-shadow-2xl  flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[45%] max-w-2xl rounded-[1.4rem] p-4 rounded-tl-none md:rounded-tr-none lg:rounded-tl-[2rem] hover:bg-gradient-to-tr  dark:hover:from-[#ffeff715] hover:from-[#ffeff7] dark:hover:to-[#F0F6FE20] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:-translate-x-2  bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] dark:from-[#ffeff720] dark:to-[#f0f6fe25] lg:bg-none ">
                    <div className="mx-auto text-center font-bold font-urbanist text-xl text-teal-500 ">
                        Web Dev
                    </div>
                    <div className="font-normal sm:text-[0.95rem] md:text-base px-2 lg:text-lg  ">
                        specialized in creating beautiful and user-friendly websites with my skills
                        mainly in ReactJs centered tools. I have added a splash of personality to
                        every project I work on.
                    </div>
                    <div className="flex space-x-4 ml-2 justify-start text-[0.6rem] font-semibold dark:text-black ">
                        <span className="bg-gradient-to-b dark:from-teal-500 dark:to-green-400 from-teal-200 to-green-200 rounded-full text-center px-2 py-1">
                            NextJs
                        </span>
                        <span className="bg-gradient-to-b dark:from-teal-500 dark:to-green-400 from-teal-200 to-green-200 rounded-full text-center px-2 py-1">
                            Tailwind
                        </span>
                        <span className="bg-gradient-to-b dark:from-teal-500 dark:to-green-400 from-teal-200 to-green-200 rounded-full text-center px-2 py-1">
                            Typescript
                        </span>
                    </div>
                    <div className="relative w-full h-52 rounded-[1.4rem] ">
                        <CldImage
                            fill
                            src="portfolio/web_aurabu"
                            alt="Web Image"
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            className=" select-none object-cover rounded-[1.4rem] border-2 border-white shadow-md drop-shadow-md  "
                        />
                    </div>
                </div>
                <div className="self-start lg:self-end drop-shadow-xl flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[45%] max-w-2xl rounded-[1.4rem] p-4 rounded-tl-none hover:bg-gradient-to-tr  dark:hover:from-[#ffeff715] hover:from-[#ffeff7] dark:hover:to-[#F0F6FE20] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-2 bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] dark:from-[#ffeff720] dark:to-[#f0f6fe25] lg:bg-none ">
                    <div className="mx-auto text-center font-bold text-xl dark:text-blue-400 text-blue-500   ">
                        Design
                    </div>
                    <div className="font-normal sm:text-[0.95rem] md:text-base px-2 lg:text-lg ">
                        {/* I ensure that my code is not just a collection of letters, but a beautifully
                        crafted story.  */}
                        With a touch of artistic flair and splash of colors a design becomes a work
                        of art, inviting the user on a journey through its purposeful and visually
                        pleasing elements.
                    </div>
                    <div className="flex flex-row ml-2 space-x-4 justify-start  text-[0.6rem] font-semibold dark:text-black ">
                        <span className="bg-gradient-to-b from-blue-100 to-purple-100 dark:from-blue-300 dark:to-purple-300 rounded-full text-center px-2 py-1">
                            Figma
                        </span>
                        <span className="bg-gradient-to-b from-blue-100 to-purple-100 dark:from-blue-300 dark:to-purple-300 rounded-full text-center px-2 py-1">
                            Webflow
                        </span>
                    </div>
                    <div className="relative w-full h-52 rounded-[1.4rem] ">
                        <CldImage
                            fill
                            src="portfolio/design_ynclf0"
                            alt="Design Image"
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            className=" select-none object-cover rounded-[1.4rem] border-2 border-white shadow-md drop-shadow-md "
                        />
                    </div>
                </div>
                <div className="self-start drop-shadow-xl flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[45%] max-w-2xl rounded-[1.4rem] p-4 rounded-tl-none md:rounded-tr-none lg:rounded-tl-[2rem] hover:bg-gradient-to-tr dark:hover:from-[#ffeff715] hover:from-[#ffeff7] dark:hover:to-[#F0F6FE20] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:-translate-x-2 bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] dark:from-[#ffeff720] dark:to-[#f0f6fe25] lg:bg-none ">
                    <div className="mx-auto text-center font-bold text-xl dark:text-purple-300 text-purple-500 ">
                        BlockChain
                    </div>
                    <div className="font-normal sm:text-[0.95rem] md:text-base px-2 lg:text-lg ">
                        A recent booming domain that&apos;s security and network centered using web3
                        as its turf. As the domain is still developing, I&apos;m still in the
                        learning phase with main goal towards NFT and ERC271 Token.
                    </div>
                    <div className="flex flex-row space-x-4 ml-2 dark:text-black  text-[0.6rem] font-semibold ">
                        <span className="bg-gradient-to-b from-purple-200 to-pink-200 dark:from-purple-300 dark:to-pink-300 rounded-full text-center px-2 py-1">
                            Solidity
                        </span>
                        <span className="bg-gradient-to-b from-purple-200 to-pink-200 dark:from-purple-300 dark:to-pink-300 rounded-full text-center px-2 py-1">
                            Hardhat
                        </span>
                        <span className="bg-gradient-to-b from-purple-200 to-pink-200 dark:from-purple-300 dark:to-pink-300 rounded-full text-center px-2 py-1">
                            OpenZeppelin
                        </span>
                    </div>
                    <div className="relative w-full h-52 rounded-[1.4rem] ">
                        <CldImage
                            fill
                            src="portfolio/blockchain_llhaos"
                            alt="BlockChain Image "
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            className=" select-none object-cover rounded-[1.4rem] border-2 border-white shadow-md drop-shadow-md "
                        />
                    </div>
                </div>
                <div className=" self-start lg:self-end drop-shadow-xl flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[45%] max-w-2xl rounded-[1.4rem] p-4  rounded-tl-none hover:bg-gradient-to-tr  dark:hover:from-[#ffeff715] hover:from-[#ffeff7] dark:hover:to-[#F0F6FE20] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-2 bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] dark:from-[#ffeff720] dark:to-[#f0f6fe25] lg:bg-none ">
                    <div className="mx-auto text-center tracking-wide font-bold text-xl text-orange-500  ">
                        A.I.{' '}
                    </div>
                    <div className="font-normal sm:text-[0.95rem] md:text-base px-2 lg:text-lg ">
                        yes... I have used ChatGPT and copy.ai for my uni assignments 😁.As Machine Learning as my majors, I want to create software like them
                        to leave a positive impact on human life.
                    </div>
                    <div className="flex space-x-4 ml-2 justify-start dark:text-black text-[0.6rem] font-semibold ">
                        <span className="bg-gradient-to-b from-pink-200 to-orange-200 dark:from-pink-300 dark:to-orange-300 rounded-full text-center px-2 py-1">
                            Python
                        </span>
                        <span className="bg-gradient-to-b from-pink-200 to-orange-200 dark:from-pink-300 dark:to-orange-300 rounded-full text-center px-2 py-1">
                            NLTP
                        </span>
                        <span className="bg-gradient-to-b from-pink-200 to-orange-200 dark:from-pink-300 dark:to-orange-300 rounded-full text-center px-2 py-1">
                            TensorFlow
                        </span>
                    </div>
                    <div className="relative w-full h-52 rounded-[1.4rem] ">
                        <CldImage
                            fill
                            src="portfolio/ai_xetglq"
                            alt="web dev"
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            className=" select-none object-cover rounded-[1.4rem] border-2 border-white shadow-md drop-shadow-md "
                        />
                    </div>
                </div>
            </div>
            <div className="w-[80%] max-w-2xl mx-auto">
                <div className="text-center font-normal mb-6 tracking-normal text-sm leading-5 sm:text-base lg:text-lg xl:text-xl ">
                    that was a short information about the domain that I have previously worked on.
                    while you&apos;re at it, have a look at few chosen works that i have created
                    using above domain. And if you want to know more, you can download my resume
                </div>
                <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
                    <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
                        <Link
                            href="/resume.pdf"
                            className="flex items-center font-normal lg:font-semibold space-x-2 text-sm md:text-base  "
                        >
                            <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                            <p>Resume</p>
                        </Link>
                    </div>
                    <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
                        <Link
                            href="/work"
                            className="flex items-center font-normal lg:font-semibold space-x-2 text-sm md:text-base  "
                        >
                            <BsArrowUpRight className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                            <p>Projects</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
