import Link from "next/link";

export const dynamic = "force-dynamic";

async function getPlayers() {
  const res = await fetch("http://127.0.0.1:4000/footy");
  return res.json();
}

export default async function CollectionPage() {
  const players = await getPlayers();

  return (
    <main style={containerStyle}>
      <h1 style={headerStyle}>Player Collection</h1>

      <div style={listContainerStyle}>
        {players.map((player) => (
          <div key={player.id} style={cardStyle}>
            <h3 style={{ margin: "0 0 8px 0" }}>{player.player_name}</h3>
            <p style={{ margin: 0 }}>ID: {player.id}</p>
            <Link href={`/collection/${player.id}`}>
              <button style={buttonStyle}>More</button>
            </Link>
          </div>
        ))}
      </div>

      <Link href="/">
        <button style={homeButtonStyle}>Home</button>
      </Link>
    </main>
  );
}

const containerStyle = {
  maxWidth: "800px",
  margin: "40px auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  textAlign: "center"
};

const headerStyle = {
  fontSize: "32px",
  marginBottom: "30px",
  color: "#333"
};

const listContainerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginBottom: "30px"
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "16px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  textAlign: "left"
};

const buttonStyle = {
  marginTop: "10px",
  padding: "6px 12px",
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "14px",
  cursor: "pointer"
};

const homeButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer"
};
