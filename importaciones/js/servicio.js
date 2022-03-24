
export async function consumirAPI(URI,TOKEN){

    let parametros={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,parametros)
    let respuestaFINAL=respuesta.json()

    return(respuestaFINAL)

}

