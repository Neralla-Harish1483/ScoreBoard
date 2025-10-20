import './App.css'
import { useState } from 'react';
import { ScoreCard } from './components/ScoreCard/ScoreCard.js';
import ScoreIncrementButton from './components/ScoreCard/ScoreIncremenetButton.js';

function App() {
      let [score,scoreFun] = useState(0)
    
      function incrementCounter(value){
        console.log('I am increment function')
        score=score+value
        scoreFun(score)
        console.log(score)
      }

  return (
    <div>

      <ScoreCard score={score}/>
      <ScoreIncrementButton incrementCounter = {incrementCounter}/>

    </div>
    
  );

}

export default App;

// use call , useMemo , ReactMemo if we use this methods , if we dont want to render that function at every time then we can write this when we writing 
// export then we can write any one of this



// array destructing 
// const mainArray = ['harish','Dhanush']
// console.log(mainArray[0])
// console.log(mainArray[1])

// const [firstValue,secondValue] = mainArray

// console.log(firstValue)
// console.log(secondValue)


// function textFunction(){
//   console.log('I am Hello Function')
// }
// function updateMe(){
//   return [100,textFunction]
// }

// const result = updateMe()

// console.log(result[1])

// const [value,tF] = result
// console.log(value)
// tF()


