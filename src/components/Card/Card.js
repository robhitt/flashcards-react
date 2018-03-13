import React, { Component } from 'react';
import Button from '../Button/Button';

import './styles.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answerVisible: false
    }

    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  toggleAnswer() {
    this.setState({ answerVisible: !this.state.answerVisible });
  }

  render() {
    return (
      <div className="card">
        {
          this.state.answerVisible &&
          <p>{this.props.cardData.answer}</p>
        }
        {
          !this.state.answerVisible &&
          <p>{this.props.cardData.question}</p>
        }
        <Button text={this.state.answerVisible ? 'Question' : 'Answer'} callback={this.toggleAnswer} />
        <Button text="Next" callback={() => alert('coming soon')} />
      </div>
    );
  }
}

export default Card;
