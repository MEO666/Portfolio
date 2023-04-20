import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from '../img/logo.png';
import ecole from '../img/ecole.jpg';
import sport from '../img/sport.jpg';
import logob from '../img/logob.png';
import kriTirank from '../img/kriTirank.png';
function Projets(){
    return(
        <div style={{display: 'flex'}}>
    <Card style={{ width: '18rem' }} className='ms-5 mt-5'>
      <Card.Img variant="top" src={logo} style={{ display: 'block', margin: 'auto', width: '150px', height: '150px' }} />
      <Card.Body>
        <Card.Title>Application web (e-commerce)</Card.Title>
        <Card.Text>
          <b>Technologies : </b>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Php</li>
            <li>Mysql</li>
          </ul>
          <p><b>Date : </b> 2022</p>
        </Card.Text>
        <Button className='mt-3' disabled variant="primary">Voir projet</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='ms-5 mt-5'>
      <Card.Img variant="top" src={ecole} />
      <Card.Body>
        <Card.Title>Application desktop (Gestion d'école)</Card.Title>
        <Card.Text>
          <b>Technologies : </b>
          <ul>
            <li>c#</li>
            <li>Ado.net</li>
            <li>Mysql</li>
          </ul>
          <p><b>Date : </b> 2023</p>
        </Card.Text>
        <Button className='mt-4' disabled variant="primary">Voir projet</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='ms-5 mt-5'>
      <Card.Img variant="top" src={sport} />
      <Card.Body>
        <Card.Title>Application desktop (Gestion Salle de sport)</Card.Title>
        <Card.Text>
          <b>Technologies : </b>
          <ul>
            <li>Java</li>
            <li>Mysql</li>
          </ul>
          <p><b>Date : </b> 2023</p>
        </Card.Text>
        <Button className='mt-3' disabled variant="primary">Voir projet</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='ms-5 mt-5'>
      <Card.Img variant="top" className='mt-2' src={logob} style={{ display: 'block', margin: 'auto', width: '150px', height: '150px' }} />
      <Card.Body>
        <Card.Title>Application web (Recette Cuisine)</Card.Title>
        <Card.Text>
          <b>Technologies : </b>
          <ul>
            <li>Django</li>
            <li>Mysql</li>
          </ul>
          <p><b>Date : </b> 2023</p>
        </Card.Text>
        <Button className='mt-5' disabled variant="primary">Voir projet (en cours ...)</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='ms-5 me-5 mt-5'>
      <Card.Img variant="top" className='mt-2' src={kriTirank} style={{ display: 'block', margin: 'auto', width: '150px', height: '150px' }} />
      <Card.Body>
        <Card.Title>Application web (Reservation des terrains)</Card.Title>
        <Card.Text>
          <b>Technologies : </b>
          <ul>
            <li>Django</li>
            <li>React js</li>
            <li>Mysql</li>
          </ul>
          <p><b>Date : </b> 2023</p>
        </Card.Text>
        <Button href='https://front-web-field-reservation.vercel.app/owner' target='_blank' variant="primary">Voir projet (en cours ...)</Button>
      </Card.Body>
    </Card>
        </div>
        
    );
}

export default Projets;