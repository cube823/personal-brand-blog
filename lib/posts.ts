export type Post = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "keeper-bot-from-signal-to-action",
    title: "keeper-bot: 시그널을 행동으로 바꾸는 설계",
    summary: "청산 기회를 발견하는 로직보다, 잘못된 실행을 막는 규칙이 왜 중요한지 정리했습니다.",
    publishedAt: "2026-02-14",
    content: [
      "청산은 빠르게 반응하는 문제가 아니라, 불확실한 신호를 실행 가능한 규칙으로 바꾸는 문제였습니다.",
      "포지션 티어링, 수익성 계산, 실행 전 시뮬레이션을 분리해 판단의 일관성을 유지했습니다.",
      "결과적으로 핵심은 더 많은 트랜잭션이 아니라, 실패 트랜잭션을 줄이는 설계였습니다.",
    ],
  },
  {
    slug: "language-of-risk",
    title: "리스크를 설명하는 언어가 제품의 신뢰를 만든다",
    summary: "사용자가 두려워하는 지점을 감추지 않고, 행동 가능한 안내로 바꾸는 방식에 대해 씁니다.",
    publishedAt: "2026-02-13",
    content: [
      "사용자는 기술을 평가하기 전에, 실패했을 때의 책임 구조를 먼저 감지합니다.",
      "좋은 경고 문구는 공포를 키우는 문장이 아니라 다음 행동을 구체적으로 제시하는 문장입니다.",
      "신뢰는 기능이 아니라 언어와 흐름에서 먼저 형성된다고 생각합니다.",
    ],
  },
  {
    slug: "execution-under-uncertainty",
    title: "불확실성 아래에서 실행력을 유지하는 개인 시스템",
    summary: "AI 시대에 개발자가 대체 불가능해지려면 무엇을 반복해야 하는지, 내 운영 루틴을 정리했습니다.",
    publishedAt: "2026-02-12",
    content: [
      "도구는 빨라졌지만, 무엇을 만들지 선택하는 감각은 여전히 사람의 몫입니다.",
      "저는 매주 문제 정의, 가설, 프로토타입, 검증 기록을 하나의 루프로 묶어 운영합니다.",
      "완성도를 높이는 것보다 학습 속도를 높이는 것이 장기적으로 더 큰 차이를 만든다고 믿습니다.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
