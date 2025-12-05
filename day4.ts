function decodeSantaPin(code: string): string | null {
    const blocks = code
        .split(/\[(.*?)\]/g)
        .filter((digit) => digit)

    if (blocks.length < 4) return null

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i]
        const digit = block[0] === '<'
            ? blocks[i - 1]
            : block[0]

        let digitNumber = Number(digit)
        for (let j = 1; j < block.length; j++) {
            const operator = block[j]
            if (operator === '+')
                digitNumber++
            else if (operator === '-')
                digitNumber--

            if (digitNumber > 9) digitNumber = 0
            else if (digitNumber < 0) digitNumber = 9
        }

        blocks[i] = digitNumber.toString()
    }

    const digits = blocks.join('')

    return digits
}

console.log(decodeSantaPin('[1++][2-][3+][<]'))
// "3144"

console.log(decodeSantaPin('[9+][0-][4][<]'))
// "0944"

console.log(decodeSantaPin('[1+][2-]'))
// null (solo 2 dígitos)