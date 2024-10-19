import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 

import { useState } from "react";

const AuthComponent = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showError, setShowError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
    const [data, setData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setShowError("Parollar mos kelmayapti");
        } else {
            setShowError("");
        }
        setData({
            name: e.target[0].value,
            phone: e.target[1].value,
            password: e.target[2].value,
            confirmPassword: e.target[3].value,
        });
        console.log(data);
        alert("Kursga yozildi");
    }
    
    return (
        <div className='bg-[#1D70B7] h-screen'>
            <form
                className='font-montserrat flex flex-col w-[530px] h-[500px] ml-[535px] translate-y-[25%] bg-white rounded-[32px] pt-[33px] pl-[40px]'
                onSubmit={handleSubmit}>
                <h1 className='text-[24px] font-[600] mb-[34px]'>
                    Kursga yozilish
                </h1>
                <input
                    type='text'
                    placeholder='Ism familiya'
                    className='w-[450px] h-[48px] bg-[#F5F5F5] rounded-[16px] pl-[16px] focus:border-none mb-[20px]'
                />
                <input
                    type='number'
                    placeholder='Telefon raqam'
                    className='w-[450px] h-[48px] bg-[#F5F5F5] rounded-[16px] pl-[16px] focus:border-none mb-[20px]'
                />
                <div className='relative w-[450px] mb-[20px]'>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Parol'
                        className='w-full h-[48px] bg-[#F5F5F5] rounded-[16px] pl-[16px] focus:border-none pr-[40px]'
                    />
                    <span
                        className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
                        onClick={() => setShowPassword(!showPassword)}>
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                        />
                    </span>
                </div>

                {/* Parolni tasdiqlash inputi va ko'z ikonkasi */}
                <div className='relative w-[450px] mb-[20px]'>
                    <input
                        type={showConfirmedPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Parolni tasdiqlang'
                        className='w-full h-[48px] bg-[#F5F5F5] rounded-[16px] pl-[16px] focus:border-none pr-[40px]'
                    />
                    <span
                        className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
                        onClick={() =>
                            setShowConfirmedPassword(!showConfirmedPassword)
                        }>
                        <FontAwesomeIcon
                            icon={showConfirmedPassword ? faEye : faEyeSlash}
                        />
                    </span>
                </div>

                {showError && <p className='text-red-500 mb-4'>{showError}</p>}

                <button
                    type='submit'
                    className='w-[450px] h-[48px] bg-[#1D70B7] text-white rounded-[16px] pl-[16px] focus:border-none mb-[20px]'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AuthComponent;
