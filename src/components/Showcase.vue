<template>
  <div class="showcase-container">
    <div class="card" 
         v-for="(card, index) in cards" 
         :key="index" 
         :style="{ animationDelay: `${index * 0.3}s` }"
    >
      <div 
        class="card-inner" 
        :class="{'flipped': card.isFlipped}" 
        @click="toggleFlip(card)"
      >
        <!-- Front of the card -->
        <div class="card-front white-text fantasyFont">
          <h3>{{ card.title }}</h3>
        </div>

        <!-- Back of the card -->
        <div class="card-back white-text fantasyFont">
          <div class="card-top" style="height: 70%">
            <img :src="card.image" alt="Image"/>
          </div>
          <div class="card-bottom mt-auto ms-5 me-4">
            <br><br>
            <h5>{{ card.description }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Petbook",
          image: "../../logo-icons.png",
          description: "A social media dedicated for posting pets and to connect fur loving people",
          isFlipped: false
        },
        {
          title: "METAR",
          image: "../../metar.png",
          description: "A translation app to be used by aviation students to translate weather data given by PAG-ASA from code into actual words",
          isFlipped: false
        },
        {
          title: "WIP",
          image: "../../card-front.jpeg",
          description: "This is still in the early stages of development. But it will be an e-commerce site that will showcase everything I have learned.",
          isFlipped: false
        }
      ]
    };
  },
  methods: {
    toggleFlip(card) {
      card.isFlipped = !card.isFlipped;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap');
.fantasyFont {
  font-family: 'Cinzel', serif;
}
.white-text {
  color: aliceblue;
}

.showcase-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  padding: 20px;
  border-radius: 10px;
}

.card {
  background-color: #121212;
  width: 450px;
  height: 500px;
  perspective: 1000px;
  margin: 0 15px;
  opacity: 0; /* Start with cards hidden */
  animation: fadeIn 1s forwards; /* Apply the animation */
}

.card:hover {
  box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.8);
}

.card-inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  background-image: url('../../public/card-front.jpeg');
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-image: url('../../public/card.jpeg');
  background-size: cover;
  background-position: center;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.card-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e0e0e0;
  padding: 10px;
}

.card-top img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.card-bottom {
  text-align: start;
  margin-top: 10px;
  font-size: 16px;
  margin-bottom: 100px;
}

.card-bottom h5 {
  margin: 0;
  font-size: 16px;
}

/* Animation for fading in the cards */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px); /* Start from below */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* End at the normal position */
  }
}
</style>
