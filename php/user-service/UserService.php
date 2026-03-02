<?php

require_once 'User.php';

class UserService
{
    /**
     * @param User[] $users
     * @param int $minAge
     * @return User[]
     */
    public function filterByAge(array $users, int $minAge): array
    {
        return array_filter($users, function (User $user) use ($minAge) {
            return $user->getAge() >= $minAge;
        });
    }

    /**
     * @param User[] $users
     */
    public function increaseAllAges(array $users): void
    {
        foreach ($users as $user) {
            $user->increaseAge();
        }
    }
}
