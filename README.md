# microweb
# Proyecto 2: MicroRed - Mini Red Social

## Descripción General

MicroRed es una red social básica estilo Facebook o Instagram donde los usuarios pueden crear un perfil, publicar contenido, dar likes, comentar y ver un muro de publicaciones. El objetivo es dominar el desarrollo de interfaces, el manejo de datos persistentes y la interacción completa cliente-servidor.

---

## Fases del Proyecto

### FASE 1: Configuración Inicial
- Crear repositorio con estructura de carpetas: HTML, CSS, JS, db.json
- Instalar y correr JSON Server (`users`, `posts`, `likes`, `comments`)
- Crear archivo README.md con objetivos, estructura y guía
- Aplicar Gitflow desde el inicio

### FASE 2: Login y Autenticación
- Formulario de login básico con validación contra `users` en db.json
- Guardar sesión en `localStorage`
- Redirección al muro tras iniciar sesión

### FASE 3: Muro de Publicaciones (READ)
- Mostrar lista de posts ordenados del más reciente al más antiguo
- Mostrar autor, contenido, imagen, fecha

### FASE 4: Crear Publicaciones (CREATE)
- Formulario para crear post (texto + URL de imagen)
- Enviar a JSON Server con `POST /posts`

### FASE 5: Likes y Comentarios
- Dar like a publicaciones (`POST /likes`)
- Mostrar cantidad de likes por post
- Agregar y mostrar comentarios (`POST /comments`)

### FASE 6: Perfil de Usuario
- Mostrar info del usuario logueado
- Permitir editar datos (nombre, bio, avatar)
- Mostrar publicaciones propias filtradas

### FASE 7: Editar y Eliminar Publicaciones
- Si el post es del usuario actual, mostrar opciones de editar y eliminar
- Usar `PATCH` y `DELETE` con confirmaciones y validaciones

### FASE 8: Buscador y Filtros
- Campo de búsqueda por texto del post o nombre de usuario
- Filtros por fecha o cantidad de likes

### FASE 9: Modo Oscuro y Accesibilidad
- Botón para activar modo oscuro (guardar estado en localStorage)
- Accesibilidad con contraste, teclado y etiquetas adecuadas

### FASE 10: Estadísticas del Usuario
- Mostrar cantidad de posts, promedio de likes y número de comentarios recibidos

### FASE FINAL: Refactor, Documentación y Mejora Visual
- Separar funciones reutilizables
- Mejorar diseño visual con animaciones suaves
- Incluir capturas y explicación del flujo en README.md
