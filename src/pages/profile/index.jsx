import { Card } from "antd";
import { Doughnut, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";
import ProfileBg from "../../assets/images/profile-bg.jpg";
import Person from "../../assets/images/person-img.jpg";
import { Icons } from "../../assets";
import Logo from "../../assets/images/logo.svg";
import QRCode from "../../assets/images/qr-code.svg";
import Certificate from "../../assets/images/Certificate.svg";
import Time from "../../assets/images/time.svg";
import { Link } from "react-router-dom";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

const Profile = () => {
    // Line Chart Data
    const progressData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Last Week",
                data: [50, 75, 60, 90, 45, 80, 70],
                borderColor: "#fec64f",
                backgroundColor: "rgba(254, 198, 79, 0.3)",
                fill: true,
                tension: 0.4,
            },
            {
                label: "This Week",
                data: [60, 80, 55, 100, 65, 85, 95],
                borderColor: "#166199",
                backgroundColor: "rgba(22, 97, 153, 0.3)",
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const progressOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    color: "#eaeaea",
                },
                ticks: {
                    stepSize: 25,
                },
            },
        },
    };

    // Doughnut Chart Data
    const courseProgressData1 = {
        labels: ["Completed", "Remaining"],
        datasets: [
            {
                label: "Course Progress",
                data: [80, 20],
                backgroundColor: ["#166199", "#FAFAFA"],
                borderWidth: 1,
            },
        ],
    };

    const courseProgressData2 = {
        labels: ["Completed", "Remaining"],
        datasets: [
            {
                label: "Course Progress",
                data: [62, 38],
                backgroundColor: ["#FEC64F", "#FAFAFA"],
                borderWidth: 1,
            },
        ],
    };

    const courseProgressOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className='flex relative bg-gray-100 min-h-[1000px]'>
            <h1 className='absolute top-4 left-6 text-4xl font-bold -translate-y-[130px]'>
                Profil
            </h1>
            <div>
                <Card
                    className='w-[468px] h-[754px] shadow-lg rounded-[17px] overflow-hidden'
                    bordered={false}>
                    <div className='relative'>
                        <img
                            src={ProfileBg}
                            alt='background'
                            className='w-full max-w-[468px]'
                        />
                        <div className='absolute top-6 right-7 flex gap-4'>
                            <Link to={"/profile/promocode"}>
                                <Icons.edit className='cursor-pointer' />
                            </Link>
                            <Icons.whiteDownload className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <img
                            src={Person}
                            alt='person'
                            className='absolute top-[58px] left-[124px] w-[220px] h-[220px] rounded-full'
                        />
                        <p className='flex items-center gap-2 absolute top-72 left-32 text-2xl font-bold text-white'>
                            <Icons.bank /> Balans: <span>1000</span> PC
                        </p>
                        <div className='mt-[29px]'>
                            <b className='text-[30px] font-bold'>
                                Umidbek Jumaniyozov
                            </b>
                            <p className='text-[#3d3d3d] text-xl mb-[50px] font-medium'>
                                Sizning ID raqamingiz: 100003AA
                            </p>
                            <img
                                src={Logo}
                                alt='logo'
                                className='w-[272px] mx-auto mt-4'
                            />
                            <img
                                src={QRCode}
                                alt='qr-code'
                                className='w-[80px] mx-auto mr-[30px] mt-20'
                            />
                        </div>
                    </div>
                </Card>
            </div>
            <div className='flex flex-wrap ml-[43px]'>
                <Card className=' max-h-[120px] rounded-[24px]'>
                    <div className='flex items-center py-[20px] px-[32px]'>
                        <img
                            src={Certificate}
                            alt='certificate'
                            className='mr-[40px]'
                        />
                        <div className='mr-[63px]'>
                            <p className='text-[36px] font-bold text-[#374557]'>
                                100
                            </p>
                            <p className='text-[#374557] text-[18px]'>
                                Courses Completed
                            </p>
                        </div>
                        <Icons.blueArrow className='mr-[20px] cursor-pointer' />
                    </div>
                </Card>
                <Card className='max-h-[120px] ml-[37px] rounded-[24px]'>
                    <div className='flex items-center py-[20px] px-[32px]'>
                        <img src={Time} alt='time' className='mr-[40px]' />
                        <div className='mr-[63px]'>
                            <p className='text-[36px] font-bold text-[#374557]'>
                                34
                            </p>
                            <p className='text-[#374557] text-[18px]'>
                                Referal dastur
                            </p>
                        </div>
                        <Icons.blueArrow className='mr-[20px] cursor-pointer' />
                    </div>
                </Card>
            </div>
            <div className='absolute left-[530px] top-44 flex flex-col items-center'>
                <div className='flex gap-[600px]'>
                    <b className='text-[#374557] text-[24px] font-bold'>
                        Current Courses
                    </b>
                    <a href='#' className='flex items-center gap-3'>
                        View all <Icons.blueArrow className='scale-75' />
                    </a>
                </div>
                <div className='flex gap-[30px]'>
                    <div className='p-[32px] flex items-center gap-[35px] rounded-[16px] bg-white mt-[16px]'>
                        <div className='w-[150px] h-[150px]'>
                            <Doughnut
                                data={courseProgressData1}
                                options={courseProgressOptions}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <small className='text-[#a098ae] text-[14px] mb-[4px]'>
                                Class
                            </small>
                            <b className='text-[18px] text-[#374557] mb-[16px]'>
                                UI Design Beginner
                            </b>
                            <small className='text-[#a098ae] text-[14px] mb-[4px]'>
                                Total Courses
                            </small>
                            <p className='text-[18px] text-[#374557]'>
                                90 / 110
                            </p>
                        </div>
                    </div>
                    <div className='p-[32px] flex items-center gap-[35px] rounded-[16px] bg-white mt-[16px]'>
                        <div className='w-[150px] h-[150px]'>
                            <Doughnut
                                data={courseProgressData2}
                                options={courseProgressOptions}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <small className='text-[#a098ae] text-[14px] mb-[4px]'>
                                Class
                            </small>
                            <b className='text-[18px] text-[#374557] mb-[16px]'>
                                UX Research
                            </b>
                            <small className='text-[#a098ae] text-[14px] mb-[4px]'>
                                Total Courses
                            </small>
                            <p className='text-[18px] text-[#374557]'>
                                50 / 80
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap mt-10 w-full'>
                    <Card className='w-full shadow-lg rounded-[17px] overflow-hidden p-6'>
                        <h2 className='text-[24px] font-bold mb-4'>Progress</h2>
                        <Line data={progressData} options={progressOptions} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;
