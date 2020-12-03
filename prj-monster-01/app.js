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
            playerHealth: 100,
            winner: null
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
    },
    watch: {
        monsterHealth( value ) {
            if ( value <= 0 & this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if ( value <= 0 ) {
                this.winner = 'player';
            }
        },
        playerHealth( value ) {
            if ( value <= 0 & this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if ( value <= 0 ) {
                this.winner = 'monster';
            }
        }
    }
});

app.mount('#game');