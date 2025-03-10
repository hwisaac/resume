import React from 'react'

type Props = {}

export default function Summary({}: Props) {
  return (
    <div className='px-4'>
      <h2 className='text-2xl font-bold border-b border-slate-300 py-4 my-4'>
        Summary
      </h2>

      <p>
        Next.js(프론트엔드)와 Django(백엔드)를 기반으로 웹 애플리케이션을
        개발하고, AWS 및 Docker를 활용한 안정적인 서비스 운영과 배포를
        담당해왔습니다.
      </p>
      <p>
        회사에서 외주 개발로 인해 각기 다른 기술 스택과 비효율적인 클라우드
        운영으로 유지보수 비용이 증가하던 문제를 해결하기 위해, 회사의 웹 개발
        스택을 Next.js와 Django로 통합하고, 클라우드 서버를 AWS로 일원화하여
        운영 비용을 절감했습니다.
      </p>
      <p>
        비즈니스 목표와 기술의 균형을 맞추는 엔지니어로서, 단순히 코드만
        작성하는 것이 아니라, 서비스의 방향성과 구조를 설계하는 데 핵심적인
        역할을 해야 한다고 생각합니다.
      </p>
      <p>
        이를 바탕으로 출판·아카데미 등 다양한 프로젝트를 주도적으로 진행하며,
        기획과 운영 관점에서의 엔지니어링을 실천해왔습니다. 특히 확장성과
        유지보수성을 고려한 실용적인 기술 선택에 집중해왔으며, 이러한 접근
        방식은 내부에서도 긍정적인 평가를 받았습니다.
      </p>
    </div>
  );
}