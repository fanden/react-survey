/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  const items = Array.isArray(list) ? list : [list];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}
// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  // eslint-disable-next-line no-unused-vars
  answerItem: { bestFeatures,
    worstFeatures,
    consistency,
    colour,
    logo,
    timeSpent,
    review,
    username,
    email }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <div>
          <em>Best features:</em>
          <ItemsList list={bestFeatures} />
        </div>
        <div>
          <em>Worst features:</em>
          <ItemsList list={worstFeatures} />
        </div>
        <div>
          <em>Rubber duck consistency rating:</em>
          <span className="answer__line">{consistency}</span>
        </div>
        <div>
          <em>Rubber duck colour rating:</em>
          <span className="answer__line">{colour}</span>
        </div>
        <div>
          <em>Rubber duck logo rating:</em>
          <span className="answer__line">{logo}</span>
        </div>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <span className="answer__line">{answersSet[timeSpent]}</span>
        </div>
        <div>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </div>
      </article>
    </li>
  );
}
