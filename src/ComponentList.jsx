import { v4 as uuid } from 'uuid';

const App = [];

App.Animals = () => {
  function ListItem(props) {
    return <li>{props.animal}</li>;
  }

  function List(props) {
    if (!props.animals) {
      return <div>Loading...</div>;
    }

    if (props.animals.length === 0) {
      return <div>There are no animals in the list!</div>;
    }

    return (
      <ul>
        {props.animals.map((animal) => {
          return animal.startsWith('L') && <ListItem key={animal} animal={animal} />;
        })}
      </ul>
    );
  }

  function App() {
    const animalsList = ['Lion', 'Tiger', 'Shark', 'Leopard', 'Sheep'];

    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animalsList} />
      </div>
    );
  }

  return App();
};

App.Todos = () => {
  const todos = [
    { task: 'Mow the yard', id: uuid() },
    { task: 'Work on Odin Projects', id: uuid() },
    { task: 'Feed the cat', id: uuid() },
  ];

  function TodoList() {
    return (
      <>
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <>
                <li key={todo.id}>{todo.task}</li>
              </>
            );
          })}
        </ul>
      </>
    );
  }

  return TodoList();
};

App.Button = ({ text, bgColor, fontSize, padding = '20px', handleClick }) => {
  const style = {
    backgroundColor: bgColor,
    fontSize: fontSize,
    padding: padding,
  };

  const button = () => {
    return (
      <>
        <button onClick={() => handleClick('http://www.googl.com')} style={style}>
          {text}
        </button>
      </>
    );
  };

  return button();
};

export { App };
