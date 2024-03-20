export default function Page() {

    return (
    <main>
        <button className="bg-sky-500 hover:bg-sky-700">
            Save changes
        </button>
        <p className="card">Hello</p><br/>
        <p className="bg-primary pt-[10px]">Hello</p>
        <nav className="flex sm:justify-center space-x-4">
            {[
                ['Home', '/dashboard'],
                ['Team', '/team'],
                ['Projects', '/projects'],
                ['Reports', '/reports'],
            ].map(([title, url]) => (
                <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
            ))}
        </nav>
        
    </main>
    );
}