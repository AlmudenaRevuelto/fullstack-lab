/**
 * Returns the full name of a user
 * @param {Object} user
 * @param {string} user.name
 * @param {string} user.surname
 * @returns {string}
 */
function getFullName(user) {
  return `${user.name} ${user.surname}`;
}

/**
 * Returns users older than a given age
 * @param {Array<Object>} users
 * @param {number} minAge
 * @returns {Array<Object>}
 */
function filterByAge(users, minAge) {
  return users.filter(user => user.age >= minAge);
}

/**
 * Increases age of all users by 1 (immutably)
 * @param {Array<Object>} users
 * @returns {Array<Object>}
 */
function incrementAge(users) {
  return users.map(user => ({
    ...user,
    age: user.age + 1
  }));
}

// Example usage
const users = [
  { name: 'Ana', surname: 'Lopez', age: 28 },
  { name: 'Luis', surname: 'Garcia', age: 35 },
  { name: 'Marta', surname: 'Perez', age: 22 }
];

console.log(getFullName(users[0]));
console.log(filterByAge(users, 30));
console.log(incrementAge(users));
