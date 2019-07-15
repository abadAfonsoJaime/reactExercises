import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Excercises from "./Exercises";
import { muscles, exercises } from "./../dataStore";

class App extends Component {
  state = {
    exercises,
    exercise: []
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((acc, obj) => {
        const { muscles } = obj;

        acc[muscles] = acc[muscles] ? [...acc[muscles], obj] : [obj];

        return acc;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;
    console.log(exercises);
    return (
      <Fragment>
        <Header />

        <Excercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
