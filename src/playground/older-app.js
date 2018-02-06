const app = {
  'title': 'My awesome app',
  'subtitle': 'Most awesome app u will ever see',
  'options': []
};

const addOption = (ev) => {
  ev.preventDefault();

  const option = ev.target.elements.option.value;

  if (option) {
    app.options.push(option);
    ev.target.elements.option.value = '';
    renderOptionsApp();
  }
};

const removeOptions = () => {
  app.options = [];
  renderOptionsApp();
};

const selectRandom = () => {
  const rand = Math.floor(Math.random() * app.options.length);
  alert('we have selected option ' + app.options[rand] + ' for you!');
};

const isDisabled = () => app.options.length === 0;

const appRoot = document.getElementById('app');

const renderOptionsApp = () => {

  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'U have ' + app.options.length + ' options' : 'No options'}</p>
      <button disabled={isDisabled()} onClick={selectRandom}>Select random option</button>
      <button onClick={removeOptions}>Remove All</button>
      <ol>
      {
        app.options.map((opt) => <li key={opt}>Option: {opt}</li>)
      }
      </ol>
      <form onSubmit={addOption}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderOptionsApp();
