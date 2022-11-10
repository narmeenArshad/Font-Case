

// Upper Case
const upperCase = (nameUC) => {
    return nameUC
        .toUpperCase()
};

const formUC = document.getElementById('formUC');
formUC.addEventListener('submit', (u) => {
    u.preventDefault();

    const inputValue = document.getElementById('nameUC').value;
    const convertedUC = upperCase(inputValue)
    document.getElementById('convertedUC').innerText = convertedUC
});

// Lower Case
const lowerCase = (namelC) => {
    return namelC.toLowerCase()
};

const formlC = document.getElementById('formlC');
formlC.addEventListener('submit', (l) => {
    l.preventDefault();

    const inputValue = document.getElementById('namelC').value;
    const convertedlC = lowerCase(inputValue)
    document.getElementById('convertedlC').innerText = convertedlC
});

// Title Case
const titleCase = (nametC)=> {
    let nameTrim = nametC.trim()
    let nameLowerCase = nameTrim.toLowerCase()
    console.log(nameLowerCase);
    let nameSplit = nameLowerCase.split(" ")
    console.log(nameSplit);
 
    let nameMap = nameSplit.map((t)=> {
        let result = 1;
        if (result< 3) {
            console.log("result is less than 3")
        } else {
            console.log("result is greater than 3")
        }
        return t[0].toUpperCase() + t.slice(1)
    })
    let nameJoin = nameMap.join(" ")
    return nameJoin
}
const formtC = document.getElementById('formtC');
formtC.addEventListener('submit', (t) =>{
    t.preventDefault();

    const inputValue = document.getElementById('nametC').value;
    const convertedtC = titleCase(inputValue)
    document.getElementById('convertedtC').innerText = convertedtC
});
