import Question from '../Question'
import { questions } from '../../globals/data.js'

function QuestionsContainer() {
  return (
    <div className="px-4 pb-8 mx-auto my-10 max-w-7xl lg:px-8">
      <div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-sky-600 sm:text-center sm:text-5xl md:text-6xl lg:text-left">
          Make Notes
        </h1>
        <p className="mb-3 text-base font-semibold text-sky-500 sm:mx-auto sm:max-w-xl sm:text-lg md:max-w-4xl md:text-xl lg:mx-0 lg:max-w-5xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          necessitatibus eum veniam dolorem aperiam cum voluptates nulla
          reprehenderit dolore.
        </p>
      </div>
      {/* Below is where I loop through questions */}
      <div className="lg:max-w-5xl">
        {questions.map((question) => (
          <Question key={question.id} text={question.text} />
        ))}
      </div>
      <div className="mt-3">
        <p className="mb-3 text-base font-semibold text-sky-500 sm:mx-auto sm:max-w-xl sm:text-lg md:max-w-4xl md:text-xl lg:mx-0 lg:max-w-6xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe
          distinctio iusto? Aut omnis totam hic iure.
        </p>
      </div>
    </div>
  )
}

export default QuestionsContainer
