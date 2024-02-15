let users = [
  {
      FirstName: "Varick",
      LastName: "Tovandy",
      Birthday: "2003/02/12",
      Address: [
          {
              Street: "Blk. F Jl. Perumnas No.3, Ngropoh, Condongcatur, Kec. Depok",
              City: "Sleman",
              Province: "D.I. Yogyakarta",
              PostalCode: "55281"
          }
      ]
  },
  {
      FirstName: "John",
      LastName: "Doe",
      Birthday: "1990/05/20",
      Address: [
          {
              Street: "123 Main St",
              City: "Springfield",
              Province: "IL",
              PostalCode: "62701"
          }
      ]
  },
  {
      FirstName: "Alice",
      LastName: "Smith",
      Birthday: "1985/12/03",
      Address: [
          {
              Street: "456 Elm St",
              City: "Springfield",
              Province: "IL",
              PostalCode: "62702"
          },
          {
              Street: "789 Oak St",
              City: "Springfield",
              Province: "IL",
              PostalCode: "62703"
          }
      ]
  },
  
];

function findUser(firstName, lastName) {
  return users.find(user => user.FirstName === firstName && user.LastName === lastName);
}
let searchedUser = findUser("Varick", "Tovandy");
console.log(searchedUser);

function findUserByTotalAddresses(totalAddresses) {
  return users.filter(user => user.Address.length === totalAddresses);
}

let usersWithTwoAddresses = findUserByTotalAddresses(2);
console.log(JSON.stringify(usersWithTwoAddresses));

// // Fungsi sorting pengguna berdasarkan tanggal lahir (asc/desc) dan abjad kota (asc/desc)
// function sortUsers(byBirthdate = "asc", byCity = "asc") {
//   return users.sort((a, b) => {
//       if (byBirthdate === "asc") {
//           if (a.Birthday < b.Birthday) return -1;
//           if (a.Birthday > b.Birthday) return 1;
//       } else {
//           if (a.Birthday < b.Birthday) return 1;
//           if (a.Birthday > b.Birthday) return -1;
//       }
//       if (byCity === "asc") {
//           return a.Address[0].City.localeCompare(b.Address[0].City);
//       } else {
//           return b.Address[0].City.localeCompare(a.Address[0].City);
//       }
//   });
// }

// // Contoh penggunaan
// let sortedUsers = sortUsers("asc", "asc");
// console.log(JSON.stringify(sortedUsers));



