const vm = new Vue({
	el: '#app',
	data: {
		produtos: [],
		produto: ''
	},
	filters: {
		numeroPreco(valor) {
			return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
		}
	},
	methods: {
		fetchProdutos() {
			fetch('./api/produtos.json')
				.then(r => r.json())
				.then(r => this.produtos = r)
		},
		fetchProduto(id) {
			fetch(`./api/produtos/${id}/dados.json`)
				.then(r => r.json())
				.then(r => this.produto = r)
		},
		abrirModal(id) {
			this.fetchProduto(id);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
		},
		fecharModal(event) {
			if (event.target === event.currentTarget) {
				this.produto = false;
			}
		}
	},
	created() {
		this.fetchProdutos()
	}
})