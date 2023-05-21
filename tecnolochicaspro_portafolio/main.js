let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 85,
});
 

typewriter
  .pauseFor(550)
  .typeString('Estudiante de Ingeniería Automotriz y Programadora.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
