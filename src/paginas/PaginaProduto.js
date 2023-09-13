import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Col, Row, Button, Image } from 'antd';
import { StarOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export function PaginaProduto() {
    const { id } = useParams();
    const [produto, setProdutos] = useState([]);

    useEffect(() => {
        listar();
    }, []);


    function listar() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(resposta => {
                setProdutos(resposta.data);
            })
    }

    function produtoCarrinho() {
        alert("Produto adicionado ao carrinho!")
    }
    return <>
        <Row justify="center">
            <Col span={10}>
                <Card
                    hoverable
                    className='detalhes'
                    cover={<Image
                        src={produto.image}
                        placeholder={
                            <Image
                                preview={false}
                                src={produto.image}
                            />
                        }
                    />
                    }
                >
                </Card>
            </Col>
            <Col span={10}>
                <Card className='nomeProduto' title={produto.title}>
                    <h4> {produto.description}</h4>
                    <h5>{produto.category}</h5>
                    <h5>Avaliações: {produto?.rating?.rate} de 5.0 <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></h5>
                    <p>Vendido e entregue por Fake Store <ShoppingCartOutlined /></p>
                    <h2>R${produto?.price?.toFixed(2)}</h2>
                    <Button onClick={produtoCarrinho}type="primary">Comprar</Button>

                </Card>
            </Col>
        </Row>
    </>
};