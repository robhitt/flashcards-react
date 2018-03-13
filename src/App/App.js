import React from 'react';
import CardSet from '../components/CardSet/CardSet';
import { fetchCardData } from '../helpers/fetch';
import { shuffleArray } from '../helpers/shuffler';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeCourse: 'Javascript',
            courses: [
                'Javascript',
                'CSS'
            ],
            courseData: null
        }
    }

    componentDidMount() {
        const url = 'https://robhitt.github.io/flashcards/card-data.json';
        fetchCardData(url)
        .then((response) => this.setState({courseData: response}));
    }

    handleCourseData() {
        const { courseData, activeCourse } = this.state;

        if(courseData){
            return activeCourse.toLowerCase() === 'javascript' ?
                shuffleArray(courseData.javascriptQuestions) :
                shuffleArray(courseData.cssQuestions);
        } else {
            return null;
        }
    }

    render() {

        const courseQuestions = this.handleCourseData();

        return (
            <div>
                <CardSet courseData={courseQuestions} />
            </div>
        )
    }
}

export default App;