// Nome da Homenageada
const homenageada = "Cinthia ❤️"

// Observação ou mensagem extra
export const observacao = computed(()=>[
    `🌹 Página dedicada ao amor da minha vida - ${homenageada}`
])

// Nome do autor/assinatura
export const autor = "Herik 💙"

// Mensagem principal (cada item da lista será uma linha ou parágrafo)
export const mensagem = computed(()=>[
  "Esta página foi feita com amor, para você.",
  `Para sempre seu,${autor}`
])