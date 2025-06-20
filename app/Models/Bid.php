<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bid extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_id',
        'freelancer_id',
        'bid_amount',
        'proposal_message',
        'estimated_days',
        'status',
        'submitted_at',
    ];

    protected function casts(): array
    {
        return [
            'bid_amount' => 'decimal:2',
            'submitted_at' => 'datetime',
        ];
    }

    /**
     * The job this bid is for
     */
    public function job(): BelongsTo
    {
        return $this->belongsTo(Job::class, 'job_id');
    }

    /**
     * The freelancer who made this bid
     */
    public function freelancer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'freelancer_id');
    }

    /**
     * Check if bid is pending
     */
    public function isPending(): bool
    {
        return $this->status === 'pending';
    }

    /**
     * Check if bid is accepted
     */
    public function isAccepted(): bool
    {
        return $this->status === 'accepted';
    }

    /**
     * Check if bid is rejected
     */
    public function isRejected(): bool
    {
        return $this->status === 'rejected';
    }
}
