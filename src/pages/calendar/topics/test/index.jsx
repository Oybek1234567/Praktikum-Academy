import { Link } from "react-router-dom";

const TestPage = () => {
    return (
        <div>
            <Link to={'/exams'}>
                <button className='w-[278px] h-[57px] bg-[#166199] text-white text-[18px] rounded-[15px]'>
                    Sinov testiga o`tish
                </button>
            </Link>
        </div>
    );
};

export default TestPage;
