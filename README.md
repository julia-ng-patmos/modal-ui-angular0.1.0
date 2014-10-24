modal-ui-angular0.1.0  - raining code
=====================================

Ventana Modal hecha con angular y la libreria de bootstrap angular-ui

** Atributo obligatorio
-- Atributo Opcional

Modal

** Esta etiqueta indica el tipo de ventana modal que sera generada
type
  -> button
      genera un codigo html que cra  un boton desde el cual ser disparado la venatana modal
        <div eon-modal="" type="button">Modal Boton</div>
  -> link
      crea un enlace para poder lanzarlo desde un atributo <a href="#">Some code</a>
        <div eon-modal="" type="link">Modal Enlace</div>
  -> video
      genera una ventana modal con un video incrustado
        <div eon-modal="" type="video">Modal Video</div>

** Ahora otra etiqueta es la de contenido dira que sera mostrado al usuario
  -> publicidad
    este objeto nos dara una vista que dara una imagen
      <div eon-modal="" type="button" contenido="publicidad">Modal Boton</div>
  
  Nota en el tipo video no hay contenido este es cambiado por la etiqueta url en la cual se manda la url INTERNA del video
    <div eon-modal="" type="video" url="statics/video/video1">Modal Video</div>
    

Popover
  
** 
