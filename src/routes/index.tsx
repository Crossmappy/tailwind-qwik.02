import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
<div class="lg:flex lg:h-full lg:max-w-7xl lg:mx-auto">
    <img class="h-64 w-full 
                  sm:h-72 
                  md:h-96 object-cover
                  lg:order-last lg:w-1/2 lg:h-full " src="../header.jpg" alt="Cine" width=" " height=" "/>
     
    <div class="text-center pt-8 mb-10 px-4 
                 lg:w-1/2 lg:pt-48 lg:mx-0">

     <h1 class="text-4xl text-gray-900 font-extrabold tracking-tight 
                sm:text-5xl   
                md:text-6xl">Mira mis peliculas 
     <span class="block text-blue-700">y series favoritas</span>
     </h1>

     <p class="text-lg text-gray-500 mt-3 max-w-md max-h-auto 
                sm:text-xl  
                md:mt-5 md:max-w-3xl">
      Reproduce en streaming todas las peliculas y series en tus dispositivos
     </p>

     <div class="mt-10">
        <a class="btn" href=" " >Empezar</a>
     </div>

    </div>
</div>


<ul class="mt-28 px-5  mx-auto sm:max-w-2xl md:mt-36 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 space-y-12 lg:space-y-0 ">
        
    <li class="px-3 py-5 rounded-md border border-purple-200 bg-red-50 lg:h-72">
        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 sm:h-full">
            <img src="../mr-robot.jpg" alt="Mr. Robot" class="shadow-lg rounded-lg aspect-[3/2] object-cover object-bottom sm:aspect-[3/4] sm:object-center" width=" " height=" " />
            <div class="space-y-4 sm:col-span-2 sm:flex sm:flex-col sm:relative">
                <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="">Mr. Robot</h3>
                    <p class="text-red-600">Serie</p>
                </div>
                <p class="text-gray-500 sm:line-clamp-5">Elliot Anderson es un joven y brillante programador con problemas para las relaciones sociales. Durante el día trabaja como técnico de ciberseguridad en una importante empresa informática y por la noche es un desinteresado justiciero cibernético, que será envuelto en una oscura trama.</p>

                <button class="btn px-3 py-1 self-start sm:absolute sm:bottom-0">Ver</button>
            </div>
        </div>
    </li>

    <li class="px-3 py-5 rounded-md border border-purple-200 bg-red-50 lg:h-72">
        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 sm:h-full">
            <img src="../the-it-crowd.jpg" alt="Los Informáticos" class="shadow-lg rounded-lg aspect-[3/2] object-cover object-bottom sm:aspect-[3/4] sm:object-center" width=" " height=" " />
            <div class="space-y-4 sm:col-span-2 sm:flex sm:flex-col sm:relative">
                <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="">Los Informáticos</h3>
                    <p class="text-red-600">Serie</p>
                </div>
                <p class="text-gray-500 sm:line-clamp-5">Ayudados por una jefa que no ha tocado el ordenador en su vida, dos cerebritos viven para la informática en el sótano de la empresa de un perfecto zopenco.</p>

                <button class="btn px-3 py-1 self-start sm:absolute sm:bottom-0 ">Ver</button>
            </div>
        </div>
    </li>

    <li class="px-3 py-5 rounded-md border border-purple-200 bg-red-50 lg:h-72">
        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 sm:h-full">
            <img src="../the-matrix-resurrections.jpg" alt="The Matrix Resurrections" class="shadow-lg rounded-lg aspect-[3/2] object-cover object-bottom sm:aspect-[3/4] sm:object-center" width=" " height=" " />
            <div class="space-y-4 sm:col-span-2 sm:flex sm:flex-col sm:relative">
                <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="">The Matrix Resurrections</h3>
                    <p class="text-red-600">Película</p>
                </div>
                <p class="text-gray-500 sm:line-clamp-5">Neo vive una vida normal y corriente en San Francisco mientras su terapeuta le prescribe pastillas azules. Hasta que Morfeo le ofrece la pastilla roja y vuelve a abrir su mente al mundo de Matrix.</p>

                <button class="btn px-3 py-1 self-start sm:absolute sm:bottom-0">Ver</button>
            </div>
        </div>
    </li>

    <li class="px-3 py-5 rounded-md border border-purple-200 bg-red-50 lg:h-72">
        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 sm:h-full">
            <img src="../the-social-network.jpg" alt="La Red Social" class="shadow-lg rounded-lg aspect-[3/2] object-cover object-bottom sm:aspect-[3/4] sm:object-center" height=" " width=" " />
            <div class="space-y-4 sm:col-span-2 sm:flex sm:flex-col sm:relative">
                <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="">La Red Social</h3>
                    <p class="text-red-600">Película</p>
                </div>
                <p class="text-gray-500 sm:line-clamp-5">Una noche de otoño del año 2003, Mark Zuckerberg (Jesse Eisenberg), alumno de Harvard y genio de la programación, se sienta delante de su ordenador y empieza a desarrollar una nueva idea: The Facebook. Lo que comenzó en la habitación de un colegio mayor pronto se convirtió en una revolucionaria red social.</p>

                <button class="btn px-3 py-1 self-start sm:absolute sm:bottom-0">Ver</button>
            </div>
        </div>
    </li>
