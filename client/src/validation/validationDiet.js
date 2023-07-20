const validateDiet = (form) => {

    let validateNum = /([0-9])+/;
    
    const errors = {};

 
    if (/[^a-zA-Z, ]/g.test(form.name.trim()) || validateNum.test(form.name)) {
        errors.name = "The name can not have symbols and numbers";
    } else if(!form.name.trim()){
        errors.name = "The name is required"
    } else if(form.name.length > 20 || form.name.length < 5) {
        errors.name = "The name can can't be less 5, or be higher than 20"
    }
    return errors;
}



export default validateDiet;
