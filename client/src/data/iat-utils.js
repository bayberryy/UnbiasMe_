const Shuffle = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    return list;
};

function sd(values) {
    const n = values.length;
    const mean = values.reduce((sum, value) => sum + value, 0) / n;
    const squaredDifferences = values.map(value => Math.pow(value - mean, 2));
    const sumOfSquaredDifferences = squaredDifferences.reduce((sum, value) => sum + value, 0);
    const variance = sumOfSquaredDifferences / n;
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
}

function mean(values) {
    return values.reduce(( total, current ) => total + current, 0) / values.length
}

function calculateDScore(block1, block2) {
    const meanDiff = mean(block2) - mean(block1);
    const pooledSD = Math.sqrt(
    (Math.pow(sd(block1), 2) + Math.pow(sd(block2), 2)) / 2
    );
    const dScore = meanDiff / pooledSD;

    return dScore;
}


module.exports = {
    Shuffle,
    calculateDScore
}
