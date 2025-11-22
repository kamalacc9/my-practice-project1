import { use } from "react";

export function Users({ fetchUsers }) {
  const userss = use(fetchUsers);
  console.log(userss);
  return (
    <div className="cards">
      <h3>Users:{userss.length}</h3>
    </div>
  );
}
