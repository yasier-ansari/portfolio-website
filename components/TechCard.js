import Image from 'next/image';
import { useState } from 'react';

const TechCard = (props) => {
    return (
        <div
            className="tech group relative p-4 h-20 w-20 tech rounded-xl "
            onClick={() => {
                props.changeId(props.id);
            }}
        >
            <div className="">
                <Image
                    src={props.main}
                    fill
                    className="group-hover:scale-[1.1] transition-all duration-700 object-contain p-3 rounded-2xl"
                    alt="no"
                />
            </div>
        </div>
    );
};

export default TechCard;
