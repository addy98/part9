import { NewEntry, EntryType, HealthCheckRating, Discharge, SickLeave, Diagnosis } from "../types";

const toNewEntry = (object: unknown): NewEntry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    
    if ('description' in object && 
        'date' in object && 
        'specialist' in object && 
        'type' in object && 
        'diagnosisCodes' in object) {
        switch (object.type) {
            case 'HealthCheck':
                if ('healthCheckRating' in object) {
                    const newHealthCheckEntry: NewEntry = {
                        description: parseDescription(object.description),
                        date: parseDate(object.date),
                        specialist: parseSpecialist(object.specialist),
                        diagnosisCodes: parseDiagnosisCodes(object.diagnosisCodes),
                        type: parseType(object.type),
                        healthCheckRating: parseHealthCheckRating(object.healthCheckRating)
                    }
                    return newHealthCheckEntry;
                }
                break;
            case 'Hospital':
                if ('discharge' in object) {
                    const newHospitalEntry: NewEntry = {
                        description: parseDescription(object.description),
                        date: parseDate(object.date),
                        specialist: parseSpecialist(object.specialist),
                        diagnosisCodes: parseDiagnosisCodes(object.diagnosisCodes),
                        type: parseType(object.type),
                        discharge: parseDischarge(object.discharge)
                    }
                    return newHospitalEntry;
                }
                break;
            case 'OccupationalHealthcare':
                if ('employerName' in object && 'sickLeave' in object) {
                    const newOccupationalHealthcareEntry: NewEntry = {
                        description: parseDescription(object.description),
                        date: parseDate(object.date),
                        specialist: parseSpecialist(object.specialist),
                        diagnosisCodes: parseDiagnosisCodes(object.diagnosisCodes),
                        type: parseType(object.type),
                        employerName: parseEmployerName(object.employerName),
                        sickLeave: parseSickLeave(object.sickLeave)
                    }
                    return newOccupationalHealthcareEntry;
                }
                break;
        }
    }
    
    throw new Error('Incorrect data: some fields are missing');
};

const parseDate = (date: unknown): string => {
    if (!isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const parseDescription = (description: unknown): string => {
    if (!isString(description)) {
        throw new Error('Incorrect or missing SSN');
    }
    return description;
}

const parseSpecialist = (specialist: unknown): string => {
    if (!isString(specialist)) {
        throw new Error('Incorrect or missing SSN');
    }
    return specialist;
}

const parseType = (entryType: unknown): EntryType => {
    if (!isString(entryType) || !isEntryType(entryType)) {
        throw new Error('Incorrect or missing entry type: ' + entryType);
    }
    return entryType;
};

const parseHealthCheckRating = (healthCheckRating: unknown): HealthCheckRating => {
    if (!isNumber(healthCheckRating) || !isHealthCheckRating(healthCheckRating)) {
        throw new Error('Incorrect or missing health check rating: ' + healthCheckRating);
    }
    return healthCheckRating;
}

const parseDischarge = (discharge: unknown): Discharge => {
    if (!isDischarge(discharge)) {
        throw new Error('Incorrect or missing discharge object: ' + discharge);
    }
    return discharge;
}

const parseEmployerName = (employerName: unknown): string => {
    if (!isString(employerName)) {
        throw new Error('Incorrect or missing employer name');
    }
    return employerName;
}

const parseSickLeave = (sickLeave: unknown): SickLeave => {
    if (!isSickLeave(sickLeave)) {
        throw new Error('Incorrect or missing sick leave');
    }
    return sickLeave;
}

const parseDiagnosisCodes = (diagnosisCodes: unknown): Diagnosis['code'][] => {
    if (!isDiagnosisCodes(diagnosisCodes)) {
        throw new Error('Incorrect or missing diagnosis codes');
    }
    return diagnosisCodes;
}





const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
}

const isNumber = (text: unknown): text is number => {
    return typeof text === 'number' || text instanceof Number;
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const isEntryType = (param: string): param is EntryType => {
    return Object.values(EntryType).map(value => value.toString()).includes(param);
}

const isHealthCheckRating = (param: number): param is HealthCheckRating => {
    return Object.values(HealthCheckRating).includes(param);
}

const isDischarge = (param: unknown): param is Discharge => {
    return typeof param === 'object' || param instanceof Object;
}

const isSickLeave = (param: unknown): param is SickLeave => {
    return typeof param === 'object' || param instanceof Object;
}

const isDiagnosisCodes = (arr: unknown): arr is Diagnosis['code'][] => {
    if (Array.isArray(arr)) {
        let isStringArray = true;
        for (let i=0; i<arr.length; i++) {
            if (typeof arr[i] !== 'string') {
                isStringArray = false;
                break;
            }
        }
        return isStringArray;
    }
    return false;
}

export default toNewEntry;