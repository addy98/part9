import { FormEventHandler } from "react"
import { NewEntry } from "../types"
import Error from "./Error"

interface IProps {
    newWeather: string,
    newVisibility: string,
    errorMessage: string,
    entryCreation: FormEventHandler<HTMLFormElement>,
    setNewDate: (newDate: string) => void,
    setNewWeather: (newWeather: string) => void,
    setNewVisibility: (newVisibility: string) => void,
    setNewComment: (setNewComment: string) => void,
    newInput: NewEntry
}

const NewEntryForm = ({ 
    newWeather, 
    newVisibility, 
    errorMessage, 
    entryCreation, 
    setNewDate, 
    setNewWeather, 
    setNewVisibility, 
    setNewComment, 
    newInput 
}: IProps) => {

    return (
        <>
        <h3>Add new entries</h3>
        <Error message={errorMessage} />

        <form onSubmit={entryCreation}>
        
            <div>date: <input
            type="date"
            value={newInput.date}
            onChange={(event) => setNewDate(event.target.value)} 
            /></div>

            <fieldset>
                <legend>weather</legend>
                <div>
                    <input 
                    type="radio" 
                    id="sunny"
                    name="weather" 
                    value="sunny"
                    checked={newWeather === "sunny"}
                    onChange={(event) => setNewWeather(event.target.value)} />
                    <label htmlFor="sunny">sunny</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="rainy"
                    name="weather" 
                    value="rainy" 
                    checked={newWeather === "rainy"}
                    onChange={(event) => setNewWeather(event.target.value)} />
                    <label htmlFor="rainy">rainy</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="cloudy"
                    name="weather" 
                    value="cloudy"
                    checked={newWeather === "cloudy"}
                    onChange={(event) => setNewWeather(event.target.value)} />
                    <label htmlFor="cloudy">cloudy</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="stormy"
                    name="weather" 
                    value="stormy"
                    checked={newWeather === "stormy"}
                    onChange={(event) => setNewWeather(event.target.value)} />
                    <label htmlFor="stormy">stormy</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="windy"
                    name="weather" 
                    value="windy"
                    checked={newWeather === "windy"}
                    onChange={(event) => setNewWeather(event.target.value)} />
                    <label htmlFor="windy">windy</label>
                </div>
            </fieldset>

            <fieldset>
                <legend>visibility</legend>
                <div>
                    <input 
                    type="radio"
                    id="great" 
                    name="visibility" 
                    value="great"
                    checked={newVisibility === "great"}
                    onChange={(event) => setNewVisibility(event.target.value)} />
                    <label htmlFor="great">great</label>
                </div>
                <div>
                    <input 
                    type="radio"
                    id="good" 
                    name="visibility" 
                    value="good"
                    checked={newVisibility === "good"}
                    onChange={(event) => setNewVisibility(event.target.value)} />
                    <label htmlFor="good">good</label>
                </div>
                <div>
                    <input 
                    type="radio"
                    id="ok" 
                    name="visibility" 
                    value="ok"
                    checked={newVisibility === "ok"}
                    onChange={(event) => setNewVisibility(event.target.value)} />
                    <label htmlFor="ok">ok</label>
                </div>
                <div>
                    <input 
                    type="radio"
                    id="poor" 
                    name="visibility" 
                    value="poor"
                    checked={newVisibility === "poor"}
                    onChange={(event) => setNewVisibility(event.target.value)} />
                    <label htmlFor="poor">poor</label>
                </div>
            </fieldset>

            <div>comment: <input
            value={newInput.comment}
            onChange={(event) => setNewComment(event.target.value)} 
            /></div>
            
            <button type='submit'>add</button>

        </form>
        </>
    )
}

export default NewEntryForm