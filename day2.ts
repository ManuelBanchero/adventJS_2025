interface Gift {
    toy: string,
    quantity: number
}

function manufactureGifts(
    giftsToProduce: Array<Gift>
): string[] {
    const gifts: string[] = []

    giftsToProduce.forEach((gift) => {
        if (gift.quantity < 0) return

        gifts.push(...Array(gift.quantity).fill(gift.toy))
    })

    return gifts
}

const production1: Array<{ toy: string, quantity: number }> = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2: Array<{ toy: string, quantity: number }> = [
    { toy: 'train', quantity: 0 }, // no se fabrica
    { toy: 'bear', quantity: -2 }, // tampoco
    { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3: Array<{ toy: string, quantity: number }> = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []