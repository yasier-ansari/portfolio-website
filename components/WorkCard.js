import Image from 'next/image';
import { IoLogoReact } from 'react-icons/io5';
import {
    SiTypescript,
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiMongodb,
    SiSolidity,
} from 'react-icons/si';

const WorkCard = (props) => {
    return (
        <div className="flex h-40 techWork p-4 w-full overflow-hidden rounded-3xl  ">
            <div class="relative basis-[45%] rounded-3xl overflow-hidden ">
                <Image
                    src={props.img}
                    layout="fill"
                    alt="work-1"
                    className="object-cover rounded-3xl hover:scale-[1.2] transition-all duration-700 ease-linear "
                />
            </div>
            <div className="grid grid-cols gap-y-4 px-8 py-4 basis-[70%]">
                <div className="flex justify-between items-center">
                    <div className="font-space font-black text-xl ">{props.title}</div>
                    <div className="flex flex-row space-x-2 justify-between">
                        {/* <SiJavascript className="h-4 w-4" />
                        <SiTypescript className="h-4 w-4" />
                        <IoLogoReact className="h-4 w-4" />
                        <SiNextdotjs className="h-4 w-4" />
                        <SiTailwindcss className="h-4 w-4" />
                        <SiMongodb className="h-4 w-4" />
                        <SiSolidity className="h-4 w-4" /> */}
                        {props.arr[0] && <SiJavascript className="h-4 w-4" />}
                        {props.arr[1] && <SiTypescript className="h-4 w-4" />}
                        {props.arr[2] && <IoLogoReact className="h-4 w-4" />}
                        {props.arr[3] && <SiNextdotjs className="h-4 w-4" />}
                        {props.arr[4] && <SiTailwindcss className="h-4 w-4" />}
                        {props.arr[5] && <SiMongodb className="h-4 w-4" />}
                        {props.arr[6] && <SiSolidity className="h-4 w-4" />}
                    </div>
                </div>
                <div className="font-semibold text-[0.9rem]">{props.description}</div>
            </div>
        </div>
    );
};

export default WorkCard;
