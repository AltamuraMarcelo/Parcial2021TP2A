// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    var retorno = 0;
    if(nums.length >= 2){
        orden = nums.sort((a, b) => b - a);
        let i = 2
        while(orden[i]== orden[i - 1] && i < orden.length - 1){
            i++
        }
        retorno = orden[i]
    }else{
        retorno = undefined;
    }
    return retorno
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === 4);
console.log(greater3([1,1,2,5]) === 1);