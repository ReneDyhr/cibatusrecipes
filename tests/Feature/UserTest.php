<?php

namespace Tests\Feature;

use App\Enums\LanguageEnum;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\CreatesApplication;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    use CreatesApplication, DatabaseMigrations, DatabaseTransactions, WithFaker;
    /**
     * Create user from endpoint
     * @test
     * @covers UserController::store
     * */
    public function create_user(): void
    {
        $user = [
            "email" => $this->faker()->email(),
            "password" => $this->faker()->password(),
            "name" => $this->faker()->name(),
            "birthdate" => $this->faker()->date(),
            "language" => LanguageEnum::DANISH->value,
            "ip" => $this->faker()->ipv4(),
        ];
        $response = $this->post('/api/user', $user);

        unset($user['password']);
        $response->assertStatus(201)->assertJson($user);
    }
}
