function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
        </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            // add to number of correct answers
            numCorrect++;

            // color the answer green
            answerContainers[questionNumber].style.color = 'green';
        } else {
            
            // if answer is wrong or blank
            answerContainers[questionNumber].style.color = 'red'
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
};

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: '(Heirloom tomato salad) A variety of heirloom tomatoes are served with thinly sliced _______',
        answers: {
            a: 'cucumbers',
            b: 'zuchini',
            c: 'ramps',
            d: 'summer melon'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Heirloom tomato salad) The dressing is made with tomato _____, vinegar, garlic, ____ chilies, _____ fish sauce, and sugar',
        answers: {
            a: 'water, Thai, vegan',
            b: 'puree, Serano, house',
            c: 'juice, Fresno, local',
            d: 'chunks, Jalapeno, Vietnamese'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Heirloom tomato salad) A dollop of whipped _____________ is in the center of the plate',
        answers: {
            a: 'creme fraiche',
            b: 'ricotta cheese',
            c: 'laughing cow cheese',
            d: 'sour cream'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Heirloom tomato salad) Garnish: Toasted _______, lemon ________, and ______________.',
        answers: {
            a: 'rice powder, verbana, anise hyssop',
            b: 'garlic, rind, star anise',
            c: 'quinoa powder, oil, clove',
            d: 'bonito flake, essence, fennel'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten Free with mod'
        },
        correctAnswer: 'a'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut Free with mod'
        },
        correctAnswer: 'a'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Diary Free',
            b: 'Dairy Free with mod - no laughing cow cheese'
        },
        correctAnswer: 'b'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod'
        },
        correctAnswer: 'a'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod - no laughing cow cheese'
        },
        correctAnswer: 'b'      
    },

    {
        question: '(Heirloom tomato salad) select correct answer',
        answers: {
            a: 'Gluten cross contamination possible',
            b: 'No gluten cross Contamination'
        },
        correctAnswer: 'b'      
    },

    {
        question: '(Duck Liver Pate) Pate is made with fresh duck livers, ______, ____, pink curing salt, black pepper, onions, and duck ___.',
        answers: {
            a: 'milk, soy, connective tissue',
            b: 'light cream, egg whites, meat',
            c: 'heavy cream, eggs, fat',
            d: 'congac, butter, hearts'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Duck liver Pate) Served with house ______ (varies on season), and preserved _______.',
        answers: {
            a: 'nuts, root vegetables',
            b: 'pickles, rhubarb',
            c: 'spiced herbs, figs',
            d: 'assorted greens, jam'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Duck liver pate) Garnish: Fresh cracked black pepper, sea salt, green onions, cilantro, Thai Basil, and ________.',
        answers: {
            a: 'chili oil',
            b: 'herbs de provence',
            c: 'rhubarb jam',
            d: 'coriander oil'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Duck liver pate) A ____________ is served on the side.',
        answers: {
            a: 'Selection of herbs',
            b: 'Quinoa cracker',
            c: 'Vietnamese flat bread',
            d: 'Toasted baguette'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Duck liver pate) select correct answer',
        answers: {
            a: 'Gluten free',
            b: 'Gluten free with mod: no baguette, sub rice cracker (still cross gluten cross contamiation due to fryer)'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Duck liver pate) select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut Free with mod'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Duck liver pate) select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'DF with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Duck liver pate) select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Duck liver pate) select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Duck liver pate) select correct answer',
        answers: {
            a: 'Gluten cross-contamination',
            b: 'N/A (only with rice cracker sub does this become an issue)'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Beef tartare) Made with raw ground ______ beef (located at the rear leg of the cow), seasoned with fish sauce, chives, lemon juice, chopped Thai chilis, olive oil, and salt.',
        answers: {
            a: 'eye of round',
            b: 'chuck',
            c: 'top sirloin',
            d: 'oxtails'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Beef tartare) Garnish: Crispy shallots, grated __________, pickled _____, and ______ leaves.',
        answers: {
            a: 'aged cheese, turnips, basil',
            b: 'bone marrow, peppers, thyme',
            c: 'cured egg yolk, ramps, cilantro',
            d: 'pardano cheese, goose eggs, bay'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Beef tartare) One the side: Farmers market lettuce wraps, various herbs, and a sheet of _________ crackers.',
        answers: {
            a: 'stone wheat',
            b: 'gluten paste',
            c: 'ancient chinese',
            d: 'puffed-sesame rice'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Beef tartare) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten Free with mod',
            c: 'neither... problematic bc of rice cracker cross contamination?'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Beef tartare) Select correct answer',
        answers: {
            a: 'Nut free',
            b: 'Nut Free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Beef tartare) Select correct answer',
        answers: {
            a: 'Dairy free',
            b: 'Dairy Free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Beef tartare) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'Neither, dude, it\'s like pure meat.  C\'mon'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Beef tartare) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'Totally not vegan.  It is a raw dead cow.'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Poached shrimp) Shrimp is poached lightly in a court bouillon of ________, shallots, and ginger.',
        answers: {
            a: 'culantro',
            b: 'lemongrass',
            c: 'Chinese five spice',
            d: 'vinegar'
        },
        correctAnswer: 'b'
    },    

    {
        question: '(Poached shrimp) Salad of shaved __________, _________, raw stone fruit, and spun _______.',
        answers: {
            a: 'green papaya, banana blossoms, kohrabi',
            b: 'cucumber, zuchini blossoms, broccolini',
            c: 'zuchini, edible flowers, rainbow chard',
            d: 'gourds, lotus flowers, collard greens'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Poached Shrimp) Dressing of lemon/orange/lime juice, garlic, _____ chilies, fish sauce, and olive oil',
        answers: {
            a: 'Vietnamese',
            b: 'Chinese',
            c: 'Laotian',
            d: 'Thai'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Poached Shrimp) Garnish: _______ (aka Sawtooth Herb), pickled _____, toasted/dried _____, and _______.',
        answers: {
            a: 'Cilantro, red pearl onions, prawns, almonds',
            b: 'Radichio, rhubarb, garlic, peanuts',
            c: 'Culantro, shallots, shrimp, cashews',
            d: 'Thai basil, baby leeks, shellfish, hazelnut'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Poached Shrimp) Select correct answer.',
        answers: {
            a: 'Gluten Free',
            b: 'GF with mod'
        },
        correctAnswer: 'a'
    },

     {
        question: '(Poached Shrimp) Select correct answer.',
        answers: {
            a: 'Nut Free',
            b: 'Nut with mod: no cashews'
        },
        correctAnswer: 'b'
    },

     {
        question: '(Poached Shrimp) Select correct answer.',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy with mod'
        },
        correctAnswer: 'a'
    },

     {
        question: '(Poached Shrimp) Select correct answer.',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'Nope, neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Poached Shrimp) Select correct answer.',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'Nope, neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Poached Shrimp) Select correct answer.',
        answers: {
            a: 'Gluten cross-contamination',
            b: 'Not an issue, already GF',
        },
        correctAnswer: 'b'
    },

    {
        question: '(Poached shrimp) BONUS: What type of shrimp do we use and why does it matter?',
        answers: {
            a: 'Selva Shrimp.  They are raised without feed or chemicals.  Certified sustainable, GMO free, and climate nuetral.',
            b: 'Local SD shrimp.  They are fresh caught and best represent our local flavor and are never frozen.  Go Padres.',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Saltspring Mussels Escabeche) The mussels are cooked in a liquid of ______, _______, _______, garlic, and shallots.  Then marinated in a mixture of _______, vinegar, and lemon peels.',
        answers: {
            a: 'onion, vinegar, lemon juice, shrimp broth',
            b: 'ginger, lemongrass, kaffir lime, mussel jus',
            c: 'chinese 5 spice, orange juice, bay leaves, white wine',
        },
        correctAnswer: 'b'
    },

    {
        question: '(Saltspring Mussels Escabeche) The vinaigrette is made with ______ milk, jalapeno, shallot, cilantro, ________ oil, and lime juice.',
        answers: {
            a: 'coconut, lemon verbana',
            b: 'fat free, lime',
            c: 'almond, Thai chili',
            d: 'camel, CBD'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Saltspring Mussels Escabeche) Garnish: Shaved _____, _____ chilies, shaved ___ onion, and Thai _____.',
        answers: {
            a: 'cucumber, Jalapeno, white, oil',
            b: 'cured egg yolk, Habanero, purple, peanuts',
            c: 'ginger, local, green, coconut husk',
            d: 'celery, Fresno, red, chilies'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Saltspring Mussels Escabeche) Select correct answer',
        answers: {
            a: 'Gluten free',
            b: 'Gluten free with mod'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Saltspring Mussels Escabeche) Select correct answer',
        answers: {
            a: 'Nut free',
            b: 'Nut free with mod'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Saltspring Mussels Escabeche) Select correct answer',
        answers: {
            a: 'Diary free',
            b: 'Dairy free with mod'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Saltspring Mussels Escabeche) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'Nah, fam, it\'s got mussels.  Neither.'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Saltspring Mussels Escabeche) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'Again - it has mussels.  Not vegan, brah.'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Saltspring Mussels Escabeche) Select correct answer',
        answers: {
            a: 'Gluten cross contamination',
            b: 'No issues here, it is already Gluten Free.'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Saltspring Mussels Escabeche) BONUS Point - What Province and Country are Saltspring Mussels from?',
        answers: {
            a: 'British Columbia, Canada',
            b: 'Prince Edward Island, Canada',
            c: 'Point Reyes, California, USA',
            d: 'Hokkaido, Japan'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Diver Scallops) Scallops - Sourced from _____.  Poached to ______ temperature in a a salt solution.',
        answers: {
            a: 'Maine, medium-rare',
            b: 'British Columbia, rare',
            c: 'Baja CA, medium',
            d: 'Local Farm Raised, medium-rare-minus'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Diver Scallops) Broth of _______ juice, _____ chili oil, fish sauce, black pepper, and salt.',
        answers: {
            a: 'lime, Thai',
            b: 'lemon, Jalapeno',
            c: 'orange, Serano',
            d: 'pineapple, Fresno'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Diver Scallops) _____ gelee made with sugar, salt, ______ puree, and gelatin.',
        answers: {
            a: 'Coconut, tamarind',
            b: 'Tamarind, tamarind',
            c: 'Tamarind, coconut',
            d: 'Red Hot Chili Peppers(the food not the band), Peaches(the band not the fruit)'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Diver Scallops) Baby cherry tomatoes that have been peeled and marinated in a ______-salt solution.',
        answers: {
            a: 'shallot',
            b: 'onion',
            c: 'ginger',
            d: 'rhubarb'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Diver Scallops) Garnish: Shaved-raw ______, seaweed, ________, and Thai basil.',
        answers: {
            a: 'celery, rice paddy herbs',
            b: 'rhubarb, herbs de provence',
            c: 'jicama, cilantro',
            d: 'turnip, clover'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Diver Scallops) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'GF with mods'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Diver Scallops) Select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mods'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Diver Scallops) Select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy free with mods'
        },
        correctAnswer: 'a'
    },
    
    {
        question: '(Diver Scallops) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mods',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Diver Scallops) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mods',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Diver Scallops) Select correct answer',
        answers: {
            a: 'Gluten cross contamination',
            b: 'Not an issue, it is already GF, yo.'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Crispy Chicken Wings) Prep: Wings marinated for __ hours in ______ cooking wine, fish sauce, sugar, and grape seed oil.',
        answers: {
            a: '24, Sauternes',
            b: '36, White',
            c: '12, Brandy',
            d: '48, Port'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Crispy Chicken Wings) Batter: Cooking wine, ____ flour, and potato starch.',
        answers: {
            a: 'white',
            b: 'wondra',
            c: 'wheat',
            d: 'gluten free'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Crispy Chicken Wings) Glaze: tossed in _______, fish sauce, turmeric, rice wine vinegar, gochujang, ______ sauce, sugar, Chine five spice, and black pepper.',
        answers: {
            a: 'tamarind, mussel',
            b: 'orange, spicy',
            c: 'lemon pepper, soy',
            d: 'tamarind, oyster'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Crispy Chicken Wings) Garnish: Crispy _____ and ______.',
        answers: {
            a: 'shallots, almonds',
            b: 'onion, cashews',
            c: 'garlic, peanuts',
            d: 'baby leeks, hazelnut'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Crispy Chicken Wings) Select correct answer',
        answers: {
            a: 'Gluten free',
            b: 'Gluten free with mods',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Crispy Chicken Wings) Select correct answer',
        answers: {
            a: 'Nut free',
            b: 'Nut free with mod: no peanuts'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Crispy Chicken Wings) Select correct answer',
        answers: {
            a: 'Nut free',
            b: 'Nut free wiht mod: no peanuts'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Crispy Chicken Wings) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mods',
            c: 'Neither.  DO YOU KNOW WHAT CHICKEN IS MADE OF!?'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Crispy Chicken Wings) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'no no no no no'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Crispy Chicken Wings) Select correct answer',
        answers: {
            a: 'Gluten cross-contamination',
            b: 'N/A it\'s already gultenous (batter)'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Wild Mushroom Congee) Prep: ______ rice is broken in a food processor, then marinated in ___ puree and cooked slowly in a _______ stock.',
        answers: {
            a: 'Arborio, leek, mushroom',
            b: 'Pilaf, onion, veggie',
            c: 'Wild, shallot, savory',
            d: 'White, mushroom, vegan bone broth'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Wild Mushroom Congee) The congee is finished with a variety of roasted mushrooms, salt, _____, and fresh ______.',
        answers: {
            a: 'cream, lime',
            b: 'coconut milk, vinegar',
            c: 'butter, lemon',
            d: 'milk, finger lime'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Wild Mushroom Congee) Garnish: Roasted mushrooms, cirspy garlic, crispy shallots, _____ chives, cilantro leaves, and raw ___________ in the center.',
        answers: {
            a: 'green onion, duck egg yolk',
            b: 'Vietnamese onion, goose egg yolk',
            c: 'Chino Farms onion, platypus egg yolk',
            d: 'garlic, chicken egg yolk'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Wild Mushroom Congee) On side: A small ramekin of Spicy ________ Sauce.',
        answers: {
            a: `"Sim"bal`,
            b: `"Soom"bal`,
            c: `Sriracha`,
            d: 'Spicy Rooster'
        },
        correctAnswer: 'a'
    },
    
    {
        question: '(Wild Mushroom Congee) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'GF with mod'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Wild Mushroom Congee) Select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mod'
        },
        correctAnswer:'a',
    },
        
    {
        question: '(Wild Mushroom Congee) Select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy free with mod: no butter'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Wild Mushroom Congee) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Wild Mushroom Congee) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod: no butter, no egg'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Grilled and Smoked Eggplant) The eggplant is in two forms:  1.) there is a burnt/smokey eggplant _____ on the bottom.  2.)  Grilled pieces of eggplant on top.',
        answers: {
            a: 'puree',
            b: 'sauce',
            c: 'juice',
            d: 'molecular vapor'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Grilled and Smoked Eggplant) ________ is made with a variety of mushrooms, chilies, _____, vinegar, onion, and garlic.',
        answers: {
            a: 'Eggplant Barbeque sauce, soy sauce',
            b: 'XO sauce, tamari',
            c: 'VSOP sauce, hoisin',
            d: 'House Eggplant Sauce, vegan bone broth'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Grilled and Smoked Eggplant) __________ - secondary sauce made by roasting a bunch of different ____ vegetables until super golden brown and simmering it with ___________.',
        answers: {
            a: 'Hoisin, raw, sesame seeds',
            b: 'Rich soy sauce, fermented, salt water',
            c: 'Vegetable stock, fresh, butter',
            d: 'Vegetable demi, root, seaweed'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Grilled and Smoked Eggplant) Garnish: Green onions, pickled ______, cilantro stems, ______  oil, fresh lemon juice, and ___________.',
        answers: {
            a: 'ramps, cilantro, jalapeno, puffed bulgur wheat',
            b: 'garlic, Thai chili, toasted quinoa',
            c: 'greens, sesame, puffed rice grains',
            d: 'rhubarb, olive, toasted winter wheat'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Grilled and Smoked Eggplant) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'GF with mods: no bulgar wheat'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Grilled and Smoked Eggplant) Select correct answer',
        answers: {
            a: 'Nut free',
            b: 'Nut free with mods'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Grilled and Smoked Eggplant) Select correct answer',
        answers: {
            a: 'Dairy free',
            b: 'Dairy free with mods'
        },
        correctAnswer: 'a'
    },
    {
        question: '(Grilled and Smoked Eggplant) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mods',
            c: 'this is obvi vegetarian, but is not "circled" on the answer sheet... be cautious'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Grilled and Smoked Eggplant) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mods'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Grilled and Smoked Eggplant) Select correct answer',
        answers: {
            a: 'Gluten cross-contamination',
            b: 'Not so much.  Remove the bulger wheat and nothing else comes into contact with those glutens.'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Vietnamese Curry) The _______, _________, and __________________ are all roasted with olive oil and salt.',
        answers: {
            a: 'carrots, cauliflower, morning glory',
            b: 'beets, brocoli, star anise',
            c: 'rhubarb, kohrabi, safron',
            d: 'zuchini, brussel sprouts, curry powder'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Vietnamese Curry) Vegetarian curry broth made from French _____ leaves, lemongrass, garlic, shallots, ______ lime, __________ milk, and sugar',
        answers: {
            a: 'basil, finger, goat',
            b: 'eucalyptus, Chino Farms, oat',
            c: 'curry, kaffir, coconut',
            d: 'vanilla, lemon-, lactose-free'
        },
        correctAnswer: 'c'
    },
    
    {
        question: '(Vietnamese Curry) Garnish: Cilantro leaves, pickled _______________, and _____ chili slices.',
        answers: {
            a: 'white pearl onions, Thai',
            b: 'green onion chives, Jalapeno',
            c: 'baby leeks, Serano',
            d: 'red pearl onions, Fresno'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Vietnamese Curry) One the side: Toasted ______ for dipping in the broth.',
        answers: {
            a: 'baguette',
            b: 'puffed rice cracker',
            c: 'quinoa stick. you heard me.',
            d: 'San Fransisco Sourdough'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Vietnamese Curry) Select the correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten free wiht mod: no baguette, sub rice'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Vietnamese Curry) Select the correct answer',
        answers: {
            a: 'Nut free',
            b: 'Nut free with mods'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Vietnamese Curry) Select the correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy free with mods'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Vietnamese Curry) Select the correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mods'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Vietnamese Curry) Select the correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with modification'
        },
        correctAnswer: 'a'
    },

      {
        question: '(Vietnamese Curry) Select the correct answer',
        answers: {
            a: 'Gluten cross-contamination',
            b: 'No cross-contamination issues, as long as the baguette is left off'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Skull Island Prawns) Prep: The prawns are marinated in ____ sauce, lemon peels, sugar, garlic, shallot, and __________.  Grilled over _______.',
        answers: {
            a: 'fish, lemongrass, charcoal',
            b: 'oyster, kaffir lime, wood',
            c: 'soy, Chinese five spice, propane',
            d: 'tamari, fennel, burning sage'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Skull Island Prawns) Glased in a butter sauce made with __________, lemon juice, lemon zest, ____ peppercorns, black pepper, and fresh garlic.',
        answers: {
            a: 'Irish butter, black',
            b: 'garlic butter, yellow',
            c: 'shallot butter, red',
            d: 'smoked butter, green'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Skull Island Prawns) Garnish: Piece of Meyer lemon, sprigs of ______(aka Vietnamese ________), and a drizzle of chili oil.',
        answers: {
            a: 'cilantro, cilantro',
            b: 'tamarind, tamarind',
            c: 'rau ram, coriander',
            d: 'mint, wacky tabacky'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Skull Island Prawns) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'GF with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Skull Island Prawns) Select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Skull Island Prawns) Select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy Free with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Skull Island Prawns) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Skull Island Prawns) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },
    {
        question: '(Skull Island Prawns) Select correct answer',
        answers: {
            a: 'Gluten Cross-contamination',
            b: 'Not an issue',
        },
        correctAnswer: 'b'
    },

    {
        question: 'Where is Skull island?',
        answers: {
            a: 'Northern Australia',
            b: 'New Zealand',
            c: 'The Falkland Islands',
            d: 'It\'s made up to sound cool.'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Baja Striped Bass) The Striped Bass is ______ out of ____.',
        answers: {
            a: 'caught, Peru',
            b: 'farmed, Baja',
            c: 'chased, California',
            d: 'bored, their minds.'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Baja Striped Bass) It is served with crispy skin and glazed with a mixture of ________, soy sauce, shallot, black pepper, _________, Thai chili, ____ sugar*, and ginger',
        answers: {
            a: 'fish sauce, lemongrass, palm',
            b: 'oyster sauce, cactus cooler, brown',
            c: 'tamari, Chinese five spice, white',
            d: 'SIMbal, fennel, booger'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Baja Striped Bass) The fish is served with various ______ greens just lightly sauteed.',
        answers: {
            a: 'mustard',
            b: 'collard',
            c: 'chard',
            d: 'kale'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Baja Striped Bass) Garnish: Crispy ______ and _______.',
        answers: {
            a: 'baby leeks, white onions',
            b: 'garlic, sweet Muai onions',
            c: 'shallots, green onions',
            d: 'root vegetables, pixie dust'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Baja Striped Bass) On Side: Steamed rice seasoned with butter, salt, ________ powder, toasted shrimp, crispy garlic, __________, and green onion powder.',
        answers: {
            a: 'toasted marshmellow, hemp seeds',
            b: 'MSG, poppy seeds',
            c: 'ramen flavor packet, coriander seeds',
            d: 'toasted grain, sesame seeds'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Baja Striped Bass) Select correct answer ',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mods'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Baja Striped Bass) Select correct answer ',
        answers: {
            a: 'Diary Free',
            b: 'Dairy free with mods',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Baja Striped Bass) Select correct answer ',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mods',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Baja Striped Bass) Select correct answer ',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mods',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Baja Striped Bass) Select correct answer ',
        answers: {
            a: 'Gluten Cross-contamination',
            b: 'It is already glutenous, my guy.'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Baja Striped Bass) Select correct answer ',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten free with mods',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Northern Halibut) Halibut Marinade: a mixture of _______, ______, dill, fish sauce, sugar, ______ powder, and olive oil.',
        answers: {
            a: 'lemongrass, chili oil, garlic',
            b: 'lemongrass, turmeric, curry',
            c: 'baby leeks, herbs de provence, onion',
            d: 'sweet marmalade, fresh fennel, white pepper'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Northern Halibut) Under the fish there will be roasted onions, Chino Farms summer squash, and _______ beans.',
        answers: {
            a: 'Romano',
            b: 'Greco',
            c: 'Lima',
            d: 'Mung'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Northern Halibut) Cream Sauce: with same ingredients from marinade + ______ and ______.',
        answers: {
            a: 'milk, honey',
            b: 'sour cream, guacamoles',
            c: 'orange juice, vodka',
            d: 'cream, butter'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Northern Halibut) Garnish: ____ sprigs and toasted ________.',
        answers: {
            a: 'Herbs de provence, rice powder',
            b: 'Rice paddy herbs, cashews',
            c: 'Cilantro, walnuts',
            d: 'Dill, peanuts'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Northern Halibut) On the side: Rice noodles tossed in chopped _____*, chili flakes, garlic, lemon, and olive oil.',
        answers: {
            a: 'Miso',
            b: 'Shiso',
            c: 'Chiso',
            d: 'Anise hyssop'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Northern Halibut) On the side: ____________ dipping sauce made with fish sace, lime, ____ sugar, garlic, Thai chili, _____, and carrot.',
        answers: {
            a: 'Nuoc Mam, palm, daikon',
            b: 'Mam Nuoc, beet, red radish',
            c: 'Zesty, confection, turnip',
            d: 'Barbeque, demarara, parsnip'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Northern Halibut) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Northern Halibut) Select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mod: without peanuts',
        },
        correctAnswer: 'b'
    },

    {
        question: '(Northern Halibut) Select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy free with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Northern Halibut) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Northern Halibut) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Northern Halibut) Select correct answer',
        answers: {
            a: 'Gluten Cross-contamination',
            b: 'It is already GF, so n/a',
        },
        correctAnswer: 'b'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) The skirt steak is _ oz.',
        answers: {
            a: '4',
            b: '6',
            c: '8',
            d: '10'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Marinade: Fish sauce, _____ peels, sugar, garlic, shallot, and __________.',
        answers: {
            a: 'lemon, lemongrass',
            b: 'lime, limegrass',
            c: 'orange, orangegrass',
            d: 'grapefruit, grapefruitgrass'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Prep: Grilled over charcoal to a recommended _______ temperature unless specified.  Sliced and plated.',
        answers: {
            a: 'black and blue',
            b: 'medium rare',
            c: 'medium',
            d: 'shoe leather'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Salad: Raw Chino Farms corn salad with _______, cilantro, and _________.  Dressing is ________, garlic, Thai chilie, lime, and olive oil.',
        answers: {
            a: 'tomatoes, watercress, fish sauce',
            b: 'summer melons, baby bamboo, oyster sauce',
            c: 'dragon fruit, snap peas, soy sauce',
            d: 'cucumber, shaved celery, tamari'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Finishing glaze: For steak, _______________ laced with a little _____ sauce.',
        answers: {
            a: 'wine white reduction, PCP',
            b: 'sauternes wine beef jus, fish',
            c: 'port wine reduction, soy',
            d: 'red wine beef jus, oyster'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'Neither'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) Select correct answer',
        answers: {
            a: 'Gluten Cross-contamination',
            b: 'It is already GF, so n/a',
        },
        correctAnswer: 'b'
    },

    {
        question: '(Snake River Farms Wagyu Skirt Steak) BONUS: What is the difference between Snake River Farms Wagyu and Japanese Wagyu?',
        answers: {
            a: 'They speak different a dialect of cow languages.',
            b: 'It\'s actually not wagyu anymore, we just call it that to feel better about ourselves.',
            c: 'Snake River Farms produces American Wagyu Beef, which is the result of crossbreeding traditional beef cattle with purebred Wagyu.',
        },
        correctAnswer: 'c'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) The beef rib comes bone-in and is from Snake River Farms* in ______.',
        answers: {
            a: 'Idaho',
            b: 'Ohio',
            c: 'Nebraska',
            d: 'Nevada'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Prep: Confit the beef rib for 5 hours in _________, lemongrass*, ______ lime*, and star anise.  Then ______ it for 2 hours.',
        answers: {
            a: 'duck fat, kaffir, smoke',
            b: 'beef fat, finger, roast',
            c: 'vegan lab fat, juicy, grill',
            d: 'coconut oil, key, stare at'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Glaze: ______, fish sauce, garlic, shallot, black pepper, lemongrass, Thai chili, palm sugar, and ginger.',
        answers: {
            a: 'The blood of a thousand virgins',
            b: 'duck jus',
            c: 'beef tallow',
            d: 'beef jus'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Garnish: Crispy _______ and thinly sliced ___________.',
        answers: {
            a: 'shallots, green onion',
            b: 'baby leeks, dill',
            c: 'fennel, celery',
            d: 'garlic, daikon radish'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Salad (on side): Various ________ tossed in a _____ vinaigrette.  The dish is garnished with different stone fruits, shaved _____ onion, and various herbs.',
        answers: {
            a: 'bitter greens, red wine, red',
            b: 'chicories, citrus, white',
            c: 'mustard greens, white wine, green',
            d: 'hickory, sauternes, pearl'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) BONUS: What is the relationship between Chicory Lettuce and Chicory coffee?',
        answers: {
            a: 'Chicory lettuce is from the same plant that Chicory coffee is made from.  Chicory coffee is made from the roots of the plant.',
            b: 'There is no relationship, Christopher Columbus accidentally named another plant the wrong name.',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'GF with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'are you freaking kidding me...'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'NOOOOOOOOT VEEEEGAAAANNNN EVEEERRRR'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Snake River Farms Wagyu Smoked Beef Rib) Select correct answer',
        answers: {
            a: 'Gluten Cross-contamination',
            b: 'It is already GF, so not an issue, playaboi.',
        },
        correctAnswer: 'b'
    },

    {
        question: 'Can you tell that I am starting to lose it?  Is ~200 questions to study for kind of rediculous?',
        answers: {
            a: 'yes',
        },
        correctAnswer: 'a'
    },

    {
        question: 'You are so close!  Only 4 more dishes!  You can do it!',
        answers: {
            a: 'Thank goodness',

        },
        correctAnswer: 'a'
    },

    {
        question: '(Smoked Dry Aged Duck) Portion: __ duck per order.',
        answers: {
            a: '1/4',
            b: '1/3',
            c: '1/2',
            d: '17/349'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Smoked Dry Aged Duck) Prep: The duck is dry aged for _____ days, then _____ and ______.',
        answers: {
            a: '2-3, toasted, boiled',
            b: '14-20, smoked, roasted',
            c: '20-45, smoked, roasted',
            d: '45-90, deep fried, covered in chocolate'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Smoked Dry Aged Duck) Temperature: It will be served _______ in temperature.',
        answers: {
            a: 'rare',
            b: 'medium rare',
            c: 'medium',
            d: 'medium well plus'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Smoked Dry Aged Duck) Accoutrements: On the side there will be a plate of plain __________ noodles, lettuces to wrap the duck in, and various herbs.',
        answers: {
            a: 'aglio e olio',
            b: 'fettuccine',
            c: 'top ramen',
            d: 'vermicelli/rice'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Smoked Dry Aged Duck) Sauces: ______ - sauce of duck jus mixed with our house made XO sauce that is a paste with shrimp, scallop, pork, soy sauce, chilies, garlic, and onions.',
        answers: {
            a: 'Duck XO',
            b: 'A1 steak sauce',
            c: 'Aus Jus',
            d: 'HP brown sauce'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Smoked Dry Aged Duck) Sauces: ____________ - made with parsley, cilantro, vinegar, fish sauce, lime, palm sugar*, garlic, Thai chili, daikon, carrot, and olive oil.',
        answers: {
            a: 'Guatemalan Chimichurri',
            b: 'Fancy Vinaigrette',
            c: 'Nuoc Mam* Chimichurri',
            d: 'Daft Punk is playing at my house'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Smoked Dry Aged Duck) BONUS MOTHER TRUCKERS: Why do we have such a limited quantity of ducks available per day?',
        answers: {
            a: 'It creates a false sense of limitation, artificially driving demand higher than supply.',
            b: 'We dry-age them in-house, and we only have so much space to do so.',
        },
        correctAnswer: 'b'
    },

    {
        question: '(Smoked Dry Aged Duck) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten free with mod: 86 Duck XO, sub Mushroom XO (same as eggplant dish)',
        },
        correctAnswer: 'b'
    },
    
    {
        question: '(Smoked Dry Aged Duck) Select correct answer',
        answers: {
            a: 'Nut free',
            b: 'Nut free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Smoked Dry Aged Duck) Select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Smoked Dry Aged Duck) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'Nope.'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Smoked Dry Aged Duck) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'I said nope.'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Smoked Dry Aged Duck) Select correct answer',
        answers: {
            a: 'Gluten Cross-contamination',
            b: 'It is already GF, so do not circle it on the real test.',
        },
        correctAnswer: 'b'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) Prep: The Ribeye is pan seared and ______ in the oven with salt and pepper.  It is cooked to a recommended ___________ temperature unless specified by guest and/or server.',
        answers: {
            a: 'roasted, medium-rare',
            b: 'deep fried, well done plus',
            c: 'roasted, rare',
            d: 'air fryer finished, black and blue'
        },
        correctAnswer: 'a'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) Glaze: with a _____________ jus.',
        answers: {
            a: 'duck fat',
            b: 'beef tallow and demarara sugar',
            c: 'regular A1 steak sauce',
            d: 'beef-palm sugar'
        },
        correctAnswer: 'd'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) It is served with sauteed __________ greens.',
        answers: {
            a: 'sweet potato',
            b: 'mustard',
            c: 'collard',
            d: 'kale'
        },
        correctAnswer: 'a'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) On side: Fried _______________ that is made with shrimp, garlic, shredded sweet potato, potato starch, wondra flour, egg, and _______.  Topped with _________ powder.',
        answers: {
            a: 'Idaho potato fritter, curry paste, garlic',
            b: 'Sweet potato fritter, turmeric, green onion',
            c: 'Shrimp tail fritter, yellow stuff, pocket lint',
            d: 'Bear claw fritter, sugar glase, confection sugar'
        },
        correctAnswer: 'b'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) On side: ramekin of ______________.',
        answers: {
            a: 'Nuoc Mam Chimichurri',
            b: 'Olive oil and herbs with vinegar',
            c: 'Fish sauce',
            d: 'Hollandaise'
        },
        correctAnswer: 'a'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten free with mod:  no fritter',
        },
        correctAnswer: 'b'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) Select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) Select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Diary free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'Neither, enjoy your steak'
        },
        correctAnswer: 'c'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'Neither.'
        },
        correctAnswer: 'c'
    },

    {
        question: '(16oz 45-day Dry Aged Ribeye) Select correct answer',
        answers: {
            a: 'Gluten cross-contamination',
            b: 'Not an issue as long as you ditch the fritter. (no circle on final exam)',
        },
        correctAnswer: 'b'
    },

    {
        question: '(Vanilla Flan) The flan is baked with ________, egg, vanilla, and sugar.',
        answers: {
            a: 'heavy cream',
            b: 'light cream',
            c: 'medium cream',
            d: 'sour cream and salsa'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Vanilla Flan) _____ whipped cream: heavy cream, sugar, and Maldon seea salt.',
        answers: {
            a: 'Shiso',
            b: 'Bistro',
            c: 'Miso',
            d: 'Disco'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Vanilla Flan) Coffee syrup is made with ______ coffee and _____ sugar.',
        answers: {
            a: 'Starbucks, white',
            b: 'Dark Horse, demarera',
            c: 'Bird Rock, brown',
            d: 'chicory, black'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Vanilla Flan) Select correct answer',
        answers: {
            a: 'Gluten Free',
            b: 'Gluten free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Vanilla Flan) Select correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mod',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Vanilla Flan) Select correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy free with mod',
            c: 'no'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Vanilla Flan) Select correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mod',
            c: 'no'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Vanilla Flan) Select correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mod',
            c: 'no'
        },
        correctAnswer: 'c'
    },

    {
        question: '(Vanilla Flan) Select correct answer',
        answers: {
            a: 'Gluten Cross-contamination',
            b: 'Already GF',
        },
        correctAnswer: 'b'
    },

    {
        question: '(Ginger Cheesecake Parfait) Bottom layer: _________ streusel, made with flour, butter, _____ powder, and sugar.',
        answers: {
            a: 'Green tea/matcha, green tea',
            b: 'Earl grey tea, wierd green',
            c: 'Jasmin tea, confection sugar',
            d: 'Ancient Chinese secret tea, matcha'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Ginger Cheesecake Parfait) Middle layer: Ginger cheesecake puree, made with _______, milk, cream cheese, ginger, eggs, sugar, and _______ zest.',
        answers: {
            a: 'wondra, orange',
            b: 'flour, grapefruit',
            c: 'panko, kiwi',
            d: 'cornstarch, lemon'
        },
        correctAnswer: 'd'
    },

    {
        question: '(Ginger Cheesecake Parfait) Top layer: Frozen _________, made with ________, sugar, and water..',
        answers: {
            a: 'lemongrass shaved ice, lemongrass',
            b: 'sorrel granita, sorrel',
            c: 'Hawaiian shave ice, citrus juice',
            d: 'green tea sorbet, orange juice'
        },
        correctAnswer: 'b'
    },

    {
        question: '(Ginger Cheesecake Parfait) Garnished with raw shaved ribbons of _______, Chino Farms _________, fresh lemon, and _____ leaves.',
        answers: {
            a: 'rhubarb, strawberries, sorrel',
            b: 'sour candy, assorted berries, mind',
            c: 'Christmas wrapping, Carolina Reaper pepper, tobacco',
            d: 'caramel, fuji apples, maple'
        },
        correctAnswer: 'a'
    },

    {
        question: '(Ginger Cheesecake Parfait) Select the correct answer',
        answers: {
            a: 'Gluten free',
            b: 'GF with mods',
            c: 'Neither, it has flour as an integral ingredient.',
        },
        correctAnswer: 'c'
    },

    {
        question: '(Ginger Cheesecake Parfait) Select the correct answer',
        answers: {
            a: 'Nut Free',
            b: 'Nut free with mods',
        },
        correctAnswer: 'a'
    },

    {
        question: '(Ginger Cheesecake Parfait) Select the correct answer',
        answers: {
            a: 'Dairy Free',
            b: 'Dairy free with mods',
            c: 'Neither.  Butter, milk, and cream cheese are integral.',
        },
        correctAnswer: 'c'
    },

    {
        question: '(Ginger Cheesecake Parfait) Select the correct answer',
        answers: {
            a: 'Vegetarian',
            b: 'Vegetarian with mods',
            c: 'Again... this LOOKS vegetarian, but Vegetarian is not selected on the study guide.  Proceed with caution.',
        },
        correctAnswer: 'c'
    },

    {
        question: '(Ginger Cheesecake Parfait) Select the correct answer',
        answers: {
            a: 'Vegan',
            b: 'Vegan with mods',
            c: 'Neither',
        },
        correctAnswer: 'c'
    },

    {
        question: '(Ginger Cheesecake Parfait) Select the correct answer',
        answers: {
            a: 'Gluten Cross-contamination',
            b: 'N/a, it has flour so it is a gluten.  ALL THE GLUTEN!',
        },
        correctAnswer: 'b'
    }

    // {
    //     question: '',
    //     answers: {
    //         a: '',
    //         b: '',
    //         c: '',
    //         d: ''
    //     },
    //     correctAnswer: ''
    // },

]

buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


// Show the first slide
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}


function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}


showSlide(0)

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);