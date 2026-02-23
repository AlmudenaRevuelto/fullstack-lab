/**
 * Simulates fetching user data from an API
 * @param {number} userId
 * @returns {Promise<Object>}
 */
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error('Invalid user ID'));
      }

      resolve({
        id: userId,
        name: 'User',
        age: 30
      });
    }, 1000);
  });
}

/**
 * Gets user name using async/await
 * @param {number} userId
 * @returns {Promise<string>}
 */
async function getUserName(userId) {
  try {
    const user = await fetchUser(userId);
    return user.name;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Example usage
(async function () {
  try {
    const name = await getUserName(1);
    console.log('User name:', name);
  } catch (error) {
    console.log('Something went wrong');
  }
})();
