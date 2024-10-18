import { Button } from 'antd';
import Praktikum from '../public/Praktikum.svg'

export function MyHeader() {
    return <>
        <div className='flex'>
            <div>
                <img src={Praktikum} alt='img' />
            </div>
            <div>
                <ul>
                    <li>
                        <a href="">Kurslar</a>
                    </li>
                    <li>
                        <a href="">Mentorlar</a>
                    </li>
                    <li>
                        <a href="">Tez-tez so'raladigan savollar</a>
                    </li>
                    <li>
                        <a href="">Bog'lanish</a>
                    </li>
                </ul>
                <div>
                    <Button>Ro'yxatdan o'tish</Button>
                </div>
            </div>
        </div>
    </>;
}
