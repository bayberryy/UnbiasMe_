<template>
    <div style="background-color: antiquewhite; height: 100%;  margin-top: -80px; border-radius: 10px">  

        <div style="padding-top: 10px;">
            <h1 style="font-size: 50px; margin-top: 150px;;">
                Your test result is <span class="bold-orange"> {{ Math.abs(this.dScore.toFixed(2)) }} </span>
            </h1>
            <h1  style="font-size: 25px; margin-top: 80px; margin-inline: 20px;">
                This suggest a <span class="bold-orange"> {{ this.scoreStrength }} </span> automatic association of <span class="bold">{{ this.dataArray[this.biasTowards].negativeTitle[0] }}  with {{ this.dataArray[this.biasTowards].negativeTitle[1] }} </span>
                and <span class="bold">{{ this.dataArray[this.biasTowards].positiveTitle[0] }} with {{ this.dataArray[this.biasTowards].positiveTitle[1] }} </span>.
            </h1>
            <h1 style="font-size: 18px; margin-top: 20px; margin-inline: 40px; text-align: justify;">
                While the D-score can provide valuable insights into the relative strength of implicit biases, it is important to interpret it cautiously. It is just one of the many tools used in implicit bias research, and its accuracy in capturing someone's overall implicit bias or predicting real-world behavior is still a topic of debate and ongoing research.
            </h1>
        </div>
    </div>
</template>

<script>

export default {
    name: 'IatResult',
    props: {
        dScore: {
            type: Number
        },
        dataArray: {
            type: Object
        }
    },
    data() {
        return {
            biasTowards: 0,
            scoreStrength: undefined,
            implicitBias: undefined
        }
    },
    mounted() {
        this.mountProcessScore()
    },
    methods: {
        mountProcessScore() {
            this.biasTowards =
                this.dScore > 0
                ? 0
                : 1

            this.scoreStrength = 
                Math.abs(this.dScore) <= 0.35
                ? 'slight'
                : Math.abs(this.dScore) <= 0.64
                ? 'moderate'
                : 'strong'
            console.log(this.dataArray[this.biasTowards].instruction)

            this.implicitBias = `automatic association of ${ this.dataArray[this.biasTowards].negativeTitle[0] } with ${ this.dataArray[this.biasTowards].negativeTitle[1] }
                and ${ this.dataArray[this.biasTowards].positiveTitle[0] } with ${ this.dataArray[this.biasTowards].positiveTitle[1] }`
        }
    }
}
</script>

<style scoped>
div {
    margin-top: 80px;
    background-color: antiquewhite;
}

.bold {
    font-weight: bold;
    color: #517395
}

.bold-orange {
    font-weight: bold;
    color: rgb(189, 107, 19);
}
</style>
