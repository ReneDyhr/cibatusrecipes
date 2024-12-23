<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\Attributes\Validate; 

class Login extends Component
{
    #[Validate('required|email')] 
    public string $email = '';
    #[Validate('required')] 
    public string $password = '';

    public function mount()
    {
        if (auth()->check()) {
            return redirect()->intended(route('index'));
        }
    }

    public function render()
    {
        return view('livewire.login', ['bodyClass' => 'login-page']);
    }

    public function login()
    {
        $this->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (auth()->attempt(['email' => $this->email, 'password' => $this->password])) {
            return redirect()->intended(route('index'));
        }

        $this->addError('email', 'These credentials do not match our records.');
    }
}
