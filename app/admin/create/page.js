import { revalidatePath } from "next/cache";

export default function CreatePage() {
  async function createPlayer(formData) {
    "use server";

    const newPlayer = {
      id: parseInt(formData.get("id")),
      player_name: formData.get("player_name"),
      position: formData.get("position"),
      goals: parseInt(formData.get("goals")),
      assists: parseInt(formData.get("assists")),
    };

    await fetch("http://127.0.0.1:4000/footy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    });

    revalidatePath("/admin");
    revalidatePath("/collection");

    return { redirect: "/admin" };
  }

  return (
    <main>
      <h1>Create New Player</h1>
      <form action={createPlayer}>
        <p>
          <label>ID: <input type="number" name="id" required /></label>
        </p>
        <p>
          <label>Name: <input type="text" name="player_name" required /></label>
        </p>
        <p>
          <label>Position: <input type="text" name="position" required /></label>
        </p>
        <p>
          <label>Goals: <input type="number" name="goals" required /></label>
        </p>
        <p>
          <label>Assists: <input type="number" name="assists" required /></label>
        </p>
        <button type="submit">Create</button>
      </form>
      <p><a href="/admin">Back to Admin</a></p>
    </main>
  );
}
