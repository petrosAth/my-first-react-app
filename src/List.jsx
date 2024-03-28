function List() {
  const animals = ['Lion', 'Tiger', 'Shark', 'Sheep'];
  const animalList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <div>
      <ul>{animalList}</ul>
    </div>
  );
}

export { List };
