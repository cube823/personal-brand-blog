export type Post = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "ethereum-onboarding-friction",
    title: "이더리움 온보딩에서 사용자가 떠나는 3가지 지점",
    summary: "지갑 생성부터 첫 트랜잭션까지, 실제 제품에서 줄여야 할 마찰 포인트를 정리했습니다.",
    publishedAt: "2026-02-14",
    content: [
      "대부분의 이탈은 복잡한 개념 때문이 아니라, 사용자가 다음 행동을 확신하지 못하는 순간에 발생합니다.",
      "온보딩 화면은 지식 전달보다 '지금 무엇을 하면 되는지'를 즉시 이해시키는 설계가 핵심입니다.",
      "용어, 수수료, 실패 가능성은 숨기지 말고, 예측 가능한 흐름 안에서 제어 가능하게 제공해야 합니다.",
    ],
  },
  {
    slug: "trust-interface-web3",
    title: "Web3 제품의 신뢰는 인터페이스에서 시작된다",
    summary: "인문학 관점에서, 사용자 신뢰를 설계하는 문구와 흐름의 원칙을 다룹니다.",
    publishedAt: "2026-02-13",
    content: [
      "블록체인 제품은 기술 복잡성이 높기 때문에, 인터페이스의 언어가 곧 신뢰의 언어가 됩니다.",
      "사용자는 실패를 두려워합니다. 따라서 경고는 불안을 키우는 문장이 아니라 행동을 안내하는 문장이어야 합니다.",
      "명확한 책임 범위와 되돌릴 수 없는 행동의 의미를 정직하게 전달할 때 장기적 신뢰가 쌓입니다.",
    ],
  },
  {
    slug: "ai-execution-loop-for-builders",
    title: "AI 시대 개발자를 위한 실행 루프: 가설-프로토타입-검증",
    summary: "실력 정체를 돌파하기 위해 매주 반복 가능한 실행 루프를 설계한 방법입니다.",
    publishedAt: "2026-02-12",
    content: [
      "AI를 도구로 쓴다고 해서 성장이 자동으로 보장되지는 않습니다. 구조화된 실행 루프가 필요합니다.",
      "매주 한 문제를 고르고, 하루 안에 프로토타입을 만들고, 실제 사용자 반응으로 가설을 검증합니다.",
      "이 과정에서 중요한 것은 완성도가 아니라 학습 속도이며, 학습 속도는 기록의 품질에서 결정됩니다.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
