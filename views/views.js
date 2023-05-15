
function createProyectoListPage(proyectos) {
    let html = '<h2>Lista de Proyectos</h2>'
    html += '<ul>'

    for (let i = 0; i < proyectos.length; i++) {
        html += `<li>${proyectos[i].name} <a href="/proyectos/${proyectos[i]._id}">Ver</a> - <a href="/proyectos/edit/${proyectos[i]._id}">Editar</a> - <a href="/proyectos/delete/${proyectos[i]._id}">Borrar</a></li>`
    }

    html += '</ul>'

    return createPage('Lista de proyectos', html)
}

function createProyectoPage(proyecto) {
    let html = `<h2>${proyecto.name}</h2>`
    html += `<p>descripcion: ${proyecto.description}</p>`
    if(proyecto.link != ''){
        html += `<p>link: <a href="${proyecto.link}">${proyecto.link}</a></p>`
    }else{
        html += `<p>link: Sin link disponible</p>`
    }
    html += `<p>img: ${proyecto.img}</p>`
    html += `<p>Cliente: ${proyecto.cliente.nombre}</p> `
    html += `<p>tecnologias: `
    for (let i = 0; i < proyecto.technologies.length; i++) {
        if(i != 0 && i != proyecto.technologies.length - 1){
            html += ', '
        }
        if(i == proyecto.technologies.length - 1){
            html += ' y '
        }
        html += `${proyecto.technologies[i]}`
    }
    html += `</p>`

    return createPage(proyecto.name, html)
}

function createPage(title, content) {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<title>' + title + '</title></head><body>'

    html += '<h1><a href= "/#" >Repositorio de proyectos web</a></h1>'

    html += content

    html += '</body></html>'

    return html
}

function formProyectoNuevo(error) {
    let html = ''

    html += '<h2>Formulario de nuevo proyecto</h2>'

    if(error) {
        html += `<p>${error}</p>`
    }
    html += `
        <form action="/proyectos/nuevo" method="POST" enctype="apptication/x-www-form-urlencoded">
        <label for="name">Nombre del proyecto:</label>
        <input type="text" id="name" name="name">
      
        <label for="description">Descripción del proyecto:</label>
        <textarea id="description" name="description"></textarea>
      
        <label for="link">Link del proyecto:</label>
        <input type="text" id="link" name="link">
      
        <label for="technologies">Tecnologías utilizadas:</label>
        <input type="text" id="technologies" name="technologies">

        <label for="cleinte">Cliente:</label>
        <input type="text" id="cliente" name="cliente">
      
        <label for="section">Sección del proyecto:</label>
        <select id="section" name="section">
          <option value="">Seleccionar</option>
          <option value="mobile">Mobile</option>
          <option value="landing">Landing Page</option>
          <option value="webapp">Web App</option>
          <option value="ecommerce">e-Commerce</option>
          <option value="game">Juegos</option>
        </select>
      
        <button type="submit">Enviar</button>
      </form>
   `
    return createPage('Formulario de nuevo proyecto', html)
}

function editProjectPage(proyecto) {
    let html = ''

    html += '<h2>Formulario de edición de proyecto</h2>'

    html += `
        <form action="/proyectos/edit/${proyecto._id}" method="POST" enctype="apptication/x-www-form-urlencoded">
        <label for="name">Nombre del proyecto:</label>
        <input type="text" id="name" name="name" value="${proyecto.name}">
      
        <label for="description">Descripción del proyecto:</label>
        <textarea id="description" name="description">${proyecto.description}</textarea>
      
        <label for="link">Link del proyecto:</label>
        <input type="text" id="link" name="link" value="${proyecto.link}">
      
        <label for="technologies">Tecnologías utilizadas:</label>
        <input type="text" id="technologies" name="technologies" value="${proyecto.technologies}">
      
        <label for="section">Sección del proyecto:</label>
        <select id="section" name="section">
          <option value="${proyecto.section}">${proyecto.section}</option>
          <option value="mobile">Mobile</option>
          <option value="landing">Landing Page</option>
          <option value="webapp">Web App</option>
          <option value="ecommerce">e-Commerce</option>
          <option value="game">Juegos</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    `

    return createPage('Formulario de edición del proyecto', html)
}

export {
    createProyectoListPage,
    createProyectoPage,
    createPage,
    formProyectoNuevo,
    editProjectPage
}