window.onload = () => {


    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');
    // enviarMensaje = document.querySelectorAll('boton');
    
    
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{9,11}$/, // 9 a 11 numeros.
    }
    
    
    
    
    // El formulario se envía con sólo estar completos correctamente el nombre y el correo (únicos campos obligatorios)
    const campos = {
        nombre: false,
        correo: false,
    }
    
    
    
    
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
    break;
            
            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');
    break;
            
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono');
    break;
            }
        }
    
    
    const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');	
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.add('fa-circle-check');
            document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.remove('fa-circle-xmark');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos['nombre'] = true;
            campos['correo'] = true;
        }	else{
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.remove('fa-circle-check');
            document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.add('fa-circle-xmark');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos['nombre'] = false;
            campos['correo'] = false;
        }
    }
    
    
    
    
    inputs.forEach((input) =>{
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
        });
    
    
    
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
    
        if(campos.nombre && campos.correo){
            formulario.reset();
        
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);
    
    
            document.querySelectorAll('formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
            });
        }	else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }	
    });
    }
        