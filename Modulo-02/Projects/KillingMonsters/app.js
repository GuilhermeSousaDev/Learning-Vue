new Vue({
    el: '#app',
    data: {
        started: false,
        max: 100,
        monsterValue: 100,
        playerValue: 100,
        monster: [],
        player: [],
        endGame: '',
        logicAttack (monsterDamage, playerDamage) {
            this.monsterValue -= monsterDamage;
            this.playerValue -= playerDamage;

            this.monster.push(`Monstro atingiu Jogador com ${playerDamage}`);
            this.player.push(`Jogador atingiu Monstro com ${monsterDamage}`)
        }
    },
    watch: {
        monsterValue () {
            if (this.monsterValue <= 0) {
                this.monsterValue = 0;
                this.endGame = 'Você Ganhou';
            }
        },
        playerValue () {
            if (this.playerValue <= 0) {
                this.playerValue = 0;
                this.endGame = 'Você Perdeu';
            }
        }
    },
    computed: {
        progressBarMonsterStyle () {
            return this.monsterValue > 15 ? 
                'background: green' : 
                'background: red'
        },
        progressBarPlayerStyle () {
            return this.playerValue > 15 ? 
                'background: green' : 
                'background: red'
        }
    },
    methods: {
        playerAttack () {
            const randomMonsterDamage = Math.floor(Math.random() * 10);
            const randomPlayerDamage = Math.floor(Math.random() * 15) + 2;

            this.logicAttack(randomMonsterDamage, randomPlayerDamage);
        },
        specialAttack () {
            const randomMonsterDamage = Math.floor(Math.random() * 15) + 5;
            const randomPlayerDamage = Math.floor(Math.random() * 10);

            this.logicAttack (randomMonsterDamage, randomPlayerDamage);
        },
        healthPlayer () {
            const randomMonsterDamage = Math.floor(Math.random() * 10);
            const randomPlayerLife = Math.floor(Math.random() * 10);

            const life = randomPlayerLife - randomMonsterDamage;

            this.playerValue += life;

            this.player.push(`Jogador ganhou com ${randomPlayerLife} de vida`);
            this.monster.push(`Monstro atingiu Jogador com ${randomMonsterDamage}`);
        },
        reloadGame () {
            this.started = !this.started;

            this.monsterValue = 100;
            this.playerValue = 100;

            this.monster = [];
            this.player = [];

            this.endGame = '';
        }
    }
});