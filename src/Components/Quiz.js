import { useState } from "react"
import Question from "./Question";

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

    const [character, setCharacter] = useState({});

    const [questionType, setQuestionType] = useState(getRndInteger(1,4));

    const [question, setQuestion] = useState("Show question here");

    //const [start, setStart] = useState(false);

    //debugger

    const handleChange = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const newQuestion = () => {
        const newCharacter = characters[getRndInteger(0,characters.length - 1)]
        
        const newQuestionType = getRndInteger(1,4)

        const newQuestionString = newQuestionPhrase(newQuestionType)

        const newAnswer = {
            answer1: getWrongAnswer(newQuestionType),
            answer2: getWrongAnswer(newQuestionType),
            answer3: getWrongAnswer(newQuestionType),
            answer4: getWrongAnswer(newQuestionType)
        }

        newAnswer[`answer${getRndInteger(1,4)}`] = getCorrectAnswer(newCharacter, newQuestionType)

        setCharacter(newCharacter)
        setAnswers(newAnswer)
        setQuestionType(newQuestionType)
        setQuestion(newQuestionString)
    }

    const getCorrectAnswer = (character, questionType) => {
        switch (questionType) {
            case 1:
                return character.Name
                break;
            case 2:
                if(character.Titles.length===0 ){
                    return getCorrectAnswer(character, questionType)
                }
                else{
                    return character.Titles[getRndInteger(0,character.Titles.length - 1)]
                }
                break;
            case 3:
                if(character.Aliases.length===0){
                    return getCorrectAnswer(character, questionType)
                }
                else{
                    return character.Aliases[getRndInteger(0,character.Aliases.length - 1)]
                }
                break;
            case 4:
                return character.PlayedBy[0]
                break;
            default:
                return "Error"
                break;
        }
    }

    const getWrongAnswer = (questionType) => {
        const ranNum = getRndInteger(0,characters.length - 1)

        switch (questionType) {
            case 1:
                return characters[ranNum].Name
                break;
            case 2:
                if(characters[ranNum].Titles.length===0 || characters[ranNum].Titles[0]===""){
                    return getWrongAnswer(questionType)
                }
                else{
                    return characters[ranNum].Titles[getRndInteger(0,characters[ranNum].Titles.length - 1)]
                }
                break;
            case 3:
                if(characters[ranNum].Aliases.length===0 || characters[ranNum].Aliases[0]===""){
                    return getWrongAnswer(questionType)
                }
                else{
                    return characters[ranNum].Aliases[getRndInteger(0,characters[ranNum].Aliases.length - 1)]
                }
                break;
                break;
            case 4:
                return characters[ranNum].PlayedBy[0]
                break;
            default:
                return "Error"
                break;
        }
    }

    const newQuestionPhrase = (questionType) => {
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
                return (<p>What actor/actress is this character played by?</p>)
                break;
            default:
                return (<p>Error</p>)
                break;
        }
    }

    return (
        <div className="quizContainer">
            <Question character={character} answers={answers} question={question} handleSubmit={newQuestion}/>
        </div>
    )
}

export default Quiz