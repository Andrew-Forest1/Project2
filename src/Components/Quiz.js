import { useState } from "react"

function Quiz({characters}) {
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    const [answers, setAnswers] = useState({
        answer1:"answer1",
        answer2:"answer2",
        answer3:"answer3",
        answer4:"answer4"
    });

    const [character, setCharacter] = useState({...characters[getRndInteger(0,characters.length - 1)]});

    const [questionType, setQuestionType] = useState(getRndInteger(1,4));

    const [start, setStart] = useState(false);

    const handleChange = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        startQuiz()
    }

    const startQuiz = () => {
        setCharacter({...characters[getRndInteger(0,characters.length - 1)]})
        setQuestionType(getRndInteger(1,4))
        setStart(true)
    }

    const getCorrectAnswer = () => {
        switch (questionType) {
            case 1:
                return character.Name
                break;
            case 2:
                if(character.Titles.length===0){
                    return "Error"
                }
                else{
                    return character.Titles[getRndInteger(0,character.Titles.length)]
                }
                break;
            case 3:
                if(character.Aliases.length===0){
                    return "Error"
                }
                else{
                    return character.Aliases[getRndInteger(0,character.Aliases.length)]
                }
                break;
                break;
            case 4:
                return character.PlayedBy
                break;
            default:
                return "Error"
                break;
        }
    }

    const question = () => {
        switch (questionType) {
            case 1:
                return (<p>What is this characters name?</p>)
                break;
            case 2:
                return (<p>Which Title does this Character Hold?</p>)
                break;
            case 3:
                return (<p>What nicknames/aliases belongs to this character?</p>)
                break;
            case 4:
                return (<p>What actor is this character played by?</p>)
                break;
            default:
                return (<p>Error</p>)
                break;
        }
    }

    return (
        <div className="quizContainer">
            {start ? (<div>
                <img src={character.Image} alt={character.Name}/>
                {question()}
                <form className="quizForm" onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <input
                            type="radio"
                            name="option1"
                            value="male"
                            checked={true}
                            onChange={handleChange}
                            />
                            {" "}
                            {getCorrectAnswer()}
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="option2"
                            value="female"
                            checked={false}
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
                            checked={false}
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
                            checked={false}
                            onChange={handleChange}
                            />
                            {" "}
                            {answers.answer4}
                        </label>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>) : (<button onClick={startQuiz}>Start</button>)}

        </div>
    )
}

export default Quiz