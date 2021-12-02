import * as fs from 'fs';

const loadInput = (): any[] => {
    const file = fs.readFileSync('./inputs/input-day-2.txt', 'utf8');
    const depths = file.split('\n').map(depth => {
        const splitDepth = depth.split(' ');
        return { type: splitDepth[0], number: +splitDepth[1] };
    });
    return depths;
}

const part1 = () => {
    let depth = 0;
    let horizontal = 0;
    const depths = loadInput();

    depths.forEach(item => {
        if (item.type === 'forward') {
            horizontal += item.number;
        } else if (item.type === 'up') {
            depth -= item.number;
        } else if (item.type === 'down') {
            depth += item.number;
        }
    });


    return depth * horizontal;
}

const part2 = () => {
    let aim = 0;
    let depth = 0;
    let horizontal = 0;
    const depths = loadInput();

    depths.forEach(item => {
        if (item.type === 'forward') {
            horizontal += item.number;
            depth += aim * item.number;
        } else if (item.type === 'up') {
            aim -= item.number;
        } else if (item.type === 'down') {
            aim += item.number;
        }
    });


    return depth * horizontal;
}

console.log(part1());
console.log(part2());