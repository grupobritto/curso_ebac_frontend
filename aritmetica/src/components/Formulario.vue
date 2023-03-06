<script>
export default {
    data() {
        return {
            valor1: 0,
            valor2: 0,
            operador: "+",
            resultado: 0,
        };
    },
    methods: {
        calcular() {
            switch (this.operador) {
                case "+":
                    this.resultado = Number(this.valor1) + Number(this.valor2);
                    break;
                case "-":
                    this.resultado = Number(this.valor1) - Number(this.valor2);
                    break;
                case "*":
                    this.resultado = Number(this.valor1) * Number(this.valor2);
                    break;
                case "/":
                    this.resultado = Number(this.valor1) / Number(this.valor2);
                    break;
            }
        },
    },
};
</script>

<template>
    <input type="number" v-model="valor1" @input="calcular" class="form-control mt-3 mb-3" />
    <select v-model="operador" @input="calcular" class="form-control mt-3 mb-3">
        <option value="+" selected>+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="number" v-model="valor2" @input="calcular" class="form-control mt-3 mb-3" />
    <h1>{{ resultado }}</h1>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

h1 {
    font-family: 'Roboto';
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    margin-top: 128px;
}

img {
    height: 250px;
}
</style>