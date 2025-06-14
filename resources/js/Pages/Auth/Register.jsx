import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Register({ selectedUserType }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        barangay: '',
        user_type: selectedUserType || 'freelancer',
        terms_agreed: false,
        marketing_emails: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    // List of barangays in Lapu-Lapu City, Philippines
    const barangays = [
        'Agus',
        'Babag',
        'Bankal',
        'Basak',
        'Buaya',
        'Calawisan',
        'Canjulao',
        'Caubian',
        'Caw-oy',
        'Gun-ob',
        'Ibo',
        'Looc',
        'Mactan',
        'Maribago',
        'Marigondon',
        'Pajac',
        'Pajican',
        'Pajo',
        'Pangan-an',
        'Pilipog',
        'Poblacion',
        'Punta Engaño',
        'Sabang',
        'Santa Rosa',
        'Subabasbas',
        'Talima',
        'Tingo',
        'Tungasan',
        'Yapak'
    ];

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const getTitle = () => {
        return selectedUserType === 'client' ? 'Sign up to hire talent' : 'Sign up to find work';
    };

    return (
        <>
            <Head title="Register" />

            <div className="min-h-screen bg-white">
                {/* Header */}
                <header className="border-b border-gray-200">
                    <div className="mx-auto" style={{ paddingLeft: '0.45in', paddingRight: '0.45in' }}>
                        <div className="flex justify-between items-center h-16">
                            <Link href="/" className="flex items-center">
                                <span className="text-2xl font-bold text-blue-600">WorkWise</span>
                            </Link>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600">Looking for work?</span>
                                <Link
                                    href={route('role.selection')}
                                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Apply as talent
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="max-w-md mx-auto pt-12 pb-16 px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-normal text-gray-900 mb-8">
                            {getTitle()}
                        </h1>
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                        {/* First Name and Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                                    First name
                                </label>
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <InputError message={errors.first_name} className="mt-1" />
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Last name
                                </label>
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <InputError message={errors.last_name} className="mt-1" />
                            </div>
                        </div>

                        {/* Work Email Address */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Work email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                            <InputError message={errors.email} className="mt-1" />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Password (8 or more characters)"
                                    className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {showPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                            <InputError message={errors.password} className="mt-1" />
                        </div>

                        {/* City (Pre-filled) */}
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                City
                            </label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                value="Lapu-Lapu City"
                                disabled
                                className="w-full px-3 py-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
                            />
                        </div>

                        {/* Barangay */}
                        <div>
                            <label htmlFor="barangay" className="block text-sm font-medium text-gray-700 mb-1">
                                Barangay (in Lapu-Lapu City)
                            </label>
                            <select
                                id="barangay"
                                name="barangay"
                                value={data.barangay}
                                onChange={(e) => setData('barangay', e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                required
                            >
                                <option value="">Select your barangay</option>
                                {barangays.map((barangay) => (
                                    <option key={barangay} value={barangay}>
                                        {barangay}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.barangay} className="mt-1" />
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-3">
                            <label className="flex items-start">
                                <input
                                    type="checkbox"
                                    checked={data.marketing_emails}
                                    onChange={(e) => setData('marketing_emails', e.target.checked)}
                                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <span className="ml-3 text-sm text-gray-700">
                                    Send me emails with tips on how to find talent that fits my needs.
                                </span>
                            </label>

                            <label className="flex items-start">
                                <input
                                    type="checkbox"
                                    checked={data.terms_agreed}
                                    onChange={(e) => setData('terms_agreed', e.target.checked)}
                                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    required
                                />
                                <span className="ml-3 text-sm text-gray-700">
                                    Yes, I understand and agree to the{' '}
                                    <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                                        WorkWise Terms of Service
                                    </Link>
                                    , including the{' '}
                                    <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                                        User Agreement
                                    </Link>
                                    {' '}and{' '}
                                    <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                                        Privacy Policy
                                    </Link>
                                    .
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing || !data.terms_agreed}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-full transition-colors"
                        >
                            {processing ? 'Creating account...' : 'Create my account'}
                        </button>

                        {/* Login Link */}
                        <div className="text-center">
                            <span className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link href={route('login')} className="text-blue-600 hover:text-blue-700 font-medium">
                                    Log in
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
