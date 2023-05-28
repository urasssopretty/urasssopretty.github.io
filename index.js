function getRandomNum( min=0, max=pleasantness.length )
{
    // min = Math.ceil(min)
    // max = Math.floor(max)
    number = Math.random() * (max - min) + min
    return Math.floor( Math.random() * (max - min) + min)
}

const pleasantness =
[
    "ты милашка!",
    "прив че дел, лох",
    "хорошего дня!",
    "станешь моей печатной машинкой?",
    "а ты давно так ослипительна?",
    "мы успеем в забвение кануть в мире мемов, войны и спирта"

]

$(document).ready(function()
{
    $("#text").text( pleasantness[getRandomNum()] );
});