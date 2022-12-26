import Image from 'next/image';
import { useState } from 'react';

const TechCard = (props) => {
    return (
        <div
            className="tech group relative p-2 md:p-3 lg:p-4 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 tech rounded-md sm:rounded-lg md:rounded-xl "
            onClick={() => {
                props.changeId(props.id);
            }}
        >
            <div className="">
                <Image
                    src={props.main}
                    fill
                    className="group-hover:scale-[1.1] transition-all duration-700 object-contain p-2 md:p-3 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl"
                    alt="no"
                />
            </div>
        </div>
    );
};

export default TechCard;
