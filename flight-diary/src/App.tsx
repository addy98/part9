import { useEffect, useState } from "react"
import { Entry } from "./types"
import { getAllEntries, createEntry } from "./entryService"
import NewEntryForm from "./components/NewEntryForm"
import EntryList from "./components/EntryList"

const App = () => {

  const [newDate, setNewDate] = useState('')
  const [newWeather, setNewWeather] = useState('')
  const [newVisibility, setNewVisibility] = useState('')
  const [newComment, setNewComment] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const [entries, setEntries] = useState<Entry[]>([])

  useEffect(() => {
    getAllEntries().then(data => setEntries(data))
  }, [])

  const entryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault()
    createEntry({
      date: newDate,
      weather: newWeather,
      visibility: newVisibility,
      comment: newComment
    })
    .then(data => setEntries(entries.concat(data)))
    .catch(error => setErrorMessage(error.response.data))
    setNewDate('')
    setNewWeather('')
    setNewVisibility('')
    setNewComment('')
    setErrorMessage('')
  }

  return (
    <>

      <NewEntryForm
        newWeather={newWeather}
        newVisibility={newVisibility}
        errorMessage={errorMessage}
        entryCreation={entryCreation}
        setNewDate={setNewDate}
        setNewWeather={setNewWeather}
        setNewVisibility={setNewVisibility}
        setNewComment={setNewComment}
        newInput={
          {
            date: newDate,
            weather: newWeather,
            visibility: newVisibility,
            comment: newComment
          }
        }/>

      <EntryList entries={entries}/>

    </>
  )
}

export default App
