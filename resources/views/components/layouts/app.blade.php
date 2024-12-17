<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/scss/app.scss')
    @vite('resources/css/datetimepicker.min.css')
    @vite('resources/css/font-awesome.css')
    @vite('resources/css/jquery-ui.css')
    @vite('resources/js/jquery.js')
    @vite('resources/js/masonry.js')
    @vite('resources/js/app.js')
    <title>{{ $title ?? 'Page Title' }}</title>
</head>

<body>
    {{ $slot }}
</body>

</html>