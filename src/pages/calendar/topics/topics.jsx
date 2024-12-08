import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Icons } from "../../../assets";
import bgImg from "../../../assets/images/bg.jpg";
import InfoPage from "./info";
import FilesPage from "./files";
import HomeworkPage from "./homework";
import TestPage from "./test";

const TopicsPage = () => {
    const [value, setValue] = useState("1");
    const [isCoursesOpen, setIsCoursesOpen] = useState(true);

    const [courses, setCourses] = useState([
        {
            icon: <Icons.video />,
            title: "Kirish",
            time: "1:00",
        },
    ]);

    const [lockedCourses, setLockedCourses] = useState(
        Array.from({ length: 110 }, (_, idx) => ({
            icon: <Icons.locked />,
            title: `Dars ${idx + 1}`,
            time: "1:00",
        }))
    );

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const toggleCourses = () => {
        setIsCoursesOpen(!isCoursesOpen);
    };

    const unlockCourse = (course) => {
        setCourses((prevCourses) => [
            ...prevCourses,
            { ...course, icon: <Icons.video /> },
        ]);
        setLockedCourses((prevLockedCourses) =>
            prevLockedCourses.filter(
                (lockedCourse) => lockedCourse.title !== course.title
            )
        );
    };

    return (
        <div>
            <div className='flex items-center mb-[67px]'>
                <h1 className='text-[32px] font-bold'>Web va Grafik dizayn</h1>
                <button className='hidden bg-[#166199] w-[152px] h-[52px] text-white text-[18px] rounded-[6px] ml-[507px]'>
                    A’zo bo’lish
                </button>
            </div>

            <div className='flex'>
                <div>
                    <img src={bgImg} alt='' />
                    <Icons.play className='absolute -translate-y-[300px] ml-[460px]' />
                    <p className='translate-y-[34px] font-bold mb-[40px] text-[34px]'>
                        Mavzu: Adobe photoshop panelining instrumentlar paneli
                    </p>
                    <Box sx={{ width: "100%", typography: "body1" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label='lab API tabs example'
                            indicatorColor='primary'>
                            <Tab
                                label="Ma'lumot"
                                value='1'
                                style={{ textTransform: "capitalize" }}
                            />
                            <Tab
                                label='Fayllar'
                                value='2'
                                style={{ textTransform: "capitalize" }}
                            />
                            <Tab
                                label='Uyga vazifa'
                                value='3'
                                style={{ textTransform: "capitalize" }}
                            />
                            <Tab
                                label='Sinov testi'
                                value='4'
                                style={{ textTransform: "capitalize" }}
                            />
                        </Tabs>

                        <div
                            role='tabpanel'
                            hidden={value !== "1"}
                            id='tabpanel-1'
                            aria-labelledby='tab-1'>
                            {value === "1" && (
                                <Box sx={{ p: 3 }}>
                                    <InfoPage />
                                </Box>
                            )}
                        </div>

                        <div
                            role='tabpanel'
                            hidden={value !== "2"}
                            id='tabpanel-2'
                            aria-labelledby='tab-2'>
                            {value === "2" && (
                                <Box sx={{ p: 3 }}>
                                    <FilesPage />
                                     
                                </Box>
                            )}
                        </div>

                        <div
                            role='tabpanel'
                            hidden={value !== "3"}
                            id='tabpanel-3'
                            aria-labelledby='tab-3'>
                            {value === "3" && (
                                <Box sx={{ p: 3 }}>
                                    <HomeworkPage />
                                    
                                </Box>
                            )}
                        </div>
                        <div
                            role='tabpanel'
                            hidden={value !== "4"}
                            id='tabpanel-4'
                            aria-labelledby='tab-4'>
                            {value === "4" && (
                                <Box sx={{ p: 3 }}>
                                    <TestPage />
                                    
                                </Box>
                            )}
                        </div>
                    </Box>
                </div>
                <div className='flex flex-col  -translate-y-[100px]'>
                    <div className='w-[437px] h-[147px] bg-white pl-[24px] pr-[24px] rounded-[16px]'>
                        <span className='flex items-center'>
                            <h2 className='pt-[24px] text-[24px] font-bold'>
                                Jarayon
                            </h2>
                            <Icons.menu className='translate-y-[14px] ml-[253px]' />
                        </span>
                        <progress
                            id='progress'
                            value='10'
                            max='110'
                            className='w-full h-[16px] appearance-none bg-gray-200 rounded-[8px] overflow-hidden mt-[10px] mb-[10px]'
                            style={{
                                "--progress-color": "#166199",
                            }}></progress>

                        <style>
                            {`
                            progress::-webkit-progress-bar {
                                background-color: #e5e7eb; /* Gray background */
                            }
                            progress::-webkit-progress-value {
                                background-color: var(
                                    --progress-color
                                ); /* Primary color */
                            }
                            progress::-moz-progress-bar {
                                background-color: var(
                                    --progress-color
                                ); /* Primary color */
                            }
                        `}
                        </style>
                        <b className='text-[14px] text-[#374557] mr-[198px]'>
                            Web va Grafik dizayn
                        </b>
                        <span className=' text-[#A098AE] text-[14px]'>
                            10/110
                        </span>
                    </div>
                    <div
                        className={`pl-[24px] pt-[24px] bg-white mt-[32px] rounded-[16px] pr-[24px] pb-[24px] max-h-[540px] ${
                            isCoursesOpen
                                ? "overflow-y-auto"
                                : "overflow-hidden"
                        }`}>
                        <h2
                            className='flex items-center text-[24px] font-bold cursor-pointer'
                            onClick={toggleCourses}>
                            Video Kurslar
                            <span className='ml-[100px] text-[18px] mr-3'>
                                ({courses.length}/110)
                            </span>
                            <Icons.topArrow
                                className={`ml-auto mr-2 transition-transform ${
                                    isCoursesOpen ? "rotate-180" : ""
                                }`}
                            />
                        </h2>
                        {isCoursesOpen && (
                            <>
                                {courses.map((item) => (
                                    <div
                                        className='flex items-center bg-[#166199] pl-[24px] pt-[23px] pb-[23px] mt-[24px] rounded-[16px]'
                                        key={item.title}>
                                        <span>{item.icon}</span>
                                        <p className='ml-[16px] text-[18px] text-white'>
                                            {item.title}
                                        </p>
                                        <p className='ml-auto mr-[21px] text-[18px] text-white'>
                                            {item.time}
                                        </p>
                                    </div>
                                ))}
                                {lockedCourses.map((item) => (
                                    <div
                                        key={item.title}
                                        className='flex items-center bg-[#DBDBDB] text-[#374557] pl-[24px] pt-[23px] pb-[23px] mt-[16px] rounded-[16px] mb-[24px] cursor-pointer'
                                        onClick={() => unlockCourse(item)}>
                                        <span>{item.icon}</span>
                                        <p className='ml-[16px] text-[18px]'>
                                            {item.title}
                                        </p>
                                        <p className='ml-auto mr-[21px] text-[18px]'>
                                            {item.time}
                                        </p>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    <div className='pl-[24px] flex items-center pt-[24px] bg-white mt-[24px] rounded-[16px] pr-[24px] pb-[24px] max-h-[540px]'>
                        <b className='text-[24px] font-bold'>Audio</b>
                        <p className='ml-[200px] text-[18px] font-bold mr-3'>
                            (1/25)
                        </p>
                        <Icons.topArrow className='ml-auto mr-5' />
                    </div>
                    <div className='pl-[24px] flex items-center pt-[24px] bg-white mt-[24px] rounded-[16px] pr-[24px] pb-[24px] max-h-[540px]'>
                        <b className='text-[24px] font-bold'>Modul</b>
                        <p className='ml-[200px] text-[18px] font-bold mr-3'>
                            (1/50)
                        </p>
                        <Icons.topArrow className='ml-auto mr-5' />
                    </div>
                    <div className='pl-[24px] flex items-center pt-[24px] bg-white mt-[24px] rounded-[16px] pr-[24px] pb-[24px] max-h-[540px]'>
                        <b className='text-[24px] font-bold'>Viktorina</b>
                        <p className='ml-[160px] text-[18px] font-bold mr-3'>
                            (1/10)
                        </p>
                        <Icons.topArrow className='ml-auto mr-5' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicsPage;
