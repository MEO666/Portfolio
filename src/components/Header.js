import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import moad from '../img/Moad.jpg';

function Header(){
    return(
        <div>
            <div className="text-center">
                <img src={moad} alt="Ma photo de profil" className="rounded-circle mt-3 me-3" style={{ width: 200, height: 200 }}/>
                <h2>El Otmani Moad</h2>
                <h5>Etudiant</h5>
            </div>
            <Navbar bg="light" className='mt-3'>
            <Container>
            <div className="mt-2 d-flex justify-content-center mx-auto text-center">
                <div><a target="_blank" href="https://github.com/MEO666"><i className="bi bi-github ms-5"></i></a></div>
                <div><a target="_blank" href="https://www.linkedin.com/in/moad-el-otmani-a128a4256/"><i className="bi bi-linkedin ms-5"></i></a></div>
                <div><a target="_blank" href="https://www.facebook.com/profile.php?id=100008624955924"><i className="bi bi-facebook ms-5"></i></a></div>
            </div>
            </Container>
        </Navbar>
        
        <Navbar bg="primary" variant="dark" expand="lg" ms-auto>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/formation">Formations</Nav.Link>
          <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
          <Nav.Link as={Link} to="/projet">Projets</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </div>
        
        
    );
}

export default Header;