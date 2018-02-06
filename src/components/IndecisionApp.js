import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };

  clearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({ options: prevState.options.filter((option) => option !== optionToRemove) }));
  };

  handlePick = () => {
    const rand = Math.floor(Math.random() * this.state.options.length);
    this.setState((prevState) => ({ selectedOption: prevState.options[rand] }))
  };

  handleAddOption = (option) => {
    if(!option) {
      return 'This is not a valid option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already present';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // This is done because remove options will fire to local storage even if options array is empty
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  render() {
    const subtitle = 'This is awesome!!!';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  };
}
