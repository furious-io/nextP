import Link from "next/link";

export default function dashboard() {
    return (
        <div>
            <header className="w-full bg-amber-500  py-12 md:py-16 lg:py-20 xl:py-24/none">
                <div
                    className="container flex flex-col items-center justify-center gap-2 px-4 space-y-2 md:gap-4 md:flex-row md:space-y-0 lg:px-6">
                    <div className="flex flex-col gap-2 md:items-start md:gap-1">
                        <h1
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Welcome to Your Page</h1>
                        <p className="text-gray-500 md:text-base dark:text-gray-400">
                            This is the description for your page. Replace this with a brief description of your page's purpose.
                        </p>
                    </div>
                    <Link
                        className="h-10 inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:border-gray-800"
                        href="#">
                        Learn More
                    </Link>
                </div>
            </header>
            <section className="border-l-indigo-600">
                this is next app
            </section>
        </div>
    )
}