function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`❌ ${message}. Expected: ${expected}, Got: ${actual}`);
  }
  console.log(`✅ ${message}`);
}

// Import functions (simulated, since this is a simple setup)
function getFullName(user) {
  return `${user.name} ${user.surname}`;
}

function filterByAge(users, minAge) {
  return users.filter(user => user.age >= minAge);
}

function incrementAge(users) {
  return users.map(user => ({
    ...user,
    age: user.age + 1
  }));
}

// TESTS
(function runTests() {
  const users = [
    { name: 'Ana', surname: 'Lopez', age: 28 },
    { name: 'Luis', surname: 'Garcia', age: 35 }
  ];

  // Test getFullName
  assertEqual(
    getFullName(users[0]),
    'Ana Lopez',
    'getFullName returns correct full name'
  );

  // Test filterByAge
  assertEqual(
    filterByAge(users, 30).length,
    1,
    'filterByAge filters users correctly'
  );

  // Test incrementAge immutability
  const updatedUsers = incrementAge(users);
  assertEqual(users[0].age, 28, 'original user age is not mutated');
  assertEqual(updatedUsers[0].age, 29, 'incrementAge increases age');

  console.log('🎉 All tests passed!');
})();
