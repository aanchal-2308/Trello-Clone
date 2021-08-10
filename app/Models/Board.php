<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    use HasFactory;

    public function lists()
    {
        return $this->hasMany(CardList::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
