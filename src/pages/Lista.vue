<template>
    <h1 class="my-5 text-2xl font-bold">Lista de Compras</h1>

    <h2 class="text-xl mb-5">Cadastro de novo item:</h2>

    <form class="mb-10 flex flex-wrap justify-between">
        <input v-model="novoItem.descricao" class="border-2 px-4 py-2" type="text" placeholder="Descrição do item">
        <input v-model="novoItem.quantidade" class="border-2 px-4 py-2" type="number" placeholder="Quantidade do item">
        <input v-model="novoItem.nivelUrgencia" class="border-2 px-4 py-2" type="number" placeholder="Nível de urgência">
        <button @click="cadastrar()" class="bg-green-400 px-4 rounded-md text-white" type="button">Cadastrar</button>
        <button @click="limpar()" class="text-red-400 px-4 rounded-md" type="button">Cancelar</button>
    </form>

    <h2 class="text-xl mb-5">Itens cadastrados:</h2>

    <section>
        <div class="border-2 px-10 py-5 cursor-pointer mb-5 flex justify-between flex-wrap" v-for="item in lista" :key="item.descricao">
            <span>{{item.descricao}} - {{item.quantidade}}</span>
            <button @click="remover(item._id)" class="text-red-400">Excluir</button>
        </div>
    </section>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            lista: [],
            novoItem: {}
        }
    },
    methods: {
        async buscarItens() {
            // Requisição para API
            let resposta = await axios.get("http://localhost:3000/itens")
            this.lista = resposta.data
        },
        async cadastrar() {
            // Requisição para API
            let resposta = await axios.post("http://localhost:3000/itens", this.novoItem)
            console.log(resposta.data)
            this.limpar()
            this.buscarItens()
            alert("Item cadastrado com sucesso!")
        },
        async remover(id) {
            const resposta = await axios.delete("http://localhost:3000/itens/" + id)
            console.log(resposta)
            this.buscarItens()
        },
        limpar() {
            this.novoItem = {}
        }
    },
    mounted() {
        this.buscarItens()
    }
}
</script>