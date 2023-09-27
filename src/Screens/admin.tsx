import { useState } from "react";
import BAButton from "../Components/BAButton";
import BAInput from "../Components/BAInput";
import { Link } from "react-router-dom";
function Admin() {
const [model, setModel] = useState<any>({});
// const [disable, setDisable] = useState<any>(true);

const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const LogQuiz=(e:any)=>{
      console.log(model)
   e.currentTarget.disabled=true;
   
}
  return (
<>

    <div className="row m-auto">
    <div className="col-md-3 bg-gray-500 shadow h-screen">
        <div className=" flex justify-center items-center py-5 " >
           <img style={{width:"120px",height:"120px",borderRadius:"50%"}} className="shadow"  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt=""  />
        </div>
        <div className="bg-gray-400 rounded mx-2 ">

        <div className="  d-flex  justify-content-center shadow   py-2 my-2" >
        <Link to="/login" className="text-dark fs-4 " style={{textDecoration:"none"}}>HTML</Link>       
        </div>
        <div className=" flex justify-center items-center shadow py-2 my-2" >
        <Link to="/login" className="text-dark fs-4" style={{textDecoration:"none"}}>CSS</Link>       
        </div>
        <div className=" flex justify-center items-center shadow py-2 my-2" >
        <Link to="/login" className="text-dark fs-4" style={{textDecoration:"none"}}>JS Quiz 1</Link>       
        </div>
        <div className=" flex justify-center items-center shadow py-2 my-2" >
        <Link to="/login" className="text-dark fs-4" style={{textDecoration:"none"}}>JS Quiz 2</Link>       
        </div>
        </div>
        <div className=" flex w-full justify-center items-center mt-5 mx-2" >
        <button className="rounded-full bg-teal-700 p-2 text-white px-8 w-full ">Logout</button>
         </div>
    </div>
    <div className="col-md-9 bg-gray-400 " >
    <div className="row p-3">
         <div className="col-md-11  mt-2 w-full bg-gray-300 p-2 shadow ">
         <h1 className="fs-2">Quiz App Admin</h1>
        </div>
         <div className="col-md-1  mt-2 w-full bg-gray-300 p-2 shadow ">
         <button className="rounded-full bg-teal-700 p-2 text-white px-8 w-full ">Save</button>
        </div>
         </div> 
           <div className="row">
            <div className="col-md-4 py-3">
                <BAInput label="Quiz Name"  value={model.quizName}
              onChange={(e: any) => fillModel("Quiz Name", e.target.value)}
             />
            </div>
            <div className="col-md-4 py-3">
                <BAInput  value={model.quizDuration}
              onChange={(e: any) => fillModel("Quiz Duration", e.target.value)}
              label="Quiz Duration in Minutes"/>
            </div>
            <div className="col-md-4 py-3">
                <BAInput  value={model.secretKey}
              onChange={(e: any) => fillModel("Secret Key", e.target.value)}
              label="Secret Key"/>
            </div>
            <div className="col-md-4 py-3">
                <BAInput  value={model.quizOpen}
              onChange={(e: any) => fillModel("Quiz Open", e.target.value)}
              label="Quiz Open"/>
            </div>
            <div className="col-md-8 py-3">
                <BAInput  value={model.description}
              onChange={(e: any) => fillModel("Description", e.target.value)}
              label="Description"/>
            </div>
            <div className="col-md-2 py-3">
                <BAButton onClick={(e:any)=>LogQuiz(e) } label="Lock Quiz" />
            </div>
           </div>
          <div className="row p-3">
         <div className="col-md-12  w-full bg-gray-300 p-2 shadow ">
         <h1 className="fs-2">Questions</h1>
        </div>
         </div> 
         <div className="row p-3 d-flex justify-content-between ">
            <div className="col-md-11 w-full bg-gray-300 p-2 shadow">
            <h1 className="fs-2">Options</h1>
             </div>
            <div className="col-md-1 w-full bg-gray-300 p-2 shadow">
            <button className="rounded-full bg-teal-700  text-white w-full fs-3 font-extrabold">+</button>
            </div>
         </div>
         <div className="row p-3">
         <div className="col-md-7  w-full bg-gray-300 p-2 shadow ">
         <h1 className="fs-2">Option 1</h1>
        </div>
         <div className="col-md-7  w-full bg-gray-300 p-2 shadow mt-3">
         <h1 className="fs-2">Option 2</h1>
        </div>
         </div>
    </div>
    </div>
</>
    );
}

export default Admin;
