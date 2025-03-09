import React from 'react'
import { FaLink } from 'react-icons/fa';
import translatorsImg from '/images/translators.png';
import glbabImg from '/images/glbab.png';
import payImg from '/images/pay.png';
type Props = {};

const projects = [
  {
    title: '바른번역 출판',
    link: 'https://translators.co.kr',
    memos: [
      '출판 번역가 홍보 및 광고',
      '출판번역업무 수주 관리',
      '프론트엔드 - Next.js',
      '백엔드 - Django',
      'DB - PostgreSQL',
      '배포 - AWS, Github Actions, Docker',
    ],
    img: translatorsImg,
  },
  {
    title: '글밥 아카데미',
    link: 'https://www.glbab.com',
    memos: [
      '번역가 육성 아카데미',
      '결제 및 온라인 강의 수강',
      '프론트엔드 - Next.js',
      '백엔드 - Django',
      'DB - PostgreSQL',
      '배포 - AWS, Github Actions, Docker',
      'PG - 토스 페이먼츠',
      '동영상 관리 - Vimeo',
    ],
    img: glbabImg,
  },
  {
    title: '번역료 정산 페이지',
    link: '',
    memos: [
      '소속 번역가를 위한 번역료 정산/조회',
      '프론트엔드 - Next.js',
      '백엔드 - Next.js',
      'DB - 구글 엑셀시트',
      '배포 - Vercel',
    ],
    img: payImg,
  },
];

interface Project {
  title: string;
  link: string;
  memos: string[];
  img: string;
}

export default function Experience({}: Props) {
  return (
    <div className='px-4'>
      <h2 className='text-2xl font-bold border-b border-slate-300 py-4 my-4'>
        Work Experience
      </h2>
      <p className='mb-14'>
        (주)바른번역에서 개발팀이 꾸려지는 23년 캣툴(Computer-Assisted
        Translation Tool 번역가 보조 소프트웨어)의 프론트엔드 개발자로서
        입사했습니다. 이후 단독으로 프로젝트를 맡아 Next.js 와 Django 를
        사용하여 회사내 웹사이트를 개발하였습니다.
      </p>
      <div className='flex flex-wrap gap-10'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title + 'project'} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='flex flex-col border border-slate-300 w-[300px] rounded overflow-hidden h-fit'>
      <div className='h-[200px] w-full bg-slate-100 shrink-0 overflow-hidden'>
        <img
          src={project.img}
          alt={project.title}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='h-full p-4'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          {project.title}
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              className='hover:text-blue-600 transition-all'>
              <FaLink />
            </a>
          )}
        </h3>
        <ul>
          {project.memos.map((memo) => (
            <li key={memo + project.title}>{memo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}