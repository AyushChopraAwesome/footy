export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to Footy</h1>
      <p>This app lets you track soccer player stats using a local REST API.</p>
      <ul>
        <li><a href="/collection">View Player Collection</a></li>
        <li><a href="/admin">Admin Panel</a></li>
      </ul>
    </main>
  );
}
