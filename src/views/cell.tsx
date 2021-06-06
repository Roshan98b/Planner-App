
import './cell.css'

interface Props {
    date: string,
    month: string,
    year: string,
    tasks?: any
}

const Cell = (props: Props) => {
    return (
        <div className="cell" > {props.date}</div>
    );
}

export default Cell