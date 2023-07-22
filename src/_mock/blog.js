import { faker } from "@faker-js/faker";

// ----------------------------------------------------------------------

const POST_TITLES = [
  "Whiteboard Templates By Industry Leaders",
  "아스파라거스 베이컨말이",
  "아몬드 멸치볶음",
  "브로콜리두부무침 ",
  "김밥",
  "새송이 버섯 장조림",
  "바나나 머핀",
  "오렌지 치킨",
  "귀리 미숫가루 머핀",
  "사과 바나나 귀리 요거트 우유",
  "아보카도 바나나 귀리 주스",
  "비트 피클",
  "비트사과주스",
  "비트 감자전",
  "돼지고기 생강구이",
  "양파전",
  "양파 카레",
  "키위 바나나 스무디",
  "연근 간장 조림",
  "감자 미역국",
  "병아리 콩국수",
  "고구마 맛탕",
  "블루베리머핀",
  "참치케일쌈밥",
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpeg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
