<?php

namespace App\Livewire;

use Livewire\Attributes\Url;
use App\Models\Category;
use App\Models\Recipe;
use Livewire\Component;
use Livewire\Attributes\Validate; 

class SearchRecipe extends Component
{
    #[Url(as: 'q')]
    public string $query;

    public function mount()
    {
    }
    public function render()
    {
        $recipes = Recipe::with(['ingredients', 'tags', 'categories'])
            ->where('name', 'like', '%' . $this->query . '%')
            ->forAuthUser()
            ->orderBy('id', 'DESC')
            ->get();

        $categories = Category::with('icon')->forAuthUser()->get();
        return view('livewire.recipes.index', ['recipes' => $recipes, 'account_categories' => $categories]);
    }
}