</ul>




<div class="prose prose-blue py-20 px-5 mx-auto md:px0 
            lg:mt-24 lg:prose-lg">
    <h2>¿Qué es esto?</h2>
    <p class="lead">
      Esto es un servicio de streaming que ofrece una amplia variedad de <em>series</em>, <em>películas</em>, <em>títulos de anime</em>, <em>documentales</em> y otros contenidos premiados en miles de dispositivos conectados a internet.
    </p>

    <p>
      Puedes ver todo el contenido que quieras, cuando quieras y sin un solo anuncio por una tarifa mensual reducida. ¡Siempre hay algo nuevo que descubrir, y cada semana se añaden nuevas series y películas!
    </p>

    <figure>
      <img src="../tv-and-remote.jpg" alt="TV y mando" class="w-full"  width=" " height=" " />
      <figcaption>Incluso hay mandos a distancia que tienen un botón para acceder directamente a nuestra aplicación.</figcaption>
    </figure>

    <h2>¿Dónde lo puedo ver?</h2>
    <p>
      Disfruta donde quieras y cuando quieras en un número ilimitado de dispositivos. Inicia sesión con tu cuenta para disfrutar al instante de todo el contenido de desde tu ordenador personal o en cualquier dispositivo conectado a internet que ofrezca la aplicación, entre ellos:
    </p>

    <ul>
      <li>Smart TVs</li>
      <li>Móviles</li>
      <li>Tablets</li>
      <li>Reproductores multimedia de streaming</li>
      <li>Consolas de juegos</li>
    </ul>

    <h2>¿Cuánto cuesta?</h2>
    <p>Ofrecemos dos niveles de precios:</p>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Standard</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Precio</td>
          <td><strong>5 €</strong></td>
          <td><strong>10 €</strong></td>
        </tr>
        <tr>
          <td>Dispositivos simultáneos</td>
          <td>2</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Calidad de video</td>
          <td>HD</td>
          <td>Ultra HD</td>
        </tr>
      </tbody>
    </table>

    <h2>¿Cómo cancelo?</h2>
    <p>
      Somos flexibles. Sin contratos liosos ni compromisos. Puedes cancelar fácilmente tu cuenta en línea con tan solo dos clics. Sin cargos por cancelación: activa o cancela tu cuenta en cualquier momento.
    </p>

    <h2>Tengo algunas preguntas</h2>
    <p>
      Escríbenos a <a href="mailto:info@example.com">info@example.com</a> si tienes algún problema.
    </p>
    
    <h2>Registration</h2>

    <form action="#" class="flex flex-col space-y-5">
      <div>
        <label class="sr-only" for="email">Email</label>
        <input class="input"  type="email" name="email" id="email" placeholder="Email" />
      </div>

      <div>
        <label class="sr-only" for="password">Email</label>
        <input class="input" type="password" name="password" id="password" placeholder="Password" />
      </div>

      <button class="btn">Enviar</button>
    </form>
    
</div>



    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
