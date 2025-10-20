
import './ScoreCard.css'
export function ScoreCard(props){
    const  {score} = props
    return (
        <div className="score-board flex">
            <h1>Score Board</h1>
            <h1 className='score-board-content'>{score}</h1></div>
    )
}