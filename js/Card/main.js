 async function fetchData(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await response.json(); 
        return data;
    }
    catch(err){
        console.log("error ")
    }
    
} 
let data = await fetchData()
// console.log(data)

// let a ={}
// console.log(data instanceof Array)


export default data;


