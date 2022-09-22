import HelloDev from "./HelloDev"
//Declarando o componente de função
function HelloWorld(){

    //retornando um componente html na função
    return(
        //componente html que será renderizado no browser
        <div>
            <p>
                <HelloDev/>
                Fala querid@! Quanto tempo!
            </p>
        </div>
    )

}

//Exportar o componente HelloWordl para ser consumido em outros componentes ou paginas
export default HelloWorld