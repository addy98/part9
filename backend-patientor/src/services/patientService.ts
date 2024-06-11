import patientData from '../data/patients';
import { Patient, NonSensitivePatient, NewPatient, Entry, NewEntry } from '../types';
import { v1 as uuid } from 'uuid'

const patients: Patient[] = patientData;

const getPatients = (): Patient[] => {
    return patients;
}

const getPatient = (id: string): Patient => {
    const patient = patients.find(x => x.id === id)
    if (patient) {
        return patient
    } else {
        throw new Error('patient doesn\'t exist')
    }
}

const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
}

const addPatient = (patient: NewPatient): Patient => {
    const newPatient = {
        id: uuid(), ...patient
    }

    patients.push(newPatient);
    return newPatient;
}

const addEntry = (patient: Patient, entry: NewEntry): Entry => {
    const newEntry = {
        id: uuid(), ...entry
    }
    patient.entries.push(newEntry);
    return newEntry;
}

export default {
    getPatients,
    getNonSensitivePatients,
    addPatient,
    getPatient,
    addEntry
}