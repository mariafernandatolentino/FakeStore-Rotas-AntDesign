import {  Layout } from 'antd';

const { Header } = Layout;
export function NavBar() {
    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className='categoriasMenu'>
                    <a href={`/`}><h3 >Home</h3></a>
                </div>
                <div className='categoriasMenu'>
                    <a href={`/categorias/men's clothing`}><h4>Roupas Masculinas</h4></a>
                </div>
                <div className='categoriasMenu'>
                    <a href={`/categorias/women's clothing`}><h4>Roupas Femininas</h4></a>
                </div>
                <div className='categoriasMenu'>
                    <a href={`/categorias/jewelery`}><h4>Acessórios</h4></a>
                </div>
                <div className='categoriasMenu'>
                    <a href={`/categorias/electronics`}><h4>Eletrônicos</h4></a>
                </div>
            </Header>
        </Layout>
    );
};