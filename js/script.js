JS

const MALE_NAMES = {"Kwasi":"Kwadwo","Kwabena":"Kwaku","Yaw":"Kofi","Kwame":};
const FEMALE_NAMES = {"Akosua":"Adwoa","Abenaa":"Akua", "Yaa": "Afua", "Ama":};
const DAYS_OF_THE_WEEK = {"sunday":"monday", "tuesday": "wednesday", "thursday": "friday", "saturday":};

    var day = "null"
    var month = "null"
    var year = "null"
    var gender = "null"
    var century ="null"

function get_user_input(){
user_day_of_birth, 10
user_month_of_birth, 11
user_year_of_birth, 1989
user_gender, F
}


    //calculate day birth
    //get user's akanname

    function get_user_input(){
        var day = prompt("enter your date of birth")
        var month = prompt("enter your month of birth")
        var year = prompt("enter your year of birth")
        var gender = prompt("enter your gender")
        var century =year . slice(0,2)
    }
    


function getakanName(10, 11, 1989,f){
     var dayOfTheWeek = ( ( (19/4) -2*19-1) + ((5*89/4) ) + ((26*(11+1)/10)) + 10 ) % 7
    //Sartuday

      var indexOfDay =DAYS_OF_THE_WEEK.indexOf(dayOfTheWeek);
      var name = null;

      if (gender.toLocaleLowerCase().startsWith(f)){
          name = FEMALE_NAMES [indexOfDay]
       }else if (gender.toLocaleLowerCase(),startsWith('m')){
          name= MALE_NAMES[indexOfDay]
       }else{
            console.log("invalid gender!")
       }   

       return name;
}

get_user_input()
var userAkanName = getakanName(10, 11, 1989,f);
console.log("your name is" + userAkanName);