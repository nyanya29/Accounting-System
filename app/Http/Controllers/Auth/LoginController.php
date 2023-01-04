<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    // public function username()
    // {
    //     return 'username';
    // }



    // public function logout(Request $request)
    // {
        
    //     $request->session()->invalidate();
    //     $request->session()->regenerateToken();
    //     Auth::logout();
    //     return Inertia::location('/');
    // }
    public function login(Request $request)
    {

        $user = User::where('UserName', $request->username)
            ->where('UserPassword', md5($request->password))
            ->first();

        if ($user) {
            Auth::login($user, true);
        }

        return redirect('/');
    }

    public function logout()
    {
        Auth::guard('web')->logout();
 
        request()->session()->invalidate();
 
        request()->session()->regenerateToken();

        return inertia()->location('/');
    }
}
