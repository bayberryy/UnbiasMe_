<template>
    <div class="card">

        <img :src="this.bookRecommendation.imageUrl" alt="Book Cover" class="card-image" />
        <div class="card-content" style="margin-top: 20px;">
            <h3 class="card-title">{{ this.bookRecommendation.title }}</h3>
            <div class="divider"></div> 
            <div class="card-author">{{ this.bookRecommendation.author }}</div>
            <div class="divider"></div> 
            <div class="card-description">{{ this.bookRecommendation.description }}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'RecommendationCard',
        props: {
            bookRecommendation: {
                type: Object
            }
        },
        computed: {
            datarecommendation() {
                return this.bookRecommendation
            }
        }
    }
</script>

<style scoped>
.card {
    margin-top: 50px;
    border: 2px solid #615f5f;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    display: flex;
    align-content: center;
    flex-direction: column;
    width: 450px;
    height: 600px;
    margin-bottom: 1rem;
    background-color: #3a3737;
}

.card-image {
    max-width: 200px;
    max-height: 300px;
    object-fit: cover;
    border: 5px solid #ccc;
    border-radius: 8px;
    margin: 0 auto;
}

.card-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: antiquewhite;
    text-align: justify;
}

.card-title:hover {
    text-shadow: 2px 2px 20px  #2c90c6, #fff 0 -1px 2px;
}

.card-author {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: antiquewhite;

}

.card-description {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: antiquewhite;
    text-align: justify;
}

.divider {
    border-bottom: 1px solid #7e7878;
    margin: 0 auto;
    max-width: 80% ;
}
</style>