<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


// Path Not Found Page
Route::get('/{pathMatch}', function(){
    return view('welcome');
})->where("pathMatch", ".*");
