<?php

namespace App\Http\Controllers;

use App\Models\Jevh;
use Illuminate\Http\Request;

class JevhController extends Controller
{
    public function __construct(Jevh $model)
    {
        $this->model = $model;
    }
    public function index(Request $request){
        return inertia('Jevh/Index', [
            "jevh" => $this->model
            ->when($request->search, function ($query, $searchItem) {
                $query->where('FJEVNO', 'like', '%' . $searchItem . '%');
            })
            ->simplePaginate(10)
            ->withQueryString(),
            "filters" => $request->only(['search']),
        ]);
    }
}
