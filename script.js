const pickquote = () =>{
    const quotes =[
        {
        quote: "Ask not what your country can do for you – ask what you can do for your country.",
        person: "John F. Kennedy",
        citation: "Inaugural Address, 1961",
        image: "images/JohnFKennedy"
        },
        {
        quote: "The people in your life are like dirt. They can either nourish you and help you grow as a person or they can stunt your growth and make you wilt.",
        person: "Plato"
        },
        {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky"
        },
        {
        quote: "Et tu Brute...",
        person: "Julius Ceasar",
        citation: "last words <em>(maybe)</em>, 44BC",
        image: "images/JuliusCeasar"
        },
    ];

    quotePicked = quotes[Math.floor((Math.random() * quotes.length))]

    if (quotePicked.citation == undefined){
        $('#citation').css("display","none")
        console.log("there is no citation")
        $('#quote').html(`${quotePicked.quote} -${quotePicked.person}`);
    }else{
        $('#quote').html(`${quotePicked.quote} -${quotePicked.person}, ${quotePicked.citation}`);
    }   
}

$('#change-btn').click(function(){
    pickquote();
})
