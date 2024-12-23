import chefClaudeLogo from "../image/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="header logo"/>
            <h1>Chef Claude</h1>
        </header>
    )
}