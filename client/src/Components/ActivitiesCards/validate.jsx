

export default function validate(input){
    let errors = {};
    if(!input.name){
      errors.name = "It's necessary a Name.";
    } else if(input.name.length > 20 || input.name.length <3){
      errors.name = "Write between 3 and 20 characters."
    }else if(!/^[A-Za-z]+$/.test(input.name)){
        errors.name = "No write numbers please"
    }else if(!input.difficulty){
      errors.difficulty = "It's necessary a Difficulty."
    } else if(!input.duration){
      errors.duration = "It's necessary a Duration."
    } else if(!input.season || input.season === 'Season'){
      errors.season = "It's necessary a Season"
    } else if(!input.countries){
      errors.countries = "At least one Country is necessary."
    }
    return errors
  }