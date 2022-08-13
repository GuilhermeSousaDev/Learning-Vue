<template>
    <transition name="rotate" mode="out-in">
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
        <transition name="rotate" mode="out-in" v-else>
            <div v-verify="message" class="container">
                <span>{{ message }}</span>
                <button @click="updatePage">Next</button>
            </div>
        </transition>
    </transition>
</template>

<script>
export default {
    name: "Quiz",
    created() {
        this.randomIndex = Math.floor(Math.random() * this.questions.length);
    },
    computed: {
        randomQuestion() {
            return this.questions[this.randomIndex];
        }
    },
    directives: {
        'verify': {
            bind(el, binding) {
                const msg = binding.value;

                if (msg === 'Resposta Correta') {
                    el.style.background = 'green';
                } else {
                    el.style.background = 'red';
                }
            }
        }
    },
    methods: {
        showResponse(correct) {
           correct? 
            this.message = 'Resposta Correta' : 
            this.message = 'Resposta Errada'
        },
        updatePage() {
            this.message = '';
            this.randomIndex = Math.floor(Math.random() * this.questions.length);
        }
    },
    data() {
        return {
            message: '',
            randomIndex: 0,
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
button {
    border: 1px solid black;
    border-radius: 15px;
    padding: 0.5rem;
}
button:hover {
    background: black;
    color: white;
    cursor: pointer;
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
@keyframes rotate-in {
  from { transform: rotateY(90deg) }
  to { transform: rotateY(0) }
}
@keyframes rotate-out {
  from { transform: rotateY(0) }
  to { transform: rotateY(90deg) }
}
.rotate-enter-active {
  animation: rotate-in 2s ease;
  transition: opacity 2s;
}
.rotate-leave-active {
  position: absolute;
  width: 100%;
  animation: rotate-out 2s ease;
  transition: opacity 2s;
}
.rotate-enter, .rotate-leave-to {
  opacity: 0;
}
</style>