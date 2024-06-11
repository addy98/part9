import { Entry } from "../types"

interface IProps {
    entries: Entry[]
}

const EntryList = ({ entries }: IProps) => {
    return (
        <>
            <h3>Diary entries</h3>
            {entries.map(entry =>
                <div key={entry.id}>
                <h4>{entry.date}</h4>
                <div>weather: {entry.weather}</div>
                <div>visibility: {entry.visibility}</div>
                </div>
            )}
        </>
    )
}

export default EntryList