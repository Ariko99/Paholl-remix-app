import { useState } from "react";

export default function CardLists (){
    const [name, setName] = useState('');
    const [Photo, setPhoto] = useState('');
    const [Pos, setPos] = useState('');
    const [Workplace, setWork] = useState('');
    const [desc, setDesc] = useState('');
    const [cards, setCards] = useState([]);
    let nextId = 0 ;
    function handleClickAdd(n:string,ph:string,p:string,w:string,d:string){
        console.log("Card List:" ,cards);
        setCards([
            ...cards,
            {
                id: nextId++,
                Photo: ph,
                name: n,
                Pos: p,
                Workplace: w,
                desc: d
            }
        ]);

    }

    return(
        <div>
            <label>Create Card Name:</label>
            <input 
                name="cName"
                className="border-1"
                onChange={(e) => setName(e.target.value)}
            /><hr />
            <label>Photo:</label>
            <input 
                name="cName"
                className="border-1"
                onChange={(e) => setPhoto(e.target.value)}
            /><hr />
            <label>Position: </label>
            <input 
                name="cPos"
                className="border-1"
                onChange={(e) => setPos(e.target.value)}
            /><hr />
            <label>Workplace: </label>
            <input type="radio"
                name="cWorkplace"
                value={"programing"}
                className="border-1"
                onChange={(e) => setWork(e.target.value)}
            />programing
            <input type="radio"
                name="cWorkplace"
                value={"network"}
                className="border-1"
                onChange={(e) => setWork(e.target.value)}
            />network<hr />
            <label>Description:</label>
            <textarea 
                name="cDesc"
                rows={4}
                cols={50}
                className="border-2"
                onChange={(e) => setDesc(e.target.value)}
            />
            <hr />
            <button 
            onClick={() => handleClickAdd(name,Photo,Pos,Workplace,desc)}
            className = "border bg-green-300 h-18 w-20"
            >
                Add Card
            </button>
            <hr />
            <h1>My Card Lists :</h1>
            <hr />
            <h1 className="font-bold text-xl mb-2"> {name} </h1>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={Photo} />
            <p className="font-bold text-xl mb-2"> {Pos} </p>
            <p className="font-bold text-xl mb-2"> {Workplace} </p>
            <p className="font-bold text-xl mb-2"> {desc} </p>

        </div>
        </div>
    )
}