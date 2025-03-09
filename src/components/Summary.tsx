import React from 'react'

type Props = {}

export default function Summary({}: Props) {
  return (
    <div className='px-4'>
      <h2 className='text-2xl font-bold border-b border-slate-300 py-4 my-4'>
        Summary
      </h2>
      <p>
        Next.js(프론트)와 Django(백엔드)를 중심으로 한 풀스택 경험을 갖추고
        있으며, 실제 서비스 운영 환경에서의 배포(AWS, Docker)와
        데이터베이스(PostgreSQL) 구성을 담당해왔습니다. 번역 회사의
        출판/아카데미/정산 사이트 등 다양한 요구사항을 해결하면서, 기획부터
        개발·배포·운영까지 전 과정을 수행했습니다.
      </p>
    </div>
  );
}