<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Validation\Rules\Password as RulesPassword;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

class NewPasswordController extends Controller
{
    public function sendEmail(Request $request){
        
        $request->validate([
            'email' => 'required|email'
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if($status == Password::RESET_LINK_SENT){
            return [
                'status' => __($status)
            ];
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]); 
    }

    public function resetPassword(Request $request){

        $request->validate([
            'token' => 'required',
            'password' => ['required','confirmed']
        ]);

        $status = Password::reset(
            $request->only('email','password','password_confirmation','token'),
            function ($user) use ($request){
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();
                $user->tokens()->delete();    
                event(new PasswordReset($user));
            }
        );
        
        if($status == Password::PASSWORD_RESET){
            return response([
                'msg' => 'Password reset succesfully'
            ]);
        }
        
        return response([
            'msg' => __($status)
        ],500);
    }
}
