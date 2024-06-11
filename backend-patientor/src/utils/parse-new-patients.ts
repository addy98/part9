import { NewPatient, Gender } from "../types";

const toNewPatient = (object: unknown): NewPatient => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    
    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const newPatient: NewPatient = {
            name: parseNameOrOccupation(object.name),
            dateOfBirth: parseDOB(object.dateOfBirth),
            ssn: parseSSN(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseNameOrOccupation(object.occupation),
            entries: []
        };
    
        return newPatient;
    }
    
    throw new Error('Incorrect data: some fields are missing');
};

const parseNameOrOccupation = (nameOrOccupation: unknown): string => {
    if (!isString(nameOrOccupation)) {
        throw new Error('Incorrect or missing name/occcupation');
    }
    return nameOrOccupation;
};

const parseDOB = (date: unknown): string => {
    if (!isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing DOB: ' + date);
    }
    return date;
};

const parseSSN = (ssn: unknown): string => {
    if (!isString(ssn)) {
        throw new Error('Incorrect or missing SSN');
    }
    return ssn;
}

const parseGender = (gender: unknown): Gender => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(value => value.toString()).includes(param);
}

export default toNewPatient;