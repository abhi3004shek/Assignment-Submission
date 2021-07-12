let cards = [
    {
        image: "https://s1.cdn.autoevolution.com/images/models/FERRARI_Portofino-M-2020_main.jpg",
        value: 1,
        status: "closed"
    },
    {
        image: "https://s1.cdn.autoevolution.com/images/models/FERRARI_Portofino-M-2020_main.jpg",
        value: 1,
        status: "closed"
    },
    {
        image: "https://cdn.motor1.com/images/mgl/ZYv1y/s1/lamborghini-sc18.webp",
        value: 2,
        status: "closed"
    },
    {
        image: "https://cdn.motor1.com/images/mgl/ZYv1y/s1/lamborghini-sc18.webp",
        value: 2,
        status: "closed"
    },
    {
        image: "https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b7a2ca9708_-_2013-chevrolet-camaro-ss-1le-lg.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=1200:*",
        value: 3,
        status: "closed"
    },
    {
        image: "https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b7a2ca9708_-_2013-chevrolet-camaro-ss-1le-lg.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=1200:*",
        value: 3,
        status: "closed"
    },
    {
        image: "https://robbreport.com/wp-content/uploads/2020/08/2018_aston_martin_vanquish_zagato_01.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://robbreport.com/wp-content/uploads/2020/08/2018_aston_martin_vanquish_zagato_01.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://www.daimler.com/bilder/produkte/pkw/mercedes-benz/a-klasse/a-klasse-limousine-w768xh384-cutout.jpg",
        value: 5,
        status: "closed"
    },
    {
        image: "https://www.daimler.com/bilder/produkte/pkw/mercedes-benz/a-klasse/a-klasse-limousine-w768xh384-cutout.jpg",
        value: 5,
        status: "closed"
    },

]


let temp;
for (let i = cards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

let cardsCopy = cards;



function displayCards(data) {

    let cardsString = "";



    data.forEach(function (card, index) {
        cardsString += `
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML = cardsString;

}


displayCards(cards);





let cardCount = 1;
let val1 = null, val2 = null;
let score = 0;
function openCard(index) {

    console.log(cards);

    cards[index].status = "opened";
    if (cardCount === 1) {
        val1 = cards[index].value;
        cardCount++;
    }
    else if (cardCount === 2) {
        val2 = cards[index].value;

        if (val1 === val2) {
            score++;
            document.getElementById('score').innerText = score;

            // reste after one guess 
            val1 = null;
            val2 = null;
            cardCount = 1;

        }
        else {

            alert("game over");
            location.reload();

        }


    }

    displayCards(cards);

}