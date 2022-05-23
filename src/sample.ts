interface IFullTimeList {
    name: string,
    cata: string,
    no: number,
    info: string,
}

interface IPartTimeList {
    name: string,
    cata: string,
    no: number,
    day: string,
    pay: number, 
}

interface IInternList {
    name: string,
    cata: string,
    no: number,
    period: string,
}

export const FullTimeList : IFullTimeList [] = [
    {
        name: "GMARKET",
        cata: "Full",
        no: 1,
        info: "부분별 신입 및 경력 사원 채용",
    },
    {
        name: "SAMSUNG",
        cata: "Full",
        no: 2,
        info: "2022년 상반기 신입/경력 모집",
    },
    {
        name: "EMART",
        cata: "Full",
        no: 3,
        info: "각 부분 구성원 모집",
    },
    {
        name: "GOOGLE",
        cata: "Full",
        no: 4,
        info: "2022년 경력직 대규모 채용",
    },
    {
        name: "MUSINSA",
        cata: "Full",
        no: 5,
        info: "IT분야 상시 채용",
    },
    {
        name: "LG",
        cata: "Full",
        no: 6,
        info: "물류설비 엔지니어 신입/경력",
    },
    {
        name: "SK",
        cata: "Full",
        no: 7,
        info: "2022년 제 2차 대졸 신입채용",
    },
    {
        name: "KT",
        cata: "Full",
        no: 8,
        info: "소프트웨어 엔지니어 채용",
    },
    {
        name: "POSCO",
        cata: "Full",
        no: 9,
        info: "부분별 경력/신입 수시 채용",
    },
    {
        name: "KAKAO",
        cata: "Full",
        no: 10,
        info: "국내 영업/해외영업/마케팅",
    },
    {
        name: "AMAZON",
        cata: "Full",
        no: 11,
        info: "검색광고 공식대행사 전문 채용관",
    },
    {
        name: "NIKE",
        cata: "Full",
        no: 12,
        info: "회계 경력직 채용",
    },
    {
        name: "SONY",
        cata: "Full",
        no: 13,
        info: "2022 상반기 채용공고",
    },
    {
        name: "EBAY",
        cata: "Full",
        no: 14,
        info: "IT분야 상시 채용",
    },
    {
        name: "NETFLEX",
        cata: "Full",
        no: 15,
        info: "영상 편집 기술자 채용",
    },
    {
        name: "HERMES",
        cata: "Full",
        no: 16,
        info: "2022년 제 2차 대졸 신입채용",
    },
    {
        name: "TESLA",
        cata: "Full",
        no: 17,
        info: "테슬라 초기 주주 채용",
    },
    {
        name: "PAYPAL",
        cata: "Full",
        no: 18,
        info: "본사/현장 직원채용",
    },
    {
        name: "IKEA",
        cata: "Full",
        no: 19,
        info: "가구잘알 상시 채용",
    },
    {
        name: "META",
        cata: "Full",
        no: 20,
        info: "페이스북 사용자 상시 채용",
    },
];

export const PartTimeList : IPartTimeList [] = [
    {
        name: "듀폰코리아(주)",
        cata: "Part",
        no: 11,
        day: "평일",
        pay: 10000,
    },
    {
        name: "CU",
        cata: "Part",
        no: 12,
        day: "월수금",
        pay: 9300,
    },
    {
        name: "삼진제약(주)",
        cata: "Part",
        no: 13,
        day: "화목",
        pay: 9250,
    },
    {
        name: "제우스(주)",
        cata: "Part",
        no: 14,
        day: "주말",
        pay: 10000,
    },
    {
        name: "디아이티(주)",
        cata: "Part",
        no: 15,
        day: "평일",
        pay: 9500,
    },
    {
        name: "하이마트",
        cata: "Part",
        no: 16,
        day: "평일",
        pay: 9500,
    },
    {
        name: "GS25",
        cata: "Part",
        no: 17,
        day: "주말",
        pay: 10000,
    },
    {
        name: "다이소",
        cata: "Part",
        no: 18,
        day: "월수금",
        pay: 12000,
    },
    {
        name: "올리브영",
        cata: "Part",
        no: 19,
        day: "월수금",
        pay: 9250,
    },
    {
        name: "디알 엑시온(주)",
        cata: "Part",
        no: 20,
        day: "주말",
        pay: 9250,
    },
];

export const InternList : IInternList [] = [
    {
        name: "ROLEX",
        cata: "Intern",
        no: 21,
        period: "2022 / 7~9",
    },
    {
        name: "3M",
        cata: "Intern",
        no: 22,
        period: "2022 / 7~9",
    },
    {
        name: "KFC",
        cata: "Intern",
        no: 23,
        period: "2022 / 7~9",
    },
    {
        name: "LINKEDIN",
        cata: "Intern",
        no: 24,
        period: "2022 / 7~9",
    },
    {
        name: "PRADA",
        cata: "Intern",
        no: 25,
        period: "2022 / 7~9",
    },
    {
        name: "CARTIER",
        cata: "Intern",
        no: 26,
        period: "2022 / 7~9",
    },
    {
        name: "DIOR",
        cata: "Intern",
        no: 27,
        period: "2022 / 7~9",
    },
    {
        name: "GUCCI",
        cata: "Intern",
        no: 28,
        period: "2022 / 7~9",
    },
    {
        name: "LEGO",
        cata: "Intern",
        no: 29,
        period: "2022 / 7~9",
    },
    {
        name: "BURBERRY",
        cata: "Intern",
        no: 30,
        period: "2022 / 7~9",
    },
];