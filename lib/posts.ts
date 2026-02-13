export type Post = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "start-personal-branding",
    title: "개인 브랜딩 블로그를 시작한 이유",
    summary: "왜 지금 개인 사이트를 만들고, 어떤 글을 남길지에 대한 기준을 정리했습니다.",
    publishedAt: "2026-02-13",
    content: [
      "일을 하면서 배운 점을 기록하지 않으면 비슷한 문제를 반복해서 풀게 됐습니다.",
      "그래서 이 블로그는 단순 회고가 아니라, 실제로 재사용 가능한 의사결정 기록을 남기는 데 집중합니다.",
      "앞으로는 프런트엔드 아키텍처, 제품 개발 프로세스, 협업 방식 개선에 대한 글을 주로 올릴 예정입니다.",
    ],
  },
  {
    slug: "cloudflare-pages-nextjs",
    title: "Cloudflare Pages에 Next.js 정적 블로그 배포하기",
    summary: "서버 없이 GitHub와 Cloudflare Pages만으로 블로그를 배포하는 과정을 정리했습니다.",
    publishedAt: "2026-02-12",
    content: [
      "정적 블로그는 트래픽이 커져도 운영 복잡도가 낮아서 개인 사이트 시작점으로 적합합니다.",
      "Next.js에서 output을 export로 설정하면 out 디렉터리로 정적 파일이 생성됩니다.",
      "Cloudflare Pages는 GitHub push를 감지해 자동 빌드 및 배포를 수행하므로 운영 피로도가 낮습니다.",
    ],
  },
  {
    slug: "writing-rules",
    title: "기술 글 작성 규칙 5가지",
    summary: "독자가 바로 실행할 수 있는 글을 쓰기 위해 적용하는 개인 규칙입니다.",
    publishedAt: "2026-02-10",
    content: [
      "배경 설명보다 문제 정의를 먼저 적습니다.",
      "실행 가능한 코드나 체크리스트를 반드시 포함합니다.",
      "의사결정의 기준과 트레이드오프를 숨기지 않습니다.",
      "글 하나에 핵심 메시지는 하나만 둡니다.",
      "출간 후 1주일 안에 내용의 정확성을 한 번 더 검토합니다.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
