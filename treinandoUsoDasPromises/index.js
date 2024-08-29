function imc(peso, altura) {
    const p = new Promise((resolve, reject) => {
        console.log("O IMC está sendo calculado...")
        setTimeout(() => {
            if (isNaN(peso) || isNaN(altura)) {
                reject("Os dados precisam ser do tipo number!")
            }else{
            resolve(calculateIMC(peso, altura))
        }
        }, 5 * 1000)
    })
    return p
}

function calculateIMC(peso, altura) {
    const imc = peso / (altura * altura)
    let resultado = ""

    if (imc < 18.5) {
        resultado = "Magreza"
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Normal"
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Sobrepeso"
    } else if (imc >= 30 && imc <= 39.9) {
        resultado = "Obesidade"
    } else if (imc >= 40) {
        resultado = "Obesidade Grave"
    }
    return resultado
}

console.log('Qual o seu peso?')
process.stdin.once('data', (data) => {
  const peso = data.toString().trim()

  console.log('Qual sua altura?')
  process.stdin.once('data', (data) => {
    const altura = data.toString().trim()

    const p = imc(peso, altura)
    p.then((result) => {
      console.log(`O IMC foi calculado | Situação: ${result}`)
      process.exit()
    }).catch((error) => {
      console.error(error)
      process.exit(1)
    })
  })
})
