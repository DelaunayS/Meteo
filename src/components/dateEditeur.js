/*edite la date au format Jour Numéro Mois Année*/
const editeurDate = (d) => {
    let months = ['Janvier','Février','Mars','Avril','Mai','Juin',
'Juillet','Août','Septembre','Octobre','Novembre','Décembre']
    let days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']

    let day=days[d.getDay()]
    let date=d.getDate()
    let month=months[d.getMonth()]
    let year=d.getFullYear()

    return `${day} ${date} ${month} ${year}`
}
export default editeurDate