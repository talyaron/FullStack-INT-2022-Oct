import "./navbar.scss"

// const Logo = "/images/instagram-text-icon.png" // Logo 1
const Logo = "/images/logo.png"             // Logo 2

const NewPostIcon = '/images/addNewPostBtn.png'

const Navbar = () => {

    return (
        <nav className="nav">
            <a href="/" className="nav__logo">
            <img src={Logo} alt="logo" />
            </a>

        <button className="nav__add-btn">
            <img src={NewPostIcon} alt="" />
        </button>
        </nav>
    )
}


export default Navbar