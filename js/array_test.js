<head>
	<script type="text/javascript" src="search.js" defer></script>
</head>

for (var i=0; i<all.length; i++) {// for문
	console.log(all[i]);
}

all.forEach((value,index)=> {//forEach 문
	console.log('index: '+index +'Value: '+ value);
});

let empty1 = []; //빈 배열
let empty2 = [,,,];//쉼표 개수 = 크기
let all=[1,'test',3.14]; // 다른 데이터 타입 사용 가능
let coffee = ["americano", "latte"]; // 이름, 괄호
const cars = ["Saab", "volo", "BMW"]; // 상수 배열
cars[0] = "Jaab"; // 0번의 인덱스 값 수정
//const cars = new Array("Saab","Volvo","BMW");
 let car=car[2]; // 변수에 배열 값 초기화
cars[1]=Date.now();

console.log(cars); // 배열 출력
console.log(typeof cars); // 배열 타입: 객체
