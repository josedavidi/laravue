<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('posts','PostController@index');
Route::get('post/{slug}','PostController@show');