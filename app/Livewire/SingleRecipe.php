<?php

namespace App\Livewire;

use App\Models\Category;
use App\Models\Recipe;
use Livewire\Component;
use Livewire\Attributes\Validate; 

class SingleRecipe extends Component
{
    public int $id;
    public Recipe $recipe;

    public function mount(int $id)
    {
        $this->id = $id;
        $this->recipe = Recipe::with(['ingredients', 'tags', 'categories'])->forAuthUser()->where('id', $this->id)->firstOrFail();
    }
    public function render()
    {
        return view('livewire.recipes.single', ['title' => $this->recipe->name]);
    }

    public function toggleFavourite()
    {
        $this->recipe->toggleFavourite();
    }
}
