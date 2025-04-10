import EditForm from "./EditForm";

async function getPlayer(id) {
  const res = await fetch(`http://127.0.0.1:4000/footy/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function EditPage({ params }) {
  const player = await getPlayer(params.id);

  if (!player) {
    return (
      <main>
        <p style={{ color: "red" }}>Player not found.</p>
        <a href="/admin">Back to Admin</a>
      </main>
    );
  }

  return (
    <main>
      <h1>Edit Player</h1>
      <EditForm player={player} />
    </main>
  );
}
