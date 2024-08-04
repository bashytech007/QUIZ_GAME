let make=[3,3,4,5]
let ele=['hello',"hi",4,5]
let g=''
let display=(array)=>{
    for (let index = 0; index < array.length; index++) {
        g = array[index];
      
    }
    return g
}
console.log(display(make))

for (let index = 0; index < make.length; index++) {
        g = make[index];
      
    }
console.log(g)