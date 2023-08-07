import React from 'react'
import { IoLogoDiscord, IoLogoGithub } from 'react-icons/io5';
import { IoMail } from 'react-icons/io5';

function Footer() {
  return (
    
    <>
    <hr className="h-2 text-gray-700 mb-6 mt-8 mx-8"></hr>

    <div className="flex gap-2 justify-center mb-4 text-gray-600">
        <a className="hover:underline cursor-pointer flex gap-1 items-center"><IoMail />Contact</a> | <a className=" cursor-pointer hover:underline flex gap-1 content-center items-center"><IoLogoDiscord />Discord</a> | <a target='_blank' href='https://github.com/ch1ru/yecdebunks' className=" cursor-pointer hover:underline flex gap-1 content-center items-center"><IoLogoGithub />Contribute</a>
    </div>
    </>
  )
}

export default Footer