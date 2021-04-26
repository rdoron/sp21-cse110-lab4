let statistics = {
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5,
    blackCars: 40,
    raceCars: 2
}
for(const prop in statistics){
    if(prop.toLowerCase().startsWith('r') || statistics[prop] % 2 != 0){
        console.log(`${statistics[prop]}`); 
    }
}