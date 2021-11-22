<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel VUE</title>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>
        <div id="app">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <app></app>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="{{asset('js/app.js')}}"></script>
</html>
