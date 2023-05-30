const a = {
    a: 1,
    b: 1,
};

const b = { ...a }; // 얕은복사

b.a = 2;

console.log(a, b);

// 리액트, 리덕스 함수형 프로그래밍 -> 불변성 중요

const c = {
    city: [
        {
            id: 1,
            name: "서울",
        },
        {
            id: 2,
            name: "부산",
        },
    ],
    district: {
        city: [
            // 시 / 군 / 구
        ],
    },
};

const d = { ...c };
d.city[0] = 1;

console.log(c, d);

// map, filter, reduce => 고차함수로 새로운 배열 리턴 ( 원본 배열은 그대로 )
