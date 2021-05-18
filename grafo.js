
let ciclos = 0;
function addVertice(matrizDeAdj,de,para){
    if(!matrizDeAdj[de]){
        matrizDeAdj[de] = []
    }
    if(!matrizDeAdj[para]){
        matrizDeAdj[para] = []
    }

    matrizDeAdj[de].push(para);
    matrizDeAdj[para].push(de);
}
	


function buscaCiclo (grafo){
    let visitados = new Array(grafo.length).fill(false);

    grafo.forEach((vertice, index)=>{
        console.log( ' Visitando (', String.fromCharCode(65 +index), ')', visitados)

        visitados[index] == false ? vertice.forEach((ligacao)=>{
            let conjunto2 = grafo[ligacao]
            if (visitados[ligacao] == false){
                conjunto2.forEach((v) => {
                    let achou;
                    if (visitados[index] == false ) {
                        if(visitados[index] == false ){
                            console.log('iteração com ->', String.fromCharCode(65 + v), visitados[v] )
                            achou = grafo[v].find((v2) =>  v2 == index);
                        }
                        if (achou != undefined){
                            console.log( ' Atual (', String.fromCharCode(65 +index), '->', String.fromCharCode(65 +ligacao), '->' , String.fromCharCode(65 + v), '->',  String.fromCharCode(65 + achou), ') Gerando assim 1 ciclo', visitados[index]);
                            ciclos++;
                        }
                    }

                });
                visitados[index] = true;

            }

        }): undefined;

    });
    console.log('total de ciclos', ciclos)
}

// --------------
let matrizDeAdj = [];

addVertice(matrizDeAdj,0, 1);
addVertice(matrizDeAdj,0, 3);
addVertice(matrizDeAdj,0, 4);
addVertice(matrizDeAdj,1, 2);
addVertice(matrizDeAdj,1, 3);
addVertice(matrizDeAdj,1, 4);
addVertice(matrizDeAdj,2, 3);
addVertice(matrizDeAdj,2, 4);
addVertice(matrizDeAdj,2, 5);
addVertice(matrizDeAdj,3, 5);
addVertice(matrizDeAdj,4, 5);
matrizDeAdj.forEach((v, index) => {
    console.log("para " + String.fromCharCode(65 + index) + " conectado aos vértices " + v.map(to => String.fromCharCode(65 + to)))
});
buscaCiclo(matrizDeAdj);
	
