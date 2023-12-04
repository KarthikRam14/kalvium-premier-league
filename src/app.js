//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, curentTeam, trophiesWon){
  var Manager = [managerName, managerAge, curentTeam, trophiesWon];
  return Manager;
}


// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation){
  if(formation.length == 0){
    return null
  }else{
    var set = {
      defender:formation[0],
      midfield:formation[1],
      forward:formation[2]
    }
    return set
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  const debuteYear = players.filter(player => player.debut == year)
  return debuteYear
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  const playerPosition = players.filter(player => player.position == position)
  return playerPosition
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
  const playerAward = players.filter((player) => { return player.awards.some((item)=>{return item.name==awardName} )})
  return playerAward
}

//Progression 6 - Filter players that won ______ award ____ times

// function filterByAwardxTimes(awardName, noOfTimes){
//   const playerAward = filterByAward(awardName)
//   const awardTimes = playerAward.filter(player => player.year == noOfTimes)
//   return awardTimes
// }

function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  let count = 0
  let j;
  for (let i = 0; i < players.length; i++){
      for (j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName)
         {
            count++;       
        }
      }
    if (count == noOfTimes){
      arr.push(players[i]);
    }
    count = 0;
  }
  return arr;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(player => player.country == country);
  return data;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

// function filterByAwardxTeamxAge(awardName, team, age){
//   const award = filterByAward(awardName)
//   const team = award.filter(player => player.team == team)
//   const age = team.filter(player => player.age == age)
//   return age
// }

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var data = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return data;
}


//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

