import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { menu } from '../../constants/menu';

const AppRouters = () => {
    return (
        <div className='w-64 h-full pt-6'>
            {/* Logo */}
            <div className='text-center mb-6'>
                <h1 className='text-2xl text-blue-700 font-bold'>Praktikum</h1>
                <span className=' text-xs'>academy</span>
            </div>

            {/* Menu */}
            <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                className='bg-transparent'
                items={menu.map(({ id, name, path, children, img }) => {
                    if (children) {
                        return {
                            key: id,
                            label: (
                                <div className='flex items-center gap-2'>
                                    {img}
                                    <span className='text-gray-600'>
                                        {name}
                                    </span>
                                </div>
                            ),
                            children: children.map(
                                ({ title, path, id, icon }) => ({
                                    key: id,
                                    icon: icon,
                                    label: (
                                        <Link
                                            to={path}
                                            className='text-gray-600'>
                                            {title}
                                        </Link>
                                    ),
                                })
                            ),
                        };
                    }
                    return {
                        key: id,
                        label: (
                            <Link
                                to={path}
                                className='flex items-center gap-2 hover:text-gray-800'>
                                {img}
                                {name}
                            </Link>
                        ),
                    };
                })}
            />
        </div>
    );
};

export default AppRouters;
