function S_list() {
   const users = [
    { id: 1, name: "Bhumi", age: 20, city: "Ahmedabad" },
    { id: 2, name: "Raj", age: 22, city: "Surat" },
    { id: 3, name: "Priya", age: 21, city: "Rajkot" },
  ];

  return (
    <div className="p-10">

      <table className="w-full">

        {/* Table Head */}
        <thead className="">

          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Age</th>
            <th className="p-3">City</th>
          </tr>

        </thead>

        {/* Table Body */}
        <tbody>

          {users.map((user) => (
            <tr key={user.id} className="text-center">

              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.age}</td>
              <td className="p-3">{user.city}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default S_list;