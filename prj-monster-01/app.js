function getRandomValue( min, max ) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    computed: {
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        }
    },
    data() {
        return {
            currentRound: 0,
            monsterHealth: 100,
            playerHealth: 100
        };
    },
    methods: {
        attackMonster() {
            this.currentRound++;

            const attackValue = getRandomValue(5, 12);

            this.monsterHealth -= attackValue;

            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);

            this.playerHealth -= attackValue;
        },
        healPlayer() {
            this.currentRound++;

            const healValue = getRandomValue(8, 20);

            if ( this.playerHealth + healValue > 100 ) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }

            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound++;
            
            const attackValue = getRandomValue(10, 25);

            this.monsterHealth -= attackValue;

            this.attackPlayer();
        }
    }
});

app.mount('#game');