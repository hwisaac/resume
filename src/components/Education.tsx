import React from 'react'

type Props = {}

export default function Education({}: Props) {
  return (
    <div className='px-4'>
      <h2 className='text-2xl font-bold border-b border-slate-300 py-4 my-4'>
        Education
      </h2>
      <ul className='list-disc list-inside'>
        <li>2005-2008 인천 계산고등학교, 이과, 졸업</li>
        <li>2008-2013 가톨릭대학교, 물리/수학 복수전공, 졸업</li>
        <li>2014-2019 포항공과대학교, 대수기하학 전공, 중퇴</li>
      </ul>
    </div>
  );
}