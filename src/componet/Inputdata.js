import {useRef , useState} from "react";

const Inputdata=(props)=>{
    const emailref=useRef();
    const nameref=useRef();
    const ageref=useRef();
    const dateref=useRef();
    const genderref=useRef();
    const stateref=useRef();

    const clickevent=(event)=>{
        event.preventDefault();
        const emaill=emailref.current.value;
        const namee=nameref.current.value;
        const agee=ageref.current.value;
        const datee=dateref.current.value;
        const genderr=genderref.current.value;
        const statee=stateref.current.value;

        if(emaill.length===0){
            alert("Email should not be empty")
        }

        const  data={
            email:emaill,
            name:namee,
            age:agee,
            date:datee,
            gender:genderr,
            state:statee
        }
        props.onAdditem(data);
    }
    return(
        <div className="wrapper">
            {/*<form> */}
            <label>Email</label>
            <input type="email" ref={emailref}/><br/>
            <label>Name</label>
            <input type="text" ref={nameref}/><br/>
            <label>Age</label>
            <input type="number" ref={ageref}/><br/>
            <label>Date</label>
            <input type="date" ref={dateref}/><br/>
            <label>Gender</label>
            <input type="radio" name="gen" value="male" ref={genderref}/>Male<br/>
            <input type="radio" name="gen" value="female" ref={genderref}/>female<br/>
            <label>State</label>
            <select ref={stateref}>
            <option>Maharashta</option>
            <option>Punjab</option>
            <option>Uattar Pradesh</option>
            <option>Kerla</option>
            <label>Rajasthan</label>
            </select><br/>
            <button onClick={clickevent}>Ragister</button>
            {/* </form>*/ }
        </div>
    );
}
export default Inputdata;