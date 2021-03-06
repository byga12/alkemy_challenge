import React, {useState, useEffect} from "react";


const getSumOfStat = (stat, array) => {
  let sum = 0;
  array.forEach(element => {
    sum+= +element.powerstats[stat] | 0; //en caso de que haya algun stat sin definir lo igualo a 0
  })
  return sum;
}

const UserContext = React.createContext(null);
export default UserContext;


const UserContextWrapper = (props) => {

  //el estado inicial, si no hay registro, creo uno con un array vacio. Si ya hay registro, lo convierto a array y lo tomo.
  const [team, setTeam] = useState(localStorage.getItem("team") ? JSON.parse(localStorage.getItem("team")) : [])
  getSumOfStat("combat" ,team);
  
  const [teamStats, setTeamStats] = useState({combat: 0, durability: 0, intelligence: 0, power: 0, speed: 0, strength: 0,})

  
  //con este effect mantengo sincronizado el estado y el localStorage/ y también los stats del team.
  useEffect(()=>{
    setTeamStats(
      {
        combat: getSumOfStat("combat",team),
        durability: getSumOfStat("durability",team),
        intelligence: getSumOfStat("intelligence",team),
        power: getSumOfStat("power",team),
        speed: getSumOfStat("speed",team),
        strength: getSumOfStat("strength",team),
      }
    );
    localStorage.setItem("team", JSON.stringify(team))
  },[team])

  const addHero = (hero) => {

    //Se alcanzó el límite de héroes permitido?
    if (team.length >= 6) {alert("Heroes limit reached (6)"); return}

    //Ya está el héroe en el equipo? Creo un array que contendrá heroes que concidan con el id del heroe que quiero agregar, 
    //si dicho array tiene un longitud mayor a 0 significa que dicho heroe ya se encuentra en el team.
    const searchRepeated = team.filter(h => h.id === hero.id)
    const isRepeated = searchRepeated.length ? true : false;
    if (isRepeated) {alert(hero.name + " is already on your team!"); return}

    //Busco la cantidad de heroes buenos y malos y si es igual a 3 no permito agregar más.
    let goodHeroCounter = 0;
    let badHeroCounter = 0;
    team.forEach(h => {
      if(h.biography.alignment === "good") goodHeroCounter++;
      if(h.biography.alignment === "bad") badHeroCounter++;
    })
    if(hero.biography.alignment === "good") {
      if(goodHeroCounter===3) {alert("Good heroes's limit reached (3)");return}
    }
    if(hero.biography.alignment === "bad") {
      if(badHeroCounter===3) {alert("Bad heroes's limit reached (3)");return}
    }
    
    //Si pasó todas las validaciones, añado el héroe.
    alert(hero.name + " has been added succesfully to your team")
    setTeam([...team,hero])
  }

  const removeHero = (id) => {
    const newTeam = team.filter(member => member.id !== id);
    setTeam(newTeam);
  }

  return (
    <UserContext.Provider value={
      {
        getTeam: () => team,
        getTeamStats: () => teamStats,
        addHero,
        removeHero,
      }
    }>
      {props.children}
    </UserContext.Provider>
  )
}
export {UserContextWrapper};