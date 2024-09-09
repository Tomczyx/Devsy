import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
export default function LoadingScreen({active}) {
  return (
    <div className={`absolute h-[100%] w-[100%] flex flex-col justify-center items-center bg-white ${active ? true : "hidden"}`}>
        <h2 className='text-4xl font-bold text-emerald-500'>Devsy</h2>
        <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>
  )
}
