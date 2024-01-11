import Logo from './Logo.jsx';
import SearchBar from './SearchBar.jsx';
import SidebarButton from './SidebarButton.jsx';
export default function Header() {
    return (
        <header className=" md:container md:mx-auto p-4 bg-transparent flex justify-between content-center  gap-4 text-center">
            <Logo />
            <SearchBar />
            <SidebarButton />
        </header>
    )
}