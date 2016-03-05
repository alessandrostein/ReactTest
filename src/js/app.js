var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function(){
    return (
      <div className='main-container'>
        <div>
          <ul>
            <li className='list-style'>Check</li>
            <li>Check</li>
            <li>Check</li>
          </ul>
          <FormError/>
        </div>
      </div>
    );
  }
});

var FormError = React.createClass({
  getInitialState: function(){
    return { error: true };
  },

  showError: function(){
    var error = this.state.error;
    var message = (
      <p>Ops! Por favor, verifique se você informou todos os campos</p>
    );
    if (error) {
      console.log("Ops;");
    }
    // return message;
  },

  render: function(){
    return (
      <div className='form-error-message'>
        {this.showError}

      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
