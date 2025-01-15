<template>
<main>
  <div class="about">
    <h2>🦎🍕✨ About Us ✨🍕🦎</h2>
    <p>Once upon a time, in the quaint, whimsical town of Crustwood Hollow, there lived a pizza-loving lizard named Pizzard. Pizzard was no ordinary reptile—he was a wizard, known far and wide as the Lizzard Wizzard. His magic was as mysterious as it was delicious, for Pizzard’s greatest spell was the ability to create the most enchanting pizzas the world had ever tasted.</p>
    <p>Legend has it that Pizzard discovered his magical calling during a thunderstorm one fateful night. Lightning struck his favorite pizza oven, imbuing it with otherworldly powers. From that day forward, every pizza he made wasn't just food—it was an adventure. Toppings danced as he prepared them, dough rose to symphonic melodies, and the aroma of his creations was said to bring tears of joy to even the grumpiest dragon.</p>
    <p>However, Pizzard had one dream beyond creating magical pizzas: to share his craft with the world. So, with his enchanted oven in tow and a crown made of fresh basil leaves on his head, he opened "King Pizzard and the Lizzard Wizzard" pizzeria. The name reflected his dual identity as both the king of pizza and a humble wizard dedicated to delighting others.</p>
    <p>The pizzeria became an instant sensation. Locals adored the "Thunderbolt Supreme," a pizza topped with sparking pepperoni and glowing mozzarella. Travelers came from far-off lands to try the "Dragon’s Breath Delight," which had a spicy kick strong enough to tame fire-breathing creatures. And children giggled over the "Mystical Mushroom Margherita," with mushrooms that shimmered in the moonlight.</p>
    <p>But what made King Pizzard's pizzeria truly special wasn’t just the magical food. It was the warmth and joy that filled every corner. Pizzard ensured that every guest—whether knight or peasant, fairy or troll—left with a full stomach and a full heart.</p>
    <p>To this day, it’s said that King Pizzard still works behind the counter, his tail flicking happily as he spins dough in the air. And if you’re really lucky, you might catch him casting a little spell to make your pizza extra special.</p>
    <p>After all, at King Pizzard and the Lizzard Wizzard, magic isn’t just in the food—it’s in the love and laughter that comes with every slice. 🦎🍕✨</p>
  </div>
</main>
</template>

<style>
main {
  min-width: 800px;;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  /* padding: 1rem; */
  height:90vh;
  backdrop-filter: blur(4px); /* Apply blur */
  background: rgba(105, 90, 205, 0.452); /* Optional: Add a slight tint */
}

h2{
  font-size: 2rem;
}

.about {
  max-width: 800px;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 1rem;
  /* padding: 1rem; */
  /* border-radius: 1rem; */
  /* background-color: skyblue; */
  padding-left: 1rem;
  padding-right: 1rem;
  backdrop-filter: blur(5px);
  background: rgba(105, 90, 205, 0.452);
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
}

.about::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Edge */
}
</style>
