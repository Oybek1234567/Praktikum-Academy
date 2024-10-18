import React from 'react'

const AuthComponent = () => {
  return (
    <div className="w-[530px] h-[529px] rounded-[32px] bg-white pl-[40px]">
      <h1 className='mt-[33px]'>Kursga yozilish</h1>
      <form>
        <input type="text" placeholder='Ism familiya' />
        <input type="number" placeholder='Telefon raqam' />
        <input type="password" placeholder='Parol' />
        <input type="password" placeholder='Parolni tasdiqlash' />
        <button type='subimt'>Submit</button>
      </form>
    </div>
  )
}

export default AuthComponent
