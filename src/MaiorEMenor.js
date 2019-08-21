function MaiorEMenor() {
    var menor
    var maior

    var clazz = {
        encontra : nums => {
            menor = Number.MAX_VALUE
            maior = Number.MIN_VALUE

            nums.forEach(num => {
                if(num < menor) menor = num
                if(num > maior) maior = num
            })
        },

        pegaMenor : () => { return menor },

        pegaMaior : () => { return maior }
    }

    return clazz
}