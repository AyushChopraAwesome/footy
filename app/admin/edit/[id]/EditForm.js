"use client";

import { useState } from "react";

export default function EditForm({ player }) {
  const [errors, setErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("player_name");
    const position = formData.get("position");
    const goals = parseInt(formData.get("goals"));
    const assists = parseInt(formData.get("assists"));

    const validation = [];


    if (name.length < 3 || name.length > 30) {
        validation.push("Name must be between 3 and 30 characters.");
      }
  
      const validPositions = ["Forward", "Midfielder", "Defender", "Goalkeeper"];
      if (!validPositions.includes(position)) {
        validation.push("Position must be one of: Forward, Midfielder, Defender, Goalkeeper.");
      }
  
      if (goals < 0 || isNaN(goals)) {
        validation.push("Goals must be a non-negative number.");
      }
  
      if (assists < 0 || isNaN(assists)) {
        validation.push("Assists must be a non-negative number.");
      }
  
      if (validation.length > 0) {
        setErrors(validation);
        return;
      }

    await fetch(`http://127.0.0.1:4000/footy/${player.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: player.id,
        player_name: name,
        position,
        goals,
        assists,
      }),
    });

    // Revalidate routes
    await fetch("/api/revalidate", {
      method: "POST",
      body: JSON.stringify({
        paths: ["/admin", "/collection", `/collection/${player.id}`, `/admin/edit/${player.id}`],
      }),
    });

    window.location.href = "/admin";
  }

  return (
    <>
      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name: <input name="player_name" defaultValue={player.player_name} required /></label>
        </p>
        <p>
          <label>Position: <input name="position" defaultValue={player.position} required /></label>
        </p>
        <p>
          <label>Goals: <input type="number" name="goals" defaultValue={player.goals} required /></label>
        </p>
        <p>
          <label>Assists: <input type="number" name="assists" defaultValue={player.assists} required /></label>
        </p>
        <button type="submit">Update</button>
        <p><a href="/admin">Cancel</a></p>
      </form>
    </>
  );
}
