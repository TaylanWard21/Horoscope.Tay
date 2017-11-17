
var horoscope = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Sorry"];
var meessage = ["The mad scientist and humanitarian of the horoscope wheel, futuristic Aquarius energy helps us innovate and unite for social justice. You will be a lawyer!", "The dreamer and healer of the horoscope family, Pisces energy awakens compassion, imagination and artistry, uniting us as one. You will become a doctor or an artist!", "The pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate, fight for our beliefs and fearlessly put ourselves out there. You will be someone in political power, Marine or a Pilot!!","The persistent provider of the horoscope family, Taurus energy helps us seek security, enjoy earthly pleasures and get the job done. You will become a Police Officer or Judge!!", "The most versatile and vibrant horoscope sign, Gemini energy helps us communicate, collaborate and fly our freak flags at full mast. You will be a wedding planner or a comedian!!", "The natural nurturer of the horoscope wheel, Cancer energy helps us connect with our feelings, plant deep roots and feather our family nests. You will become a therapist!!","The drama queen and regal ruler of the horoscope clan, Leo energy helps us shine, express ourselves boldly and wear our hearts on our sleeves. You will become a actor!!","The masterful helper of the horoscope wheel, Virgo energy teaches us to serve, do impeccable work and prioritize wellbeing—of ourselves, our loved ones and the planet. You will become a scientist or you will develop your own charity!!","The balanced beautifier of the horoscope family, Libra energy inspires us to seek peace, harmony and cooperation—and to do it with style and grace. You will become the love doctor or a Pastor!!","The most intense and focused of the horoscope signs, Scorpio energy helps us dive deep, merge our superpowers and form bonds that are built to last. You will become a comic book writer","The worldly adventurer of the horoscope wheel, Sagittarius energy inspires us to dream big, chase the impossible and take fearless risks. You will become a Daredevil or a traveler!!","The measured master planner of the horoscope family, Capricorn energy teaches us the power of structure and long-term goals. You will become an political activist!!"," I am sorry there is no such thing"];
var images = ["<img src='img/Aquarius.jpg'>","<img src= 'img/Pisces.jpg'>","<img src= 'img/Aries.jpg'>","<img src= 'img/Taurus.jpg'>", "<img src= 'img/Gemini.jpg'>","<img src= 'img/Cancer.jpg'>","<img src= 'img/Leo.jpg'>","<img src= 'img/Virgo.jpg'>", "<img src= 'img/Libra.jpg'>","<img src= 'img/Scorpio.jpg'>","<img src= 'img/Sagittarius.jpg'>","<img src= 'img/Capricorn.jpg'>", "<img src='img/images.jpg'>"];
function start(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    console.log(month);
    console.log(day);
    var signs = sign(month, day);
    document.getElementById("output1").innerHTML = horoscope[signs];
    document.getElementById("output2").innerHTML = meessage[signs];
    document.getElementById("image").innerHTML = images[signs];
    var today = new Date;
    var l = today.getMonth() + 1;
    var p = today.getDate();
    if(p == day && l == month){
        document.getElementById("Birthday").innerHTML = " Happy Be Birthday BROOOSKI!!! You secretly have super powers shhh!!! Do not let anyone know";

    }
}
function sign(months,days) {


    if (months == 1 && days >= 20 || months == 2 && days <= 18) {
        sign = 0;
    }
    if (months == 2 && days >= 19 || months == 3 && days <= 20) {
        sign = 1;
    }
    if (months == 3 && days >= 21 || months == 4 && days <= 19) {
        sign = 2;
    }
    if (months == 4 && days >= 20 || months == 5 && days <= 20) {
        sign = 3;
    }
    if (months == 5 && days >= 21 || months == 6 && days <= 20) {
        sign = 4;
    }
    if (months == 6 && days >= 21 || months == 7 && days <= 22) {
        sign = 5;
    }
    if (months == 7 && days >= 23 || months == 8 && days <= 22) {
        sign = 6;
    }
    if (months == 8 && days >= 23 || months == 9 && days <= 22) {
        sign = 7;
    }
    if (months == 9 && days >= 23 || months == 10 && days <= 22) {
        sign = 8;
    }
    if (months == 10 && days >= 23 || months == 11 && days <= 21) {
        sign = 9;
    }
    if (months == 11 && days >= 22 || months == 12 && days <= 21) {
        sign = 10;
    }
    if (months == 12 && days >= 22 || months == 1 && days <= 19) {
        sign = 11;
    }
    if (months == 2 && days >= 30){
        sign = 12;
    }
    if(months == 4 && days >= 31){
        sign = 12;
    }
    if(months == 6 && days >= 31){
        sign = 12;
    }
    if(months == 11 && days >= 31){
        sign = 12;
    }


    return sign;


}
function determineMessage(sign){
    message = 0;

    if(sign == 0) {
        message = 0;
    }
    if(sign == 1){
        message = 1;
    }
    if(sign == 2){
        message = 2;
    }
    if(sign == 3){
        message = 3;
    }
    if(sign == 4){
        message = 4;
    }
    if(sign == 5){
        message = 5;
    }
    if( sign == 6){
        message = 6;
    }
    if( sign == 7){
        message = 7;
    }
    if(sign == 8){
        message = 8;
    }
    if( sign == 9){
        message = 9;
    }
    if(sign == 10){
        message = 10;
    }
    if(sign == 11){
        message = 11;
    }
    if(sign == 12){
        message = 12;
    }
    return message;
}
function determineImage(sign){


    if(sign == 0){
       return "<img src='img/Aquarius.jpg'>" ;
    }
    if(sign == 1){
        return "<img src= 'img/Pisces.jpg'>";
    }
    if(sign == 2){
        return "<img src= 'img/Aries.jpg'>";
    }
    if(sign == 3){
        return "<img src= 'img/Taurus.jpg'>";
    }
    if(sign == 4) {
        return "<img src= 'img/Gemini.jpg'>";
    }
    if(sign == 5){
        return "<img src= 'img/Cancer.jpg'>";
    }
    if(sign == 6){
        return "<img src= 'img/Leo.jpg'>";
    }
    if(sign == 7){
        return "<img src= 'img/Virgo.jpg'>";
    }
    if(sign == 8){
        return "<img src= 'img/Libra.jpg'>";
    }
    if(sign == 9){
        return "<img src= 'img/Scorpio.jpg'>";
    }
    if(sign == 10){
        return "<img src= 'img/Sagittarius.jpg'>";
    }
    if(sign == 11){
          return "<img src= 'img/Capricorn.jpg'>";
    }
    if(sign == 12){
        return "<img src='img/images.jpg'>";
    }


}

