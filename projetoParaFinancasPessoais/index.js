function renderTransition(transitionData) {
    const transition = document.createElement('div')
    transition.classList.add('transition')
    transition.id = `transition-${transitionData.id}`

    const name = document.createElement('h3')
    name.classList.add('transition-name')
    name.textContent = transitionData.name

    const value = document.createElement('div')
    value.classList.add('transition-value')
    value.textContent = `R$ ${transitionData.value}`  // Adiciona o símbolo de reais

    // Adiciona o botão de remover para cada transição
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remover'
    removeButton.addEventListener('click', () => {
        removeTransition(transitionData.id)
    })

    transition.append(name, value, removeButton)
    document.querySelector('#transitions').appendChild(transition)

    updateBalance()  // Atualiza o balance após renderizar a transição
}

async function fetchTransitions() {
    const transitions = await fetch("http://localhost:3000/transitions").then(res => res.json())
    transitions.forEach(renderTransition)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTransitions()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const transitionData = {
        name: document.querySelector('#name').value,
        value: parseFloat(document.querySelector('#value').value)  // Converte o valor para número
    }

    const response = await fetch("http://localhost:3000/transitions", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transitionData)
    })

    const savedTransition = await response.json()
    form.reset()
    renderTransition(savedTransition)
})

async function removeTransition(id) {
    await fetch(`http://localhost:3000/transitions/${id}`, {
        method: 'DELETE'
    })
    document.querySelector(`#transition-${id}`).remove()
    
    updateBalance()  // Atualiza o balance após remover a transição
}

function updateBalance() {
    const transitions = document.querySelectorAll('.transition-value')
    let totalBalance = 0

    transitions.forEach(transition => {
        const value = parseFloat(transition.textContent.replace('R$', '').trim())
        totalBalance += value
    })

    document.querySelector('.balance').textContent = `Saldo: R$ ${totalBalance}`
}
