<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'name',
        'description',
        'note',
        'public',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'public' => 'boolean',
    ];

    /**
     * Get the categories
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<Category, Recipe>
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    /**
     * Get the ingredients
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany<Ingredient, Recipe>
     */
    public function ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }

    /**
     * Get the tags
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany<Tag, Recipe>
     */
    public function tags()
    {
        return $this->hasMany(Tag::class);
    }

}
