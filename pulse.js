let data = document.getElementById("my_form");
let BPpressure = document.getElementById("outcome");

let lowBP = document.getElementById("lowBP");
let highBP = document.getElementById("highBP"); 
let fineBP = document.getElementById("fineBP");  
let kidsBP = document.getElementById("kidsBP")  

let Ppressure = document.getElementById("pulsepressure");
let achievement = document.getElementById("achievement");


let lowPressureCheck = false;
let highPressureCheck = false;
let finnePressureCheck = false;

data.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const man = document.getElementById("man").checked
    const woman = document.getElementById("woman").checked
    
    const SYS = document.getElementById("systolic").value;
    const systolic = Math.floor(Number(SYS));

    const DIA = document.getElementById("diastolic").value;
    const diastolic = Math.floor(Number(DIA));

    const AGES = document.getElementById("age").value;
    const age = Math.floor(Number(AGES));


    if(age >= 110){
        achievement.textContent = "GRATULUJEME, VOLAJTE NA ČÍSLO: +421 905 292 324 STE NAJSTARŠÍM ŽIJÚCIM ZDOKUMENTOVANÝM SLOVÁKOM!"
    }else if (age > 122){
        achievement.textContent = "GRATULUJEME, VOLAJTE NA ČÍSLO: +421 905 292 324 STE NAJSTARŠÍM ŽIJÚCIM ZDOKUMENTOVANÝM ČLOVEKOM NA SVETE!"
    }else achievement.textContent = "";

    if(age >= 1 && age < 18){
        lowBP.style.display = "none";
        highBP.style.display = "none";
        fineBP.style.display = "none";
    };
    
    if(age <= 3){
        check_bp_age3(systolic,diastolic)
    }else if(age >3 && age <=5){
        check_bp_age5(systolic,diastolic)
    }else if(age >5 && age <=12){
        check_bp_age12(systolic,diastolic)
    }else if(age >12 && age <=17){
        check_bp_age17(systolic,diastolic)
    };

    if(man == true && (age >= 18 && age <= 39)){
        check_bp_men39(systolic,diastolic)
    }else if (man === true && (age > 40 && age <= 59)){
        check_bp_men59(systolic,diastolic)
    }else if (man === true && age >= 60){
        check_bp_men60(systolic,diastolic)
    };

    if(woman == true && (age >= 18 && age <= 39)){
        check_bp_women39(systolic,diastolic)
    }else if (man === true && (age > 40 && age <= 59)){
        check_bp_women59(systolic,diastolic)
    }else if (man === true && age >= 60){
        check_bp_women60(systolic,diastolic)
    };

    textOutCome(highPressureCheck,lowPressureCheck,finnePressureCheck)
});

data.addEventListener("reset", (event) => {
    BPpressure.textContent = "";
    Ppressure.textContent = "";
    achievement.textContent = "";
    lowBP.style.display = "none";
    highBP.style.display = "none";
    fineBP.style.display = "none";
    kidsBP.style.display = "none";

});



