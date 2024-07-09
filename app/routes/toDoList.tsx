const todos = [
    {
        id: 100,
        title: "สอบวิชาการเขียนเกม MMO",
        checked: true
    },
    {
        id: 200,
        title: "สอบวิชาการเขียนเกม FPS",
        checked: false
    },
    {
        id: 300,
        title: "สอบวิชาการเขียนเกม RPG",
        checked: false
    },

];

function Item ({title,chk}:{title:string, chk:boolean}){
if(chk)
    return <li className="item">{title} ✅</li>;
else
    return <li className="item">{title} </li>;
}

export default function ToDoLists(){
    const items = todos.map (item =>
        <Item title={item.title} chk={item.checked} />
    );
    return (
        <>
        <h1>My to do Lists:</h1>
        <ul>{items}</ul>
        </>
    );
}