import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Col, Row, Button } from 'antd';
import { StarOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Produto from './Produto';

export function PaginaCategorias() {
        const { category } = useParams();
        const [produtos, setProdutos] = useState([]);
    
        useEffect(() => {
            listar();
        }, []);
    
    
        function listar() {
            axios.get(`https://fakestoreapi.com/products/category/${category}`)
                .then(resposta => {
                    setProdutos(resposta.data);
                })
        }
    return <>
     <Row justify="center">
      {produtos.map((produto) => (
        <Col span={6}>
            <Produto
              image={produto.image}
              title={produto.title}
              price={produto.price}
              id={produto.id}
            />
        </Col>
          ))}
      </Row>
    </>
}