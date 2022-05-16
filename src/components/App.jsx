import { useState, useEffect } from 'react';
import './App.css';
import List from './List';
import Search from './Search';

const data = ['html',
  'css',
  'js',
  'Javascript',
  'TypeScript',
  'React'
]

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data);

  useEffect(()=> {
    setItems(data.filter(el => el.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
  }, [search])

  return (
    <div className="App">
      <div className='App-header'>
        <Search value={search} onChange={e=> setSearch(e.target.value)}>
          Find Course
        </Search>
        <List items={items} />
      </div>

    </div>
  );
}

export default App;
