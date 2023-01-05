function Question({character, question, answers, correctAnswer}){
    const handleChange = () => {

    }

    return(
        <div className="question">
            <img src={character.Image} alt={character.Name}/>
            {question}
            <form className="quizForm">
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
                        {answers.answer1}
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
            </form>
        </div>
    )
}

export default Question