// import { useState, useCallback } from "react";
// import './App.css'

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    
//     for (let i = 0; i < length; i++) {
//       const charIndex = Math.floor(Math.random() * str.length);
//       pass += str.charAt(charIndex); // append character
//     }

//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed]);

//   return (
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-8 my-8 text-orange-500 bg-gray-800">
//       <h1 className="text-3xl mb-6 text-white text-center font-bold">Password Generator</h1>

//       <div className="mb-4">
//         <label className="block mb-2 text-white">Password Length:</label>
//         <input
//           type="number"
//           min="4"
//           max="30"
//           value={length}
//           onChange={(e) => setLength(Number(e.target.value))}
//           className="w-full p-2 rounded text-black"
//         />
//       </div>

//       <div className="mb-4 flex items-center space-x-4 text-white">
//         <label>
//           <input
//             type="checkbox"
//             checked={numberAllowed}
//             onChange={() => setNumberAllowed(!numberAllowed)}
//             className="mr-2"
//           />
//           Include Numbers
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             checked={charAllowed}
//             onChange={() => setCharAllowed(!charAllowed)}
//             className="mr-2"
//           />
//           Include Special Characters
//         </label>
//       </div>

//       <button
//         onClick={passwordGenerator}
//         className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
//       >
//         Generate Password
//       </button>

//       {password && (
//         <div className="mt-6 p-4 bg-gray-900 rounded text-white font-mono break-words">
//           {password}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import { useState, useCallback,useEffect, useRef } from "react"; 
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]) 
  
   const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999); // For mobile devices
    window.navigator.clipboard.writeText(password)
   }, [password])


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4
        my-8 text-orange-500 bg-gray-800 text-center p-4">
          <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
            <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3" 
            placeholder="Password"
            readOnly
            ref={{passwordRef}}
            />
            <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev)=>!prev)
              }
              />
              <label htmlFor="numberInput">Include Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev)=>!prev)}
              />
              <label htmlFor="charInput">Include Special Characters</label>
            </div>

          </div>
        <h1 className="text-2xl mb-4">Password Generator</h1>
        {/* <button 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          onClick={passwordGenerator}
        >
          Generate Password
        </button> */}

        <p className="mt-4 text-white text-lg break-all">{password || "Your password will appear here"}</p>
      </div>
    </>
  );
}

export default App;
