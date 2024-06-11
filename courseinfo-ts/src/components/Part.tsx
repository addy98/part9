import { CoursePart } from "../interfaces";

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

interface PartProps {
    part: CoursePart;
};

const Part = ({ part }: PartProps) => {
    switch(part.kind) {
        case 'basic':
            return (
                <>
                    <div><strong>name:</strong> {part.name}</div>
                    <div><strong>exercise count:</strong> {part.exerciseCount}</div>
                    <div><strong>description:</strong> {part.description}</div>
                    <br />
                </>
            )
        case 'group':
            return (
                <>
                    <div><strong>name:</strong> {part.name}</div>
                    <div><strong>exercise count:</strong> {part.exerciseCount}</div>
                    <div><strong>group project count:</strong> {part.groupProjectCount}</div>
                    <br />
                </>
            )
        case 'background':
            return (
                <>
                    <div><strong>name:</strong> {part.name}</div>
                    <div><strong>exercise count:</strong> {part.exerciseCount}</div>
                    <div><strong>description:</strong> {part.description}</div>
                    <div><strong>background material:</strong> {part.backgroundMaterial}</div>
                    <br />
                </>
            )
        case 'special':
            return (
                <>
                    <div><strong>name:</strong> {part.name}</div>
                    <div><strong>exercise count:</strong> {part.exerciseCount}</div>
                    <div><strong>description:</strong> {part.description}</div>
                    <div><strong>requirements:</strong> {part.requirements.join(', ')}</div>
                    <br />
                </>
            )

        default:
            return assertNever(part)
    }
};

export default Part;