// for in
const person = {frame:"john", lname:"Doe", age:25};
// vòng lặp for in, chạy từ ky 1 đến ky cuối 
for(let key in person){
    console.log(key)
}
let text ="";
for (let x in person) {// giá trị x là key sẽ được thay đổi theo các kỳ theo từng vòng
text += person[x];}
console.log(text);
// cho obj animi = { name:"trâu",age:18,weight:"20kg",height:"1,6",gender: male}
// lấy ra chiều cao cân nặng bằng for in
