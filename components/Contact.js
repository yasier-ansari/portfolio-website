import Image from 'next/image';
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Contact = () => {
    return (
        <div class=" h-max p-10 bg-gradient-to-tr from-[#f6ebeb] to-[#ecf7ff] flex mx-auto rounded-3xl drop-shadow-2xl backdrop-blur-xl items-center justify-start">
            <div className=" basis-[60%] flex flex-col space-y-6 cirGradient bg-clip-text">
                <h2 className="font-space tracking-tighter  text-transparent text-5xl font-black">
                    Get in touch{' '}
                </h2>
                <p class="">
                    Want to create something awesome? Or, you have any query? Drop an email or tweet
                    Want to create something awesome? Or, you have any query? Drop an email or tweet
                </p>
                <div class="grid grid-cols-2 gap-4">
                    <a
                        href="https://github.com/yasier-ansari"
                        className=" flex align-middle items-center font-jak font-semibold space-x-1 "
                    >
                        <FiMail className="text-[#518FC7] h-4 w-4 " />
                        <h5 className="text-transparent">@contact.yasier</h5>
                    </a>
                    <a
                        href="https://github.com/yasier-ansari"
                        className=" flex align-middle items-center font-jak font-semibold space-x-1 "
                    >
                        <FiLinkedin className="text-[#CA6298] h-4 w-4 " />
                        <h5 className="text-transparent">yasier_ansari</h5>
                    </a>
                    <a
                        href="https://github.com/yasier-ansari"
                        className=" flex align-middle items-center font-jak font-semibold space-x-1 "
                    >
                        <FiGithub className="text-[#518FC7] h-4 w-4 " />
                        <h5 className="text-transparent">noru</h5>
                    </a>
                    <a
                        href="https://github.com/yasier-ansari"
                        className=" flex align-middle items-center font-jak font-semibold space-x-1 "
                    >
                        <FiInstagram className="text-[#CA6298] h-4 w-4 " />
                        <h5 className="text-transparent">#yasier_77</h5>
                    </a>
                </div>
            </div>
            <div className=" relative basis-[50%] h-80 w-52 ">
                <Image src={'/mailbox.png'} alt="contact" fill className="backdrop-shadow-xl" />
            </div>
        </div>
    );
};

export default Contact;
