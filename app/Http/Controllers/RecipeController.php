<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecipeController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'public' => 'required|boolean',
            'categories' => 'required|array',
            'ingredients' => 'required|array',
            'tags' => 'required|array',
        ]);

        $recipe = $this->createRecipe($request);

        $recipe->load('categories', 'ingredients', 'tags');

        return response()->json($recipe, 201);
    }

    private function createRecipe(Request $request): Recipe
    {
        $fields = [
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'note' => $request->input('note'),
            'public' => $request->input('public'),
            'user_id' => Auth::id(),
        ];

        $categories = $request->input('categories');
        $this->validateCategories($categories);

        $recipe = Recipe::create($fields);

        $recipe->categories()->attach($categories);

        $ingredients = $request->input('ingredients');
        $recipe->ingredients()->createMany(array_map(fn($name) => ['name' => $name], $ingredients));

        $tags = $request->input('tags');
        $recipe->tags()->createMany(array_map(fn($name) => ['name' => $name], $tags));

        return $recipe;
    }

    private function validateCategories(array $categories): void
    {
        $user_id = Auth::id();
        $notFound = count($categories) - Category::whereIn('id', $categories)
            ->where('user_id', $user_id)
            ->count();

        if ($notFound) {
            abort(404, "Category not found or owned");
        }
    }
}