<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardList extends Model
{
    use HasFactory;

    public function cards()
    {
        return $this->hasMany(Card::class);
    }

    public function board()
    {
        return $this->belongsTo(Board::class);
    }
}
