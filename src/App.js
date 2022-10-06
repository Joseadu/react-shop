import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


const products = [
  {
    id: 1,
    title: 'bike',
    price: '$500'
  },
  {
    id: 2,
    title: 'bike',
    price: '$500'
  },
  {
    id: 3,
    title: 'bike',
    price: '$500'
  },
  {
    id: 4,
    title: 'bike',
    price: '$500'
  },
  {
    id: 5,
    title: 'bike',
    price: '$500'
  },
  {
    id: 6,
    title: 'bike',
    price: '$500'
  },
  {
    id: 7,
    title: 'bike',
    price: '$500'
  },
  {
    id: 8,
    title: 'bike',
    price: '$500'
  }
]

export default function App() {
  return (
    <>
      <Header />
      
      <div id="cardsContainer" className="cards-container">
        {products.map(product => (
            <Home
              key={product.id}
              title={product.title}
              price={product.price}
            />
        ))}
      </div>
    </>
  );
}