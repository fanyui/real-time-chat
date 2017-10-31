<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Dr Chat Socket.io</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <link href="{{ asset('css/styles.css') }}" rel="stylesheet">

</head>
<body>

@yield('content')
    <script src="{{ asset('js/app.js') }}"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="{{ asset('js/custom.js') }}"></script>

@yield('footer')
</body>
</html>