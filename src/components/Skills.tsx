import React from 'react'

type Props = {}

const data = [
  {
    title: 'Language',
    skills: ['JavaScript/Typescript', 'Python'],
    highlights: 0,
  },
  {
    title: 'Backend',
    skills: [
      'Django',
      'Django Rest Framework',
      'PostgreSQL',
      'AWS EC2, RDS, S3',
      'Docker',
    ],
    highlights: 1,
  },
  {
    title: 'Frontend',
    skills: [
      'React, Next',
      'zustand, recoil',
      'tanstack-query',
      'tailwind, styled-components',
    ],
    highlights: 1,
  },
];

export default function Skills({}: Props) {
  return (
    <div className='px-4'>
      <h2 className='text-2xl font-bold border-b border-slate-300 py-4 my-4'>
        Skills
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8'>
        <GridItem {...data[0]} />
        <GridItem {...data[1]} />
        <GridItem {...data[2]} />
      </div>
    </div>
  );
}

function GridItem({ title, skills, highlights }: any) {
  return (
    <div>
      <h3 className='text-2xl mb-2'>{title}</h3>
      <ul className=' list-disc list-inside relative left-4'>
        {skills.map((skill: string, index: number) => (
          <li
            className={`${index < highlights && 'font-semibold'}  `}
            key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
