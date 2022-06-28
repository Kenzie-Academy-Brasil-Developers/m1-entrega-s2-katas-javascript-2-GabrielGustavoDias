function add(x,y){
    return x+y
}



console.assert(add(3,5))===8

function multiply(x,y){
    let resultado=0
    for( let i = 0 ; i < x; i++ ){
        resultado = add(y,resultado)
        
    }
    return resultado
}

console.assert(multiply(4,6))===24

function power (x,y){
    let resultado = 1
    for(let i = 0; i < y ; i++){
        resultado = multiply(x,resultado)        
    }
    return resultado
}

console.assert(power(3,4))===81

function factorial(x){
    let resultado = x
    for(let i = x-1; i > 0 ; i--){
        resultado = multiply(i,resultado)
    }   
    return resultado
}

console.assert(factorial(5))==120


function fibonacci(x){
    
    let resultado = 1
        if(x!=2  && x!=1){
        resultado1 = 1
        let resultado2 = 0
        for(let i = 1; i < x; i++ ){
            resultado2 = resultado1

            resultado1 = resultado1 + resultado

            resultado = resultado2
        }
    } return resultado
    }

console.assert(fibonacci(7))===13
