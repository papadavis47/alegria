function Question({ text, id }) {
  return (
    <div
      key={id}
      className="w-full py-4 my-2 font-semibold text-center text-white rounded bg-sky-600"
    >
      <h2 className="sm:text-lg">{text}</h2>
    </div>
  )
}

export default Question
