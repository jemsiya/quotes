
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Home() {


  return (
    
    <div>

<div className='container'>

    <Card className="quot">
     
      <Card.Body>
        <Card.Title>quote of the day</Card.Title>
        <Card.Text>
        Give and Take Respect
        for more quotes click below
      
        </Card.Text>
        <Link to={'/quote'}>
        <Button variant="dark">more Quotes</Button>
        </Link>
      </Card.Body>
     
    </Card>

</div>






    </div>
  )
}

export default Home
