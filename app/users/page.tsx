export default async function UsersPage() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.text();
  return (
    <div>
      <h1>users page</h1>
      {data}
    </div>
  );
}
