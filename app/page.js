export default function Home() {
  return (
    <main style={{
      maxWidth: "600px",
      margin: "60px auto",
      padding: "40px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Welcome to Footy ⚽</h1>
      <p style={{ marginBottom: "30px", fontSize: "16px", color: "#555" }}>
        Track soccer players, their goals, assists, and positions — all with a clean admin panel.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <a href="/collection">
          <button style={buttonStyle}>View Player Collection</button>
        </a>
        <a href="/admin">
          <button style={buttonStyle}>Go to Admin Panel</button>
        </a>
      </div>
    </main>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer"
};
