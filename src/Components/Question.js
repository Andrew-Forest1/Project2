import { useState } from "react"

function Question({character, question, answers, correctAnswer, handleSubmit, correct, incorrect, setCorrect, setIncorrect, answered, setAnswered}){
    const [selected, setSelected] = useState(answers.answer1);

    const handleChange = (e) => {
        switch (e.target.name) {
            case "option1":
                setSelected(answers.answer1)
                break;
            case "option2":
                setSelected(answers.answer2)
                break;
            case "option3":
                setSelected(answers.answer3)
                break;
            case "option4":
                setSelected(answers.answer4)
                break;
            default:
                setSelected(answers.answer1)
                break;
        }
    }

    const handleClick = (e) => {
        if(answered){
            handleSubmit()
        }else{
            e.preventDefault()

            //debugger
            let answer = "";
            if(e.target.option1.checked){
                answer = answers.answer1
            }else if(e.target.option2.checked){
                answer = answers.answer2
            }else if(e.target.option3.checked){
                answer = answers.answer3
            }else if(e.target.option4.checked){
                answer = answers.answer4
            }else{
    
            }
    
            console.log(correctAnswer)
            console.log(answer)
    
            if(answer === correctAnswer){
                setCorrect(current => current + 1)
            }
            else{
                setIncorrect(current => current + 1)
            }

            setAnswered(current => !current)
        }
    }

    return(
        <div className="question">
            <h1>Correct: {correct}  -  Incorrect: {incorrect} </h1>
            <img src={character.Image} alt={character.Name}/>
            {question}
            {answered ? (
                <div>
                    <p>Correct Answer: {correctAnswer}</p>
                    <button onClick={handleClick}>Continue</button>
                </div>
            ) : (
                <form className="quizForm" onSubmit={handleClick}>
                    <div>
                        <label>
                            <input
                            type="radio"
                            name="option1"
                            value="male"
                            checked={selected===answers.answer1}
                            onChange={handleChange}
                            />
                            {" "}
                            {answers.answer1}
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="option2"
                            value="female"
                            checked={selected===answers.answer2}
                            onChange={handleChange}
                            />
                            {" "}
                            {answers.answer2}
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="option3"
                            value="male"
                            checked={selected===answers.answer3}
                            onChange={handleChange}
                            />
                            {" "}
                            {answers.answer3}
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="option4"
                            value="female"
                            checked={selected===answers.answer4}
                            onChange={handleChange}
                            />
                            {" "}
                            {answers.answer4}
                        </label>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            )}

        </div>
    )
}

export default Question