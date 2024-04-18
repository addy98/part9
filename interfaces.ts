import { bmiQualifier } from "./types";

export interface ExerciseParsedArgs {
    target: number,
    dailyHours: number[]
}

export interface BmiParsedArgs {
    weight: number,
    height: number,
}

export interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

export interface BMI {
    bmi: number,
    qualifier: bmiQualifier
}