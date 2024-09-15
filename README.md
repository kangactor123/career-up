# Career-up

- MFA 강좌의 실습 프로젝트 입니다.
- <a href="https://fastcampus.co.kr/dev_online_mfa" target="_blank">Micro Frontend부터 모노레포까지
  대규모 서비스를 위한 프론트엔드 아키텍처</a>

## Tech

- Pnpm (Monorepo workspace)
- React, TypeScript

### Fragment

- Fragment는 feature 조각과 같기 때문에 가급적이면 기술 단위를 작게 사용하여 가져다 사용하는 측에서 부담이 적도록 개발한다.

### ImportModule

```
@module-federation/utilities
```

- Micro App을 동적으로 Import 할 수 있음.
- 만약 장애가 생겨서 특정 App이 다운되더라도 해당 App을 다시 띄우기만 한다면 빌드나 특정 프로세스를 거치지 않아도 자동으로 import 하기 떄문에 문제없이 앱을 통합할 수 있음
