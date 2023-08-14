import {Container, Nav,Navbar} from 'react-bootstrap';
import React from 'react';

class Appbar extends React.Component{
    render(){
        return(
            <Navbar className='bg-primary'>
                <Container>
                    <Navbar.Brand className='text-white ms-5'>JUST BUY</Navbar.Brand>
                    <Nav className='justify-content-end'>
                        <Nav.Item className='me-1'>
                            <Nav.Link className='nlink text-white' href='/mobiles'>Mobiles</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='me-1'>
                            <Nav.Link className='nlink text-white' href='/laptops'>Laptops</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Appbar;