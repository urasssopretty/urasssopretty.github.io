function getRandomNum( min, max )
{
    // min = Math.ceil(min)
    // max = Math.floor(max)
    number = Math.random() * (max - min) + min
    return Math.floor( Math.random() * (max - min) + min)
}

const emoji = 
[
    "😀",
    "😁",
    "😊",
    "😇",
    "😉",
    "😍",
    "🥰",
    "🤪",
    "😎",
    // "🥺",
    "😳",
    "✌️",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "🤍",
    "🤎",
    "💘",
    "💖",
    "✨",
    "⭐️",
    "💫",
    "🌈",
    "☀️",
    "☘️",
    "🌿",
    "☁️",
    "🔥",
    "🌈",
    "🍻",
    "🥂"
]
//  😀😁😊😇😉😍🥰🤪😎🥺😳✌️❤️🧡💛💚💙💜🖤🤍🤎❤️‍🔥💘💖✨🌟⭐️💫🌈☀️☘️🌿☁️🔥🌈🍻🥂

const pleasantness =
[
    "UwU",
    "u so cute!~",
    "хорошего дня",
    "станешь моей печатной машинкой?",
    // "а ты давно так ослипительна?",
    // "мы успеем в забвение кануть в мире мемов, войны и спирта",
    "надеюсь дожить до пятницы",
    "пиво пиво пиво пиво",
    "ты заслуживаешь отдыха!~",
    "все будет хорошо!",
    "кто не спит, тот лох",
    "вижу милашкинс~",
    "давай лучше сходим в кино?",
    "присоединяйся к прокрастинации! не оставайся в стороне",
]

$(document).ready(function()
{
    $("#pleasantness").text( pleasantness[ getRandomNum(0, pleasantness.length) ] );
    $("#e1").text( emoji[ getRandomNum(0, emoji.length) ] );
    $("#e2").text( emoji[ getRandomNum(0, emoji.length) ] );
    $("#e3").text( emoji[ getRandomNum(0, emoji.length) ] );

});
