import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductService = ({services}) => {
    console.log(services);
    const {description,name,images,price,supplierName,} =services;
    return (
        <div className='col-12 col-lg-3 col-md-4'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={images} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>{price}</p>
    <h6>{supplierName}</h6>
    <Card.Text>
     {description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default ProductService;