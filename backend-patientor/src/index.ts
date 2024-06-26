import express from 'express';
import diagnosisRouter from './routes/diagnoses';
import patientRouter from './routes/patients';

const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.use('/api/diagnoses', diagnosisRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});