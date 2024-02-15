const users = [
  {
    FirstName: "Varic'k",
    LastName: 'Tovandy',
    Birthday: '2003/01/12',
    Address: [
      {
        Street: 'Jl. Perumnas No.3, Ngropoh, Condongcatur, Kec. Depok',
        City: 'Sleman',
        Province: 'D.I. Yogyakarta',
        PostalCode: '55281',
      },
    ],
  },
  {
    FirstName: 'John',
    LastName: 'Doe',
    Birthday: '2003/01/11',
    Address: [
      {
        Street: 'Broadway Ave, 123 Main St',
        City: 'Springfield',
        Province: 'IL',
        PostalCode: '62701',
      },
    ],
  },
  {
    FirstName: 'Alice',
    LastName: 'Smith',
    Birthday: '2003/01/13',
    Address: [
      {
        Street: 'Park Blvd, 456 Elm St',
        City: "",
        Province: 'IL',
        PostalCode: '61820',
      },
      {
        Street: 'Park Blvd, 456 Elm St',
        City: "Zu0hampaign",
        Province: 'IL',
        PostalCode: '61820',
      },
      {
        Street: 'Lakeview Dr, 789 Oak St',
        City: "Zu'rbana",
        Province: 'IL',
        PostalCode: '61801',
      },
    ],
  },
  {
    FirstName: 'Mary',
    LastName: 'Johnson',
    Birthday: '1978/01/15',
    Address: [
      {
        Street: 'Willow Ln, 321 Elm St',
        City: 'Savoy',
        Province: 'IL',
        PostalCode: '61874',
      },
    ],
  },
  {
    FirstName: 'Michael',
    LastName: 'Williams',
    Birthday: '1995/03/25',
    Address: [
      {
        Street: 'Sunset Dr, 987 Maple St',
        City: 'Mahomet',
        Province: 'IL',
        PostalCode: '61853',
      },
      {
        Street: 'River Rd, 654 Pine St',
        City: 'Tolono',
        Province: 'IL',
        PostalCode: '61880',
      },
    ],
  },
  {
    FirstName: 'Sarah',
    LastName: 'Brown',
    Birthday: '1980/10/10',
    Address: [
      {
        Street: 'Forest Ln, 111 Cedar St',
        City: 'Rantoul',
        Province: 'IL',
        PostalCode: '61866',
      },
      {
        Street: 'Grove St, 222 Walnut St',
        City: 'Fisher',
        Province: 'IL',
        PostalCode: '61843',
      },
      {
        Street: 'Hillside Dr, 333 Birch St',
        City: 'Ogden',
        Province: 'IL',
        PostalCode: '61859',
      },
    ],
  },
  {
    FirstName: 'David',
    LastName: 'Jones',
    Birthday: '1992/09/08',
    Address: [
      {
        Street: 'Mountain Rd, 777 Pine St',
        City: 'St. Joseph',
        Province: 'IL',
        PostalCode: '61873',
      },
      {
        Street: 'Valley Dr, 888 Maple St',
        City: 'Thomasboro',
        Province: 'IL',
        PostalCode: '61878',
      },
      {
        Street: 'Creek Ln, 999 Oak St',
        City: 'Sidney',
        Province: 'IL',
        PostalCode: '61877',
      },
    ],
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Garcia',
    Birthday: '1987/06/17',
    Address: [
      {
        Street: 'Pinecrest Dr, 444 Cedar St',
        City: 'Urbana',
        Province: 'IL',
        PostalCode: '61802',
      },
      {
        Street: 'Fairview Ave, 555 Walnut St',
        City: 'Champaign',
        Province: 'IL',
        PostalCode: '61822',
      },
      {
        Street: 'Ridge Rd, 666 Birch St',
        City: 'Mahomet',
        Province: 'IL',
        PostalCode: '61854',
      },
      {
        Street: 'Spring St, 777 Elm St',
        City: 'Tolono',
        Province: 'IL',
        PostalCode: '61881',
      },
    ],
  },
  {
    FirstName: 'James',
    LastName: 'Martinez',
    Birthday: '1983/04/22',
    Address: [
      {
        Street: 'Sunrise Ave, 111 Oak St',
        City: 'St. Joseph',
        Province: 'IL',
        PostalCode: '61874',
      },
      {
        Street: 'Moonlight Blvd, 222 Pine St',
        City: 'Thomasboro',
        Province: 'IL',
        PostalCode: '61879',
      },
      {
        Street: 'Sunset Blvd, 333 Maple St',
        City: 'Sidney',
        Province: 'IL',
        PostalCode: '61878',
      },
      {
        Street: 'Dusk Dr, 444 Cedar St',
        City: 'Savoy',
        Province: 'IL',
        PostalCode: '61875',
      },
      {
        Street: 'Dawn Ln, 555 Walnut St',
        City: 'Fisher',
        Province: 'IL',
        PostalCode: '61844',
      },
    ],
  },
  {
    FirstName: 'Susan',
    LastName: 'Hernandez',
    Birthday: '1975/11/09',
    Address: [
      {
        Street: 'Meadow Ln, 777 Birch St',
        City: 'Rantoul',
        Province: 'IL',
        PostalCode: '61865',
      },
      {
        Street: 'Brookside Dr, 888 Elm St',
        City: 'Ogden',
        Province: 'IL',
        PostalCode: '61858',
      },
    ],
  },
  {
    FirstName: 'Daniel',
    LastName: 'Lopez',
    Birthday: '1988/02/14',
    Address: [
      {
        Street: 'Highland Ave, 333 Cedar St',
        City: 'St. Joseph',
        Province: 'IL',
        PostalCode: '61875',
      },
      {
        Street: 'Parkway, 444 Walnut St',
        City: 'Thomasboro',
        Province: 'IL',
        PostalCode: '61879',
      },
      {
        Street: 'Oakridge Rd, 555 Birch St',
        City: 'Sidney',
        Province: 'IL',
        PostalCode: '61877',
      },
      {
        Street: 'Riverside Dr, 666 Elm St',
        City: 'Savoy',
        Province: 'IL',
        PostalCode: '61876',
      },
    ],
  },
  {
    FirstName: 'Lisa',
    LastName: 'Clark',
    Birthday: '1972/07/05',
    Address: [
      {
        Street: 'Hillcrest Dr, 888 Cedar St',
        City: 'Urbana',
        Province: 'IL',
        PostalCode: '61801',
      },
      {
        Street: 'Fieldcrest Dr, 999 Walnut St',
        City: 'Champaign',
        Province: 'IL',
        PostalCode: '61822',
      },
    ],
  },
  {
    FirstName: 'Karen',
    LastName: 'Rodriguez',
    Birthday: '1993/09/30',
    Address: [
      {
        Street: 'Sycamore Dr, 444 Cedar St',
        City: 'Rantoul',
        Province: 'IL',
        PostalCode: '61866',
      },
      {
        Street: 'Magnolia Ln, 555 Walnut St',
        City: 'Fisher',
        Province: 'IL',
        PostalCode: '61843',
      },
      {
        Street: 'Cypress Rd, 666 Birch St',
        City: 'Ogden',
        Province: 'IL',
        PostalCode: '61858',
      },
    ],
  },
  {
    FirstName: 'Ryan',
    LastName: 'Lewis',
    Birthday: '1986/06/08',
    Address: [
      {
        Street: 'Poplar Dr, 777 Elm St',
        City: 'Savoy',
        Province: 'IL',
        PostalCode: '61874',
      },
      {
        Street: 'Cedar Dr, 888 Oak St',
        City: 'Rantoul',
        Province: 'IL',
        PostalCode: '61865',
      },
    ],
  },
  {
    FirstName: 'Maria',
    LastName: 'Lee',
    Birthday: '1989/03/18',
    Address: [
      {
        Street: 'Birchwood Dr, 999 Cedar St',
        City: 'St. Joseph',
        Province: 'IL',
        PostalCode: '61873',
      },
      {
        Street: 'Elmwood Dr, 111 Walnut St',
        City: 'Thomasboro',
        Province: 'IL',
        PostalCode: '61879',
      },
    ],
  },
  {
    FirstName: 'William',
    LastName: 'Walker',
    Birthday: '1981/11/27',
    Address: [
      {
        Street: 'Evergreen Ln, 222 Birch St',
        City: 'Sidney',
        Province: 'IL',
        PostalCode: '61877',
      },
      {
        Street: 'Maplewood Dr, 333 Elm St',
        City: 'Savoy',
        Province: 'IL',
        PostalCode: '61876',
      },
      {
        Street: 'Oakwood Ct, 444 Oak St',
        City: 'Rantoul',
        Province: 'IL',
        PostalCode: '61865',
      },
    ],
  },
];

