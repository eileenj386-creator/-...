let playerName = "";
let current = 0;
let score = 0;

const questions = [
  "هل تشعر أحيانًا أنك تُخفي جزءًا منك… حتى عن نفسك؟",
  "هل سبق وأن تجاهلت شعورًا داخليًا لأنه غير مريح؟",
  "هل تميل إلى مراقبة الآخرين بدل أن تكون واضحًا أمامهم؟",
  "هل تجد صعوبة في فهم سبب تصرفاتك؟",
  "هل تفضّل الصمت حتى عندما يكون الكلام هو الحل؟",
  "هل صورتك أمام الناس تختلف عن حقيقتك؟",
  "هل أقنعت نفسك بشيء لتتجنب حقيقة تعرفها؟",
  "هل تخاف أن يراك أحد كما أنت؟",
  "هل تتظاهر بالقوة بينما تشعر بالعكس؟",
  "هل تجد راحة في العزلة رغم أنها تؤلمك؟",
  "هل تعيد نفس الأخطاء رغم وعيك بها؟",
  "هل تشعر أن أفكارك أثقل مما يجب؟",
  "هل تتجنب بعض الناس لأنهم يرونك بوضوح؟",
  "هل تشك في نواياك حتى عندما تبدو صادقة؟",
  "هل شعرت يومًا أنك غريب حتى وسط أقرب الناس إليك؟"
];

function startGame() {
  const input = document.getElementById("nameInput").value;
  if (!input) return alert("اكتب اسمك أولاً");

  playerName = input;

  document.getElementById("startScreen").classList.remove("active");
  document.getElementById("questionScreen").classList.add("active");

  showQuestion();
}

function showQuestion() {
  document.getElementById("questionBox").innerText = questions[current];
  document.getElementById("progress").innerText = `${current + 1} / 15`;
}

function answer(val) {
  if (val) score++;

  current++;

  if (current >= questions.length) {
    showResult();
    return;
  }

  showQuestion();
}

function getResult(score) {
  if (score <= 4) {
    return {
      gem: "الأونكس الأسود",
      analysis: "أنت ترى نفسك بوضوح… لكن المواجهة مؤجلة.",
      poem: "رأيتَ نفسَكَ… لا جهلٌ يُضلّلها، لكنّ قلبَكَ… عن مرآهُ ينقلبُ."
    };
  }

  if (score <= 8) {
    return {
      gem: "الكوارتز الذهبي",
      analysis: "وعي كبير وتناقضات داخلية صامتة.",
      poem: "فيكَ ازدحامُ وجوهٍ لا تُصالحها."
    };
  }

  if (score <= 12) {
    return {
      gem: "الأميثيست البنفسجي",
      analysis: "وعي عميق وصادق لكنه مرهق.",
      poem: "نزعتَ عنكَ ظلالَ الوهمِ قاطبةً."
    };
  }

  return {
    gem: "الأوبسيديان البركاني",
    analysis: "رؤية الحقيقة كما هي بلا أقنعة.",
    poem: "رأيتَ ما يكفي لتسقطَ الأوهامُ منك."
  };
}

function showResult() {
  const result = getResult(score);

  document.getElementById("questionScreen").classList.remove("active");
  document.getElementById("resultScreen").classList.add("active");

  document.getElementById("resultName").innerText = playerName;
  document.getElementById("gem").innerText = result.gem;
  document.getElementById("analysis").innerText = result.analysis;
  document.getElementById("poem").innerText = result.poem;
}

function restartGame() {
  playerName = "";
  current = 0;
  score = 0;

  document.getElementById("resultScreen").classList.remove("active");
  document.getElementById("startScreen").classList.add("active");

  document.getElementById("nameInput").value = "";
}
