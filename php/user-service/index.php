<?php

require_once 'UserService.php';

$users = [
    new User('Ana', 28),
    new User('Luis', 35),
    new User('Marta', 22)
];

$userService = new UserService();

$filteredUsers = $userService->filterByAge($users, 30);
$userService->increaseAllAges($users);

foreach ($filteredUsers as $user) {
    echo $user->getName() . ' - ' . $user->getAge() . PHP_EOL;
}
