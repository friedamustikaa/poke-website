import React from 'react';
import { Container } from 'react-bootstrap';

function PokemonListPage() {
  return (
    <Container>
      <div className="py-5">
        <small className="text-muted">Welcome</small>
        <h1 className="text-dark">
          <strong>
            POKEMON <span className="text-warning">ZONE</span>{' '}
          </strong>
        </h1>
      </div>
      <div>
        <h3>
          Pokemon<strong> List</strong>
        </h3>
      </div>
    </Container>
  );
}

export default PokemonListPage;
