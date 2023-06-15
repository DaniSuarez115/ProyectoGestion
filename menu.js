contenidoMenu.innerHTML += `
<ul class="nav nav-tabs" id="navId" role="tablist">
<li class="nav-item">
</li>
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Gestionar</a>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="index.html">Home</a>
        <a class="dropdown-item" href="listarEstudiante.html">Estudiante</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="listarProfesor.html">Profesor</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="listarGrupo.html">Grupo</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="listarCurso.html">Curso</a>
    </div>
</li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
<div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
<div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
<div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
<div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
</div>

<!-- (Optional) - Place this js code after initializing bootstrap.min.js or bootstrap.bundle.min.js -->
<script>
var triggerEl = document.querySelector('#navId a')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name
</script>
`;