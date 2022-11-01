
//login en la pagina de comunidad
//datos
const user = "admin";
const pass = "admin";
var ciclo = 1;//while de login
var i=0;//bloqueo

let Servidor = new Array();




//login

function loguearse(){
  while(ciclo === 1) //ciclo hasta ingresar correctamente
  {  
    let usuario = prompt("INGRESE EL USUARIO");
    let clave = prompt("INGRESE LA CLAVE");


    if (validacion(usuario,clave) ){
        pedidoServidor();
        ciclo=0;//clave correcta, sale del while

    }
    else{
       if(i===2)
       {
        alert("Usuario Bloqueado por intentos fallidos \n Intente nuevamente en unos minutos");
        i=0;
       }
        alert("Ingrese nuevamente");
        i++;
    }

  } 
}


//validacion de datos ingresados
function validacion (usuario,clave){

    if(usuario === user && clave===pass)
    return true;

    else{
        if(usuario === user && clave!= pass){
        alert("clave incorrecta");
        return false;
        }
        if(clave=== pass && usuario != user)
        {
         alert("usuario incorrecto");
          return false;
        }
    }

}


//pedidos de servidores

function pedidoServidor()
{

let solicitud = "";
let finalizar_solicitud = false;


while(!finalizar_solicitud)
{

    let codigo = prompt("Ingrese codigo de titulo \n 1-ARMA III\n 2-PROJECT ZOMBOID \n 3-HELL LET LOOSE \n4-READY OR NOT\n5-DEADSIDE\n Pulse cancelar para finalizar");
    let titulo = obtenerTitulo(codigo);

    if (titulo){
        console.log("Titulo anadido" +titulo);
        solicitud += "\n " + titulo;
    }

    else{
        if (codigo == null)
        {
            finalizar_solicitud = true;
        }
        else
        {
            alert("seleccione un titulo valido");
        }
    }

}
    if(solicitud != "" )
    {
        let finalizacion = prompt (Servidor + "\n 1-confirmar la subscripcion\n 2-ELiminar elemento" );
        //let resp = confirm("Finalizar la subscripcion a:" +/*solicitud*/Servidor);
        if (finalizacion == 1){
            alert("Pronto te enviaremos el acceso");
        }
        else{
            eliminarELemento(Servidor);
        }
    }

}
function eliminarELemento(Servidor)
{
    let eliminar = prompt (Servidor + "\n Ingrese el numero de elemento a eliminar" );
    Servidor.splice(eliminar,1);
    alert ("Se elimino el elemento");
    alert (Servidor);
    alert("Pronto te enviaremos el acceso");

}

function obtenerTitulo (codigo)
{
    let titulo;
    switch(codigo)
    {
        case "1":
            titulo = "ARMA III";
            Servidor.push('ARMA III');
            console.log(Servidor);
            break;

        case "2":
            titulo = "PROJECT ZOMBOID";
            Servidor.push('PROJECT ZOMBOID');
            console.log(Servidor);
            break;

        case "3":
            titulo = " HELL LET LOOSE";
            Servidor.push('HELL LET LOOSE');
            console.log(Servidor);
            break;

        case "4":
            titulo = "READY OR NOT";
            Servidor.push('READY OR NOT');
            console.log(Servidor);
            break;
        
        case "5":
            titulo ="DEADSIDE";
            Servidor.push('DEADSIDE');
            console.log(Servidor);
            break;
        
        default:
            titulo = false;
    }

    return titulo;

}





loguearse();
