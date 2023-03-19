import trollPath from "./img/Troll-Face.png"
export default function NavBar() {
    return <nav className="purple-gradient">
        <div className="logo-box">
            <img src={trollPath} alt="Troll face" />
            <h2>Meme Generator</h2>
        </div>
        <div className="title">By Ayyala Sai Srikar</div>
    </nav>
}