import geopoliticsImg from "@/assets/article-geopolitics.jpg";
import societiesImg from "@/assets/article-societies.jpg";
import economyImg from "@/assets/article-economy.jpg";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: "geopolitica-nueva-era",
    title: "La Nueva Era Geopolítica: El Tablero de Ajedrez Global",
    excerpt: "Un análisis profundo sobre las fuerzas invisibles que realmente controlan el orden mundial y las alianzas secretas entre las grandes potencias.",
    content: `
## El Tablero de Ajedrez Global

En el escenario geopolítico actual, las narrativas oficiales raramente revelan la verdadera naturaleza de las relaciones de poder. Detrás de cada conflicto, cada alianza estratégica y cada crisis económica, existe una red de intereses ocultos que opera más allá del alcance del ojo público.

### Las Sombras del Poder

Las grandes potencias mundiales no son simplemente actores estatales que persiguen intereses nacionales. Son, en muchos casos, instrumentos de fuerzas más amplias y complejas: corporaciones transnacionales, instituciones financieras globales y organizaciones supranacionales que operan en las sombras del poder político visible.

### El Nuevo Orden Mundial

El concepto de un "Nuevo Orden Mundial" no es una teoría de conspiración marginal, sino una declaración explícita hecha por múltiples líderes mundiales a lo largo de las últimas décadas. La pregunta no es si existe tal proyecto, sino quién lo controla y hacia dónde nos dirige.

### La Red de Influencia

Las conexiones entre think tanks, fundaciones privadas, grupos de élite como Bilderberg, el Council on Foreign Relations y la Comisión Trilateral revelan una arquitectura de poder que trasciende las fronteras nacionales. Estas organizaciones no electas ejercen una influencia desproporcionada sobre la política global, la economía y los medios de comunicación.

### Conclusión

El verdadero poder geopolítico no reside en los parlamentos ni en los palacios presidenciales, sino en las salas de juntas de Wall Street, en las reuniones secretas de Davos y en los corredores de instituciones como el Banco Mundial y el FMI. Comprender esto es el primer paso para ver el mundo tal como realmente es, no como nos lo presentan.
    `,
    image: geopoliticsImg,
    category: "Geopolítica",
    date: "15 de Abril, 2025",
    author: "Agenda33"
  },
  {
    id: "sociedades-secretas-poder",
    title: "Sociedades Secretas: Los Arquitectos del Poder Oculto",
    excerpt: "Desde la masonería hasta los Skull & Bones, exploramos las organizaciones secretas que han moldeado la historia y continúan influyendo en el presente.",
    content: `
## Los Arquitectos del Poder Oculto

A lo largo de la historia, las sociedades secretas han sido vehículos de poder e influencia. Lejos de ser meras organizaciones fraternales, muchas de estas instituciones han desempeñado roles cruciales en revoluciones, guerras y transformaciones políticas fundamentales.

### La Masonería y su Influencia

La francmasonería, con sus raíces en los gremios de constructores medievales, se transformó en una red global de influencia política y económica. Numerosos líderes revolucionarios, padres fundadores de naciones y figuras de poder han sido masones confirmados.

### Skull & Bones y la Elite de Yale

La sociedad Skull & Bones de la Universidad de Yale ha producido un número desproporcionado de presidentes, secretarios de estado, directores de la CIA y magnates de Wall Street. ¿Coincidencia o diseño?

### Bohemian Grove: El Club de los Poderosos

Cada verano, la élite global se reúne en los bosques del norte de California para rituales secretos y networking de alto nivel. Políticos, CEOs y figuras mediáticas se congregan en un ambiente donde, según sus propias palabras, "las telarañas del cuidado mundano" son dejadas atrás.

### El Círculo Interno del Poder

Estas organizaciones no son simplemente clubes sociales de élite. Son espacios donde se forjan alianzas, se toman decisiones que afectan a millones y se perpetúa una visión particular del orden mundial.
    `,
    image: societiesImg,
    category: "Sociedades Secretas",
    date: "8 de Abril, 2025",
    author: "Agenda33"
  },
  {
    id: "economia-oculta-control",
    title: "La Economía Oculta: Dinero, Deuda y Control Global",
    excerpt: "El sistema financiero global opera bajo principios que benefician a una élite bancaria internacional. Desentrañamos los mecanismos de control económico.",
    content: `
## Dinero, Deuda y Control Global

El sistema financiero moderno es, en esencia, un mecanismo de control. Desde la creación de los bancos centrales hasta el abandono del patrón oro, cada transformación ha consolidado el poder en manos de una élite financiera cada vez más concentrada.

### La Creación del Dinero de la Nada

Los bancos comerciales crean dinero literalmente de la nada a través del sistema de reserva fraccionaria. Cuando un banco otorga un préstamo, no está prestando el dinero de los depositantes, sino creando nuevo dinero en forma de deuda. Este mecanismo, poco comprendido por el público general, es fundamental para entender cómo funciona el poder financiero.

### La Deuda como Instrumento de Control

Naciones enteras están atrapadas en ciclos de deuda perpetua con instituciones como el FMI y el Banco Mundial. Estos préstamos vienen acompañados de "condiciones" que obligan a los países a implementar políticas de austeridad, privatizaciones y reformas económicas que benefician a los acreedores internacionales a expensas de la población local.

### Los Bancos Centrales: ¿Independientes o Privados?

La Reserva Federal de Estados Unidos, el Banco Central Europeo y otros bancos centrales importantes operan con una "independencia" que los aísla del control democrático. Sin embargo, están profundamente conectados con los intereses de la banca privada internacional.

### Criptomonedas: ¿Libertad o Nueva Jaula?

Las criptomonedas fueron presentadas como una alternativa descentralizada al sistema financiero tradicional. Sin embargo, la creciente regulación, la concentración de Bitcoin en pocas manos y el desarrollo de monedas digitales de bancos centrales (CBDCs) sugieren que el sistema está siendo cooptado o reemplazado por una versión aún más controlable.

### Conclusión

El dinero no es neutral. Es un instrumento de poder, y quienes controlan su creación y distribución controlan, en última instancia, la economía global y, por extensión, la política y la sociedad.
    `,
    image: economyImg,
    category: "Economía Oculta",
    date: "1 de Abril, 2025",
    author: "Agenda33"
  }
];

export const categories = [
  "Todos",
  "Geopolítica",
  "Sociedades Secretas",
  "Economía Oculta",
  "Tecnología de Control",
  "Medios y Propaganda"
];
