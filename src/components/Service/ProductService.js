import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductService = ({services}) => {
    console.log(services);
    const {description,name,images,price,supplierName,} =services;
    return (
        <div className='col-12 col-md-6 col-lg-4 card-box mb-3'>
            <Card className='w-100'>
  <Card.Img variant="top" src={images} />
  <Card.Body className='text-center'>
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