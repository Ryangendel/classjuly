import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">BlackJack</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Play</Nav.Link>
                    <Nav.Link href="#features" id="currentWeather">Your current weather is: {props.usersTemp}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;