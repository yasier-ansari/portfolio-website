const blob = () => {
    return (
        <div className="relative">
            <div className="absolute right-20 -z-10 h-screen w-full">
                <div className="outline outline-gray-200 outline-[30px] border-gray-500 border-[40] animate-mainBlob1 absolute top-0 -right-52 w-72 h-[17rem] rounded-full bg-[#FF4095] mix-blend-multiply filter blur-[30px]  opacity-60 ">
                    {' '}
                </div>
                <div className="outline outline-gray-200 outline-[30px] border-gray-500 border-[40] animate-mainBlob2 absolute top-52 -right-40 w-[17rem] h-[20rem] rounded-full bg-[#576ee4] mix-blend-overlay filter blur-[30px]  opacity-60 "></div>
                <div className="outline outline-gray-200 outline-[30px] border-gray-500 border-[40] animate-mainBlob3 absolute top-40 -right-12 w-[12rem] h-[15rem] rounded-full bg-[#00FFFF] mix-blend-multiply filter blur-[30px]  opacity-60 "></div>
            </div>
        </div>
    );
};

export default blob;
