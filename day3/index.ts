import * as fs from 'fs';

const loadInput = (): any[] => {
    const file = fs.readFileSync('./inputs/input-day-3.txt', 'utf8');
    const bits = file.split('\n');
    return bits;
}

const part1 = () => {
    let gamma = calcRate(loadInput(), true);
    let epsilon = calcRate(loadInput(), false);

    return gamma * epsilon;
}

const compareValue = (mode: boolean, valueOne: number, valueTwo: number): boolean => {
    if (mode) {
        return valueOne > valueTwo;
    } else {
        return valueOne < valueTwo;
    }
}

const calcRate = (input: string[], direction: boolean) => {
    let output = "";
    for (let i = 0; i < input[0].length; i++) {
        let zeroCount = 0;
        let oneCount = 0;

        for (let element of input) {
            if (element[i] == "0") {
                zeroCount += 1;
            } else {
                oneCount += 1;
            }
        }
        if (compareValue(direction, zeroCount, oneCount)) {
            output += "0";
        } else {
            output += "1";
        }

    }
    return parseInt(output, 2);
}

const part2 = () => {
    const input = loadInput();
    const oxygen = calcCO2OrOxygen(input, false);
    const co2 = calcCO2OrOxygen(input, true);

    return oxygen * co2;
}
const compareCO2AndOxygen = (mode: boolean, valueOne: number, valueTwo: number): boolean => {
    if (mode) {
        return valueOne < valueTwo;
    } else {
        return valueOne >= valueTwo;
    }
}

const calcCO2OrOxygen = (input: string[], CO2: boolean) => {
    let output = [...input];

    for (let i = 0; i < input[0].length && output.length > 1; i++) {
        let oneCount = 0;
        let zeroCount = 0;
        for (let element of output) {
            if (element[i] === "0") {
                zeroCount += 1;
            } else {
                oneCount += 1;
            }
        }
        if (compareCO2AndOxygen(CO2, oneCount, zeroCount)) {
            for (let j = output.length - 1; j >= 0; j--) {
                if (output[j][i] === '0') {
                    output.splice(j, 1);
                }
            }
        } else {
            for (let j = output.length - 1; j >= 0; j--) {
                if (output[j][i] === '1') {
                    output.splice(j, 1);
                }
            }
        }
    }
    return parseInt(output[0], 2);
}

console.log(part1());
console.log(part2());