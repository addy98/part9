import express from 'express';
import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if (!height || !weight || isNaN(height) || isNaN(weight)) {
        res.status(400).json({ error: 'malformatted parameters' });
    } else {
        res.send({
            height: height,
            weight: weight,
            bmi: calculateBmi(height, weight)
        });
    }
});

app.post('/exercises', (req, res) => {
    const { target, daily_exercises } = req.body;

    let notNumbers = false;
    for (let i=0; i<daily_exercises.length; i++) {
        if (isNaN(Number(daily_exercises[i]))) {
            notNumbers = true;
        };
    };

    if (!target || !daily_exercises) {
        res.status(400).json({ error: 'parameters missing' });
    } else if (isNaN(Number(target)) || notNumbers) {
        res.status(400).json({ error: 'malformatted parameters' });
    } else {
        res.json(calculateExercises(target, daily_exercises));
    }
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});