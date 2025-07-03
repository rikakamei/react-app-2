import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
        //alert('You clicked me!');
    }
   
    return (
        <button onClick={handleClick}>  Clicked {count} times</button>
    );
  }

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
  }

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
const listItems = products.map(product =>
    <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        {product.title}
    </li>
);
function App() {
  return (
    <div className="App">
          <h1>Welcome to my app</h1>
          <h1>Counters that update separately</h1>
          <MyButton />
          <MyButton />
          <AboutPage />
          <h1>{user.name}</h1>
          <img
              className="avatar"
              src={user.imageUrl}
              alt={'Photo of ' + user.name}
              style={{
                  width: user.imageSize,
                  height: user.imageSize
              }}
          />
          <ul>{listItems}</ul>
    </div>
    
  );
    
}

export default App;
