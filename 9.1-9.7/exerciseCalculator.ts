import { ExerciseResult, ExerciseParsedArgs } from "./interfaces";

const parseExerciseArguments = (args: string[]): ExerciseParsedArgs => {

    const parsed = [];
    if (args.length < 4) throw new Error('Not enough arguments');

    if (isNaN(Number(args[2]))) {
        throw new Error('Provided values were not all numbers');
    }

    for (let i=3; i<args.length; i++) {
        if (isNaN(Number(args[i]))) {
            throw new Error('Provided values were not all numbers');
        } else {
            parsed.push(Number(args[i]));
        }
    }

    return {
        target: Number(args[2]),
        dailyHours: parsed
    };
};

const calculateExercises = (targetDailyHours: number, dailyHours: number[]): ExerciseResult => {
    const periodLength = dailyHours.length;
    const trainingDays = dailyHours.filter(x => x > 0).length;
    const average = (dailyHours.reduce((sum, element) => sum + element, 0)) / periodLength;
    const target = targetDailyHours;
    const success = average >= target;
    const ratingCalculation = target / average;
    let rating: number, ratingDescription: string;
    
    if (ratingCalculation <= 1)  {
        rating = 3;
        ratingDescription = 'hit target exercise hours';
    } else if (ratingCalculation > 1 && ratingCalculation < 2) {
        rating = 2;
        ratingDescription = 'not too bad but could be better';
    } else {
        rating = 1;
        ratingDescription = 'underachieved';
    }

    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    };
};

try {
    const { target, dailyHours } = parseExerciseArguments(process.argv);
    console.log(calculateExercises(target, dailyHours));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}

export default calculateExercises;