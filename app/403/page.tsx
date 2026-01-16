import Link from "next/link";
export default function ForbiddenPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="max-w-md text-center">
                <h1 className="text-6xl font-bold text-red-600">403</h1>

                <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                    Access Denied
                </h2>

                <p className="mt-3 text-gray-600">
                    You do not have permission to access this page.
                    <br />
                    Please contact an administrator if you believe this is a mistake.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <Link
                        href="/"
                        className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/login"
                        className="rounded-md border border-gray-300 px-5 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        Login Again
                    </Link>
                </div>
            </div>
        </main>
    );
}
