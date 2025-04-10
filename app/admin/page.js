// app/admin/page.js

import Link from "next/link";

export const dynamic = "force-dynamic";

async function getPlayers() {
  const res = await fetch("http://127.0.0.1:4000/footy");
  return res.json();
}

export default async function AdminPage() {
  const players = await getPlayers();

  return (
    <main>
      <h1>Admin Panel</h1>
      
      {/* 🔘 Home Button */}
      <p>
        <Link href="/">
          <button>Home</button>
        </Link>
      </p>

      <p>
        <Link href="/admin/create">Create New</Link>
      </p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.player_name}</td>
              <td>{player.position}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td><Link href={`/admin/edit/${player.id}`}>E</Link></td>
              <td>
                <form action={`/admin/delete/${player.id}`} method="POST">
                  <button type="submit">D</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
