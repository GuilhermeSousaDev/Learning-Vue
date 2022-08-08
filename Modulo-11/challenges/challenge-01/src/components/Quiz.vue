<template>
    <transition name="slide">
        <div class="container" v-if="!message">
            <h1>{{ randomQuestion.title }}?</h1>
            <div class="questions">
                <div 
                    class="question" 
                    v-for="response in randomQuestion.responses"
                    @click="e => showResponse(response.correct)" 
                >
                    <span>{{ response.title }}</span>
                </div>
            </div>
        </div>
        <transition name="slide" v-else>
            <div class="container">
                <span>{{ message }}</span>
                <button @click="randomQuestion">Next</button>
            </div>
        </transition>
    </transition>
</template>

<script>
export default {
    name: "Quiz",
    computed: {
        randomQuestion() {
            return this.questions[Math.floor(Math.random() * this.questions.length)];
        }
    },
    methods: {
        showResponse(correct) {
           correct? 
            this.message = 'Resposta Correta' : 
            this.message = 'Resposta Errada'
        }
    },
    data() {
        return {
            message: '',
            questions: [
                {
                    title: 'Quem foi a primeira pessoa a viajar no Espaço',
                    responses: [
                        { title: 'Yuri Gagarin', correct: true },
                        { title: 'A cadela Laika', correct: false },
                        { title: 'Neil Armstrong', correct: false },
                        { title: 'Marcos Pontes', correct: false },
                    ]
                },
                {
                    title: 'Qual a montanha mais alta do mundo',
                    responses: [
                        { title: 'Mauna Kea', correct: false },
                        { title: 'Dhaulagiri', correct: false },
                        { title: 'Monte Chimborazo', correct: false },
                        { title: 'Monte Everest', correct: true },
                    ]
                },
                {
                    title: 'Onde se localiza Machu Picchu',
                    responses: [
                        { title: 'Colômbia', correct: false },
                        { title: 'Peru', correct: true },
                        { title: 'China', correct: false },
                        { title: 'Bolívia', correct: false },
                    ]
                },
                {
                    title: 'Que país tem o formato de uma bota',
                    responses: [
                        { title: 'Butão', correct: false },
                        { title: 'Brasil', correct: false },
                        { title: 'Portugal', correct: false },
                        { title: 'Itália', correct: true },
                    ]
                },
            ]
        }
    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    padding: 1rem;
}

.questions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
}
.question {
    border: 1px solid black;
    border-radius: 15px;
    padding: 0.5rem;
}
.question:hover {
    background: black;
    color: white;
    cursor: pointer;
}
@keyframes slide-in {
  from { transform: translateY(40px) }
  to { transform: translateY(0) }
}
@keyframes slide-out {
  from { transform: translateY(0) }
  to { transform: translateY(40px) }
}
.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>