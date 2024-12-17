<div>
@include('components.layouts.sidenav')
<div id="main">
    <div class="header">
        <div class="menu">
            <a href="javascript:void(0)" id="closenav" style="display:none;" onclick="closeNav()">
            <i class="fa fa-bars"></i>
            </a>
            <a href="javascript:void(0)" id="opennav" onclick="openNav()">
            <i class="fa fa-bars"></i>
            </a>
        </div>
        <a href="/" class="logo">
        <img src="/images/logo.png">
        </a>
        <div class="categories">
            <div class="center">
                <div class="list-group-item" data-toggle="tooltip" data-placement="top"
                    title="Temporary">
                    <a href="/category/1-temporary">
                    <i class="icon icon-milk"></i>
                    </a>
                </div>
                <div class="list-group-item" data-toggle="tooltip" data-placement="top"
                    title="Bakery">
                    <a href="/category/2-bakery">
                    <i class="icon icon-bread"></i>
                    </a>
                </div>
                <div class="list-group-item" data-toggle="tooltip" data-placement="top"
                    title="Cakes/Cookies">
                    <a href="/category/3-cakes-cookies">
                    <i class="icon icon-cookie"></i>
                    </a>
                </div>
                <div class="list-group-item" data-toggle="tooltip" data-placement="top"
                    title="Dessert">
                    <a href="/category/4-dessert">
                    <i class="icon icon-cake"></i>
                    </a>
                </div>
                <div class="list-group-item" data-toggle="tooltip" data-placement="top"
                    title="Vegan">
                    <a href="/category/5-vegan">
                    <i class="icon icon-leaf"></i>
                    </a>
                </div>
                <div class="list-group-item" data-toggle="tooltip" data-placement="top"
                    title="Vegetarian">
                    <a href="/category/6-vegetarian">
                    <i class="icon icon-leaf"></i>
                    </a>
                </div>
                <div class="list-group-item" data-toggle="tooltip" data-placement="top"
                    title="Meat">
                    <a href="/category/7-meat">
                    <i class="icon icon-steak"></i>
                    </a>
                </div>
                <div class="list-group-item" data-toggle="tooltip" data-placement="top"
                    title="Toppings">
                    <a href="/category/23-toppings">
                    <i class="icon icon-bread"></i>
                    </a>
                </div>
                <div class="btn-group" style="margin-left:30px;">
                    <i class="icon-loop dropdown-toggle" data-toggle="dropdown"></i>
                    <div class="dropdown-menu" style="right:34px;left:inherit;top:-10px;padding:5px;">
                        <form method="get" action="/recipe/search">
                            <div class="input-group" style="margin:0;">
                                <input class="form-control" name="q" value="" placeholder="Search...">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="submit">
                                <i class="fa fa-search"></i>
                                </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <div class="content homepage">
        <div class="col-12 recipe-list">
            <div class="list">
                @foreach ($recipes as $recipe)
                    <div class="recipe">
                        <h1>
                            <a href="/recipe/{{$recipe->id}}">{{$recipe->name}}</a>
                        </h1>
                        <div class="recipe-list">
                            <ul>
                                @foreach ($recipe->ingredients as $ingredient)
                                    <li>{{$ingredient->name}}</li>
                                @endforeach
                            </ul>
                        </div>
                        @if ($recipe->tags->count() > 0)
                            <div class="tags">
                                <label>Tags:</label>
                                <span>
                                    @foreach ($recipe->tags as $tag)
                                        <a href="/tag/{{$tag->name}}">{{$tag->name}}</a>
                                    @endforeach
                                </span>
                                <div class="clear"></div>
                            </div>
                        @endif
                        @if ($recipe->categories->count() > 0)
                            <div class="tags">
                                <label>Categories:</label>
                                <span>
                                    @foreach ($recipe->categories as $category)
                                        <a href="/category/{{$category->id}}-{{$category->name}}">{{$category->name}}</a>
                                    @endforeach
                                </span>
                                <div class="clear"></div>
                            </div>
                        @endif
                    </div>
                @endforeach
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>