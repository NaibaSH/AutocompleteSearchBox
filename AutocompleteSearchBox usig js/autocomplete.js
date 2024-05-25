let availableKeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web design tutorials',
    'JavaScript',
    'Where to learn coding online',
    'where to learn web design',
    'How to create a website',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input =inputBox.value;
    if(input.lenght){
        result = availableKeywords.filter((kryword)=>{
         return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
display(result);

if(!result.length){
    resultsBox.innerHTML = '';
}
}

function display(result){
const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
});

resultBox.InnerHtml = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}