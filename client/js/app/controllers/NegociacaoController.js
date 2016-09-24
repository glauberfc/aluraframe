class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();
		this.__negociacoesView = new NegociacoesView($('#negociacoesView'));
		this.__negociacoesView.update(this._listaNegociacoes);
		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
	}

	adiciona(event) {
		event.preventDefault();
		
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this.__negociacoesView.update(this._listaNegociacoes);

		//Criando nova mensagem e atualizando a view
		this._mensagem.texto = 'Negociação adicionada com sucesso';
		this._mensagemView.update(this._mensagem);

		this._limpaFormulario();
	}

	_criaNegociacao() {
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limpaFormulario() {
		this._inputData.value = ""
		this._inputQuantidade.value = 1
		this._inputValor.value = 0.0
		this._inputData.focus();
	}
}