function getRandomNum( min, max )
{
	return Math.floor( Math.random() * max ) + min
}

lastNums = [-1, -1, -1]

const emoji = 
[
	// "🖤", "🥺",
	"😀", "😁", "😊", "😇", "😉", 
	"🥰", "🤪", "😎", "😳", "😍",
	"🧡", "💛", "💚", "💙", "💜",
	"🤍", "💘", "💖", "✌️",	"✨",
	"⭐️", "💫", "🌈", "☀️",	"🌈",
	"☘️", "🌿", "☁️", "🔥", "👉👈",
	"🍻", "🥂", "✊" 
]
//  😀😁😊😇😉😍🥰🤪😎😳✌️🧡💛💚💙💜🤍🤎❤️‍🔥💘💖✨🌟⭐️💫🌈☀️☘️🌿☁️🔥🌈🍻🥂✊👉👈

emojiElements = ["#e1", "#e2", "#e3"]

const pleasantness =
[
	// "а ты давно так ослипительна?",
	// "мы успеем в забвение кануть в мире мемов, войны и спирта",

	"UwU",
	"u so cute!~",
	"хорошего дня",
	"станешь моей печатной машинкой?",
	"надеюсь дожить до пятницы",
	"пиво пиво пиво пиво",
	"ты заслуживаешь отдыха!~",
	"все будет хорошо!",
	"кто не спит, тот лох",
	"вижу милашкинс~",
	"давай лучше сходим в кино?",
	"присоединяйся к прокрастинации! не оставайся в стороне",
	"хороший человек и в беседе хорош))",
	"отдыхай и береги себя",
	"ПУПСИК, А ТЫ НЕ АХУЕЛ?",
	"сладких снов~",
	"доброе утро~",
	"ты солнышко!!",
	"mom.. mommy?",
	"ты замечательная булочка~",
	"милая очаровшка смотрит буковки",
	"кто пустил котенка к телефону?",
	"с днем пива!",
]

//	b2b2b2
const themes =
[
	// { colorFont: "#ffca00", bgColor: "#bf3b3a" },	// so bright
	{ colorFont: "#212121", bgColor: "#f0f0f0" },
	{ colorFont: "#f0f0f0", bgColor: "#b2b2b2" },
	{ colorFont: "#f0a600", bgColor: "#7b272e" },
	{ colorFont: "#f0c583", bgColor: "#737299" },
	{ colorFont: "#cd9e7f", bgColor: "#464a64" },
	{ colorFont: "#ed91a1", bgColor: "#462896" },
	{ colorFont: "#566774", bgColor: "#273541" },
	{ colorFont: "#f3e5d8", bgColor: "#a16176" },
	{ colorFont: "#f1d6b8", bgColor: "#3656ac" },
	{ colorFont: "#bba285", bgColor: "#0a2632" },
	{ colorFont: "#e16c37", bgColor: "#363977" },
	{ colorFont: "#f5c30d", bgColor: "#823683" },
	{ colorFont: "#f5dedc", bgColor: "#e0a9c6" },
	{ colorFont: "#f5dedc", bgColor: "#bda6c6" },
	{ colorFont: "#c0abb9", bgColor: "#544444" },
	{ colorFont: "#544444", bgColor: "#c0abb9" },
	{ colorFont: "#292017", bgColor: "#a67491" },
]

function generate()
{
	var theme = themes[getRandomNum(0, themes.length)]
	
	$(":root").css("--text-color", theme.colorFont);
	$(":root").css("--bg-color", theme.bgColor);
	
	
	$("#pleasantness").text( pleasantness[ getRandomNum(0, pleasantness.length) ] );
	
	for ( i = 0; i < emojiElements.length; i++ )
	{
		do
		{
			randNum = getRandomNum(0, emoji.length)
		} while ( lastNums.includes(randNum) )
		
		lastNums[i] = randNum
	
		$( emojiElements[i] ).text( emoji[ randNum ] )
	}
	
	$('.emoji').click(function()
	{
		if ($(this).hasClass("shake"))
			$(".emoji").removeClass("shake");
		else
			$(this).addClass("shake");
	});
}

$(document).ready( function()
{
	generate()

	$("body").click( function(event)
	{
		// alert(event.target.nodeName)
		if (event.target.nodeName != "SPAN")
			generate()
	})
});

