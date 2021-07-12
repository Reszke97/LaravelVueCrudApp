@extends('layouts.app')
@section('content')
@auth
    <navbar :auth=true></navbar>
    @else
    <navbar :auth=false></navbar>
@endauth
@endsection