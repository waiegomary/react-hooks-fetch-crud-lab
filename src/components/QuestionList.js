import React, {useState, useEffect} from "react";
import axios from "axios"

function QuestionList() {
  const [questionData, setQuestionData] = useState(null)
  useEffect(() => {
    const pullData = async() =>{
      const responseData = await axios.get('http://localhost:4000/questions')
      setQuestionData(responseData.data)
    }
    pullData();
  },[])  

  return (
    <section>
      <h1>Quiz Questions</h1>
      {
        questionData?.map((quiz) =>{
          return(
            <div>
            <ul>{quiz.id}</ul>
            <ul>{quiz.prompt}</ul>
              <ul>{quiz.answers.toString()}</ul>
            </div>
          )
        })
      }
    </section>
  );
}

export default QuestionList;
