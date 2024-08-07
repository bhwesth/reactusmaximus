import Button from "./Button"

export default function Header(props) {
    function handleLogin() {
        props.setLoggedIn(true)
    }
    
    function handleLogout() {
        props.setLoggedIn(false)

    }

    return (
      <header>
        <Button onClick={handleLogin} label="log in" />
        <Button onClick={handleLogout} label="log out" />
    </header>
  )  
}