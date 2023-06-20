<template>
    <div>
        <h1>Recommended Readings</h1>
        <div class="recommendation-grid" v-if="showRecommendationCard">
            <h1>changes!!</h1>
            {{ booksRecommendationn }}
            <div v-for="(book, index) in booksRecommendation" :key="index" class="recommendation-class">
                <!-- {{ booksRecommendation }} -->
                <RecommendationCard :bookRecommendation="book"/>
            </div>
        </div>
    </div>
    
</template>

<script>
    import RecommendationCard from '@/components/recommendation-card.vue'


    export default {
        name: 'RecommendationPage',
        props: {
            recommendation: {
                type: Object
            }
        },
        components: { 
            RecommendationCard
        },
        data() {
            return {
                numberRecommendation: 6,
                showRecommendationCard: true,
                // booksRecommendation: [],
                booksRecommendationCheck: [
        {
            "title": "This Chair Rocks: A Manifesto Against Ageism",
            "author": "Ashton Applewhite",
            "description": "Ashton Applewhite's 'This Chair Rocks' is a powerful call to action against ageism and its impact on individuals and society. The book challenges stereotypes and biases related to aging, highlighting the diversity and vitality of older adults. With personal anecdotes, research, and practical advice, Applewhite inspires readers to embrace aging with pride and advocate for a more inclusive and age-friendly world.",
            "imageUrl": "https://m.media-amazon.com/images/I/91q3F4k9btL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "title": "The Longevity Economy: Unlocking the World's Fastest-Growing, Most Misunderstood Market",
            "author": "Joseph F. Coughlin",
            "description": "Joseph F. Coughlin's 'The Longevity Economy' explores the economic and social opportunities of an aging population. The book challenges biases and misconceptions about aging and highlights the potential of older adults as consumers, entrepreneurs, and contributors to society. With insights, data, and case studies, Coughlin provides a roadmap for businesses, policymakers, and individuals to tap into the longevity economy and create a more age-inclusive world.",
            "imageUrl": "https://m.media-amazon.com/images/I/61ittXW1EVL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "title": "Bolder: Making the Most of Our Longer Lives",
            "author": "Carl Honoré",
            "description": "Carl Honoré's 'Bolder' is a guide to living a fulfilling and purposeful life in later years. The book challenges ageist attitudes and encourages individuals to embrace the opportunities and possibilities of aging. With personal stories, research, and practical advice, Honoré inspires readers to redefine their relationship with age and cultivate a sense of vitality, creativity, and joy in their later years.",
            "imageUrl": "https://m.media-amazon.com/images/I/81ausFciNzL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "title": "The Age of Dignity: Preparing for the Elder Boom in a Changing America",
            "author": "Ai-Jen Poo",
            "description": "'The Age of Dignity' by Ai-Jen Poo examines the challenges and opportunities of an aging population and the need for a more compassionate and equitable care system. The book challenges biases and stereotypes related to aging and advocates for a human-centered approach to care that prioritizes dignity, respect, and agency. With personal stories, research, and policy recommendations, Poo inspires readers to build a more age-inclusive and supportive society.",
            "imageUrl": "https://m.media-amazon.com/images/I/51jep353cfL.jpg"
        },
        {
            "title": "Aging with Grace: What the Nun Study Teaches Us About Leading Longer, Healthier, and More Meaningful Lives",
            "author": "David Snowdon",
            "description": "David Snowdon's 'Aging with Grace' offers a unique perspective on aging through the lens of the Nun Study, a groundbreaking research project on aging and dementia. The book challenges stereotypes and biases related to aging and highlights the importance of lifestyle factors in promoting healthy and meaningful aging. With insights from the Nun Study and other research, Snowdon provides practical advice for individuals to age with grace and purpose.",
            "imageUrl": "https://m.media-amazon.com/images/I/71sBU3kbucL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "title": "Elderhood: Redefining Aging, Transforming Medicine, Reimagining Life",
            "author": "Louise Aronson",
            "description": "Louise Aronson's 'Elderhood' is a transformative exploration of aging and its impact on individuals, society, and healthcare. The book challenges biases and stereotypes related to aging and advocates for a more holistic and person-centered approach to care. With personal stories, research, and policy recommendations, Aronson inspires readers to reimagine aging as a time of growth, wisdom, and connection.",
            "imageUrl": "https://m.media-amazon.com/images/I/41wf0qI-UDL._AC_UF894,1000_QL80_.jpg"
        }
    ]
            }
        },

        computed: {
            booksRecommendation() {
            return this.recommendation;
            }
        }
        // mounted() {
        //     this.mountData()
        // },
        // methods: {
        //     mountData() {
        //         if (this.recommendation) {
        //         // this.booksRecommendation = this.recommendation
        //         // this.showRecommendationCard = true
        //         this.$set(this, 'booksRecommendation', this.recommendation)
        //         this.$set(this, 'showRecommendationCard', true)
        //         console.log(this.booksRecommendation, this.showRecommendationCard)
        //     }
        //     }
        // }
    }

</script>

<style scoped>

h1 {
    font-size: 50px;
    font-weight: bold;
    color: rgb(250, 239, 226);
    margin-top: 70px;
    margin-bottom: 30px;
}

.recommendation-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 50px;
    justify-content: space-around;
}

.recommendation-class {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
