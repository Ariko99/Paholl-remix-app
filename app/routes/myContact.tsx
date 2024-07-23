import ToDoLists from "./toDoList";


function MyProfile() {
    const name = "paholl yangyuen";
    const profile = "/images/img1.jpg";
    const info = "นักศึกษาสาขา It คณะบริหารธุรกิจและเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก เขตพื้นที่จักรพงษภูวนสรถ";
    return (
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={profile} title={name} />
  <div className="px-6 py-4">
    <h1 className="font-bold text-xl mb-2"> {name} </h1>

    <div className="font-bold text-xl mb-2"></div>
    <p className="text-gray-700 text-base" >
    {info}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#It</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cosplay</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#game</span>
  </div>
</div>
    );
}

export default function MyContact(){
    return(
        <div>
            <h1>My Contact</h1>
            <hr />
            <MyProfile />
            <>
            <ToDoLists />
            
            </>
        </div>
        
    );
}