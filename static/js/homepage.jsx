"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
       Hello!
       <br></br>
       <a href="/cards">Go to cards page</a>
       <br></br>
       <img src="/static/img/balloonicorn.jpg"></img>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
