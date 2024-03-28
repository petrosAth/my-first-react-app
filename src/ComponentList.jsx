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

export { App };
