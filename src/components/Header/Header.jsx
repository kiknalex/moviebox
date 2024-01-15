import Logo from './Logo.jsx';
import SearchBar from './SearchBar.jsx';
import SidebarButton from './SidebarButton.jsx';
export default function Header() {
    return (
        <header className="container pt-4 bg-transparent flex justify-between content-center inset-x-0 gap-4 text-center absolute">
            <Logo />
            <SearchBar />
            <SidebarButton />
        </header>
    )
}