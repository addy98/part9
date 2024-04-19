type Diagnosis = {
    code: string,
    name: string,
    latin?: string
}

type Patient = {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: Gender,
    occupation: string
}

enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

type NonSensitivePatient = Omit<Patient, 'ssn'>;

type NewPatient = Omit<Patient, 'id'>;

export {
    Diagnosis,
    Patient,
    NonSensitivePatient,
    NewPatient,
    Gender
}