function pulse_pressure(systolic, diastolic) {
    let pulse_pressure_amount = systolic - diastolic;
    if (pulse_pressure_amount < 35 && pulse_pressure_amount > 30){
        Ppressure.textContent = 'Váš pulzný tlak je nižší, Vaše srdce môže pumpovať menšie množstvo krvi'
    }
    else if (pulse_pressure_amount < 30){
        Ppressure.textContent = 'Váš pulzný tlak je nízky. Vaše srdce pravdepodobne pumpuje menšie množstvo krvi.'
    }
    else if (pulse_pressure_amount > 60) {
       Ppressure.textContent = 'Váš pulzný tlak je vysoký. Poraďte sa s lekárom'
    }
}
// section for blood pressures of different age groups and genders
function check_bp_men39(systolic, diastolic) {
    a1 = 90
    a2 = 120
    a3 = 130
    a4 = 140

    b1 = 60
    b2 = 80
    b3= 85
    b4 = 90
    woman = false;
    if (systolic < a1 || diastolic < b1) {
        lowPressureCheck = true;
        highPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true;
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if (systolic > a4 || diastolic > b4) {
        highPressureCheck = true;
        lowPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
    pulse_pressure(systolic, diastolic)
}
function check_bp_men59(systolic, diastolic) {
    a1 = 94
    a2 = 125
    a3 = 135
    a4 = 146

    b1 = 66
    b2 = 88
    b3= 93
    b4 = 99

    woman = false;

    if (systolic < a1 || diastolic < b1) {
        lowPressureCheck = true;
        highPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if (systolic > a4 || diastolic > b4) {
        highPressureCheck = true;
        lowPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
    pulse_pressure(systolic, diastolic)
}
function check_bp_men60(systolic, diastolic) {
    a1 = 100
    a2 = 134
    a3 = 145
    a4 = 156

    b1 = 60
    b2 = 80
    b3= 85
    b4 = 90
    woman = false;
    if (systolic < a1 || diastolic < b1) {
        lowPressureCheck = true;
        highPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if (systolic > a4 || diastolic > b4) {
        highPressureCheck = true;
        lowPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
    pulse_pressure(systolic, diastolic)
}
function check_bp_women39(systolic, diastolic) {
    a1 = 82
    a2 = 110
    a3 = 120
    a4 = 129

    b1 = 51
    b2 = 68
    b3= 72
    b4 = 77
    man = false;
    if (systolic < a1 || diastolic < b1) {
        lowPressureCheck = true;
        highPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if (systolic > a4 || diastolic > b4) {
        highPressureCheck = true;
        lowPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
    pulse_pressure(systolic, diastolic)
}
function check_bp_women59(systolic, diastolic) {
    a1 = 91
    a2 = 122
    a3 = 133
    a4 = 143

    b1 = 55
    b2 = 74
    b3= 78
    b4 = 84
    man = false;
    if (systolic < a1 || diastolic < b1) {
        lowPressureCheck = true;
        highPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if (systolic > a4 || diastolic > b4) {
        highPressureCheck = true;
        lowPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
    pulse_pressure(systolic, diastolic)
}
function check_bp_women60(systolic, diastolic) {
    a1 = 104
    a2 = 125
    a3 = 137
    a4 = 147

    b1 = 51
    b2 = 68
    b3= 72
    b4 = 77
    man = false;
    if (systolic < a1 || diastolic < b1) {
        lowPressureCheck = true;
        highPressureCheck = false
        finnePressureCheck = false;
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
        lowPressureCheck = false;
        highPressureCheck = false;
        finnePressureCheck = true; 
    } else if (systolic > a4 || diastolic > b4) {
        highPressureCheck = true;
        lowPressureCheck = false;
        finnePressureCheck = false;
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
    pulse_pressure(systolic, diastolic)
}
// section for blood pressures of different age groups
function check_bp_age3(systolic, diastolic) {
    a1 = 71
    a2 = 95
    a3 = 103
    a4 = 111

    b1 = 40
    b2 = 53
    b3= 56
    b4 = 60
    lowPressureCheck = false;
    highPressureCheck = false;
    finnePressureCheck = false;
    kidsBP.style.display = "inline";
    if (systolic < a1 || diastolic < b1) {
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
    } else if (systolic > a4 || diastolic > b4) {
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
}
function check_bp_age5(systolic, diastolic) {
    a1 = 76
    a2 = 102
    a3 = 110
    a4 = 118

    b1 = 42
    b2 = 56
    b3= 60
    b4 = 63
    lowPressureCheck = false;
    highPressureCheck = false;
    finnePressureCheck = false;
    kidsBP.style.display = "inline";
    if (systolic < a1 || diastolic < b1) {
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
    } else if (systolic > a4 || diastolic > b4) {
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
}
function check_bp_age12(systolic, diastolic) {
    a1 = 73
    a2 = 97
    a3 = 105
    a4 = 113

    b1 = 43
    b2 = 57
    b3= 61
    b4 = 64
    lowPressureCheck = false;
    highPressureCheck = false;
    finnePressureCheck = false;
    kidsBP.style.display = "inline";
    if (systolic < a1 || diastolic < b1) {
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
    } else if (systolic > a4 || diastolic > b4) {
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
}
function check_bp_age17(systolic, diastolic) {
    a1 = 84
    a2 = 112
    a3 = 121
    a4 = 131

    b1 = 50
    b2 = 66
    b3= 70
    b4 = 74
    lowPressureCheck = false;
    highPressureCheck = false;
    finnePressureCheck = false;
    kidsBP.style.display = "inline";
    if (systolic < a1 || diastolic < b1) {
        BPpressure.textContent = `Váš krvný tlak je NÍZKY!`;
    } else if ((systolic > a1 || diastolic > b1) && (systolic < a2 || diastolic < b2)) {
        BPpressure.textContent = "Váš krvný tlak je Optimálny";
    } else if ((systolic >= a2 || diastolic >= b2) && (systolic < a3 || diastolic < b3)) {
        BPpressure.textContent = "Váš krvný tlak je Normálny";
    } else if ((systolic >= a3 || diastolic >= b3) && (systolic <= a4 || diastolic < b4)) {
        BPpressure.textContent = "Váš krvný tlak je mierne zvýšený";
    } else if (systolic > a4 || diastolic > b4) {
        BPpressure.textContent = "Váš krvný tlak je VYSOKÝ!";
    }
}
// section for text display
function textOutCome(highPressureCheck,lowPressureCheck,finnePressureCheck){
    if(lowPressureCheck){
        lowBP.style.display = "inline";
        highBP.style.display = "none";
        fineBP.style.display = "none";
        kidsBP.style.display = "none";
    }

    if(highPressureCheck){
        highBP.style.display = "inline"
        lowBP.style.display = "none";
        fineBP.style.display = "none";
        kidsBP.style.display = "none";
    }
    
    if(finnePressureCheck){
        fineBP.style.display = "inline";
        lowBP.style.display = "none";
        highBP.style.display = "none";
        kidsBP.style.display = "none";
    }
}

