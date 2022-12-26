import Image from 'next/image';
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="h-max xl:px-20 2xl:px-40 lg:h-[22rem] p-6 sm:p-8 md:p-10 pt-32 md:pt-40 lg:p-10 bg-gradient-to-tr from-[#f6ebeb] to-[#ecf7ff] flex flex-col lg:flex-row mx-auto rounded-3xl drop-shadow-2xl backdrop-blur-xl items-center justify-center lg:justify-between ">
            <div className="order-2 sm:w-[75%] lg:w-[80%] xl:w-[70%] lg:basis-[60%] flex flex-col space-y-6 cirGradient bg-clip-text">
                <h2 className="font-space bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text tracking-tighter text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">
                    Get in touch{' '}
                </h2>
                <p className=" text-xs sm:text-sm md:text-md  lg:text-lg xl:text-xl">
                    Want to create something awesome? Or, you have any query? Drop an email or tweet
                </p>
                <div className="grid grid-cols-2 text-[0.7rem] md:text-[0.85rem] xl:text-base gap-2 md:gap-3 lg:gap-4">
                    <a
                        href="https://github.com/yasier-ansari"
                        className=" flex align-middle items-center font-jak font-semibold space-x-1 "
                    >
                        <FiMail className="text-[#518FC7] h-3 w-3 md:h-4 md:w-4 " />
                        <h5 className="text-transparent">#gmail</h5>
                    </a>
                    <a
                        href="https://github.com/yasier-ansari"
                        className=" flex align-middle items-center font-jak font-semibold space-x-1 "
                    >
                        <FiLinkedin className="text-[#CA6298] h-3 w-3 md:h-4 md:w-4 " />
                        <h5 className="text-transparent">linkedin</h5>
                    </a>
                    <a
                        href="https://github.com/yasier-ansari"
                        className=" flex align-middle items-center font-jak font-semibold space-x-1 "
                    >
                        <FiGithub className="text-[#518FC7] h-3 w-3 md:h-4 md:w-4 " />
                        <h5 className="text-transparent">@noru</h5>
                    </a>
                    <a
                        href="https://github.com/yasier-ansari"
                        className=" flex align-middle items-center font-jak font-semibold space-x-1 "
                    >
                        <FiInstagram className="text-[#CA6298] h-3 w-3 md:h-4 md:w-4 " />
                        <h5 className="text-transparent">@yasier_77</h5>
                    </a>
                </div>
            </div>
            <div className=" xl:px-8 2xl:px-28 order-1 lg:order-2 absolute -rotate-[15deg] lg:rotate-0 lg:flex top-6 right-4 md:top-10 md:right-12 lg:basis-[40%]">
                <Image
                    src={'/Mailbox.png'}
                    alt="contact"
                    width={750}
                    height={650}
                    className="backdrop-shadow-xl h-24 w-24 md:h-40 md:w-44 lg:w-[15rem] lg:h-[16rem] xl:w-[18rem] xl:h-[16rem] "
                />
            </div>
        </div>
    );
};

export default Contact;
