export const Pet = ({ name, breed, animal }) => {
  return (
    <>
      <div key={name}>
        <h1>Name: {name}</h1>
        <h2>Breed: {breed}</h2>
        <h2>Animal: {animal}</h2>
        <br />
      </div>
    </>
  );
};
