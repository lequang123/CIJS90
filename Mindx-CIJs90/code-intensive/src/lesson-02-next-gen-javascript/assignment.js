// cau4
// const obj = { foo: 1 }
// obj.bar = 2

//console.log(obj);

// cau5
// const speed = 'quick';
// const speed2 = 'slow';
// const templateLiteral = `The ${speed} brown fox jumps over the lazy dog ${speed2}. `

//console.log(templateLiteral);

// cau6
// const obj = {

// }

// console.log(obj[123]);

// cau7
// let array = [1, 2, 3]
// const extension = [4, 5, 6]

// array = [...extension, ...array]

// console.log(array);

// function mystery(...params) {
// 	return params
// }
// const a = mystery(1, 23, 4);

// console.log(a);

//console.log([...[..."..."]].length);

// cau 10

// let a = 12, b = 3;
// [a, b] = [b, a];

// console.log(a, b);

// thuc hanh
// 1
//c1
// const reverse = param =>{
//     const arr = [];
//     for(let i = param.length - 1; i >= 0; i--){
//         arr.push(param[i]);
//     }

//     console.log(arr.join(","));
// }

// reverse('abcdef');


//c2

// const inputString = "abcdef";

// const reversedString = inputString.split('').map((char, index, array) => {
//     return array[array.length - index - 1];
// }).join('');

// console.log(reversedString);


//c2

function findMostFrequentElement(arr) {
    if (arr.length === 0) {
        return "Mảng trống.";
    }

    // Sử dụng đối tượng để đếm số lần xuất hiện của mỗi phần tử
    let elementCount = {};
    
    // Lặp qua mảng để đếm số lần xuất hiện
    arr.forEach(element => {
        if (elementCount[element]) {
            elementCount[element]++;
        } else {
            elementCount[element] = 1;
        }
    });
    // Tìm phần tử xuất hiện nhiều nhất
    let mostFrequentElement;
    let maxCount = 0;

    for (let element in elementCount) {
        if (elementCount[element] > maxCount) {
            mostFrequentElement = element;
            maxCount = elementCount[element];
        }
    }
   console.log(`Phần tử xuất hiện nhiều nhất là "${mostFrequentElement}" với số lần xuất hiện là ${maxCount}.`);
}

findMostFrequentElement([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]);
