<template>
    <div style="background-color: antiquewhite; height: 100%;  margin-top: -80px; border-radius: 10px">  

        <div style="padding-top: 5px;">
            <h1 style="font-size: 50px; margin-top: 30px;">
                {{ this.pageData.instruction.title}}
            </h1>
        </div>
        <div>
            <h2 style="font-size: 20px;">
                Put a left finger on the <span class="bold">E</span> key for items that belong to the category <span class="bold">{{ this.pageData.positiveTitle[0] }} and {{ this.pageData.positiveTitle[1] }}</span>.
                <br>
                Put a right finger on the <span class="bold">I</span> key for items that belong to the category <span class="bold">{{ this.pageData.negativeTitle[0] }} and {{ this.pageData.negativeTitle[1] }}</span>.
                <br>
                <br>
                <br>
            </h2>
        </div>
            <h2 style="font-size: 20px; padding-inline: 1px;">
                Items will appear one at a time. If you make a mistake, a red <span class="bold-red">X</span> will appear. Press the other key to continue.
                <span class="bold">Go as fast as you can</span> while being accurate.
            </h2>
            <h3 style="font-size: 17px; margin-top: 80px;">
                Press the space bar when you are ready to start.
            </h3>
    </div>
</template>

<script>

export default {
    name: 'InstructionElement',
    props: {
        pageData: {
            type: Object
        }
    },
    data() {
        return {
            secondCategory: false
        }
    },
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

.bold-red {
    font-weight: bold;
    color: rgb(194, 15, 15);
}
</style>
