import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div style={{ marginBottom: "100px" }}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'  >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" >Fenian Tourism
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/aboutus">ABOUT FENIAN</Nav.Link>
                            <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/home#services">SERVICE</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/addservice">SERVICE ADD</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/manageservices">Manage Services</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="ORDER" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/myorder">My Order</NavDropdown.Item>
                                {/* <NavDropdown.Item as={HashLink} to="/myallorder">All Order</NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link as={HashLink} to="/home#doctors">TEAMS MEMBER</Nav.Link>
                            <Nav.Link as={HashLink} to="contact#contact">CONTACT</Nav.Link>
                            <NavDropdown title="GALLERY" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/doctorg">Team Member</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/servicesg">Tourism Place</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {user?.email ?
                                <Button className='btn btn-primary bg-danger' onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                <a href="#login" className='mx-2 my-5'>{user?.displayName}</a>
                            </Navbar.Text>
                            <Navbar.Text>
                                <a href="#login"><img style={{ width: '40px', height: '40px', borderRadius: '20px' }} src={user?.photoURL} alt="" /></a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;