<template>
    <div class="square-container">
        
        <div class="square-border">
            <InstructionElement v-if="showInstruction" :pageData="pageData" />
            <IatComponent  v-if="showIatComponent" :pageData="pageData" :testData="testData" :showXSign="showXSign" />
            <IatResult ref="IatResult" v-if="showIatResult" :dScore="dScore" :dataArray="dataArray" />
        </div>
        
        <div class="button-container" v-if="showIatResult">
            <form @submit.prevent="submitForm">
                <button type="submit" class="button"> Recommendations </button>
            </form>
        </div>
        <div style="color: antiquewhite; font-size: 1rem; margin-top: 10px;" v-if="showPleaseWait">
            Please wait ...
        </div>
        <RecommendationPage v-if="showRecommendationPage" :recommendation="recommendation" style="display: none; visibility: hidden;"/>
        
    </div>
</template>

<script>
    import InstructionElement from '@/components/instruction-component.vue'
    import IatComponent from '@/components/iat-component.vue'
    import IatResult from '@/components/iat-result.vue'
    import IatData from '@/data/iat-data'
    import RecommendationPage from './recommendationPage.vue'
    import { calculateDScore } from '@/data/iat-utils'
    import axios from 'axios'

    export default {
    name: 'IatPage',
    components: {
        InstructionElement,
        IatComponent,
        IatResult,
        RecommendationPage
    },
    data() {
        return {
            showInstruction: true,
            showIatComponent: false,
            showIatResult: false,
            showXSign: false,
            showPleaseWait: false,
            showRecommendationPage: false,
            dataArray: IatData,
            pageIndex: 0,
            testIndex: 0,
            noOfPages: IatData.length,
            iatTiming: {},
            dScore: 0,
            enableSpaceKey: true,
            recommendation: undefined
        }
    },
    computed: {
        pageData() {
            return this.dataArray[this.pageIndex]
        },

        testData() {
            return this.dataArray[this.pageIndex].testCases[this.testIndex]
        },

        implicitBias() {
            return this.$refs.IatResult.implicitBias
        }
        
    },
    mounted() {
        this.mountTestDataListeners()
    },
    watch: {
        testIndex(newValue) {

            if (newValue == 10) {
                this.nextPage()

            }
        }
    },
    methods: { 
        mountTestDataListeners() {
            
            let startTime = performance.now()

            window.addEventListener('keydown', (event) => {

                if (event.key === ' ' && this.enableSpaceKey) {
                    this.showInstruction = false
                    this.showIatComponent = true
                    startTime = performance.now()
                }

                if (this.showInstruction) {
                    if (event.key === 'e' || event.key === 'i') {
                        event.preventDefault()
                        return
                    }  
                }

                if (event.key === 'e' && this.testIndex <= 9) {
                    if (this.dataArray[this.pageIndex].positiveTitle.includes(this.dataArray[this.pageIndex].testCases[this.testIndex].wordCategory)) {
                        // add calculation timing here
                        const endTime = performance.now()
                        const timing = endTime - startTime
                        startTime = performance.now()

                        if ( ! Object.prototype.hasOwnProperty.call(this.iatTiming, this.pageIndex) ) {
                            this.iatTiming[this.pageIndex] = []
                        }
                        this.iatTiming[this.pageIndex].push(timing)

                        this.testIndex += 1;
                        this.showXSign = false
                    } else {
                        this.showXSign = true
                    }
                }

                if (event.key === 'i' && this.testIndex <= 9) {

                    if (this.dataArray[this.pageIndex].negativeTitle.includes(this.dataArray[this.pageIndex].testCases[this.testIndex].wordCategory)) {
                        
                        const endTime = performance.now()
                        const timing = endTime - startTime
                        startTime = performance.now()

                        if ( ! Object.prototype.hasOwnProperty.call(this.iatTiming, this.pageIndex) ) {
                            this.iatTiming[this.pageIndex] = []
                        }
                        
                        this.iatTiming[this.pageIndex].push(timing)
                        this.testIndex += 1;
                        this.showXSign = false

                    } else {
                        this.showXSign = true
                    }
                }
        });
    },

        nextPage() {
            // Display the Instruction Component after Space key is pressed
            if ( this.pageIndex < this.noOfPages - 1 ) {

                        this.pageIndex += 1
                        this.testIndex = 0
                        this.showInstruction = true
                        this.showIatComponent = false

                    }

            // display the Instruction Component after Space key is pressed
            if ( this.pageIndex === this.noOfPages - 1 && this.testIndex === 10) {

                    // index 0 => congruent test | index 1 => incongruent test
                    this.congruentResult = this.iatTiming[0].reduce(( total, current ) => total + current, 0) / this.iatTiming[0].length
                    this.incongruentResult = this.iatTiming[1].reduce(( total, current ) => total + current, 0) / this.iatTiming[1].length
                    this.dScore = calculateDScore(this.iatTiming[0], this.iatTiming[1])
                    this.showIatComponent = false
                    this.showIatResult = true
                    this.enableSpaceKey = false

            }
        },

        async submitForm() {
            try {
                if (this.$refs.IatResult.implicitBias) {
                    this.showPleaseWait = true
                    const response = await axios.post('/api/iatrecommendation', {
                    implicitBias: this.$refs.IatResult.implicitBias
                })
                this.recommendation = response.data.jsonObject
                this.showRecommendationPage = true
                console.log('this.recommendation', this.recommendation)
                this.$router.push('/recommendation')
                }
                else {
                    console.log(this.$refs.IatResult.implicitBias)
                }
                
        } catch (error) {
            console.log('errormessage', error)
        }
        }
    }
}
</script>

<style scoped>
.square-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.square-border {
    width: 50%;
    height: 60%;
    min-width: 800px;
    min-height: 400px;
    border: 6px solid #105ea6;
    border-radius: 10px;
}

.button-container {
    margin-top: 20px;
}

.button {
    background-color: #105ea6;
    border: 1px solid #105ea6;
    border-radius: 15px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
    color: #fff;
    font-weight: bold;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    width: 240px;
}
</style>