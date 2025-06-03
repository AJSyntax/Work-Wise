<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('stripe_customer_id')->nullable();
            $table->string('stripe_account_id')->nullable();
            $table->json('stripe_account_details')->nullable();
            $table->timestamp('stripe_onboarded_at')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'stripe_customer_id',
                'stripe_account_id',
                'stripe_account_details',
                'stripe_onboarded_at'
            ]);
        });
    }
}; 