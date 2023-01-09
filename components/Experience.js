import Image from 'next/image';

const Experience = () => {
    return (
        <div className=" mt-32 lg:mt-0 flex flex-col justify-start space-y-12 mx-auto items-center md:mt-20 lg:min-h-screen">
            <div className="bg-purple-300 w-36 h-36 rounded-lg p-4">
                <div className="bg-purple-400  h-28 w-28 flex-col justify-end mx-auto blur-none z-40 items-center text-center text-xl text-white font-medium rounded-lg p-2">
                    <div className="basis-[60%] text-5xl font-black ">
                        <h2 className="text-border mt-1 ">03</h2>
                    </div>
                    <div className="basis-[30%] text-xs mt-3 font-bold"> Years of Experience</div>
                </div>
            </div>
            <div className="w-[80%] mx-auto">
                <div className="text-center font-medium ">
                    During these 3 years, I have developed a strong problem-solving and critical
                    thinking skills, and am able to quickly adapt to new technologies and methods of
                    working. Given are some skill-set that I have learned and am still actively
                    learning as days goes by
                </div>
                <div className="flex justify-center space-x-8 items-center  my-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="124"
                        height="14"
                        fill="currentColor"
                        className=" fill-gray-300  rotate-180"
                    >
                        <path d="M0.466181 9.35938C1.28178 11.6167 3.44138 14 6.28256 14L6.40126 13.9497C7.46574 13.917 8.6719 13.5571 9.63683 12.8442C10.3414 12.3223 10.9196 11.6108 11.2144 10.6987C11.3982 10.0728 11.4556 9.4126 11.3791 8.76221C11.3025 8.11182 11.0919 7.48584 10.7664 6.92579C10.3184 6.20362 9.69044 5.62452 8.9476 5.25293C8.20475 4.88135 7.37767 4.73145 6.55825 4.81934C6.47401 4.82325 6.38977 4.84473 6.31319 4.88331C6.23661 4.92188 6.16768 4.97657 6.11025 5.04346C6.05664 5.11036 6.01069 5.18848 5.98389 5.27295C5.96091 5.35791 5.94943 5.44727 5.95708 5.53614C5.95708 5.62696 5.9724 5.71729 6.01069 5.80079C6.04515 5.88379 6.09876 5.95801 6.16385 6.01758C6.22895 6.07764 6.30553 6.12159 6.38977 6.14698C6.47401 6.17237 6.56208 6.17872 6.65015 6.16504C7.15941 6.08985 7.684 6.15137 8.16646 6.34375C8.64893 6.53614 9.07778 6.85303 9.41474 7.26465C9.7517 7.67676 9.98145 8.1709 10.0848 8.70069C10.1882 9.23047 10.1614 9.7793 10.0121 10.2964C9.49133 11.9565 7.56913 12.6104 6.40126 12.648C4.22634 12.7236 2.35392 10.8057 1.65703 8.875C1.45791 8.34717 1.33538 7.79346 1.28943 7.23243C1.25497 6.78614 1.27029 6.33497 1.33538 5.88868C1.48472 4.88086 1.88294 3.93262 2.49942 3.14014C3.64815 1.75049 5.49376 1.12159 7.68783 1.3667C10.2495 1.65625 12.0147 3.49854 12.8609 4.37891C13.0141 4.54737 13.1787 4.73926 13.351 4.94581L13.7263 5.41016C15.2503 7.30323 17.5401 10.1704 21.6065 8.32178C22.1771 8.01563 22.6557 7.55323 22.9927 6.98389C23.2645 6.53174 23.4368 6.0254 23.4981 5.5H123.51C123.659 5.5 123.789 5.4336 123.877 5.32862C123.954 5.24073 124 5.12598 124 5C124 4.72364 123.782 4.5 123.51 4.5H23.4598C23.3488 3.93848 23.1075 3.41211 22.7476 2.97266C22.2613 2.38233 21.5951 1.98584 20.8599 1.85108C20.4923 1.81055 20.1209 1.83838 19.7647 1.93067C19.5159 1.99561 19.2746 2.09229 19.0449 2.21973C18.4858 2.52881 18.0302 3.00489 17.7315 3.58643C17.6817 3.66358 17.6434 3.75147 17.6243 3.84424L17.6166 3.93897C17.6128 4.00147 17.6166 4.06397 17.6281 4.125C17.6511 4.21729 17.6894 4.30372 17.743 4.37891C17.8004 4.45459 17.8694 4.51661 17.9459 4.56153L18.057 4.60987C18.1068 4.62598 18.1565 4.63624 18.2063 4.64014C18.2638 4.64454 18.325 4.64014 18.3825 4.62647L18.4705 4.60059C18.5548 4.56788 18.6352 4.51661 18.6964 4.4502C18.7386 4.40723 18.773 4.35791 18.8037 4.30469L18.8458 4.21534C19.0181 3.86573 19.2861 3.57813 19.6154 3.3877C19.9485 3.19727 20.3238 3.11377 20.699 3.14649C21.1317 3.2417 21.5185 3.4878 21.8018 3.84375C22.0852 4.2002 22.2422 4.646 22.2498 5.1084C22.2307 5.51172 22.1158 5.9043 21.9167 6.24903C21.7176 6.59424 21.4342 6.88086 21.1011 7.08301C17.9 8.57325 16.2037 6.45411 14.7065 4.56788L14.6261 4.46241C14.3121 4.08252 14.0364 3.73633 13.7646 3.44825C12.8839 2.53663 10.8353 0.398442 7.82568 0.0590868C5.20658 -0.230464 2.96657 0.549321 1.53449 2.28516C0.979278 2.99317 0.565737 3.8042 0.30536 4.67237C0.209633 4.99805 0.133051 5.33155 0.0832729 5.67041C-0.104352 6.91358 0.0258367 8.18702 0.466181 9.35938Z"></path>
                    </svg>
                    <h5 className="text-gray-400 font-space text-sm ">Experience</h5>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="124"
                        height="14"
                        fill="currentColor"
                        className=" fill-gray-300  rotate-0"
                    >
                        <path d="M0.466181 9.35938C1.28178 11.6167 3.44138 14 6.28256 14L6.40126 13.9497C7.46574 13.917 8.6719 13.5571 9.63683 12.8442C10.3414 12.3223 10.9196 11.6108 11.2144 10.6987C11.3982 10.0728 11.4556 9.4126 11.3791 8.76221C11.3025 8.11182 11.0919 7.48584 10.7664 6.92579C10.3184 6.20362 9.69044 5.62452 8.9476 5.25293C8.20475 4.88135 7.37767 4.73145 6.55825 4.81934C6.47401 4.82325 6.38977 4.84473 6.31319 4.88331C6.23661 4.92188 6.16768 4.97657 6.11025 5.04346C6.05664 5.11036 6.01069 5.18848 5.98389 5.27295C5.96091 5.35791 5.94943 5.44727 5.95708 5.53614C5.95708 5.62696 5.9724 5.71729 6.01069 5.80079C6.04515 5.88379 6.09876 5.95801 6.16385 6.01758C6.22895 6.07764 6.30553 6.12159 6.38977 6.14698C6.47401 6.17237 6.56208 6.17872 6.65015 6.16504C7.15941 6.08985 7.684 6.15137 8.16646 6.34375C8.64893 6.53614 9.07778 6.85303 9.41474 7.26465C9.7517 7.67676 9.98145 8.1709 10.0848 8.70069C10.1882 9.23047 10.1614 9.7793 10.0121 10.2964C9.49133 11.9565 7.56913 12.6104 6.40126 12.648C4.22634 12.7236 2.35392 10.8057 1.65703 8.875C1.45791 8.34717 1.33538 7.79346 1.28943 7.23243C1.25497 6.78614 1.27029 6.33497 1.33538 5.88868C1.48472 4.88086 1.88294 3.93262 2.49942 3.14014C3.64815 1.75049 5.49376 1.12159 7.68783 1.3667C10.2495 1.65625 12.0147 3.49854 12.8609 4.37891C13.0141 4.54737 13.1787 4.73926 13.351 4.94581L13.7263 5.41016C15.2503 7.30323 17.5401 10.1704 21.6065 8.32178C22.1771 8.01563 22.6557 7.55323 22.9927 6.98389C23.2645 6.53174 23.4368 6.0254 23.4981 5.5H123.51C123.659 5.5 123.789 5.4336 123.877 5.32862C123.954 5.24073 124 5.12598 124 5C124 4.72364 123.782 4.5 123.51 4.5H23.4598C23.3488 3.93848 23.1075 3.41211 22.7476 2.97266C22.2613 2.38233 21.5951 1.98584 20.8599 1.85108C20.4923 1.81055 20.1209 1.83838 19.7647 1.93067C19.5159 1.99561 19.2746 2.09229 19.0449 2.21973C18.4858 2.52881 18.0302 3.00489 17.7315 3.58643C17.6817 3.66358 17.6434 3.75147 17.6243 3.84424L17.6166 3.93897C17.6128 4.00147 17.6166 4.06397 17.6281 4.125C17.6511 4.21729 17.6894 4.30372 17.743 4.37891C17.8004 4.45459 17.8694 4.51661 17.9459 4.56153L18.057 4.60987C18.1068 4.62598 18.1565 4.63624 18.2063 4.64014C18.2638 4.64454 18.325 4.64014 18.3825 4.62647L18.4705 4.60059C18.5548 4.56788 18.6352 4.51661 18.6964 4.4502C18.7386 4.40723 18.773 4.35791 18.8037 4.30469L18.8458 4.21534C19.0181 3.86573 19.2861 3.57813 19.6154 3.3877C19.9485 3.19727 20.3238 3.11377 20.699 3.14649C21.1317 3.2417 21.5185 3.4878 21.8018 3.84375C22.0852 4.2002 22.2422 4.646 22.2498 5.1084C22.2307 5.51172 22.1158 5.9043 21.9167 6.24903C21.7176 6.59424 21.4342 6.88086 21.1011 7.08301C17.9 8.57325 16.2037 6.45411 14.7065 4.56788L14.6261 4.46241C14.3121 4.08252 14.0364 3.73633 13.7646 3.44825C12.8839 2.53663 10.8353 0.398442 7.82568 0.0590868C5.20658 -0.230464 2.96657 0.549321 1.53449 2.28516C0.979278 2.99317 0.565737 3.8042 0.30536 4.67237C0.209633 4.99805 0.133051 5.33155 0.0832729 5.67041C-0.104352 6.91358 0.0258367 8.18702 0.466181 9.35938Z"></path>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col relative space-y-16 md:space-y-10 lg:space-y-8 items-center">
                <div className="absolute left-[0%] md:left-[50%] w-[2px] h-full top-8 md:top-4 bg-gradient-to-b from-teal-400 via-purple-400 to-orange-400 border-[#ffffff80] border rounded-full"></div>
                <div className="self-start drop-shadow-2xl  flex flex-col space-y-4 mx-4 md:mx-0 md:w-[45%] rounded-[1.4rem] p-4 rounded-tl-none md:rounded-tr-none md:rounded-tl-[2rem] hover:bg-gradient-to-tr hover:from-[#ffeff7] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:-translate-x-2  bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] lg:bg-white ">
                    <div className="mx-auto text-center tracking-wide font-black font-play text-xl text-teal-500 ">
                        Web Dev
                    </div>
                    <div className="font-medium text-[0.95rem] px-2  ">
                        specialized in creating beautiful and user-friendly websites with my skills
                        mainly in ReactJs centered tools. I have added a splash of personality to
                        every project I work on.
                    </div>
                    <div className="flex space-x-4 ml-2 justify-start text-[0.6rem] font-bold ">
                        <span class="bg-gradient-to-b from-teal-200 to-green-200 rounded-full text-center px-2 py-1">
                            React
                        </span>
                        <span class="bg-gradient-to-b from-teal-200 to-green-200 rounded-full text-center px-2 py-1">
                            NextJs
                        </span>
                        <span class="bg-gradient-to-b from-teal-200 to-green-200 rounded-full text-center px-2 py-1">
                            Tailwind
                        </span>
                        <span class="bg-gradient-to-b from-teal-200 to-green-200 rounded-full text-center px-2 py-1">
                            Typescript
                        </span>
                    </div>
                    <div className="relative w-full h-52 bg-[#000] rounded-[1.4rem] ">
                        <Image
                            fill
                            src="/pfpimg.jpeg"
                            alt="web dev"
                            className="object-cover rounded-[2.3rem] p-8 "
                        />
                    </div>
                </div>
                <div className="self-end drop-shadow-xl flex flex-col space-y-4 mx-4 md:mx-0 md:w-[45%] rounded-[1.4rem] p-4 rounded-tl-none hover:bg-gradient-to-tr  hover:from-[#ffeff7] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-2 bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] lg:bg-white ">
                    <div className="mx-auto text-center tracking-wide font-play font-black text-xl text-blue-500   ">
                        Design
                    </div>
                    <div className="font-medium text-[0.95rem] px-2 ">
                        {/* I ensure that my code is not just a collection of letters, but a beautifully
                        crafted story.  */}
                        With a touch of artistic flair and splash of colors a design becomes a work
                        of art, inviting the user on a journey through its purposeful and visually
                        pleasing elements.
                    </div>
                    <div className="flex flex-row ml-2 space-x-4 justify-start  text-[0.6rem] font-bold ">
                        <span class="bg-gradient-to-b from-blue-100 to-purple-100 rounded-full text-center px-2 py-1">
                            Figma
                        </span>
                        <span class="bg-gradient-to-b from-blue-100 to-purple-100 rounded-full text-center px-2 py-1">
                            Webflow
                        </span>
                    </div>
                    <div className="relative w-full h-52 bg-[#000] rounded-[1.4rem] ">
                        <Image
                            fill
                            src="/pfpimg.jpeg"
                            alt="web dev"
                            className="object-cover rounded-[2.3rem] p-8 "
                        />
                    </div>
                </div>
                <div className="self-start drop-shadow-xl flex flex-col space-y-4 mx-4 md:mx-0 md:w-[45%] rounded-[1.4rem] p-4 rounded-tl-none md:rounded-tr-none md:rounded-tl-[2rem] hover:bg-gradient-to-tr hover:from-[#ffeff7] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:-translate-x-2 bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] lg:bg-white ">
                    <div className="mx-auto text-center font-black tracking-wide font-play text-xl text-purple-500 ">
                        BlockChain
                    </div>
                    <div className="font-medium text-[0.95rem] px-2 ">
                        A recent booming domain that&apos;s security and network centered using web3
                        as its turf. As the domain is still developing, I&apos;m still in the
                        learning phase with main goal towards NFT and ERC271 Token.
                    </div>
                    <div className="flex flex-row space-x-4 ml-2   text-[0.6rem] font-bold ">
                        <span class="bg-gradient-to-b from-purple-200 to-pink-200 rounded-full text-center px-2 py-1">
                            Solidity
                        </span>
                        <span class="bg-gradient-to-b from-purple-200 to-pink-200 rounded-full text-center px-2 py-1">
                            Hardhat
                        </span>
                        <span class="bg-gradient-to-b from-purple-200 to-pink-200 rounded-full text-center px-2 py-1">
                            OpenZeppelin
                        </span>
                    </div>
                    <div className="relative w-full h-52 bg-[#000] rounded-[1.4rem] ">
                        <Image
                            fill
                            src="/pfpimg.jpeg"
                            alt="web dev"
                            className="object-cover rounded-[2.3rem] p-8 "
                        />
                    </div>
                </div>
                <div className="self-end drop-shadow-xl flex flex-col space-y-4 mx-4 md:mx-0 md:w-[45%] rounded-[1.4rem] p-4  rounded-tl-none hover:bg-gradient-to-tr  hover:from-[#ffeff7] hover:to-[#F0F6FE] transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-2 bg-gradient-to-tr from-[#ffeff7] to-[#F0F6FE] lg:bg-white ">
                    <div className="mx-auto text-center font-play tracking-wide font-black text-xl text-orange-500  ">
                        AI{' '}
                    </div>
                    <div className="font-medium text-[0.95rem] px-2 ">
                        yes... I have used ChatGPT and copy.ai for my uni assignments 😁 for good
                        and with my major in Machine learning, I want to create software like them
                        to leave a positive impact on human life.
                    </div>
                    <div className="flex space-x-4 ml-2 justify-start  text-[0.6rem] font-bold ">
                        <span class="bg-gradient-to-b from-pink-200 to-orange-200 rounded-full text-center px-2 py-1">
                            Python
                        </span>
                        <span class="bg-gradient-to-b from-pink-200 to-orange-200 rounded-full text-center px-2 py-1">
                            NLTP
                        </span>
                        <span class="bg-gradient-to-b from-pink-200 to-orange-200 rounded-full text-center px-2 py-1">
                            TensorFlow
                        </span>
                    </div>
                    <div className="relative w-full h-52 bg-[#000] rounded-[1.4rem] ">
                        <Image
                            fill
                            src="/pfpimg.jpeg"
                            alt="web dev"
                            className="object-cover rounded-[2.3rem] p-8 "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;