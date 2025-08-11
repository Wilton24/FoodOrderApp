import logo from "../../public/logo.jpg";

export default function Header() {
    return (
        <header id="main-header">
            <div className="left-header" id="title">
                <img src={logo} alt="Food Logo" />
                <h1>Logo</h1>
            </div>
            <div className="right-header">
                <h1>cart(3)</h1>
            </div>
        </header>
    )
}