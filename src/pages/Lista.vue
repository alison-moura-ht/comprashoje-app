<template>
    <h1>Lista de Compras</h1>

    <section>
        <router-link to="home" v-for="item in lista" :key="item.descricao">
            <div class="border-2 px-10 py-5 cursor-pointer mb-5">
                {{item.descricao}} - {{item.quantidade}}
            </div>
        </router-link>
    </section>
</template>

<script>
export default {
    data() {
        return {
            lista: [
                { descricao: "Sabão em Pó", quantidade: 2 },
                { descricao: "Sabão em Barra", quantidade: 2 },
                { descricao: "Macarrão", quantidade: 2 },
                { descricao: "Arroz 2kg", quantidade: 1 },
            ]
        }
    }
}
</script>