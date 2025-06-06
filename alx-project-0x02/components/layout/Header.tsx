import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-blue-600 text =-white p-4">
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
            </nav>
        </header>
    );
};

export default Header;