<template>
    <section>
        <span class="material-icons icon">{{icon}}</span>
        <h3 class="subheading">{{subheading}}</h3>
        <slot/>
    </section>
</template>

<script>
export default {
    name: "IconStat",
    props: {
        icon: {
            default: "help",
            type: String
        },
        subheading: {
            default: "Statistic",
            type: String
        },
        content: {
            default: "Nice",
            type: String
        },
    }
}
</script>

<style lang="scss" scoped>
    section{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        .icon{
            font-size: 4rem;
            color: #FF7A00
        }
        h3{
            font-size: 1rem;
            margin: 0;
            margin-bottom: 0.5rem
        }
        p{
            margin: 0;
            font-size: 1rem;
        }
    }
</style>
