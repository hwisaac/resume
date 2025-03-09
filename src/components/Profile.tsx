import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

type Props = {}

export default function Profile({}: Props) {
  return (
    <div className='flex my-4 px-4'>
      {/* <div className='size-[140px] rounded-full bg-slate-100 mr-8' /> */}
      <ul>
        <li className='font-semibold text-xl mb-1'>황이삭</li>
        <li>Web Developer</li>
        <li>Seoul, Korea</li>
        <li className='my-2'>
          <a
            className='flex items-center gap-2'
            href='https://github.com/hwisaac'
            target='_blank'
            rel='noreferrer'>
            <FaGithub size={20} className='relative top-[0.5px]' />{' '}
            https://github.com/hwisaac
          </a>
        </li>
        <li className='flex gap-2 items-center'>
          <AiOutlineMail size={20} className='relative top-[0.5px]' />
          wh2ssac@naver.com
        </li>
      </ul>
    </div>
  );
}