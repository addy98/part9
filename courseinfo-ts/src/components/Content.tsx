import Part from "./Part";
import { CoursePart } from "../interfaces";

interface ContentProps {
    courseParts: CoursePart[];
}

const Content = ({ courseParts }: ContentProps) => {
    return (
        <>
            {courseParts.map(coursePart => 
                <Part key={coursePart.name} part={coursePart} />
            )}
        </>
    );
};

export default Content;