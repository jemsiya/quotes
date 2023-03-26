import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
function Bookmark() {
  return (
    <div>
       <Card className="quot">
     
     <Card.Body>
       <Card.Title>Bookmark</Card.Title>
       <Card.Text>
     
       </Card.Text>
       <Link to={'/quote'}>
       <Button variant="dark">back to quotes</Button>
       </Link>
     </Card.Body>
    
   </Card>

    </div>
  )
}

export default Bookmark