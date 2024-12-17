<?php

namespace App\Livewire;

use App\Models\Recipe;
use Livewire\Component;
use Livewire\Attributes\Validate; 

class Recipes extends Component
{
    public function render()
    {
        $recipes = Recipe::with(['ingredients', 'tags', 'categories'])->forAuthUser()->get();
        return view('livewire.recipes.index', ['recipes' => $recipes]);
    }
}
