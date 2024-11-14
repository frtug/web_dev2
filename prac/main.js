
let arr_2d = [];

arr_2d[0][0] = "relationship ";
arr_2d[0][1] = "name";
arr_2d[1][0] = "father";
arr_2d[1][1] = "Rohan";



for(let i=0;i<arr_2d.length;i++){
    for(let j=0;j<arr_2d[i].length;j++){
        console.log(arr_2d[i][j]);
    }
    console.log("------------")
}

let rows = 2;
let columns = 2;
let arr_2d = [];
for (let i = 0; i < rows; i++) {
    arr_2d[i] = [];
    for (let j = 0; j < columns; j++) {
        arr_2d[i][j] = `${i},${j}`; // Example value based on indices
    }
}
console.log(arr_2d);