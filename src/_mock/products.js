import { faker } from "@faker-js/faker";
import { sample } from "lodash";

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "아스파라거스",
  "아몬드",
  "김",
  "새송이 버섯",
  "그린 바나나",
  "레드 와인",
  "아티초크",
  "브로콜리",
  "오렌지",
  "귀리",
  "비트",
  "생강",
  "양파",
  "키위",
  "사과",
  "귤",
  "병아리콩",
  "연근",
  "케일",
  "미역",
  "고구마",
  "버섯",
  "귀리 시리얼",
  "블루 베리",
];
const PRODUCT_COLOR = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;
  const priceInKRW = faker.datatype.number({
    min: 5000,
    max: 12000,
    precision: 100,
  });

  const product = {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpeg`,
    name: PRODUCT_NAME[index],
    price: `${priceInKRW.toLocaleString()}₩`,
    priceSale:
      setIndex % 3
        ? null
        : `${faker.datatype
            .number({ min: 5000, max: 12000, precision: 100 })
            .toLocaleString()}₩`,
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(["sale", "new", "", ""]),
  };
  return product;
});

export default products;
