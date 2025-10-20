
import "./ScoreIncrementButton.css"

function ScoreIncrementButton(props){
    console.log('ScoreIncrementButto is calling')
    const {incrementCounter} = props 
    return (
        <div className='flex'>
            <button className='score-increment' onClick={()=> incrementCounter(1)}>+1</button>

            <button className='score-increment' onClick={()=> incrementCounter(5)}>+5</button>

            <button className='score-increment' onClick={()=> incrementCounter(-5)}>-5</button>
    
        </div>

    )
}

export default ScoreIncrementButton