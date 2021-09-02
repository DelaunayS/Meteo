/*edite le jour de la semaine*/
const jourDate = (d) => {

    let date=new Date(d)
  
    let days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']
    let day=days[date.getDay()]
    let hour=date.getHours()
    
    return (
        <div>
            <p>{day}</p>
            <p>{hour}h</p>            
        </div>
    )      
   
}
export default jourDate