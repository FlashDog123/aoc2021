import * as fs from 'fs';

const loadInput = (): number[] => {
    const file = fs.readFileSync('./inputs/input-day-1.txt', 'utf8');
    const depths = file.split('\n').map(depth => +depth);

    return depths;
}

const part1 = () => {
    let depthsFound = 0;
    const depths = loadInput();

    for (let index = 1; index < depths.length; index++) {
        if (depths[index] > depths[index - 1]) {
            depthsFound++;
        }
    }

    return depthsFound;
}

const part2 = () => {
    let depthsFound = 0;
    const depths = loadInput();

    for (let index = 3; index < depths.length; index++) {
        if (depths[index - 2] + depths[index - 1] + depths[index] > depths[index - 3] + depths[index - 2] + depths[index - 1]) {
            depthsFound++;
        }
    }

    return depthsFound;
}

console.log(part2());
