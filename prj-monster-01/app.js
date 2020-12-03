function getRandomValue( min, max ) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    computed: {
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
        monsterBarStyles() {
            if ( this.monsterHealth < 0 ) {
                return {width: '0%'};
            }

            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            if ( this.playerHealth < 0 ) {
                return {width: '0%'};
            }

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
        },
        starGame() {
            this.currentRound = 0;

            this.monsterHealth = 100;

            this.playerHealth = 100;

            this.winner = null;
        },
        surrender() {
            this.winner = 'monster';
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