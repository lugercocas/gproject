
const customMenu = `

<ul>
    <li><a href="#">Archivo</a>
        <ul>
        <li><a href="#">Nuevo</a></li>
        <li><a href="#">Abrir</a></li>
        <li><a href="#">Guardar</a></li>
        <li><a href="#">Salir</a></li>
        </ul>
    </li>
    <li><a href="#">Proyecto</a>
        <ul>
        <li><a href="#">Nueva tarea</a></li>
        <li><a href="#">Nueva fase</a></li>
        <li><a href="#">Nueva dependencia</a></li>
        </ul>
    </li>
    <li><a href="#">Editar</a>
        <ul>
        <li><a href="#">Copiar</a></li>
        <li><a href="#">Pegar</a></li>
        <li><a href="#">Deshacer</a></li>
        <li><a href="#">Rehacer</a></li>
        </ul>
    </li>
    <li><a href="#">Ayuda</a>
        <ul>
        <li><a href="#">Acerca de</a></li>
        </ul>
    </li>
</ul>

`
document.querySelector('.menu').insertAdjacentHTML('afterbegin', customMenu);

