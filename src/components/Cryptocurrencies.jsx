import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Avatar } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Meta } = Card;
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // setCryptos(cryptosList?.data?.coins);
    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
    
    setCryptos(filteredData);
    
  }, [cryptosList, searchTerm]);
  
  if (isFetching) return 'loading ya ges';

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className='crypto-card'
            key={crypto.uuid}>

            <Link
              key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
              <Card
                title={`Rank #${crypto.rank}. ${crypto.name}`}
                size='small'
                extra={<img className="crypto-image" src={crypto.iconUrl} />}
                hoverable
              >

                <p>Price: $ {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {crypto.change}%</p>
              </Card>

            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies;