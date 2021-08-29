import React from 'react';
import { Navbar, Container, Image, Badge, Button } from 'react-bootstrap';
import ImgPoke from './pokeball.png';

function MainMenu() {
  return (
    <Navbar>
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#" className="m-0">
            <Button variant="light" className="p-0">
              <Image
                alt=""
                src={ImgPoke}
                width="30"
                className="d-inline-block align-top"
              />{' '}
              <Badge className="bg-warning text-dark">0</Badge>
            </Button>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainMenu;
