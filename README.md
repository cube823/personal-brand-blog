# Personal Brand Blog (Next.js + Cloudflare Pages)

개인 브랜딩 사이트/블로그를 `Next.js App Router`로 만들고, `Cloudflare Pages`에 정적 배포하는 템플릿입니다.

## Local Development

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## Static Export Build

이 프로젝트는 `next.config.ts`에서 `output: "export"`를 사용합니다.

```bash
npm run build
```

빌드 결과물은 `out/` 폴더에 생성됩니다.

## Cloudflare Pages 배포

1. GitHub에 이 프로젝트를 push
2. Cloudflare Dashboard > Workers & Pages > Create > Pages > GitHub repo 연결
3. 빌드 설정
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npx next build`
   - Build output directory: `out`
4. Deploy

## 커스텀 도메인 연결 (blog 서브도메인)

1. Pages 프로젝트의 `Custom domains`에서 `blog.yourdomain.com` 추가
2. Cloudflare DNS 레코드 확인 (보통 자동 생성되거나 CNAME 안내가 표시됨)
3. SSL 발급 완료 후 `https://blog.yourdomain.com` 접속 확인

## 콘텐츠 수정 위치

- 홈: `app/page.tsx`
- 블로그 목록: `app/blog/page.tsx`
- 블로그 상세: `app/blog/[slug]/page.tsx`
- 글 데이터: `lib/posts.ts`
