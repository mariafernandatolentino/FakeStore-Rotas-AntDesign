import { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, Carousel } from 'antd';
import Produto from './Produto';

export function PaginaInicial() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    listar();
  }, []);


  function listar() {
    axios.get(`https://fakestoreapi.com/products`)
      .then(resposta => {
        setProdutos(resposta.data);
      })
  }

  return <>
    <Row justify="center">
      <Col span={22}>
        <Carousel autoplay>
          <div id='slide1'>
          </div>
          <div id='slide2'>
          </div>
          <div id='slide3'>
          </div>
        </Carousel>
      </Col>
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