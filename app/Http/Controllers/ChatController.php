<?php


namespace App\Http\Controllers;

use App\Events\EventName;
use Illuminate\Http\Request;

class ChatController extends Controller
{
	public function fire(){
    	event(new EventName("this is the message you just sent"));
    return "event fired";
	}

	public function test(){
	    return view('test');		
	}
	public function saveChat(Request $request){
		//return "hello";
		    	event(new EventName($request->message));
		return response()->json(array("name" => "harisu", "message" => $request->message));
	}

}
