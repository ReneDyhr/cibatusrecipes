<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'email' => 'required|email:user|max:255',
            'password' => 'required',
            'name' => 'required',
            'birthdate' => 'required',
            'language' => 'required',
        ]);

        $fields = [
            ...$request->all(),
            "ip" => \Request::ip(),
        ];
        
        return response()->json(User::create($fields), 201);
    }
}
