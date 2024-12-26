<?php

namespace App\Livewire;

use App\Models\Category;
use App\Models\Recipe;
use Livewire\Component;
use Livewire\Attributes\Validate; 

class SingleRecipe extends Component
{
    public int $id;

    public function mount(int $id)
    {
        $this->id = $id;
    }
    public function render()
    {
        $recipe = Recipe::with(['ingredients', 'tags', 'categories'])->forAuthUser()->where('id', $this->id)->firstOrFail();
        $categories = Category::with('icon')->forAuthUser()->get();
        return view('livewire.recipes.single', ['title' => $recipe->name, 'recipe' => $recipe, 'account_categories' => $categories]);
    }
}
