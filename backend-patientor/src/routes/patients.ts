import express from 'express';
import patientService from '../services/patientService';
import toNewPatient from '../utils/parse-new-patients';
import toNewEntry from '../utils/parse-new-entries';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientService.getNonSensitivePatients());
});

router.get('/:id', async (req, res) => {
  res.json(patientService.getPatient(req.params.id))
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  };
    
});

router.get('/:id/entries', (req, res) => {
  res.json(patientService.getPatient(req.params.id).entries)
});

router.post('/:id/entries', (req, res) => {
  try {
    const patient = patientService.getPatient(req.params.id);
    const newEntry = toNewEntry(req.body)
    const addedEntry = patientService.addEntry(patient, newEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
})

export default router;