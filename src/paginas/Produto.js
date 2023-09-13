import React from 'react';
import { Card, Button, Space } from 'antd';

const { Meta } = Card;

export default function Produto({ title, price, image, id }) {
    return (
        <Card className='lista'
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={image} />}
        >
            <Meta title={title} description={`R$${price.toFixed(2)}`} />
                <Button href={`/produto/${id}`} type="primary">Comprar</Button>
        </Card>
    )
};
