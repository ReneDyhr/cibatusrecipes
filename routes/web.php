<?php

use App\Livewire\AddRecipe;
use App\Livewire\Category\Categories;
use App\Livewire\EditRecipe;
use App\Livewire\Login;
use App\Livewire\Recipes;
use App\Livewire\SingleRecipe;
use App\Livewire\Tag\Tags;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/login', Login::class)->name('login');
Route::geT('logout', function () {
    auth()->logout();
    return redirect()->route('login');
})->name('logout');
Route::get('/', Recipes::class)->middleware('auth')->name('index');
Route::get('/recipe/add', AddRecipe::class)->middleware('auth')->name('add');
Route::get('/recipe/{id}', SingleRecipe::class)->middleware('auth')->name('single');
Route::get('/recipe/{id}/edit', EditRecipe::class)->middleware('auth')->name('edit');

Route::get('category/{slug}', Categories::class)->middleware('auth')->name('category');

Route::get('tag/{tag}', Tags::class)->middleware('auth')->name('tag');
