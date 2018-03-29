import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  createList = (items) => {
    if (this.props.numberToShow != "default")
    {
      items.sort();
      if (this.props.numberToShow == "decending")
      {
        items.reverse();
      }
    }
    
    return items.map((i, index) => <li key={index}>{i}</li>);
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>{this.createList(this.props.items)}</ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  numberToShow: PropTypes.string
};

TodoList.defaultProps = {
  numberToShow: 'default'
}

const aItems = ['Sign up for code review', 'Finish TodoList component', 'Get lots of sleep'];

ReactDOM.render(
<TodoList title="Student todo" items={aItems} numberToShow="default" />, 
document.getElementById('root')
);
