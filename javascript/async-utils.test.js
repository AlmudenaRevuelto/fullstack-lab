async function testGetUserName() {
  try {
    const name = await getUserName(1);
    console.assert(name === 'User', '❌ getUserName should return User');
    console.log('✅ getUserName returns correct value');
  } catch {
    console.log('❌ Test failed');
  }
}

testGetUserName();
