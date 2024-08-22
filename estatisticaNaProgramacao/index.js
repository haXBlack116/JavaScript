const media = (...nums) => {return (nums.reduce((accum,num) => accum + num,0))/nums.length}

const mediaPonderada = (...valores) => {
    let sumPesos = 0;
    let mult = 0;
    for (let i = 0; i < valores.length; i++) {
        mult += valores[i].n * valores[i].p
        sumPesos += valores[i].p
    }
    return mult/sumPesos;
}

const mediana = (...nums) => {
    nums.sort((a, b) => a - b)
    const meio = Math.floor(nums.length / 2)
    if (nums.length % 2 === 0) {
        return (nums[meio - 1] + nums[meio]) / 2
    } else {
        return nums[meio]
    }
}

const moda = (...nums) => {
    const quantidades = nums.map(num => [
        num,
        nums.filter(n => num === n).length
    ])
    quantidades.sort((a,b) => b[1] - a[1])
    return quantidades[0][0]
}

const result3 = mediana(2,4,5,7,42,99)
alert(`O resultado é ${result3}`)

const result4 = mediana(3,4,5,6,7)
alert(`O resultado é ${result4}`)

const result2 = mediaPonderada({n:7,p:2}, {n:9,p:5}, {n:3,p:1})
alert(`O resultado é ${result2}`)

const result = media(60,23,32,41,5)
alert(`O resultado é ${result}`)

const result5 = moda(0,4,4,4,9,0,1,1,3)
alert(`O resultado é ${result5}`)


