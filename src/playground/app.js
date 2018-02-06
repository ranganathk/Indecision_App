class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = { options: [] };
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({options: prevState.options.filter((option) => option !== optionToRemove)}));
  }

  handlePick() {
    const rand = Math.floor(Math.random() * this.state.options.length);
    alert('we have selected option ' + this.state.options[rand] + ' for you!');
  }

  handleAddOption(option) {
    if(!option) {
      return 'This is not a valid option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already present';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

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
  }

  componentDidUpdate(prevProps, prevState) {
    // This is done because remove options will fire to local storage even if options array is empty
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const subtitle = 'This is awesome!!!';

    return (
      <div>
        <Header subtitle={subtitle} />
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
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

Header.defaultProps = { title: 'Indecision App' }

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}>
        What should i do?
      </button>
    </div>
  );
}

const Option = (props) => {
  return (
    <li>{props.option}
      <button onClick={ (ev) => props.handleDeleteOption(props.option) }>
        Remove
      </button>
    </li>
  )
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add some options to get started.</p>}
      <ol>
        {props.options.map((opt) => {
          return (
            <Option
              key={opt}
              option={opt}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </ol>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { error: undefined };
  }

  handleAddOption(ev) {
    ev.preventDefault();

    const option = ev.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    if (!error) {
      ev.target.elements.option.value = '';
    }
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
