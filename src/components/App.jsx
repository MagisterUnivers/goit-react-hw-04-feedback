/**
 * Refactored with hooks usage
 */
import { useState } from 'react';
import { Section, Notification, Statistics, FeedbackOptions } from './index';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = event => {
    const { id } = event.target;
    if (id === 'good') {
      setGood(prevState => prevState + 1);
    } else if (id === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (id === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return (100 * (good / countTotalFeedback())).toFixed(0);
  };
  {
    return (
      <div
        style={{
          fontSize: 26,
          paddingLeft: 15,
          paddingTop: 15,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={increment}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
};
/**
 * Class method
 */
// import { Component } from 'react';
// import { Section, Notification, Statistics, FeedbackOptions } from './index';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   increment = event => {
//     const { id } = event.target;
//     this.setState(prevState => {
//       return { [id]: prevState[id] + 1 };
//     });
//   };
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return (100 * (this.state.good / this.countTotalFeedback())).toFixed(0);
//   };
//   render() {
//     return (
//       <div
//         style={{
//           fontSize: 26,
//           paddingLeft: 15,
//           paddingTop: 15,
//         }}
//       >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.increment}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
