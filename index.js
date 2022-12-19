const guests = ["Guadalupe", "Ollie", "Aki"];

function writeCards(guests) {
    const thankYous = []
    for (let person = 0; person < guests.length; person++){
        thankYous.push(`Thank you, ${guests[person]}, for the wonderful surprise gift!`)
    }
    return thankYous;
}
writeCards(guests)


function countDown(factors) {
    while (factors >= 0) {
        console.log(factors);
        factors--;
    }

}
countDown(factors)
