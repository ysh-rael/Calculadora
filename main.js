//VIsor -- tela onde mostrara processo e resultado
 var visor = window.document.getElementById("visor")
 var numeroClick = window.document.querySelector('.btao')
 var n = ''
 var nn = ''
 var res = ''
 var op = ''
function numero(clicked_id) {
	n += [clicked_id]
	visor.innerHTML = n
	return(n)
}

function operaçao(clicked_id) {
	op = clicked_id
	visor.innerHTML += clicked_id
	N = Number(n)
	n = ''
}


function resultado() {
		if (op == '+') {
			//SOMAR(+)
			res = N+Number(n)
		} else if (op == '-') {
			//SUBTRAIR(-)
			res = N-Number(n)
		} else if (op == '/') {
			//DIVIDIR
			res = N/Number(n)
		} else if (op == '*') {
			//multiplicar(*)
			res = N*Number(n)
		}

		if (res.toString().length > 15 ) {
			visor.innerHTML = "[ERRO]"
			N =''
			n = ''
			alert('Desculpe, o resultado ultrapassa 15 algorismos, e por isso não pode ser analisado.')
		} else {
		 	visor.innerHTML = res
		 	n = res
		}
 }

function limpar() {
	N =''
	n = ''
	visor.innerHTML = ''
}


/*COMPLETO E FUNCIONANDO!*/

		