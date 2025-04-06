
export async function generateStaticParams() {
    const res = await fetch("http://127.0.0.1:4000/footy");
    const players = await res.json();
  
    return players.slice(0, 10).map((player) => ({
      id: player.id.toString(),
    }));
  }
  
  async function getPlayer(id) {
    const res = await fetch(`http://127.0.0.1:4000/footy/${id}`);
    if (!res.ok) return null;
    return res.json();
  }
  
  export default async function PlayerDetailPage({ params }) {
    const player = await getPlayer(params.id);
  
    if (!player) {
      return (
        <main>
          <p style={{ color: "red" }}>
            No player found with ID: {params.id}
          </p>
          <a href="/collection">Back</a>
        </main>
      );
    }
  
    return (
      <main>
        <h1>{player.player_name}</h1>
        <table border="1" cellPadding="10">
          <tbody>
            <tr><td><strong>ID</strong></td><td>{player.id}</td></tr>
            <tr><td><strong>Position</strong></td><td>{player.position}</td></tr>
            <tr><td><strong>Goals</strong></td><td>{player.goals}</td></tr>
            <tr><td><strong>Assists</strong></td><td>{player.assists}</td></tr>
          </tbody>
        </table>
        <p><a href="/collection">Back</a></p>
      </main>
    );
  }
  