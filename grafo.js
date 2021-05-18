
let ciclos = 0;
function addVertice(matrizDeAdj,de,para){
    //inicializa a matriz como um Array vazio
    if(!matrizDeAdj[de]){
        matrizDeAdj[de] = []
    }
    if(!matrizDeAdj[para]){
        matrizDeAdj[para] = []
    }

    //evita arestas duplicadas na matriz
    if(matrizDeAdj[de].find(v => v == para ) == undefined){
        matrizDeAdj[de].push(para);
    }
    if(matrizDeAdj[para].find(v => v == de) == undefined){
        matrizDeAdj[para].push(de);
    }
}
	


function buscaCiclo (grafo){
    let visitados = new Array(grafo.length).fill(false);

    grafo.forEach((vertice, index)=>{
        console.log( ' Visitando (', String.fromCharCode(65 +index), ')')

        visitados[index] == false ? vertice.forEach((ligacao)=>{
            let conjunto2 = grafo[ligacao]
            if (visitados[ligacao] == false){
                conjunto2.forEach((v) => {
                    let achou;
                    if (visitados[index] == false ) {
                        if(!visitados[v] ){

                            achou = grafo[v].find((v2) =>  v2 == index);
                        }

                        if (achou != undefined ){
                            console.log( ' NOVO CICLO! (', String.fromCharCode(65 +index), '->', String.fromCharCode(65 +ligacao), '->' , String.fromCharCode(65 + v), '->',  String.fromCharCode(65 + achou), ')');
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

addVertice(matrizDeAdj, 0, 1); // A conectado ao vértice B
addVertice(matrizDeAdj, 0, 3); // A conectado ao vértice D
addVertice(matrizDeAdj, 0, 4); // A conectado ao vértice E

addVertice(matrizDeAdj, 1, 0); // B conectado ao vértice A
addVertice(matrizDeAdj, 1, 2); // B conectado ao vértice C
addVertice(matrizDeAdj, 1, 3); // B conectado ao vértice D
addVertice(matrizDeAdj, 1, 4); // B conectado ao vértice E

addVertice(matrizDeAdj, 2, 1); // C conectado ao vértice B
addVertice(matrizDeAdj, 2, 3); // C conectado ao vértice D
addVertice(matrizDeAdj, 2, 4); // C conectado ao vértice E
addVertice(matrizDeAdj, 2, 5); // C conectado ao vértice F

addVertice(matrizDeAdj, 3, 0); // D conectado ao vértice A
addVertice(matrizDeAdj, 3, 1); // D conectado ao vértice B
addVertice(matrizDeAdj, 3, 2); // D conectado ao vértice C
addVertice(matrizDeAdj, 3, 5); // D conectado ao vértice F

addVertice(matrizDeAdj, 4, 0); // E conectado ao vértice A
addVertice(matrizDeAdj, 4, 1); // E conectado ao vértice B
addVertice(matrizDeAdj, 4, 2); // E conectado ao vértice C
addVertice(matrizDeAdj, 4, 5); // E conectado ao vértice F

addVertice(matrizDeAdj, 5, 2); // F conectado ao vértice C
addVertice(matrizDeAdj, 5, 3); // F conectado ao vértice D
addVertice(matrizDeAdj, 5, 4); // F conectado ao vértice E

console.log( 'MATRIZ: \n', matrizDeAdj );
buscaCiclo(matrizDeAdj);
	
