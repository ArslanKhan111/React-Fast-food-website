import React from 'react'

function state_prop() {
    let[count,setCount]=useState(0)
  let [persons,setPersons]=useState(['A','R','S','L','A','N'])
  let [objperson,setObjperson]=useState({
    name:'Arslan',
    designation:'Engineer',
    Post:'MERN DEVELOPER'
  })
  let [propperson,setPropperson]=useState({
    name:'Arslan',Post:'Expert MERN Developer'
  })
  let [myname,setMyname]=useState('ARSLAN')
  
  let [person,setPerson]=useState({
    name:'arslan',
    age:24
  })
  let ChangeName=()=>{
    setMyname('MERN DEVELOPER')
    console.log('aRSlAN')
  }
  const Counter=()=>{
   
    setCount(count+1)
  } 
  const AddElement=()=>{
    setPersons([...persons,'Khan'])
  }
  const changeSalary=()=>{
    setObjperson({...objperson,Post:'Expert MERN DEVELOPER'})
  }
  // Spread obj will look like this.{name:'arslan',designation:'Engineer',Post:'MERN DEVELOPER',Post:'Expert MERN DEVELOPER'} and this will pick/override the second one.
  return (
    <div>
       <>
    
    <Header person={propperson}/>



      <h1 >{myname}</h1>
      <button onClick={ChangeName}>ChangeName</button>
      {persons.map((a,index)=>{
        return <p key={index}>{a}</p>
      })}
      <button onClick={AddElement}>Add Element</button>
      <p>{count}</p>
      <button onClick={Counter}>Counter</button>
      
     <p>{objperson.name}</p>
     <p>{objperson.designation}</p>
     <p>{objperson.Post}</p>
     <button onClick={changeSalary}>Change Salary</button>



{/* 
 // let [num,setNum]=useState(90)

  // let [students,setStudents]=useState(['ahmed','arslan','noman','bilal'])
  
  // let [student,setStudent]=useState({name:'Arslan',age:24,Qual:'B.E'})
  
  // const incrementfun=()=>{
    
  //   if(num===100) return
  //   setNum(num+=1)
  // }
  // const decrementfun=()=>{
  //   if (num===85) return
  //   setNum(num-=1)
  // }
  // let addMe=()=>{
  //   setStudents([...students,'New Member'])
  //   // students.push('New Member')
  //   // console.log(students)
  // }
  // const ChangeProperty=()=>{
  //   setStudent({...student,Qual:'Masters',age:25})
  // }
  // return (
  //   <>
    
    
  //   <div>
  //     <p >{num}</p>
  //     <button disabled={num>=100? true:false} onClick={incrementfun} >Increment</button>
  //     <button disabled={num<=85? true:false} onClick={decrementfun}>deccrement</button>
  //   </div>
  //   <ul>
  //   {students.map((std1,index)=>{
  //     return <li key={index}><p>{std1}</p></li>
  //   })}
  //   </ul>
    
  //   <button onClick={addMe}>Add Item in List</button>
  //   <p>{student.name}</p>
  //   <p>{student.age}</p>
  //   <p>{student.Qual}</p>

  //   <button onClick={ChangeProperty}>Change Property</button>
    
  //  </>
  // );
 */}


    </>

    </div>
  )
}

export default state_prop
