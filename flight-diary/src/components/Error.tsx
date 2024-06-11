interface ErrorProps {
    message: string
}

const Error = ({ message }: ErrorProps) => {
    return (
        <>
            <div className="red">{message}</div>
            <br />
        </>
    )
}

export default Error