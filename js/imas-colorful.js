$(function() {
  $("span").each(function() {
    if ($(this).text().match(/中村繪里子|天海春香/g)) {
      $(this).addClass("haruka");
    } else if ($(this).text().match(/長谷川明子|星井美希/g)) {
      $(this).addClass("miki");
    } else if ($(this).text().match(/今井麻美|如月千早/g)) {
      $(this).addClass("chihaya");
    } else if ($(this).text().match(/仁後真耶子|高槻やよい/g)) {
      $(this).addClass("yayoi");
    } else if ($(this).text().match(/若林直美|秋月律子/g)) {
      $(this).addClass("ritsuko");
    } else if ($(this).text().match(/落合祐里香|長谷優里奈|浅倉杏美|萩原雪歩/g)) {
      $(this).addClass("yukiho");
    } else if ($(this).text().match(/双海[亜真]美|下田麻美/g)) {
      $(this).addClass("amimami");
    } else if ($(this).text().match(/菊地真|平田宏美/g)) {
      $(this).addClass("makoto");
    } else if ($(this).text().match(/釘宮理恵|水瀬伊織/g)) {
      $(this).addClass("iori");
    } else if ($(this).text().match(/たかはし智秋|三浦あずさ/g)) {
      $(this).addClass("azusa");
    } else if ($(this).text().match(/原由実|四条貴音/g)) {
      $(this).addClass("takane");
    } else if ($(this).text().match(/沼倉愛美|我那覇/g)) {
      $(this).addClass("hibiki");
    } else if ($(this).text().match(/滝田樹里|音無小鳥/g)) {
      $(this).addClass("kotori");
    } else if ($(this).text().match(/日高愛|戸松遥/g)) {
      $(this).addClass("ai");
    } else if ($(this).text().match(/水谷絵理|花澤香菜/g)) {
      $(this).addClass("eri");
    } else if ($(this).text().match(/秋月涼|三瓶由布子/g)) {
      $(this).addClass("ryo");
    } 
  });
});

