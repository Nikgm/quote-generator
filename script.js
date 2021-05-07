let previousQuoteNum = null;
const pickquote = () =>{
    const quotes =[
        {
        quote: "Ask not what your country can do for you – ask what you can do for your country.",
        person: "John F. Kennedy",
        citation: "Inaugural Address, 1961",
        image: "images/JohnFKennedy.png"
        },
        {
        quote: "The people in your life are like dirt. They can either nourish you and help you grow as a person or they can stunt your growth and make you wilt.",
        person: "Plato",
        image: "images/Plato.png"
        },
        {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky",
        image: "images/WayneGretzky.png"
        },
        {
        quote: "Et tu Brute...",
        person: "Julius Ceasar",
        citation: "last words <em>(maybe)</em>, 44BC",
        image: "images/JuliusCeasar.png"
        },
        {
        quote: "Risk is what keeps up young",
        person: "Leonardo DiCaprio as Jordan Belford",
        citation: "Wolf of Wallstreet",
        image: "images/JordanBelford.png"
        },
    ];

    let currentNum = Math.floor((Math.random() * quotes.length));

    while (previousQuoteNum == currentNum){
        currentNum = Math.floor((Math.random() * quotes.length));
    }

    previousQuoteNum = currentNum
    quotePicked = quotes[currentNum];

    if (quotePicked.citation == undefined){
        $('#citation').css("display","none")
        $('#quote').html(`${quotePicked.quote} -${quotePicked.person}`);
        $('img').attr('src',quotePicked.image);
    }else{
        $('#quote').html(`${quotePicked.quote} -${quotePicked.person}, ${quotePicked.citation}`);
        $('img').attr('src',quotePicked.image);
    }   
}

windowMatch = true;
const windowSize = matchMedia('(max-width:767px)')
windowSize.addEventListener('change',({matches})=>{
    return windowMatch = matches
})


$('#change-btn').click(function(){
    if (windowMatch){
        $('img').removeClass()
        $('body').width()
        pickquote();
        $('img').addClass('coming-up').on('animationend', function () {
            $('img').removeClass()
        });
    }else{
        animation()
    }
})

let previousDirectionNum = null;
function animation(){
    const directions = ['bottom-right','bottom-left','coming-up', 'left', 'right']
    currentNum = Math.floor(Math.random() * (directions.length-2))
    while (previousDirectionNum == currentNum){
        currentNum = Math.floor(Math.random() * (directions.length-2))
    }
    previousDirectionNum = currentNum
    let directionPicked = directions[currentNum]
    switch (currentNum){
        case 2:
            $('img').css({'float':'none', 'display':'block', 'margin': '0 auto'})
            $('img').removeClass()
            $('body').width()
            pickquote();
            $('img').addClass(directionPicked).on('animationend', function () {
                $('img').removeClass()
            });
            break;
        default:
            $('img').css({'float':directions[currentNum+3]})
            $('img').removeClass()
            $('body').width()
            pickquote();
            $('img').addClass(directionPicked).on('animationend', function () {
                $('img').removeClass()
            });
        break;
    }
}


