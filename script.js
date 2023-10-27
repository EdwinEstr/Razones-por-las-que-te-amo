const razonesPorDia = {
        "2023-10-26": "Por que tienes una sonrisa muy hermosa me enamoro mas cada que sonries",
        "2023-10-27": "Por tus increibles ocurrencias",
        "2023-10-28": "Porque siempre eres muy hermosa la mas linda ",
        "2023-10-29": "Porque cuando me miras se que estoy con la persona correcta",
        "2023-10-30": "Por tu cabello largo y negro que es tan hermoso",
        "2023-10-31": "Por esos ojos tan bonitos que me hacen perderme en ellos",
        "2023-11-01": "Por el hermoso lunar cerca de tus labios",
        "2023-11-02": "Por ser la razon de mi sonrisa cada dia",
        "2023-11-03": "Porque eres la melodia que siempre suena en mi corazon",
        "2023-11-04": "Por la forma en la que  me haces sentir especial",
        "2023-11-05": "Porque en contigo todo es mejor",
        "2023-11-06": "Porque eres mi inspiracion constante",
        "2023-11-07": "Porque haces que mi vida sea mas brillante",
        "2023-11-08": "Porque eres mi apoyo inquebrantable",
        "2023-11-09": "Porque cada día contigo es un regalo",
        "2023-11-10": "Porque iluminas mi mundo",
        "2023-11-11": "Porque aparte demi novia  eres mi confidente y amiga",
        "2023-11-12": "Porque eres mi refugio en los momentos dificiles",
        "2023-11-13": "Porque te amo más de lo que las palabras pueden expresar",
        "2023-11-14": "Porque eres el amor de mi vida",
        "2023-11-15": "Porque haces que cada dia sea especial",
        "2023-11-16": "Porque eres la razón por la que sonrio por las mañanas",
        "2023-11-17": "Porque no puedo imaginar mi vida sin ti",
        "2023-11-18": "Porque haces que todo encaje perfectamente",
        "2023-11-19": "Porque eres mi persona favorita en el mundo",
        "2023-11-20": "Porque eres mi felicidad",
        "2023-11-21": "Porque eres el sueño hecho realidad que nunca supe que tenia",
        "2023-11-22": "Porque eres mi compañera de aventuras",
        "2023-11-23": "Porque eres la razón por la que mi corazón late con alegría",
        "2023-11-24": "Porque eres mi roca en la tormenta",
        "2023-11-25": "Porque eres la luz en mi vida",
        "2023-11-26": "Porque eres mi razón de ser",
        "2023-11-27": "Porque eres la persona que siempre elijiria una y otra vez",
        "2023-11-28": "Porque estar contigo la mejor parte de mi dia",
        "2023-11-29": "Porque contigo, cada día es una aventura",
        "2023-11-30": "Porque eres la razón por la que volvi a creer",
        "2023-12-01": "Porque haces que mi mundo sea más colorido",
        "2023-12-02": "Porque eres la melodía en mi corazón",
        "2023-12-03": "Porque tu amor es mi mayor tesoro",
        "2023-12-04": "Porque no hay nadie más como tú",
        "2023-12-05": "Porque eres mi razon de ser",
        "2023-12-06": "Porque eres mi vida entera",
        "2023-12-07": "Porque te amo más de lo que las palabras pueden expresar",
        "2023-12-08": "Porque eres el amor de esta y de todas mis vidas",
        "2023-12-09": "Porque haces que cada día de mi vida sea especial",
        "2023-12-10": "Porque eres la razón por la que sonrío por las mañanas",
        "2023-12-11": "Porque no puedo imaginar mi vida sin ti",
        "2023-12-12": "Porque haciciste que mi mundo tuviera sentido",
        "2023-12-13": "Porque eres mi persona favorita en el mundo",
        "2023-12-14": "Porque eres la mujer con la cual quiero casarme y tener una familia",
        "2023-12-15": "Porque eres lo que mas necesitaba en mi vida",
        "2023-12-16": "Porque eres mi compañera de aventuras",
        "2023-12-17": "Porque eres la razón por la que mi corazón late con alegría",
        "2023-12-18": "Porque eres mi niña hermosa",
        "2023-12-19": "Porque eres la razon mis sonrisas y que seimpre alegra mis dias",
        "2023-12-20": "Porque eres mi Todo",
        "2023-12-21": "Porque eres la persona que elijo una y otra vez",
        "2023-12-22": "Porque eres la mejor parte de mi día",
        "2023-12-23": "Porque contigo, cada experiencia es maravillosa",
        "2023-12-24": "Porque eres la razón por la que volvi a creer en los cuentos de amor ",
        "2023-12-25": "Porque as cambiado mi vida 360 grados",
        "2023-12-26": "Porque eres cada cancion de amor que hay",
        "2023-12-27": "Porque la manera en la que eres conmigo",
        "2023-12-28": "Porque como tu no hay otra",
        "2023-12-29": "Porque apunto de acabar el año me aguantaste y me sigues amando",
        "2023-12-30": "Porque este año lo terminaremos juntos",
        "2023-12-31": "Porque te amo más de lo que las palabras pueden expresar mi amor y gracias por todo, FELIZ NAVIDAD AMOR TE AMO"
    
    
};

const reasonElement = document.getElementById("reason");
const showReasonButton = document.getElementById("showReasonButton");

showReasonButton.addEventListener("click", () => {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    const reason = razonesPorDia[dateStr] || "No se encontró una razón para hoy";
    
    reasonElement.innerHTML = reason + "<br/><span class='heart'>&#10084;</span>"; // Agrega el corazón
});