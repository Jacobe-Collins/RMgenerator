// Fortune Cookie Generator
const gFortunes = [
"Do not be afraid of competition.",
"An exciting opportunity lies ahead of you.",
"Get your mind set…confidence will lead you on.",
"You will always be surrounded by true friends.",
"Your ability to juggle many tasks will take you far.",
"A routine task will turn into an enchanting adventure.",
"Beware of all enterprises that require new clothes.",
"Be true to your work, your word, and your friend.",
"Goodness is the only investment that never fails.",
"A journey of a thousand miles begins with a single step.",
"Forget injuries; never forget kindnesses.",
"Respect yourself and others will respect you.",
"A man cannot be comfortable without his own approval.",
"You will receive money from an unexpected source.",
"Attitude is a little thing that makes a big difference.",
"Plan for many pleasures ahead.",
"Experience is the best teacher.",
"Expect the unexpected.",
"Once you make a decision the universe conspires to make it happen.",
"Make yourself necessary to someone.",
"The only way to have a friend is to be one.",
"Nothing great was ever achieved without enthusiasm.",
"Live this day as if it were your last.",
"Your life will be happy and peaceful.",
"Reach for joy and all else will follow.",
"Move in the direction of your dreams.",
"Bloom where you are planted.",
"Appreciate. Appreciate. Appreciate.",
"Happy News is on its way.",
"The usefulness of a cup is in its emptiness.",
"If you want the rainbow, you have to tolerate the rain.",
"A ship in harbor is safe, but that\’s not why ships are built.",
"All things are difficult before they are easy.",
"Courage is not the absence of fear; it is the conquest of it.",
"Don\’t worry about money. The best things in life are free.",
"Patience is your alley at the moment. Don\’t worry!",
"Your road to glory will be rocky, but fulfilling.",
"The early bird gets the worm, but the second mouse gets the cheese."
]
const rFortunes = [
    "Paradise is always where love dwells.",
"The one you love is closer than you think.",
"Love is like wildflowers…it is often found in the most unlikely places.",
"In dreams and in love there are no impossibilities.",
"Love isn't something you find. Love is something that finds you.",
"True love is not something that comes everyday, follow your heart, it knows the right answer.",
"There will be a happy romance for you shortly.",
"Love, because it is the only true adventure.",
"An old love will come back to you.",
"The love of your life will appear in front of you unexpectedly!",
"Your love life will soon be happy and harmonious.",
"You have a secret admirer.",
"The love of your life is right in front of your eyes.",
"You\’re intoxicating when you do what you love.",
"You will know it when you see it. It will know you when it sees you.",
"Follow what you love and see what turns up."
]
const fFortunes = [
    "A closed mouth gathers no feet.",
"He who throws dirt is losing ground.",
"Borrow money from a pessimist. They don't expect it back.",
"Life is what happens to you while you are busy making other plans.",
"Help! I'm being held prisoner in a fortune cookie factory.",
"A closed mouth gathers no feet.",
"A cynic is only a frustrated optimist.",
"You will die alone and poorly dressed.",
"If you look back, you\’ll soon be going that way.",
"An alien of some sort will be appearing to you shortly.",
"Flattery will go far tonight.",
"He who throws dirt is losing ground.",
"We don\’t know the future, but here\’s a cookie.",
"You will be hungry again in one hour.",
"Actions speak louder than fortune cookies.",
"Don\’t behave with cold manners.",
"Help! I am being held prisoner in a fortune cookie factory.",
"Never forget a friend. Especially if he owes you.",
"Only listen to the fortune cookie; disregard all other fortune telling units.",
"All fortunes are wrong except this one.",
"That wasn\’t chicken.",
"You love Chinese food.",
"No snowflake feels responsible in an avalanche.",
"Some fortune cookies contain no fortune.",
"You are not illiterate.",
"Avoid taking unnecessary gambles. Lucky numbers: 12, 15, 23, 28, 37",
"This cookie contains 117 calories.",
"You think it\’s a secret, but they know.",
"Change is inevitable, except for vending machines.",
"Help! I\’m being held prisoner in a chinese bakery."
]
const goodbyes = [
    "I won\’t say goodbye my friend, for you and I will meet again.",
"Every new beginning comes from some other beginning\’s end.",
"May the road rise up to meet you, may the wind be ever at your back.",
"May the sun shine warm upon your face and the rain fall softly on your fields.",
"Great is the art of beginning, but greater is the art of ending.",
"Be well, do good work, and keep in touch.",
"See you later, alligator.",
"Farewell",
"So Long",
"See ya, wouldn\´t wanna be ya!",
"See you around",
"Catch you later",
"I've got to get going",
"Till next time",
"One love",
"Have a nice day!",
"Have a great rest of your day!",
"I look forward to our next meeting.",
"Take care.",
"Adios",
"Gotta bounce",
"Take an easy",
"Bye, Felicia! ;)"
]
const intros = [
    "Let US begin! : ",
    "Hmmm my crystal ball is saying : ",
    "The magic 8 ball is showing : ",
    "Hocus Pocus show me their Fortune : ",
    "The Spirits want you to know : ",
    "Alert God has overridden the Protocals to let you know : ",
    "I spoke to ShaZam in the back and they said : ",
    "The Tarot cards and showing me something they mean to say : ",
    "The stars are aligned in your favor. They are saying : ",
    "Your ancenstors want to speak with you they said : "
]
const getFortune = () => {
  const iNum = Math.floor(Math.random() * intros.length);
  const category = Math.floor(Math.random() * 3);
  let message = "";
  if (category === 0){
    message = gFortunes[Math.floor(Math.random() * gFortunes.length)];
  }
  else if (category === 1){
    message = rFortunes[Math.floor(Math.random() * rFortunes.length)];
  }
  else if (category === 2){
    message = fFortunes[Math.floor(Math.random() * fFortunes.length)];
  }
  else {
    console.log("Category Picker is Broken!!!!");
  }
  return intros[iNum] + message;
};


console.log("Welcome to your Daily Fortune!");
console.log("Below is the message you've been waiting for:");
console.log("=============================================");
console.log(getFortune());
console.log(`============================================= \nNow with that being said \n${goodbyes[Math.floor(Math.random() * goodbyes.length)]}`);