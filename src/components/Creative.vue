<template>
<div class="d-flex justify-content-center align-items-start vh-100 shadow-lg" style="background: #121212; color: #1e1e1e;">
    <div class="memory-game">
      <h1>Match Two</h1>
      <div class="stats">
        <p>Moves: {{ moves }}</p>
        <button @click="resetGame">Reset Game</button>
      </div>
      <div class="grid">
        <div
          class="card"
          v-for="(card, index) in cards"
          :key="index"
          :class="{ flipped: card.isFlipped || card.isMatched }"
          @click="flipCard(index)"
          
        >
          <div class="front">{{ card.isFlipped || card.isMatched ? card.value : '' }}</div>
          <div class="back">{{card.value}}</div>
        </div>
      </div>
    </div>
</div>
  </template>
<script>
export default {
  data() {
    return {
      cards: [], // Array of card objects
      flippedCards: [], // Track flipped cards
      moves: 0, // Count player moves
    };
  },
  created() {
    this.resetGame(); // Initialize the game on load
  },
  methods: {
    generateCards() {
      const values = ["A", "B", "C", "D", "E", "F"]; // Card values
      const doubleValues = [...values, ...values]; // Duplicate values for matching
      const shuffledValues = doubleValues.sort(() => Math.random() - 0.5); // Shuffle values
      return shuffledValues.map((value) => ({
        value,
        isFlipped: false,
        isMatched: false,
      }));
    },
    resetGame() {
      this.cards = this.generateCards(); // Generate shuffled cards
      this.flippedCards = [];
      this.moves = 0;
    },
    flipCard(index) {
      const card = this.cards[index];
      // If the card is already flipped or matched, do nothing
      if (card.isFlipped || card.isMatched || this.flippedCards.length === 2) return;

      // Flip the card
      card.isFlipped = true;
      this.flippedCards.push(index);

      if (this.flippedCards.length === 2) {
        this.checkForMatch();
      }
    },
    checkForMatch() {
      const [firstIndex, secondIndex] = this.flippedCards;
      const firstCard = this.cards[firstIndex];
      const secondCard = this.cards[secondIndex];

      if (firstCard.value === secondCard.value) {
        // Mark cards as matched
        firstCard.isMatched = true;
        secondCard.isMatched = true;
      } else {
        // Unflip cards that do not match
        setTimeout(() => {
          firstCard.isFlipped = false;
          secondCard.isFlipped = false;
        }, 1000); // Keep the cards flipped for 1 second before unflipping
      }

      // Update moves and clear flippedCards array
      this.moves++;
      this.flippedCards = [];
    },
  },
};
</script>

<style scoped>
/* Global styles */
body {
  background: #111; /* Dark background */
  color: white;
  margin: 0;
  padding: 0;
}

.memory-game {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 48px;
  color: #ffcc00; /* Neon yellow for title */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.stats {
  margin: 20px;
  font-size: 24px;
}

button {
  padding: 10px 20px;
  background: #000000; /* Red for button */
  color: white;
  font-size: 18px;
  font-family: 'Press Start 2P', cursive;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
  transition: background 0.3s, box-shadow 0.3s;
}

button:hover {
  background: #ffcc00;
  box-shadow: 0 0 20px rgba(255, 204, 0, 0.8);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-gap: 10px;
  justify-content: center;
  margin-top: 30px;
}

/* Card Styling */
.card {
  width: 100px;
  height: 100px;
  perspective: 1000px; /* Enables 3D effect */
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  transition: transform 0.5s ease-in-out;
  background-color: aliceblue; /* Neon gradient */
}

.card .front,
.card .back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: white;
  border-radius: 12px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  transition: transform 0.5s ease-in-out;
}

/* Front of the card */
.card .front {
  background-color: black; /* Black front */
  transform: rotateY(0deg); /* Front flip */
}

/* Back of the card */
.card .back {
  background: #000000; /* Red back */
  transform: rotateY(180deg); /* Back is flipped initially */
}

/* Flipping effect */
.card.flipped .front {
  transform: rotateY(180deg); /* Front flips to the back */
}

.card.flipped .back {
  transform: rotateY(0deg); /* Back flips to the front */
}

/* Card hover effect */
.card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

/* Glowing effect when card is matched */
.card.matched {
  box-shadow: 0 0 20px rgba(0, 255, 0, 1); /* Neon green glow */
  transform: scale(1.1);
}

</style>
  