function findUser(fullName) {
  const formattedFullName = fullName.toLowerCase().replace(/([^\w]+|\s+)/g, '');

  return users.filter((user) =>
    `${user.FirstName.toLowerCase().replace(/([^\w]+|\s+)/g, '')}${user.LastName.toLowerCase().replace(/([^\w]+|\s+)/g, '')}`.includes(
      formattedFullName
    )
  );
}

let searchedUser = findUser('ricktov');
console.log(searchedUser);

function findUserByTotalAddresses(totalAddresses) {
  const totalUsers = [...users];

  return totalUsers.filter((user) => user.Address.length === totalAddresses);
}

let usersWithTwoAddresses = findUserByTotalAddresses(5);
console.log(usersWithTwoAddresses);

function dateFormated(dateString) {
  const dateObject = new Date(dateString);
  // console.log(dateObject)
  return dateObject;
}

function sortUsers(users, sortBy, isDescending = false) {
  const sortedUsers = [...users];

  if (sortBy === 'age' || sortBy === 'Age') {
    sortedUsers.sort((user1, user2) => {
      const age1 = dateFormated(user1.Birthday);
      const age2 = dateFormated(user2.Birthday);
      return isDescending ? age2 - age1 : age1 - age2;
    });
  } else if (sortBy === 'city' || sortBy === 'City') {
    sortedUsers.forEach((user) => {
      user.Address.sort((a, b) => (isDescending ? b.City.localeCompare(a.City) : a.City.localeCompare(b.City)));
    });

    sortedUsers.sort((a, b) => {
      const cityA = a.Address[0].City;
      const cityB = b.Address[0].City;
      let comparison = cityA.localeCompare(cityB);
      if (comparison === 0) {
        const minLength = Math.min(cityA.length, cityB.length);
        let inCity = 0;
        while (inCity < minLength && cityA[inCity] === cityB[inCity]) {
          inCity++;
        }
        comparison = cityA[inCity] ? (cityB[inCity] ? cityA[inCity].localeCompare(cityB[inCity]) : 1) : cityB[inCity] ? -1 : 0;
      }
      return isDescending ? comparison * -1 : comparison;
    });
  }

  return sortedUsers;
}

//Age Descending
console.log(JSON.stringify(sortUsers(users, 'Age', true), null, 2));

//Age Ascending
console.log(JSON.stringify(sortUsers(users, 'age'), null, 2));

//Address Descdending
console.log(JSON.stringify(sortUsers(users, 'City', true), null, 2));

//Address Ascending
console.log(JSON.stringify(sortUsers(users, 'city'), null, 2));