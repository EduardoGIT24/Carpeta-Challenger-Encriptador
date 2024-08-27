
function encriptar() {
    var input = document.getElementById('miInput');
    var texto = document.getElementById('textoEn');
    var valor = input.value;

    // Validar que el texto contenga solo minúsculas y letras
    if (!/^[a-z\s]+$/.test(valor)) {
        showNotification('Por favor, ingrese solo letras minúsculas sin números ni caracteres especiales.');
        return;
    }

    // Crear un mapa de reemplazos
    var reemplazos = {
        'u': 'ufat',
        'o': 'ober',
        'i': 'imes',
        'e': 'enter',
        'a': 'ai'
    };

    // Reemplazar cada vocal de acuerdo al mapa
    var valorTransformado = valor.split('').map(char => {
        return reemplazos[char] || char;
    }).join('');

    // Actualiza el contenido del párrafo con el valor transformado
    texto.textContent = valorTransformado;
}

function desencriptar() {
    var input = document.getElementById('miInput');
    var texto = document.getElementById('textoEn');
    var valor = input.value;

    // Validar que el texto contenga solo minúsculas y letras
    if (!/^[a-z\s]+$/.test(valor)) {
        showNotification('Por favor, ingrese solo letras minúsculas sin números ni caracteres especiales.');
        return;
    }

    // Crear un mapa de reemplazos para la desencriptación
    var reemplazos = {
        'ufat': 'u',
        'ober': 'o',
        'imes': 'i',
        'enter': 'e',
        'ai': 'a'
    };

    // Reemplazar cada secuencia según el mapa
    var valorTransformado = valor;
    for (var clave in reemplazos) {
        if (reemplazos.hasOwnProperty(clave)) {
            var valorOriginal = reemplazos[clave];
            valorTransformado = valorTransformado.split(clave).join(valorOriginal);
        }
    }

    // Actualiza el contenido del párrafo con el valor transformado
    texto.textContent = valorTransformado;
}

function copiar() {
    var texto = document.getElementById('textoEn').textContent;

    // Usar la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(texto).then(function() {
        // Mostrar la notificación de éxito
        showNotification('Texto copiado al portapapeles!');
    }).catch(function(error) {
        // Mostrar la notificación de error
        showNotification('Error al copiar el texto.');
        console.error('Error al copiar el texto: ', error);
    });
}

function showNotification(message) {
    var notification = document.getElementById('notification');
    var notificationText = document.querySelector('.notification-text');

    notificationText.textContent = message; // Establece el mensaje de la notificación
    notification.classList.add('show'); // Muestra la notificación

    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show'); // Oculta la notificación
    }, 5000);
}
