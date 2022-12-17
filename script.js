// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is a group of owls called?",
    a: [{ text: "A convocation", isCorrect: false },
        { text: "A shadow", isCorrect: false },
        { text: "A gaggle", isCorrect: false },
        { text: "A parliament", isCorrect: true }
    ]

},
{
    id: 1,
    q: "What do owls represent in Hinduism?",
    a: [{ text: "Mystery, night, afterlife", isCorrect: false, isSelected: false },
        { text: "Courage, foresight, compassion", isCorrect: false },
        { text: "Luck, prosperity, wisdom", isCorrect: true },
        { text: "Stealth, trickery, deceit", isCorrect: false }
    ]

},
{
    id: 2,
    q: "At just 5 inches tall, what is the smallest type of owl in the world? ",
    a: [{ text: "The Elf Owl", isCorrect: true },
        { text: "The Pocket Owl", isCorrect: false },
        { text: "The Dwarf Owl", isCorrect: false },
        { text: "The Pygmy Owl", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#146191";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    op1.style.color = "white";
    op2.style.color = "black";
    op3.style.color = "black";
    op4.style.color = "black";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "#146191";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    op1.style.color = "black";
    op2.style.color = "white";
    op3.style.color = "black";
    op4.style.color = "black";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "#146191";
    op4.style.backgroundColor = "lightskyblue";
    op1.style.color = "black";
    op2.style.color = "black";
    op3.style.color = "white";
    op4.style.color = "black";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "#146191";
    op1.style.color = "black";
    op2.style.color = "black";
    op3.style.color = "black";
    op4.style.color = "white";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Hoot hoot! That's correct!";
        result[0].style.color = "#3bff34bd";
    } else {
        result[0].innerHTML = "Womp womp! That's incorrect, try again!";
        result[0].style.color = "#ff4444bd";
        
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})
