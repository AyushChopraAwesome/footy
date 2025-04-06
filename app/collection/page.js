export const dynamic = "force-dynamic"; // optional: makes fetch always run on server

async function getPlayers() {
  const res = await fetch("http://localhost:4000/footy");
  return res.json();
}

export default async function CollectionPage() {
  const players = await getPlayers();

  return (
    <main>
      <h1>Player List</h1>
      <ul style={{ padding: 0 }}>
        {players.map((player) => (
          <li
            key={player.id}
            style={{
              marginBottom: "12px",
              padding: "10px",
              border: "1px solid #ccc",
              listStyle: "none",
            }}
          >
            <strong>{player.player_name}</strong> (#{player.id}){" "}
            <a href={`/collection/${player.id}`} style={{ marginLeft: "10px" }}>
              more
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
