<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Ingredient;
use App\Models\Recipe;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecipeController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'public' => 'required|boolean',
            'categories' => 'required|array',
            'ingredients' => 'required',
            'tags' => 'required',
        ]);

        $fields = [
            ...$request->all(),
            "user_id" => Auth::id(),
        ];

        $notFound = 0;
        foreach($request->get('categories') as $category) {
            try {
                Category::query()->where('id', $category)->where('user_id', Auth::id())->firstOrFail();
            } catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
                $notFound = 1;
            }
        }
        if ($notFound) {
            return response()->json(["error" => "Category not found or owned"], 404);
        }

        $recipe = Recipe::create($fields);
        $recipe->categories()->attach($request->get('categories'));
        foreach ($request->get('ingredients') as $ingredient) {
            $recipe->ingredients()->create(['name' => $ingredient]);
        }
        foreach ($request->get('tags') as $tag) {
            $recipe->tags()->create(['name' => $tag]);
        }

        $recipe->refresh();
        $loadout = [
            ...$recipe->toArray(),
            'ingredients' => $recipe->ingredients,
            'tags' => $recipe->tags,
            'categories' => $recipe->categories,
        ];
        
        return response()->json($loadout, 201);
    }
}
