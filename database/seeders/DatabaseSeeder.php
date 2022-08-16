<?php

namespace Database\Seeders;

use Database\Seeders\Barangays;
use Illuminate\Database\Seeder;
use Database\Seeders\FirstUserSeed;
use Database\Seeders\Municipalities;
use Database\Seeders\PermissionsSeeder;
use Database\Seeders\PermissionUserSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        $this->call([
            FirstUserSeed::class,
<<<<<<< HEAD
            PermissionUserSeeder::class,
            PermissionsSeeder::class,
=======
            // PermissionUserSeeder::class,
            // PermissionsSeeder::class,
>>>>>>> 5b4bd15f9bff2d06f07a84d94554f66c4c8e2f3c
            // Municipalities::class,
            // Barangays::class,
        ]);

        \App\Models\User::factory(100)->create();
    }
}
