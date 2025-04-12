import Link from "next/link";

export const dynamic = "force-dynamic";

async function getPlayers() {
  const res = await fetch("http://127.0.0.1:4000/footy");
  return res.json();
}

export default async function CollectionPage() {
  const players = await getPlayers();

  return (
    <main>
      <h1>Player List</h1>

      {/* 🔘 Home Button */}
      <p>
        <Link href="/">
          <button>Home</button>
        </Link>
      </p>

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
            <Link href={`/collection/${player.id}`} style={{ marginLeft: "10px" }}>
              more
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
