export default function navBar(){
    return (
        <nav className="w-full flex justify-between items-center p-6 bg-white shadow-sm fixed top-0 z-50">
            <h1 className="text-xl font-bold text-azulMarino">Solano Azul</h1>
            <ul className="flex gap-6 text-azulMarino font-medium">
                <li><a href="#about" className="hover:text-turquesa">Nosotros</a></li>
                <li><a href="#contact" className="hover:text-turquesa">Contacto</a></li>
            </ul>
        </nav>
    );
}