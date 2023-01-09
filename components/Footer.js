const Footer = () => {
    return (
        <div className=" flex text-sm text-gray-600 py-16 mt-16 flex-col h-max items-center mx-auto justify-center">
            <h4 className=" text-[0.6rem] sm:text-xs md:text-sm lg:text-md">made with 💖 by</h4>
            <h3 className="font-bold font-space animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
                noru
            </h3>
            <div className="flex justify-center space-x-1 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-12 ">
                <div>student |</div>
                <div>full stack |</div>
                <div>procrastinator |</div>
                <div>shenanigan</div>
            </div>
        </div>
    );
};

export default Footer;
