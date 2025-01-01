---
title: 명령어
published: 2024-12-28
description: '하치봇 명령어'
image: ''
tags: [명령어]
category: '가이드'
draft: false 
---

## 명령어
하치봇 명령어 모음

### 채팅 명령어

| 명령어       | 사용 예시                                    | 설명                                   |
|-------------|----------------------------------------------|----------------------------------------|
| !chat | !chat | 방 채팅순위를 보여줌 |
| !정보 | !정보 | 내정보를 보여줌 |
| !정보 `아이디` | !정보 ABCDEF | 아이디 정보를 보여줌 |
| !유저목록 | !유저목록 | 방 유저이름들과 아이디를 보여줌 |
| !채팅기록 | !채팅기록 | 방 채팅기록을 보여줌 |
| !요약 | !요약 | 최근 채팅을 요약해줌 |
| `!원답` | !원답 | 답장한 메세지의 원본을 보여줌 |
| `!윗메` | !윗메 | 답장한 메세지의 위에있는 챗 정보를 보여줌 |
| `!밑메` | !밑메 | 답장한 메세지의 아래있는 챗 정보를 보여줌 |

:::warning
!원답 & !윗메 & !밑메 명령어를 쓸때 답장하기를 안하면 반응 없음
:::

### 미디어 & 음성 명령어

| 명령어       | 사용 예시                                    | 설명                                   |
|-------------|----------------------------------------------|----------------------------------------|
| !날씨 `국내지역` | !날씨 서울 | 국내지역 날씨를 알려줌 |
| 몰랑아 `질문` | 몰랑아 안녕 | 질문에 대한 답을 해줌 |

### 일상 질문 & 정보 명령어

| 명령어       | 사용 예시                                    | 설명                                   |
|-------------|----------------------------------------------|----------------------------------------|
| !음성변환 `음성변환을 할 말` | !음성변환 안녕 | 음성으로 변환해 줌 |
| !사진 `검색어` | !사진 몰랑이 | 사진을 검색해줌 |

:::caution
!음성변환 & !사진 명령어로 수치심, 혐오감 또는 공포심을 일으키는 행동을 할시 밴 처리
:::

### 노래 명령어

| 명령어       | 사용 예시                                    | 설명                                   |
|-------------|----------------------------------------------|----------------------------------------|
| !멜론 `노래제목` | !멜론 뽀롱뽀롱뽀로로 | 노래 정보와 노래를 듣을수 있음 |
| !멜론차트 | !멜론차트 | 멜론차트 TOP 100을 보여줌 |
| !지니차트 | !지니차트 | 지니차트 TOP 50을 보여줌 |
| !가사 `노래가사` | !가사 사랑 | 가사에 대한 노래를 찾아줌 |
| !노래 `!노래제목` | !노래 뽀롱뽀롱뽀로로 | 노래 가사를 보여줌 |

:::warning
!노래 명령어 사용할때 "!"는 제외하고 순수 숫자만 사용해야 함 (예 : 0,1,2)
:::

:::tip
카톡홈 > 맨위에 친구추가 옆에 음표모양 클릭 > 노래를 한번 틀어줘야 버튼 클릭시 옆에 노래가 나옴
:::

### 출석체크 명령어

| 명령어       | 사용 예시                                    | 설명                                   |
|-------------|----------------------------------------------|----------------------------------------|
| !ㅊㅊ | !ㅊㅊ | 출석체크를 함 |
| !멜론차트 | !멜론차트 | 멜론차트 TOP 100을 보여줌 |
| !출석부 | !출석부 | 방 출석목록을 보여줌 |
| !ㄴㅊㅊ | !ㄴㅊㅊ | 내출석목록을 보여줌 |

### 카카오톡 바로가기 명령어

| 명령어       | 사용 예시                                    | 설명                                   |
|-------------|----------------------------------------------|----------------------------------------|
| !카톡 선물함 | !카톡 선물함 | 카카오톡 선물함으로 이동함 |
| !카톡 이모티콘 | !카톡 이모티콘 | 카카오톡 이모티콘샵으로 이동함 |
| !카톡 홈 | !카톡 홈 | 카카오톡 메인화면으로 이동함 |
| !카톡 프로필 | !카톡 프로필 | 자신의 카카오톡 실제프로필(실프)로 이동함 |
| !카톡 오픈프로필 | !카톡 오픈프로필 | 자신의 카카오톡 오픈프로필(옾프)로 이동함 |
| !카톡 카카오페이 | !카톡 카카오페이 | 카카오페이로 이동함 |
| !카톡 캘린더 | !카톡 캘린더 | 카카오톡 캘린더로 이동함 |

### 카카오톡 바로가기 명령어

| 명령어       | 사용 예시                                    | 설명                                   |
|-------------|----------------------------------------------|----------------------------------------|
| !키생성 | !키생성 | 관리자 인증 키를 생성함 |
| !키확인 `받은키` | !키확인 ABCDEF | 관리자가 됨 |
| !키파괴 | !키파괴 | 관리자 인증키를 파괴함 |
| !밴 `아이디` | !밴 ABCDEF | 봇을 사용 못하게 함 |
| !밴 해제 `아이디` | !밴해제 ABCDEF | 밴을 해제 시킴 |
| !방정보 | !방정보 | 방 이름과 방 아이디를 알려줌 |
| !이용자내역 | !이용자내역 | 봇 이용자수를 알려줌 |

:::important
!밴 명령어는 명령어를 사용 못하게 막는 명령어임
:::