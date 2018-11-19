class Driver {
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let horizontal = Math.abs(eastWest.indexOf(route.beginningLocation.horizontal) - eastWest.indexOf(route.endingLocation.horizontal));
    
  }
}
