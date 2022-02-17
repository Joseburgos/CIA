<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Vehiculo;
Use Log;

class VehiculoController extends Controller
{
    public function getAll(){
        $data = Vehiculo::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['description'] = $request['description'];
        $data['type'] = $request['type'];
        $data['numberTire'] = $request['numberTire'];
        $data['horsePower'] = $request['horsePower'];
        Vehiculo::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Vehiculo::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }

      public function get($id){
        $data = Vehiculo::find($id);
        return response()->json($data, 200);
      }
}
