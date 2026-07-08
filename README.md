# MarketPulse FE

![React](https://img.shields.io/badge/React-18-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)
![D3](https://img.shields.io/badge/Chart-D3-f9a03c)

상품 가격, 재고, 상품 이벤트를 운영자가 한 화면에서 확인하는 React 대시보드입니다.

## 기능

- 가격 변동 alert metric
- 재고 위험 상품 목록
- D3 기반 가격/재고 추세 차트
- `ky` 공통 API client
- TanStack Query 기반 dashboard cache
- jQuery/Ajax adapter 예시

## 구조

```text
src/features/dashboard/api.ts
src/features/dashboard/hooks.ts
src/features/dashboard/types.ts
src/features/dashboard/dashboard.tsx
src/features/chart/d3-trend.ts
src/features/legacy/jquery-adapter.ts
src/shared/api/client.ts
```

## 실행

```bash
npm install
npm run dev
npm run build
npm run test:e2e
```

## 환경 변수

```bash
VITE_API_URL=http://localhost:8000/api
```
