import {cloneElement, useState} from 'react';
import {sculptureList} from './data';

export default function Gallery() {
    const [index,setIndex] = useState(0);
function handleClickNext () {
    if(index == 5){
    setIndex(index);
    }else{
    setIndex(index + 1);
    }
}
function handleClickBack () {
    if(index == 0){
    setIndex(index);
    }else{
    setIndex(index - 1);
    }
    }
    let sculpture = sculptureList [index];
return (
<>
<h1>
<button onClick = {handleClickNext}>
Next
</button>
</h1>
<h1>
<button onClick = {handleClickBack}>
back
</button>
</h1>
<h2>
<i>{sculpture.name} </i> by {sculpture.artist}
</h2>
<h3>
({index + 1} of {sculptureList.length})
</h3>
<img 
src={sculpture.url} 
alt={sculpture.alt}
/>
<p>
    {sculpture.description}
</p>
</>
);
}