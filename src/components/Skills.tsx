import React from 'react'

type Props = {}

const data = [
  {
    title: 'Language',
    skills: ['HTML/CSS/JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Tailwind, styled-components',
      'zustand, recoil',
      'react-hook-form',
      'tanstack-query',
    ],
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
  },
];

export default function Skills({}: Props) {
  return (
    <div className='px-4'>
        <h2 className='text-2xl font-bold border-b border-slate-300 py-4 my-4'  >Skills</h2>
        <div className='grid grid-cols-3 gap-4'>
            {data.map(item => <GridItem key={item.title} title={item.title} skills={item.skills} />)}
        </div>
    </div>
  )
}

function GridItem({title, skills} :any) {
    return (
        <div>
            <h3 className='text-2xl mb-2'>{title}</h3>
            <ul className=' list-disc list-inside relative left-4'>
                {skills.map((skill: string) => <li key={skill}>{skill}</li>)}
                
            </ul>
        </div>
    )
}
