

const interviewQu = (name) => {
    if (name ==="Rani"){
        return function(topic){
            console.log(`Hi ${name}.What is ${topic} ?. Plz explain us.`);
        }
    }if (name ==="Alima"){
        return function(topic){
            console.log(`Hi ${name}.What is ${topic} ?. Plz explain us.`);
        }
    }if (name ==="Parveen"){
        return function(topic){
            console.log(`Hi ${name}.What is ${topic} ?. Plz explain us.`);
        }
    }else{
        return function(){
            console.log("Welcome to Interview.")
        }
    }
}
// interviewQu("Rani")("UI");
// interviewQu("Alima")("Full stack Developer");
// interviewQu("Parveen")("Front end Developer");

const cand1 = interviewQu("Rani");
cand1("UI");
cand1("UX");
cand1("Javascript")
