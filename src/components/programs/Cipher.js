import React,{useState} from 'react'

function Cipher() {

  const [direction, setDirection] = useState("encode");
  const [text, setText] = useState("text");
  const [shift, setShift] = useState(0);
  const [new_word, setNew_word] = useState(0);

  // const spawner = require('child_process').spawn;
  
  const data_to_send = [text, shift, direction];

  const cp = require('child_process');
  const cmd = cp.spawn('python', ['./py_programs/Cipher.py', JSON.stringify(data_to_send)]);
  cmd.on('data',(data)=>{
    setNew_word(JSON.parse(data.toString()));
  });

  // const python_process = spawner('python', ['./py_programs/Cipher.py', JSON.stringify(data_to_send)]);

  // python_process.stdout.on('data', (data) => {
  //   setNew_word(JSON.parse(data.toString()));
  // });

  return (
    <div>
        <p>Text: </p><input onChange={(event) => setText(event)} />
        <p>Shift key: </p><input onChange={(event) => setShift(event)} />
        <button onClick={() => setDirection("encode")}>Encode</button>
        <button onClick={() => setDirection("decode")}>Decode</button>
        <p>{new_word}</p>
    </div>
  )
}


export default Cipher
