const dayJs = require("dayjs")

function birthday(date) {
    const birthday = dayJs(date)
    return birthday
}

function mostrarIdade(date) {
    const idade = 2024 - date.year()
    return idade
}

function proximoAniver(date) {
    const anoAtual = dayJs().year()
    let proximoAniversario = date.year(anoAtual)
    if (proximoAniversario.isBefore(dayJs())) {
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    return proximoAniversario
}

function diasParaProxAniver(date) {
    const today = dayJs()
    let nextBirthday = dayJs(`${today.year()}-${date.format('MM-DD')}`)

    if (today.isAfter(nextBirthday, 'day')) {
        nextBirthday = nextBirthday.add(1, 'year')
    }
    const days = nextBirthday.diff(today, 'day')
    return days
}

const date = birthday("2004-03-28")

console.log(`A idade é: ${mostrarIdade(date)}`)
console.log(`Próximo Aniversário: ${proximoAniver(date).format("DD/MM/YYYY")}`)
console.log(`Dias para Próximo Aniversário: ${diasParaProxAniver(date)}`)

