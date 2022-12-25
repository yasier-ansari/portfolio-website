import React from 'react';

const CategoryCard = () => {
    return (
        <div className="flex items-center font-semibold justify-between w-[60%]  mx-auto mt-6 mb-8 ">
            <div className=" bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4] rounded-[0.89rem] px-3 text-[#cf3903]">
                design
            </div>
            <div className=" bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem] px-3 text-[#097360]">
                full-stack
            </div>
            <div className=" bg-gradient-to-l from-[#cde1ff] to-[#f9d2ff] rounded-[0.89rem] px-3 text-[#4e0aa2]">
                data science
            </div>
            <div className=" bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-3 text-[#690c58]">
                web3
            </div>
        </div>
    );
};

export default CategoryCard;
