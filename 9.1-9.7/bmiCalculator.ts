import { BMI, BmiParsedArgs } from "./interfaces";

const parseBmiArguments = (args: string[]): BmiParsedArgs => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    } else {
        throw new Error('Provided values were not numbers');
    }
};

const calculateBmi = (height: number, weight: number): BMI => {
    const heightInMeters = height/100;
    const bmi = weight / (heightInMeters*heightInMeters);
    if (bmi < 18.5) {
        return {
            bmi: bmi,
            qualifier: 'underweight'
        };
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return {
            bmi: bmi,
            qualifier: 'normal'
        };
    } else if (bmi >= 25 && bmi <= 29.9) {
        return {
            bmi: bmi,
            qualifier: 'overweight'
        };
    } else {
        return {
            bmi: bmi,
            qualifier: 'obese'
        };
    }
};

try {
    const { height, weight } =  parseBmiArguments(process.argv);
    console.log(calculateBmi(height, weight));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}

export default calculateBmi;