// app/admin/delete/[id]/route.js

import { revalidatePath } from "next/cache";

export async function POST(_, { params }) {
  const id = params.id;

  const res = await fetch(`http://127.0.0.1:4000/footy/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    revalidatePath("/admin");
    revalidatePath("/collection");
    revalidatePath(`/collection/${id}`);
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/admin",
    },
  });
}
