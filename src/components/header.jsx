import { Button } from "antd";
import Praktikum from "../images/Praktikum.svg";
import { Link } from "react-router-dom";
export function Header() {
    return (
        <>
            <div className='flex justify-between items-center py-4'>
                <div>
                    <img src={Praktikum} alt='img' />
                </div>
                <div className='flex gap-10 items-center'>
                    <ul className='flex gap-10 text-center font-medium text-base'>
                        <li>
                            <a href=''>Kurslar</a>
                        </li>
                        <li>
                            <a href=''>Mentorlar</a>
                        </li>
                        <li>
                            <a href=''>Tez-tez so`raladigan savollar</a>
                        </li>
                        <li>
                            <a href=''>Bog`lanish</a>
                        </li>
                    </ul>
                    <Link to={"/signin"}>
                        <Button className='font-semibold text-base bg-green-400 p-5 rounded-xl '>
                            Ro`yxatdan o`tish
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
