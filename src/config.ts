import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '하치봇',
  subtitle: 'main',
  lang: 'ko',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // 테마 색상의 기본 색상은 0에서 360까지입니다. 예를 들어 빨간색: 0, 청록색: 200, 청록색: 250, 분홍색: 345 | Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // 방문자를 위한 테마 색상 선택기 숨기기 | Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/demo-banner.jpg',   // /src 디렉토리와 관련이 있습니다. '/'로 시작하는 /public 디렉토리와 관련이 있습니다 | Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // 객체 위치와 동등하게, '위', '중심', '아래'만 지원합니다. 기본적으로 '중심' | Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,         // 배너 이미지의 크레딧 텍스트 표시 | Display the credit text of the banner image
      text: '배경출처',              // 표시할 신용 텍스트 | Credit text to be displayed
      url: 'https://ynoblesse.com/tag/%ED%95%98%EC%B9%98%EC%99%80%EB%A0%88/'                // (선택 사항) 원본 아트워크 또는 아티스트 페이지에 대한 URL 링크 | (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // 게시물 오른쪽에 목차 표시하기 | Display the table of contents on the right side of the post
    depth: 3               // 표에 표시할 최대 헤딩 깊이(1에서 3까지) | Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // 기본 패비콘을 사용하려면 이 배열을 비워 둡니다 | Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // /public 디렉토리를 기준으로 한 패비콘의 경로 | Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (선택 사항) '밝음' 또는 '어두움' 중 하나를 설정합니다. 이는 밝은 모드와 어두운 모드에 대해 서로 다른 즐겨찾기가 있는 경우에만 가능합니다 | (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (선택 사항) 파비콘의 크기, 다양한 크기의 파비콘이 있는 경우에만 설정됩니다 | (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.jpeg',  // /src 디렉토리와 관련이 있습니다. '/'로 시작하는 /public 디렉토리와 관련이 있습니다 | Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: '하치봇',
  bio: '안녕하세요 하치봇 입니다',
  links: [
    {
      name: '개발자 연락처',
      icon: 'ic:baseline-call',       // 아이콘 코드는 https://icones.js.org/ 에서 확인하세요 | Visit https://icones.js.org/ for icon codes
                                        // 해당 아이콘 세트가 아직 포함되지 않은 경우 설치해야 합니다 | You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://open.kakao.com/o/sd9CXt7g',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
