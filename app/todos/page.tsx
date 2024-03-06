
export default async function Todos() {
  const response = await fetch(
      `https://65e7f69b53d564627a8f8c86.mockapi.io/todos`);

  const data = await response.json();

  return (
    <>
      <div>
        <h1>SERVER SIDE DATA RENDERING</h1>
        <br />
        {data.map((current: { title: string }, i: number) => {
          return (
            <div key={i}>
              <p>{current.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
