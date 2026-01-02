import sql from "@/db";

export default function Page() {
  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    await sql`INSERT INTO users (name) VALUES (${name})`;
  }
  return (
    <form action={addUser}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
