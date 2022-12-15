import { BsBrightnessHigh } from 'react-icons/bs'
const Header = () => {
    return (
        <nav className=" w-[70%] h-max bg-[#fcf5fc] shadow-lg mx-auto px-6 bg-opacity-75 backdrop-blur-[8px] drop-shadow-md top-4 sticky py-2 flex justify-between items-center space-x-6 rounded-xl " >
            <div className="" >
                <h3 className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-space text-xl font-bold" > Noru_</h3>
            </div>
            <div className="flex space-x-8 font-bold" >
                <div>work</div>
                <div>about</div>
                <div>contact</div>
                <div>source</div>
            </div>
            <div className="absolute right-16 w-[0.15rem] h-8 rounded-3xl bg-gray-400" ></div>
            <div className="" >
                <BsBrightnessHigh className="w-5 h-5 " />
            </div>
        </nav>
    )
}

export default Header;