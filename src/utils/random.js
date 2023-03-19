export const getRandomNumber = (a, b, precision = 0) => {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const range = max - min;
    const randomValue = Math.random() * range + min;
    const multiplier = 10 ** (precision || 0);
    return Math.round(randomValue * multiplier) / multiplier;
}
