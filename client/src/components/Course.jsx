import React from "react";
import Tilt from "react-parallax-tilt";
import icons from '../constants/index';
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';

const Course = ({
    name,
    description,
    icon,
}) => {
    const history = useNavigate();

    const handleClick = () => {
        history(`course/${name}`);
    };

    const handlePlusClick = (event) => {
        event.stopPropagation();
        history(`/home`);
    };

    let iconName;
    const keyExists = icons.find(obj => obj.hasOwnProperty(icon));

    if (keyExists) {
        iconName = keyExists[icon];
        console.log(iconName);
    };

    console.log(iconName);

    return (
        <div>
            <Tilt
                tiltMaxAngleY={10}
                tiltMaxAngleX={10}
                perspective={1000}
            >
                <div
                    className='relative bg-white bg-opacity-85 hover:cursor-pointer mx-6 rounded-2xl border-slate-700 border-2 p-2 sm:w-[360px] xs:w-[250px] m-5'
                    onClick={handleClick}
                >
                    <div className='relative w-full h-[230px] rounded-xl bg-transparent'>
                        <Lottie
                            animationData={iconName}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className='m-2 p-2'>
                        <div>
                            <h3 className='text-black font-bold flex flex-wrap md:text-[22px] sm:text-[14px] xs:text-[10px] '>
                                {name}
                            </h3>
                            <p className='mt-2 text-black  text-[18px] flex flex-wrap lg: text-[20px] md:text-[16px] sm:text-[10px] xs:text-[8px]'>
                                {description}
                            </p>
                        </div>
                    </div>
                    <div
                        className='absolute top-2 right-2 bg-black rounded-full w-12 h-12 flex items-center justify-center text-white text-4xl cursor-pointer'
                        onClick={handlePlusClick}
                    >
                        +
                    </div>
                </div>
            </Tilt>
        </div>
    )
};

export default Course;
