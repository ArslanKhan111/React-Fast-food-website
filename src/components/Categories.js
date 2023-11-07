

function Categories({categories}) {
  return (
    <div className="categoriecard container m-auto  container row mb-5">
      {
        categories.map((category,index)=>{
            return(
                
                <div key={index} className=" col-md-2 mb-5 me-2">
                
                <img src={category.Image} className="card-img-top" alt="..."/>
                <h3>{category.title}</h3>

                </div>
            )
        })
      }
    </div>
  )
}

export default Categories
