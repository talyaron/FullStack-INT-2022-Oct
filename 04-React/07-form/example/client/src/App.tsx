import { ChangeEvent, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


function App() {
  const [text, setText] = useState<string>("");
  const [color, setColor] = useState<string>("red");

  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    console.log(ev)
    setText(ev.target.value)
  }

  function handleSubmit(ev: any) {
    ev.preventDefault();
    console.log(ev.target.name.value);
    setText(ev.target.name.value);
  }

  function handleColorChange(ev: any) {
    console.log(ev.target.value);
    setColor(ev.target.value);
  }


  function handleSwitch(ev: any) {
    console.log(ev.target.checked);
  }

  return (
    <div className='page' style={{ backgroundColor: color }}>
      <div>
        <h1>{text}</h1>
        <input type="text" onChange={handleInput} />
      </div>
      <input type="color" onChange={handleColorChange} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <button type="submit">Submit</button>
      </form>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <div>
      <Switch {...label} defaultChecked onChange={handleSwitch} />
      <Switch {...label} />
      <Switch {...label} defaultChecked />
      <Switch {...label} />
    </div>
    </div>
  )
}

export default App
