<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function generateUniqueIds(): string
    {
        $mt = explode(' ', microtime());
        $microtimePart = sprintf('%06d', round($mt[0] * 1000000)); // 6-digit microseconds

        // Generate a 9-digit random number
        $randomPart = random_int(100000000, 999999999);

        // Combine and ensure 17 digits
        $id = substr($mt[1], -5) . $microtimePart . $randomPart;
        $id = substr($id, -17); // Ensure only the last 17 digits are kept

        return $id;
    }
}
