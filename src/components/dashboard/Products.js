import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";
import { range } from "../../helper";

const colors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-pink-500',
  'bg-purple-500',
  'bg-indigo-500',
];

const Products = ({products}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Products</CardTitle>
       
        <ListGroup flush className="mt-4" style={{ maxHeight: 500, overflowY: "scroll" }}>
        {products.map((Product, index) => {
          const rndInt =Math.floor(Math.random() * (6 - 0 + 1)) + 0;
                 const randomColor = colors[rndInt];

          return (
            <ListGroupItem
            key={index}
            action
            href={Product.url}
            target="_blank"
            tag="a"
            className="d-flex flex-column p-3 border-0"
          >
            <div className="d-flex align-items-center">
            <div className={`h-6 w-6 my-2 rounded-full ${randomColor}`}></div>

          
              <h5 className="mb-0 w-60 mx-2">{Product.name}</h5>
            </div>
            <p className="text-muted mx-5 my-1">Price: {Product.price + " L.E"}</p>
          </ListGroupItem>
          )
        })}
      </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Products;
