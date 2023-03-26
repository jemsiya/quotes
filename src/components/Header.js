import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './Bookmark.css'

function Header() {
  return (
    <div>

<Navbar className='navbar' >
        <Container>
        <div>
          <Navbar.Brand className='home' > HOME</Navbar.Brand>
</div>

         <Link to={'/bookmark'}>
          <Navbar.Brand className='book'>Bookmark</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <br />

       

     


    </div>
  )
}

export default Header