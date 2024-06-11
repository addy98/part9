interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

interface Discharge {
    date: string;
    criteria: string;
}

interface SickLeave {
    startDate: string;
    endDate: string;
}

interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: Gender,
    occupation: string,
    entries: Entry[]
}

enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    type: EntryType;
    diagnosisCodes?: Array<Diagnosis['code']>;
}

enum EntryType {
    Hospital = 'Hospital',
    HealthCheck = 'HealthCheck',
    OccupationalHealthcare = 'OccupationalHealthcare'
}

enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}
  
interface HealthCheckEntry extends BaseEntry {
    healthCheckRating: HealthCheckRating;
}

interface HospitalEntry extends BaseEntry {
    discharge: Discharge;
}

interface OccupationalHealthcareEntry extends BaseEntry {
    employerName: string;
    sickLeave?: SickLeave;
}

type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;

type NewPatient = Omit<Patient, 'id'>;

// Define special omit for unions
type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
// Define Entry without the 'id' property
type NewEntry = UnionOmit<Entry, 'id'>;

export {
    Diagnosis,
    Patient,
    NonSensitivePatient,
    NewPatient,
    Gender,
    Entry,
    NewEntry,
    EntryType,
    HealthCheckRating,
    Discharge,
    SickLeave
}