async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("No posee una conversación abierta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
SHREK

Escrita por

William Steig & Ted Elliott




SHREK
Había una vez,
una encantadora princesa.
Pero estaba condenada por un
terrible hechizo que solo
podía romperse con el beso del
verdadero amor.
La había encerrado en un castillo
que vigilaba un horrible dragón
que escupía fuego.
Muchos valientes caballero se habían
intentado liberarla de esa sombría prisión,
pero ninguno lo habia logrado.
Y custodiada por el dragón esperaba,
en el último cuarto de la torre más alta,
a su primer amor, el primer beso del verdadero amor. (risas)
Ajaja, sí, como si estas cosas pasaran, esto es pura mie... (tira del inodoro)

Allstar - por Smashmouth empieza a sonar, mientras Shrek hace
su rutina diaria. Mientras en un pueblo cercano, los aldeanos se juntan
para ir tras el ogro.

NOCHE - CERCA DE LA CASA DE SHREK

HOMBRE1
Debe estar adentro

HOMBRE2
Muy bien, ¡Vamos tras él!

HOMBRE1
Espera... ¿Sabes lo que esa cosa podría hacerte?

HOMBRE3
Sí, si te pisa te dejará como calcomanía

Shrek se escabulle detrás de ellos y ríe.

SHREK
Sí, en realidad eso haría un gigante.

HOMBRES
¡Aaaahhh!

SHREK
Los ogros son mucho peor, ellos se hacen
trajes con la piel que les quitan,
se comen su hígado, extraen lo gelatinoso
de sus ojos. Sabe muy bien con pan tostado.

HOMBRE1
¡Atrás, atrás, bestia! Si te acercas...
(mueve la antorcha hacia Shrek.)

Shrek tranquilamente se lame sus dedos y apaga la antorcha.

HOMBRE1
Bien...

Los hombres retrodecen de él. Shrek ruge extremadamente fuerte
y largo, haciendo que los hombres griten asustados
y su aliento apaga todas las demás antorchas hasta que los
hombres quedan en la oscuridad.

SHREK
Esta es la parte en la que salen corriendo.
(Los hombres luchan por escapar. Él ríe.) 
¡Y no se acerquen! (mira abajo y recoge
un cartel. Lo lee.) "Se buscan.
Recompensa por criaturas de cuentos de hadas."(Él suspira y 
tira el cartel encima del hombro.)

EL DIA SIGUIENTE

Hay una fila de criaturas de cuentos de hadas. El jefe de la guardia
está sentado en una mesa pagando a la gente por traerle las criaturas
de los cuentos de hadas. Hay jaulas por todos lados. Algunas de las
personas en la fila son Peter Pan, quién lleva a Tinkerbell en una jaula,
Gepetto quién lleva a Pinocho y un granjero que lleva a los tres cerditos.

GUARDIA
¡Dame esa escoba! No volverás a volar.

JEFE DE LA GUARDIA
20 monedas de plata por la bruja, que pase el siguiente.

GUARDIA
¡Camina!

OSO PEQUEÑO
(llorando) Esta jaula está muy pequeña.

BURRO
Por favor no me dejes, ya no seré tan burro.
Estudiaré, dame otra oportunidad.

ANCIANA
Ya cállate (tira de su cuerda)

BURRO
Ohhhh!

JEFE DE LA GUARDIA
¡Siguiente! ¿Qué me traes?

GEPETTO
A este títere de madera.

PINOCCHO
No soy un títere, soy un niño de verdad. (le crece la nariz)

JEFE DE LA GUARDIA
Cinco chelines por el juguete poseído.
Llevenselo

PINOCCHO
¡Papi, por favor, no me dejes con ellos, ayudame!

Gepetto toma el dinero y se va. La anciana avanza hacia
la mesa.

JEFE DE LA GUARDIA
¡Siguiente! ¿Qué me traes?

ANCIANA
Señor, yo traigo un burro que habla (tira nuevamente de la cuerda)

JEFE DE LA GUARDIA
Bien, te daré diez chelines si puedes probarlo

ANCIANA
Oh, anda burrito, dile algo.

Burro solo la mira.

JEFE DE LA GUARDIA
¿Bien?

ANCIANA
Oh, es que está un poco nervioso... Es una
verdadera maravilla... ¡Habla burro cabeza
de chorlito! ¡Habla!

JEFE DE LA GUARDIA
Basta, ya oí suficiente ¡Guardias!

ANCIANA
No, no, no, si habla, en serio (pretende ser el burro)
Puedo hablar, me encanta hablar, soy la criatura más parlanchina
que has visto.

JEFE DE LA GUARDIA
Quitenla de mi vista.

OLD WOMAN
No, no, lo juro ¡Sueltenme!

Los guardias sujetan a la anciana y ella lucha contra ellos. Una de sus
piernas sale volando y patea a Tinkerbell fuera de las manos de Peter Pan,
y su jaula cae en la cabeza de Burro. Él se rocia con polvo de hada y empieza
a volar.

BURRO
Oigan! ¡Puedo volar!

PETER PAN
¡Puede volar!

LOS 3 PEQUEÑOS CERDITOS
¡Puede volar!

JEFE DE LA GUARDIA
¡Puede hablar!

BURRO
¡Jaja, así es tonto! Ahora soy un burro que habla
y vuela ¿Han visto como su dinero vuela,
o a Caperucita y la abuela? Pero a que nunca
han visto como un burro vuela ¡Jajajaja!
(el polvo de hada empieza a desaparecer) Oh-oh.
(empieza a caerse hacia el suelo)

Se cae en el suelo con un gran estruendo.

JEFE DE LA GUARDIA
¡Atrapenlo! (Burro empieza a correr.)
¡Que no escape!

GUARDIAS
¡Que no escape! ¡Por acá! ¡Si señor!

Burro sigue corriendo y finalmente choca con Shrek. Shrek se gira para ver
quién lo golpeó. Burro mira asustado por un momento, luego, ve a los guardias
yendo hacia él en el camino. Él se esconde rápidamente tras Shrek.

JEFE DE LA GUARDIA
¡Oye, ogro!

SHREK
¿Sí?

JEFE DE LA GUARDIA
Por ordenes de Lord Farquaad, estoy autorizado a ponerlos
bajo arresto y transportarlos a un lugar dónde podrán reinstalarse

SHREK
¡No me digas! ¿Tú y cuántos más?

Shrek mira tras el jefe de la guardia y él se gira y ve que
todos los otros guardias salieron corriendo. El guardia se
asusta y escapa. Shrek se ríe y vuelve a sus asuntos y camina
vuelta a su cabaña.

BURRO
¿Puedo decirte algo? ¡Increible reacción ante
tal situación, fantástico!

SHREK
¿Estás hablando con... migo? (se gira atrás 
y Burro desapareció, luego se gira nuevamente
y Burro aparece frente a él.)

BURRO
¡Claro! hablaba contigo, oyes, estuvistes enorme.
Esos cuates me querían como burro de carga, pero llegaste
así ¡BAM! patitas pa' que las quiero. Se jueron
de volada. Jue muy chistoso verlos correr.

SHREK
Genial. Que gusto.

BURRO
Ahh, que chido ser libre.

SHREK
Ahora, ¿Por qué no te vas a celebrar tu libertad
con tus amigos? ¿Hmm?

BURRO
Es, que, yo no tengo amigos, y no pienso ir
al bosque yo solito. ¡Hey, tengo una ideota!
me quedaré contigo. Tu eres verdederamente
una máquina de pelea, haremos pomada a cualquiera.

Shrek se gira mira a Burro por un momento antes de rugir muy
fuerte.

BURRO
Uy ¡Wow! eso si que asusta. Y si el
rugido no funciona tu mal aliento seguro
los desmaya. Necesitas unas pastillitas de mentas
¡porque el hocico te apesta! Traes el tufo
como cuando me eché unas fresas podridas.
(Shrek cubre la boca de burro pero este
sigue hablando. Shrek remueve su mano)
Hombre, pa' inflar un zeppelin con los gases
que me salieron por detrás.

SHREK
¡¿Por qué estás siguiendome?!

BURRO
Te diré porque. (empieza a cantar)
Porque toi' solito, no hay nadie aquí
a mi lado, no habrá problemas hoy,
de mí ya se han burlado. Amigos debes tener...

SHREK
¡Ya deja de cantar! Ahora entiendo porque no
tienes amigos.

BURRO
Wow. Solo un amigo dice la verdad tan cruda.

SHREK
Escucha, pequeño burro, mírame bien, ¿ya viste que soy?

BURRO
(Mira de abajo hacia arriba a Shrek) Eres...
¿Muy alto?

SHREK
¡Noooo, soy un ogro! Piensa, si te portas mal, el ogro
te va a comer, ¿eso no te molesta?

BURRO
Nones.

SHREK
¿De veras?

BURRO
De veritas, de veritas.

SHREK
Oh.

BURRO
Hasta me caes bien. ¿Cómo te llamas?

SHREK
Uh, Shrek.

BURRO
¿Shrek? ¿Sabes que me gusta de ti, Shrek?
que eres de los cuates a los que le vale un comino
los de los demás piensen de ti, eso es chido. Mis
respetos, eres buena bestia. (Ellos llegan a lo alto de la colina
dónde pueden ver la cabaña de Shrek)
¡Whoa! Mira eso. ¿Quién querría vivir en ese cuchitril?

SHREK
Ese cuchitril es mi hogar.

BURRO
¡Oh, es adorable y hermoso! Eres un gran decorador,
lo que alguien con talento puede hacer con poco
presupuesto. Oh, que linda piedra, un detalle
soberbio.

Burro ve un cartel que dice cuidado con el ogro.

BURRO
¿Cuidado con el ogro? No creo que tengas muchos amigos ¿o sí?

SHREK
Me gusta mi privacidad.

BURRO
Ay, a mi también. Es otra cosa que tenemos en común.
Odio cuando alguien está dando lata, le echas indirectas
y como no entiende pues no se va. Y luego el silencio
¿A poco no? (Silencio momentáneo) ¿Puedo quedarme?

SHREK
Uhh, ¿qué?

BURRO
¿Puedo quedarme aquí? porfis.

SHREK
(sarcasticamente) ¡Oh claro!

BURRO
¿De veras?

SHREK
No.

BURRO
¡Por favor, no quiero regresar! No sabes
que gacho es que te consideren un monstruo.
(pausa mientras él mira a Shrek)
Bueno, a lo mejor si. Por eso debemos estar unidos,
dejame quedarme ¿a que sí? porfis, porfis.

SHREK
¡De acuerdo, quedate! pero solo una noche.

BURRO
¡Oh, gracias! (entra corriendo a la cabaña)

SHREK
¿Qué? ¡No, no! (Burro se echa encima de una silla)

BURRO
¡Será tan divertido! nos desvelaremos contandonos
historias macabras de humanos y en la mañana,
yo preparo los tamales.

SHREK
¡Oh!

BURRO
¿En dónde, dormiré yo?

SHREK
(Irritado) ¡Afuera!

BURRO
Ah caray, que padre, digo, claro, no te conozco
ni tu a mi, asi que prefiero dormir ajuera ¿no?
buenas noches
(Shrek cierra la puerta de un portazo.) (suspiro) 
Ay, me gusta el aire libre, soy un burro,
pero si estoy solito me aburro... pero ya estoy
acostumbrado... toi solito, no hay nadie aquí a mi lado...

CABAÑA DE SHREK - NOCHE

Shrek se prepara la cena. Se sienta y enciende una vela hecha de cera
de oídos. Empieza a comer cuando escucha un ruido. Se levanta
rapidamente.

SHREK
(hacia Burro) ¿Qué no te dije que te quedaras afuera?

BURRO
(desde la ventana) Estoy ajuera.

Hayh otro ruido y Shrek se gira para encontrar la persona que hizo el ruido.
Ve varias sombras moviendose. Finalmente se gira y ve a los 3 ratones ciegos
sobre la mesa.

RATON CIEGO1
Muy bien chicos, es muy diferente a la granja
pero no hay de otra.

RATON CIEGO2
No es como en casa pero estaremos bien.

GORDO
(Rebotando en una babosa) La cama es cómoda.

SHREK
Te tengo. (Agarra un ratón, pero se escapa y
se apoya sobre el hombro de Shrek.)

GORDO
¡Encontre queso! (muerde la oreja de Shrek)

SHREK
¡Au!

GORDO
Esta duro y rancio.

RATON CIEGO1
¿Eres tú, gordo?

GORDO
¿Como lo supiste?

SHREK
¡Basta! (agarra a los 3 ratones)
¿Qué están haciendo en mi casa?
(Shrek es golpeado por detrás y suelta a los 3 ratones.) 
¡Hey! (Se voltea y ve a loos siete enanitos con Blancanieves
sobre la mesa) Ah, no, no, no. A la vieja muerta me la bajan
de la mesa.

DWARF
¿Dónde vamos a ponerla? La cama está ocupada.

SHREK
¿Ah?

Shrek va hacia su habitación y tira la cortina. El Lobo está
acostado en la cama. El lobo solo mira a Shrek.

LOBO
¿Qué?

SALTO DE TIEMPO

Shrek tiene agarrado al lobo por el collar y lo está arrastrando
hacia la puerta de la cabaña.

SHREK
Vivo en un pantano. Les pongo letreros.
Soy un ogro aterrador. ¿Qué tengo que hacer
para poder conservar mi privacidad?
(Abre la puerta para tirar el lobo out y
ve todas las criaturas de los cuentos de hada
en su pantano) Oh, no. Oh, no. ¡Noooooooo!

Los 3 osos están sentados alrededor de una fogata. El flautista
de Hamelín está tocando su flauta y las ratas corren hacia él.,
algunos elfos están dirigiendo el trafico así las hadas y brujas
pueden aterrizar... etc.

SHREK
¿Qué están haciendo en mi pantano?
(Se produce un gran eco y todos quedan en silencio.)

Se escuchan jadeos alrededor. Las 3 hadas se esconden dentro
de una carpa.

SHREK
¡Muy bien, salgan de aquí, fuera todos!
¡Muevanse, vamos! ¡Húscale!
(más enanos corren hacia la cabaña de Shrek)
¡No, no! ¡Ahí no, ahí no!
(Ponen seguro a la puerta) ¡Ay! (Se gira
a mirar a burro)

BURRO
A mí ni me veas, yo no los invité.

PINOCCHO
Ya sabemos que nadie nos invitó.

SHREK
¿Qué?

PINOCCHO
Nos obligaron a venir aquí.

SHREK
(asombrado) ¿Pero quién?

PEQUEÑO CERDITO
Lord Farquaad. Bufo, y sopló, y luego...
Firmó un aviso de desalojo.

SHREK
(suspiro fuerte) Ah, entiendo. ¿Quién sabe en
dónde vive ese tal Farquaad?

Todos se miran pero nadie responde.

BURRO
Oh, yo sé, yo sé dónde vive.

SHREK
¿Hay algún otro que sepa dónde encontrarlo?
¿Alguien lo sabe?

BURRO
¡Yo! ¡Yo!

SHREK
¿Alguien?

BURRO
¡Yo sé! ¡Yo sé! ¡Preguntame, preguntame!

SHREK
(suspiro) Ay, de acuerdo. Que otra.
Atención a todas las criaturas de cuentos
de hadas. Ni se acomoden. Aquí ninguno es
oficialmente bienvenido. Escuchen, voy a ir
a ese tal Farquaad justo ahora para que salgan
de mis tierras y regrese cada quién a su cuento.
(Pausa. Luego la multitud se vuelve loca y aplaude.)
Oh... noo... (hacia Burro) 
Tú, tu vendrás conmigo.

BURRO
Sí señor, eso es lo que quería escuchar.
Shrek y Burro, dos amigos que van en busca
de una gran aventura, ¡Qué chido!

BURRO
(cantando) Al camino voy, ¡Canta conmigo Shrek!,
no puedo esperar, al camino voy

SHREK
¿Qué fue lo que te dije sobre cantar?

BURRO
¿Puedo chiflar?

SHREK
No.

BURRO
¿Y si la tarareo?

SHREK
Está bien. Tararea.

Burro empieza a tararear 'Al camino voy'.

DULOC - COCINA

A masked man is torturing the Gingerbread Man. He's continually 
dunking him in a glass of milk. Lord Farquaad walks in.

FARQUAAD
That's enough. He's ready to talk.


The Gingerbread Man is pulled out of the milk and slammed down 
onto a cookie sheet. Farquaad laughs as he walks over to the 
table. However when he reaches the table we see that it goes 
up to his eyes. He clears his throat and the table is lowered.


FARQUAAD
(he picks up the Gingerbread Man's legs 
and plays with them) Run, run, run, 
as fast as you can. You can't catch 
me. I'm the gingerbread man.

GINGERBREAD MAN
You are a monster.

FARQUAAD
I'm not the monster here. You are. You 
and the rest of that fairy tale trash, 
poisoning my perfect world. Now, tell 
me! Where are the others?

GINGERBREAD MAN
Eat me! (He spits milk into Farquaad's 
eye.)

FARQUAAD
I've tried to be fair to you creatures. 
Now my patience has reached its end! 
Tell me or I'll...(he makes as if to 
pull off the Gingerbread Man's buttons)


GINGERBREAD MAN
No, no, not the buttons. Not my gumdrop 
buttons.

FARQUAAD
All right then. Who's hiding them?


GINGERBREAD MAN
Okay, I'll tell you. Do you know the 
muffin man?

FARQUAAD
The muffin man?

GINGERBREAD MAN
The muffin man.

FARQUAAD
Yes, I know the muffin man, who lives 
on Drury Lane?

GINGERBREAD MAN
Well, she's married to the muffin man.


FARQUAAD
The muffin man?

GINGERBREAD MAN
The muffin man!

FARQUAAD
She's married to the muffin man.

The door opens and the Head Guard walks in.

HEAD GUARD
My lord! We found it.

FARQUAAD
Then what are you waiting for? Bring 
it in.

More guards enter carrying something that is covered by a sheet. 
They hang up whatever it is and remove the sheet. It is the Magic 
Mirror.

GINGERBREAD MAN
(in awe) Ohhhh...

FARQUAAD
Magic mirror...

GINGERBREAD MAN
Don't tell him anything! (Farquaad picks 
him up and dumps him into a trash can 
with a lid.) No!

FARQUAAD
Evening. Mirror, mirror on the wall. 
Is this not the most perfect kingdom 
of them all?

MIRROR
Well, technically you're not a king.


FARQUAAD
Uh, Thelonius. (Thelonius holds up a 
hand mirror and smashes it with his 
fist.) You were saying?

MIRROR
What I mean is you're not a king yet. 
But you can become one. All you have 
to do is marry a princess.

FARQUAAD
Go on.

MIRROR
(chuckles nervously) So, just sit back 
and relax, my lord, because it's time 
for you to meet today's eligible bachelorettes. 
And here they are! Bachelorette number 
one is a mentally abused shut-in from 
a kingdom far, far away. She likes sushi 
and hot tubbing anytime. Her hobbies 
include cooking and cleaning for her 
two evil sisters. Please welcome Cinderella. 
(shows picture of Cinderella) Bachelorette 
number two is a cape-wearing girl from 
the land of fancy. Although she lives 
with seven other men, she's not easy. 
Just kiss her dead, frozen lips and 
find out what a live wire she is. Come 
on. Give it up for Snow White! (shows 
picture of Snow White) And last, but 
certainly not last, bachelorette number 
three is a fiery redhead from a dragon-guarded 
castle surrounded by hot boiling lava! 
But don't let that cool you off. She's 
a loaded pistol who likes pina colads 
and getting caught in the rain. Yours 
for the rescuing, Princess Fiona! (Shows 
picture of Princess Fiona) So will it 
be bachelorette number one, bachelorette 
number two or bachelorette number three?


GUARDS
Two! Two! Three! Three! Two! Two! Three!


FARQUAAD
Three? One? Three?

THELONIUS
Three! (holds up 2 fingers) Pick number 
three, my lord!

FARQUAAD
Okay, okay, uh, number three!

MIRROR
Lord Farquaad, you've chosen Princess 
Fiona.

FARQUAAD
Princess Fiona. She's perfect. All I 
have to do is just find someone who 
can go...

MIRROR
But I probably should mention the little 
thing that happens at night.

FARQUAAD
I'll do it.

MIRROR
Yes, but after sunset...

FARQUAAD
Silence! I will make this Princess Fiona 
my queen, and DuLoc will finally have 
the perfect king! Captain, assemble 
your finest men. We're going to have 
a tournament. (smiles evilly)

DuLoc Parking Lot - Lancelot Section

Shrek and Donkey come out of the field that is right by the parking 
lot. The castle itself is about 40 stories high.

BURRO
But that's it. That's it right there. 
That's DuLoc. I told ya I'd find it.


SHREK
So, that must be Lord Farquaad's castle.


BURRO
Uh-huh. That's the place.

SHREK
Do you think maybe he's compensating 
for something? (He laughs, but then 
groans as Donkey doesn't get the joke. 
He continues walking through the parking 
lot.)

BURRO
Hey, wait. Wait up, Shrek.

MAN
Hurry, darling. We're late. Hurry.


SHREK
Hey, you! (The attendant, who is wearing 
a giant head that looks like Lord Farquaad, 
screams and begins running through the 
rows of rope to get to the front gate 
to get away from Shrek.) Wait a second. 
Look, I'm not gonna eat you. I just 
- - I just - - (He sighs and then begins 
walking straight through the rows. The 
attendant runs into a wall and falls 
down. Shrek and Donkey look at him then 
continue on into DuLoc.)

DULOC

They look around but all is quiet.

SHREK
It's quiet. Too quiet. Where is everybody?


BURRO
Hey, look at this!

Donkey runs over and pulls a lever that is attached to a box 
marked 'Information'. The music winds up and then the box doors 
open up. There are little wooden people inside and they begin 
to sing.

WOODEN PEOPLE
Welcome to DuLoc such a perfect town


Here we have some rules

Let us lay them down

Don't make waves, stay in line

And we'll get along fine

DuLoc is perfect place

Please keep off of the grass

Shine your shoes, wipe your... face

DuLoc is, DuLoc is

DuLoc is perfect place.

Suddenly a camera takes Donkey and Shrek's picture.

BURRO
Wow! Let's do that again! (makes ready 
to run over and pull the lever again)


SHREK
(grabs Donkey's tail and holds him still) 
No. No. No, no, no! No.

They hear a trumpet fanfare and head over to the arena.

FARQUAAD
Brave knights. You are the best and 
brightest in all the land. Today one 
of you shall prove himself...

As Shrek and Donkey walk down the tunnel to get into the arena 
Donkey is humming the DuLoc theme song.

SHREK
All right. You're going the right way 
for a smacked bottom.

BURRO
Sorry about that.

FARQUAAD
That champion shall have the honor - 
- no, no - - the privilege to go forth 
and rescue the lovely Princess Fiona 
from the fiery keep of the dragon. If 
for any reason the winner is unsuccessful, 
the first runner-up will take his place 
and so on and so forth. Some of you 
may die, but it's a sacrifice I am willing 
to make. (cheers) Let the tournament 
begin! (He notices Shrek) Oh! What is 
that? It's hideous!

SHREK
(turns to look at Donkey and then back 
at Farquaad) Ah, that's not very nice. 
It's just a donkey.

FARQUAAD
Indeed. Knights, new plan! The one who 
kills the ogre will be named champion! 
Have it him!

MEN
Get him!

SHREK
Oh, hey! Now come on! Hang on now. (bumps 
into a table where there are mugs of 
beer)

CROWD
Go ahead! Get him!

SHREK
(holds up a mug of beer) Can't we just 
settle this over a pint?

CROWD
Kill the beast!

SHREK
No? All right then. (drinks the beer) 
Come on!

He takes the mug and smashes the spigot off the large barrel 
of beer behind him. The beer comes rushing out drenching the 
other men and wetting the ground. It's like mud now. Shrek slides 
past the men and picks up a spear that one of the men dropped. 
As Shrek begins to fight Donkey hops up onto one of the larger 
beer barrels. It breaks free of it's ropes and begins to roll. 
Donkey manages to squish two men into the mud. There is so much 
fighting going on here I'm not going to go into detail. Suffice 
to say that Shrek kicks butt.

BURRO
Hey, Shrek, tag me! Tag me!

Shrek comes over and bangs a man's head up against Donkeys. Shrek 
gets up on the ropes and interacts with the crowd.

SHREK
Yeah!

A man tries to sneak up behind Shrek, but Shrek turns in time 
and sees him.

WOMAN
The chair! Give him the chair!

Shrek smashes a chair over the guys back. Finally all the men 
are down. Donkey kicks one of them in the helmet, and the ding 
sounds the end of the match. The audience goes wild.

SHREK
Oh, yeah! Ah! Ah! Thank you! Thank you 
very much! I'm here till Thursday. Try 
the veal! Ha, ha! (laughs)

The laughter stops as all of the guards turn their weapons on 
Shrek.

HEAD GUARD
Shall I give the order, sir?

FARQUAAD
No, I have a better idea. People of 
DuLoc, I give you our champion!

SHREK
What?

FARQUAAD
Congratulations, ogre. You're won the 
honor of embarking on a great and noble 
quest.

SHREK
Quest? I'm already in a quest, a quest 
to get my swamp back.

FARQUAAD
Your swamp?

SHREK
Yeah, my swamp! Where you dumped those 
fairy tale creatures!

FARQUAAD
Indeed. All right, ogre. I'll make you 
a deal. Go on this quest for me, and 
I'll give you your swamp back.

SHREK
Exactly the way it was?

FARQUAAD
Down to the last slime-covered toadstool.


SHREK
And the squatters?

FARQUAAD
As good as gone.

SHREK
What kind of quest?

Time Lapse - Donkey and Shrek are now walking through the field 
heading away from DuLoc. Shrek is munching on an onion.

BURRO
Let me get this straight. You're gonna 
go fight a dragon and rescue a princess 
just so Farquaad will give you back 
a swamp which you only don't have because 
he filled it full of freaks in the first 
place. Is that about right?

SHREK
You know, maybe there's a good reason 
donkeys shouldn't talk.

BURRO
I don't get it. Why don't you just pull 
some of that ogre stuff on him? Throttle 
him, lay siege to his fortress, grinds 
his bones to make your bread, the whole 
ogre trip.

SHREK
Oh, I know what. Maybe I could have 
decapitated an entire village and put 
their heads on a pike, gotten a knife, 
cut open their spleen and drink their 
fluids. Does that sound good to you?


BURRO
Uh, no, not really, no.

SHREK
For your information, there's a lot 
more to ogres than people think.

BURRO
Example?

SHREK
Example? Okay, um, ogres are like onions. 
(he holds out his onion)

BURRO
(sniffs the onion) They stink?

SHREK
Yes - - No!

BURRO
They make you cry?

SHREK
No!

BURRO
You leave them in the sun, they get 
all brown, start sproutin' little white 
hairs.

SHREK
No! Layers! Onions have layers. Ogres 
have layers! Onions have layers. You 
get it? We both have layers. (he heaves 
a sigh and then walks off)

BURRO
(trailing after Shrek) Oh, you both 
have layers. Oh. {Sniffs} You know, 
not everybody likes onions. Cake! Everybody 
loves cakes! Cakes have layers.

SHREK
I don't care... what everyone likes. 
Ogres are not like cakes.

BURRO
You know what else everybody likes? 
Parfaits. Have you ever met a person, 
you say, "Let's get some parfait," they 
say, "Hell no, I don't like no parfait"? 
Parfaits are delicious.

SHREK
No! You dense, irritating, miniature 
beast of burden! Ogres are like onions! 
And of story. Bye-bye. See ya later.


BURRO
Parfaits may be the most delicious thing 
on the whole damn planet.

SHREK
You know, I think I preferred your humming.


BURRO
Do you have a tissue or something? I'm 
making a mess. Just the word parfait 
make me start slobbering.

They head off. There is a montage of their journey. Walking through 
a field at sunset. Sleeping beneath a bright moon. Shrek trying 
to put the campfire out the next day and having a bit of a problem, 
so Donkey pees on the fire to put it out.

DRAGON'S KEEP

Shrek and Donkey are walking up to the keep that's supposed to 
house Princess Fiona. It appears to look like a giant volcano.


BURRO
(sniffs) Ohh! Shrek! Did you do that? 
You gotta warn somebody before you just 
crack one off. My mouth was open and 
everything.

SHREK
Believe me, Donkey, if it was me, you'd 
be dead. (sniffs) It's brimstone. We 
must be getting close.

BURRO
Yeah, right, brimstone. Don't be talking 
about it's the brimstone. I know what 
I smell. It wasn't no brimstone. It 
didn't come off no stone neither.


They climb up the side of the volcano/keep and look down. There 
is a small piece of rock right in the center and that is where 
the castle is. It is surrounded by boiling lava. It looks very 
foreboding.

SHREK
Sure, it's big enough, but look at the 
location. (laughs...then the laugh turns 
into a groan)

BURRO
Uh, Shrek? Uh, remember when you said 
ogres have layers?

SHREK
Oh, aye.

BURRO
Well, I have a bit of a confession to 
make. Donkeys don't have layers. We 
wear our fear right out there on our 
sleeves.

SHREK
Wait a second. Donkeys don't have sleeves.


BURRO
You know what I mean.

SHREK
You can't tell me you're afraid of heights.


BURRO
No, I'm just a little uncomfortable 
about being on a rickety bridge over 
a boiling like of lava!

SHREK
Come on, Donkey. I'm right here beside 
ya, okay? For emotional support., we'll 
just tackle this thing together one 
little baby step at a time.

BURRO
Really?

SHREK
Really, really.

BURRO
Okay, that makes me feel so much better.


SHREK
Just keep moving. And don't look down.


BURRO
Okay, don't look down. Don't look down. 
Don't look down. Keep on moving. Don't 
look down. (he steps through a rotting 
board and ends up looking straight down 
into the lava) Shrek! I'm lookin' down! 
Oh, God, I can't do this! Just let me 
off, please!

SHREK
But you're already halfway.

BURRO
But I know that half is safe!

SHREK
Okay, fine. I don't have time for this. 
You go back.

BURRO
Shrek, no! Wait!

SHREK
Just, Donkey - - Let's have a dance 
then, shall me? (bounces and sways the 
bridge)

BURRO
Don't do that!

SHREK
Oh, I'm sorry. Do what? Oh, this? (bounces 
the bridge again)

BURRO
Yes, that!

SHREK
Yes? Yes, do it. Okay. (continues to 
bounce and sway as he backs Donkey across 
the bridge)

BURRO
No, Shrek! No! Stop it!

SHREK
You said do it! I'm doin' it.

BURRO
I'm gonna die. I'm gonna die. Shrek, 
I'm gonna die. (steps onto solid ground) 
Oh!

SHREK
That'll do, Donkey. That'll do. (walks 
towards the castle)

BURRO
Cool. So where is this fire-breathing 
pain-in-the-neck anyway?

SHREK
Inside, waiting for us to rescue her. 
(chuckles)

BURRO
I was talkin' about the dragon, Shrek.


INSIDE THE CASTLE

BURRO
You afraid?

SHREK
No.

BURRO
But...

SHREK
Shh.

BURRO
Oh, good. Me neither. (sees a skeleton 
and gasps) 'Cause there's nothin' wrong 
with bein' afraid. Fear's a sensible 
response to an unfamiliar situation. 
Unfamiliar dangerous situation, I might 
add. With a dragon that breathes fire 
and eats knights and breathes fire, 
it sure doesn't mean you're a coward 
if you're a little scared. I sure as 
heck ain't no coward. I know that.


SHREK
Donkey, two things, okay? Shut ... up. 
Now go over there and see if you can 
find any stairs.

BURRO
Stairs? I thought we was lookin' for 
the princess.

SHREK
(putting on a helmet) The princess will 
be up the stairs in the highest room 
in the tallest tower.

BURRO
What makes you think she'll be there?


SHREK
I read it in a book once. (walks off)


BURRO
Cool. You handle the dragon. I'll handle 
the stairs. I'll find those stairs. 
I'll whip their butt too. Those stairs 
won't know which way they're goin'. 
(walks off)

EMPTY ROOM

Donkey is still talking to himself as he looks around the room.


BURRO
I'm gonna take drastic steps. Kick it 
to the curb. Don't mess with me. I'm 
the stair master. I've mastered the 
stairs. I wish I had a step right here. 
I'd step all over it.

ELSEWHERE

Shrek spots a light in the tallest tower window.

SHREK
Well, at least we know where the princess 
is, but where's the...

BURRO
(os) Dragon!

Donkey gasps and takes off running as the dragon roars again. 
Shrek manages to grab Donkey out of the way just as the dragon 
breathes fire.

SHREK
Donkey, look out! (he manages to get 
a hold of the dragons tail and holds 
on) Got ya!

The dragon gets irritated at this and flicks it's tail and Shrek 
goes flying through the air and crashes through the roof of the 
tallest tower. Fiona wakes up with a jerk and looks at him lying 
on the floor.

BURRO
Oh! Aah! Aah!

Donkey get cornered as the Dragon knocks away all but a small 
part of the bridge he's on.

BURRO
No. Oh, no, No! (the dragon roars) Oh, 
what large teeth you have. (the dragon 
growls) I mean white, sparkling teeth. 
I know you probably hear this all time 
from your food, but you must bleach, 
'cause that is one dazzling smile you 
got there. Do I detect a hint of minty 
freshness? And you know what else? You're 
- - You're a girl dragon! Oh, sure! 
I mean, of course you're a girl dragon. 
You're just reeking of feminine beauty. 
(the dragon begins fluttering her eyes 
at him) What's the matter with you? 
You got something in your eye? Ohh. 
Oh. Oh. Man, I'd really love to stay, 
but you know, I'm, uh...(the dragon 
blows a smoke ring in the shape of a 
heart right at him, and he coughs) I'm 
an asthmatic, and I don't know if it'd 
work out if you're gonna blow smoke 
rings. Shrek! (the dragon picks him 
up with her teeth and carries him off) 
No! Shrek! Shrek! Shrek!

FIONA'S ROOM

Shrek groans as he gets up off the floor. His back is to Fiona 
so she straightens her dress and lays back down on the bed. She 
then quickly reaches over and gets the bouquet of flowers off 
the side table. She then lays back down and appears to be asleep. 
Shrek turns and goes over to her. He looks down at Fiona for 
a moment and she puckers her lips. Shrek takes her by the shoulders 
and shakes her away.

FIONA
Oh! Oh!

SHREK
Wake up!

FIONA
What?

SHREK
Are you Princess Fiona?

FIONA
I am, awaiting a knight so bold as to 
rescue me.

SHREK
Oh, that's nice. Now let's go!

FIONA
But wait, Sir Knight. This be-ith our 
first meeting. Should it not be a wonderful, 
romantic moment?

SHREK
Yeah, sorry, lady. There's no time.


FIONA
Hey, wait. What are you doing? You should 
sweep me off my feet out yonder window 
and down a rope onto your valiant steed.


SHREK
You've had a lot of time to plan this, 
haven't you?

FIONA
(smiles) Mm-hmm.

Shrek breaks the lock on her door and pulls her out and down 
the hallway.

FIONA
But we have to savor this moment! You 
could recite an epic poem for me. A 
ballad? A sonnet! A limerick? Or something!


SHREK
I don't think so.

FIONA
Can I at least know the name of my champion?


SHREK
Uh, Shrek.

FIONA
Sir Shrek. (clears throat and holds 
out a handkerchief) I pray that you 
take this favor as a token of my gratitude.


SHREK
Thanks!

Suddenly they hear the dragon roar.

FIONA
(surprised)You didn't slay the dragon?


SHREK
It's on my to-do list. Now come on! 
(takes off running and drags Fiona behind 
him.)

FIONA
But this isn't right! You were meant 
to charge in, sword drawn, banner flying. 
That's what all the other knights did.


SHREK
Yeah, right before they burst into flame.


FIONA
That's not the point. (Shrek suddenly 
stops and she runs into him.) Oh! (Shrek 
ignores her and heads for a wooden door 
off to the side.) Wait. Where are you 
going? The exit's over there.

SHREK
Well, I have to save my ass.

FIONA
What kind of knight are you?

SHREK
One of a kind. (opens the door into 
the throne room)

BURRO
(os) Slow down. Slow down, baby, please. 
I believe it's healthy to get to know 
someone over a long period of time. 
Just call me old-fashioned. (laughs 
worriedly) (we see him up close and 
from a distance as Shrek sneaks into 
the room) I don't want to rush into 
a physical relationship. I'm not emotionally 
ready for a commitment of, uh, this 
- - Magnitude really is the word I'm 
looking for. Magnitude- - Hey, that 
is unwanted physical contact. Hey, what 
are you doing? Okay, okay. Let's just 
back up a little and take this one step 
at a time. We really should get to know 
each other first as friends or pen pals. 
I'm on the road a lot, but I just love 
receiving cards - - I'd really love 
to stay, but - - Don't do that! That's 
my tail! That's my personal tail. You're 
gonna tear it off. I don't give permission 
- - What are you gonna do with that? 
Hey, now. No way. No! No! No, no! No. 
No, no, no. No! Oh!

Shrek grabs a chain that's connected to the chandelier and swings 
toward the dragon. He misses and he swings back again. He looks 
up and spots that the chandelier is right above the dragons head. 
He pulls on the chain and it releases and he falls down and bumps 
Donkey out of the way right as the dragon is about to kiss him. 
Instead the dragon kisses Shreks' butt. She opens her eyes and 
roars. Shrek lets go of the chain and the chandelier falls onto 
her head, but it's too big and it goes over her head and forms 
a sort of collar for her. She roars again and Shrek and Donkey 
take off running. Very 'Matrix' style. Shrek grabs Donkey and 
then grabs Princess Fiona as he runs past her.

BURRO
Hi, Princess!

FIONA
It talks!

SHREK
Yeah, it's getting him to shut up that's 
the trick.

They all start screaming as the dragon gains on them. Shrek spots 
a descending slide and jumps on. But unfortunately there is a 
crack in the stone and it hits Shrek right in the groin. His 
eyes cross and as he reaches the bottom of the slide he stumbles 
off and walks lightly.

SHREK
Oh!

Shrek gets them close to the exit and sets down Donkey and Fiona.


SHREK
Okay, you two, heard for the exit! I'll 
take care of the dragon.

Shrek grabs a sword and heads back toward the interior of the 
castle. He throws the sword down in between several overlapping 
chain links. The chain links are attached to the chandelier that 
is still around the dragons neck.

SHREK
(echoing) Run!

They all take off running for the exit with the dragon in hot 
pursuit. They make it to the bridge and head across. The dragons 
breathes fire and the bridge begins to burn. They all hang on 
for dear life as the ropes holding the bridge up collapse. They 
are swung to the other side. As they hang upside down they look 
in horror as the dragon makes to fly over the boiling lava to 
get them. But suddenly the chandelier with the chain jerk the 
dragon back and she's unable to get to them. Our gang climbs 
quickly to safety as the dragon looks angry and then gives a 
sad whimper as she watches Donkey walk away.

FIONA
(sliding down the 'volcano' hill) You 
did it! You rescued me! You're amazing. 
(behind her Donkey falls down the hill) 
You're - - You're wonderful. You're... 
(turns and sees Shrek fall down the 
hill and bump into Donkey) a little 
unorthodox I'll admit. But thy deed 
is great, and thy heart is pure. I am 
eternally in your debt. (Donkey clears 
his throat.) And where would a brave 
knight be without his noble steed?


BURRO
I hope you heard that. She called me 
a noble steed. She think I'm a steed.


FIONA
The battle is won. You may remove your 
helmet, good Sir Knight.

SHREK
Uh, no.

FIONA
Why not?

SHREK
I have helmet hair.

FIONA
Please. I would'st look upon the face 
of my rescuer.

SHREK
No, no, you wouldn't - - 'st.

FIONA
But how will you kiss me?

SHREK
What? (to Donkey) That wasn't in the 
job description.

BURRO
Maybe it's a perk.

FIONA
No, it's destiny. Oh, you must know 
how it goes. A princess locked in a 
tower and beset by a dragon is rescued 
by a brave knight, and then they share 
true love's first kiss.

BURRO
Hmm? With Shrek? You think- - Wait. 
Wait. You think that Shrek is you true 
love?

FIONA
Well, yes.

Both Donkey and Shrek burst out laughing.

BURRO
You think Shrek is your true love!


FIONA
What is so funny?

SHREK
Let's just say I'm not your type, okay?Fiona: 
Of course, you are. You're my rescuer. 
Now - - Now remove your helmet.

SHREK
Look. I really don't think this is a 
good idea.

FIONA
Just take off the helmet.

SHREK
I'm not going to.

FIONA
Take it off.

SHREK
No!

FIONA
Now!

SHREK
Okay! Easy. As you command. Your Highness. 
(takes off his helmet)

FIONA
You- - You're a- - an ogre.

SHREK
Oh, you were expecting Prince Charming.


FIONA
Well, yes, actually. Oh, no. This is 
all wrong. You're not supposed to be 
an ogre.

SHREK
Princess, I was sent to rescue you by 
Lord Farquaad, okay? He is the one who 
wants to marry you.

FIONA
Then why didn't he come rescue me?


SHREK
Good question. You should ask him that 
when we get there.

FIONA
But I have to be rescued by my true 
love, not by some ogre and his- - his 
pet.

BURRO
Well, so much for noble steed.

SHREK
You're not making my job any easier.


FIONA
I'm sorry, but your job is not my problem. 
You can tell Lord Farquaad that if he 
wants to rescue me properly, I'll be 
waiting for him right here.

SHREK
Hey! I'm no one's messenger boy, all 
right? (ominous) I'm a delivery boy. 
(he swiftly picks her up and swings 
her over his shoulder like she was a 
sack of potatoes)

FIONA
You wouldn't dare. Put me down!

SHREK
Ya comin', Donkey?

BURRO
I'm right behind ya.

FIONA
Put me down, or you will suffer the 
consequences! This is not dignified! 
Put me down!

WOODS

A little time has passed and Fiona has calmed down. She just 
hangs there limply while Shrek carries her.

BURRO
Okay, so here's another question. Say 
there's a woman that digs you, right, 
but you don't really like her that way. 
How do you let her down real easy so 
her feelings aren't hurt, but you don't 
get burned to a crisp and eaten?

FIONA
You just tell her she's not your true 
love. Everyone knows what happens when 
you find your...(Shrek drops her on 
the ground) Hey! The sooner we get to 
DuLoc the better.

BURRO
You're gonna love it there, Princess. 
It's beautiful!

FIONA
And what of my groom-to-be? Lord Farquaad? 
What's he like?

SHREK
Let me put it this way, Princess. Men 
of Farquaad's stature are in short supply. 
(he and Donkey laugh)

Shrek then proceeds to splash water onto his face to wash off 
the dust and grime.

BURRO
I don't know. There are those who think 
little of him. (they laugh again) Fiona: 
Stop it. Stop it, both of you. You're 
just jealous you can never measure up 
to a great ruler like Lord Farquaad.


SHREK
Yeah, well, maybe you're right, Princess. 
But I'll let you do the "measuring" 
when you see him tomorrow.

FIONA
(looks at the setting sun) Tomorrow? 
It'll take that long? Shouldn't we stop 
to make camp?

SHREK
No, that'll take longer. We can keep 
going.

FIONA
But there's robbers in the woods.

BURRO
Whoa! Time out, Shrek! Camp is starting 
to sound good.

SHREK
Hey, come on. I'm scarier than anything 
we're going to see in this forest.


FIONA
I need to find somewhere to camp now!


Both Donkey and Shrek's ears lower as they shrink away from her.


MOUNTAIN CLIFF

Shrek has found a cave that appears to be in good order. He shoves 
a stone boulder out of the way to reveal the cave.

SHREK
Hey! Over here.

BURRO
Shrek, we can do better than that. I 
don't think this is fit for a princess.


FIONA
No, no, it's perfect. It just needs 
a few homey touches.

SHREK
Homey touches? Like what? (he hears 
a tearing noise and looks over at Fiona 
who has torn the bark off of a tree.)


FIONA
A door? Well, gentlemen, I bid thee 
good night. (goes into the cave and 
puts the bark door up behind her)


BURRO
You want me to read you a bedtime story? 
I will.

FIONA
(os) I said good night!

Shrek looks at Donkey for a second and then goes to move the 
boulder back in front of the entrance to the cave with Fiona 
still inside.

BURRO
Shrek, What are you doing?

SHREK
(laughs) I just- - You know - - Oh, 
come on. I was just kidding.

LATER THAT NIGHT

Shrek and Donkey are sitting around a campfire. They are staring 
up into the sky as Shrek points out certain star constellations 
to Donkey.

SHREK
And, uh, that one, that's Throwback, 
the only ogre to ever spit over three 
wheat fields.

BURRO
Right. Yeah. Hey, can you tell my future 
from these stars?

SHREK
The stars don't tell the future, Donkey. 
They tell stories. Look, there's Bloodnut, 
the Flatulent. You can guess what he's 
famous for.

BURRO
I know you're making this up.

SHREK
No, look. There he is, and there's the 
group of hunters running away from his 
stench.

BURRO
That ain't nothin' but a bunch of little 
dots.

SHREK
You know, Donkey, sometimes things are 
more than they appear. Hmm? Forget it.


BURRO
(heaves a big sigh) Hey, Shrek, what 
we gonna do when we get our swamp anyway?


SHREK
Our swamp?

BURRO
You know, when we're through rescuing 
the princess.

SHREK
We? Donkey, there's no "we". There's 
no "our". There's just me and my swamp. 
The first thing I'm gonna do is build 
a ten-foot wall around my land.

BURRO
You cut me deep, Shrek. You cut me real 
deep just now. You know what I think? 
I think this whole wall thing is just 
a way to keep somebody out.

SHREK
No, do ya think?

BURRO
Are you hidin' something?

SHREK
Never mind, Donkey.

BURRO
Oh, this is another one of those onion 
things, isn't it?

SHREK
No, this is one of those drop-it and 
leave-it alone things.

BURRO
Why don't you want to talk about it?


SHREK
Why do you want to talk about it?

BURRO
Why are you blocking?

SHREK
I'm not blocking.

BURRO
Oh, yes, you are.

SHREK
Donkey, I'm warning you.

BURRO
Who you trying to keep out?

SHREK
Everyone! Okay?

BURRO
(pause) Oh, now we're gettin' somewhere. 
(grins)

At this point Fiona pulls the 'door' away from the entrance to 
the cave and peaks out. Neither of the guys see her.

SHREK
Oh! For the love of Pete! (gets up and 
walks over to the edge of the cliff 
and sits down)

BURRO
What's your problem? What you got against 
the whole world anyway?

SHREK
Look, I'm not the one with the problem, 
okay? It's the world that seems to have 
a problem with me. People take one look 
at me and go. "Aah! Help! Run! A big, 
stupid, ugly ogre!" They judge me before 
they even know me. That's why I'm better 
off alone.

BURRO
You know what? When we met, I didn't 
think you was just a big, stupid, ugly 
ogre.

SHREK
Yeah, I know.

BURRO
So, uh, are there any donkeys up there?


SHREK
Well, there's, um, Gabby, the Small 
and Annoying.

BURRO
Okay, okay, I see it now. The big shiny 
one, right there. That one there?


Fiona puts the door back.

SHREK
That's the moon.

BURRO
Oh, okay.

DuLoc - Farquaad's Bedroom

The camera pans over a lot of wedding stuff. Soft music plays 
in the background. Farquaad is in bed, watching as the Magic 
Mirror shows him Princess Fiona.

FARQUAAD
Again, show me again. Mirror, mirror, 
show her to me. Show me the princess.


MIRROR
Hmph.

The Mirror rewinds and begins to play again from the beginning.


FARQUAAD
Ah. Perfect.

Farquaad looks down at his bare chest and pulls the sheet up 
to cover himself as though Fiona could see him as he gazes sheepishly 
at her image in the mirror.

MORNING

Fiona walks out of the cave. She glances at Shrek and Donkey 
who are still sleeping. She wanders off into the woods and comes 
across a blue bird. She begins to sing. The bird sings along 
with her. She hits higher and higher notes and the bird struggles 
to keep up with her. Suddenly the pressure of the note is too 
big and the bird explodes. Fiona looks a little sheepish, but 
she eyes the eggs that the bird left behind. Time lapse, Fiona 
is now cooking the eggs for breakfast. Shrek and Donkey are still 
sleeping. Shrek wakes up and looks at Fiona. Donkey's talking 
in his sleep.

BURRO
(quietly) Mmm, yeah, you know I like 
it like that. Come on, baby. I said 
I like it.

SHREK
Donkey, wake up. (shakes him)

BURRO
Huh? What?

SHREK
Wake up.

BURRO
What? (stretches and yawns)

FIONA
Good morning. Hm, how do you like your 
eggs?

BURRO
Oh, good morning, Princess!

Fiona gets up and sets the eggs down in front of them.

SHREK
What's all this about?

FIONA
You know, we kind of got off to a bad 
start yesterday. I wanted to make it 
up to you. I mean, after all, you did 
rescue me.

SHREK
Uh, thanks.

Donkey sniffs the eggs and licks his lips.

FIONA
Well, eat up. We've got a big day ahead 
of us. (walks off)

LATER

They are once again on their way. They are walking through the 
forest. Shrek belches.

BURRO
Shrek!

SHREK
What? It's a compliment. Better out 
than in, I always say. (laughs)

BURRO
Well, it's no way to behave in front 
of a princess.

Fiona belches

FIONA
Thanks.

BURRO
She's as nasty as you are.

SHREK
(chuckles) You know, you're not exactly 
what I expected.

FIONA
Well, maybe you shouldn't judge people 
before you get to know them.

She smiles and then continues walking, singing softly. Suddenly 
from out of nowhere, a man swings down and swoops Fiona up into 
a tree.

ROBIN HOOD
La liberte! Hey!

SHREK
Princess!

FIONA
(to Robin Hood) What are you doing?


ROBIN HOOD
Be still, mon cherie, for I am you savior! 
And I am rescuing you from this green...(kisses 
up her arm while Fiona pulls back in 
disgust)...beast.

SHREK
Hey! That's my princess! Go find you 
own!

ROBIN HOOD
Please, monster! Can't you see I'm a 
little busy here?

FIONA
(getting fed up) Look, pal, I don't 
know who you think you are!

ROBIN HOOD
Oh! Of course! Oh, how rude. Please 
let me introduce myself. Oh, Merry Men. 
(laughs)

Suddenly an accordion begins to play and the Merry men pop out 
from the bushes. They begin to sing Robin's theme song.

MERRY MEN
Ta, dah, dah, dah, whoo.

ROBIN HOOD
I steal from the rich and give to the 
needy.

MERRY MEN
He takes a wee percentage,

ROBIN HOOD
But I'm not greedy. I rescue pretty 
damsels, man, I'm good.

MERRY MEN
What a guy, Monsieur Hood.

ROBIN HOOD
Break it down. I like an honest fight 
and a saucy little maid...

MERRY MEN
What he's basically saying is he likes 
to get...

ROBIN HOOD
Paid. So...When an ogre in the bush 
grabs a lady by the tush. That's bad.


MERRY MEN
That's bad.

ROBIN HOOD
When a beauty's with a beast it makes 
me awfully mad.

MERRY MEN
He's mad, he's really, really mad.


ROBIN HOOD
I'll take my blade and ram it through 
your heart, keep your eyes on me, boys 
'cause I'm about to start...

There is a grunt as Fiona swings down from the tree limb and 
knocks Robin Hood unconscious.

FIONA
Man, that was annoying!

Shrek looks at her in admiration.

MERRY MAN
Oh, you little- - (shoots an arrow at 
Fiona but she ducks out of the way)


The arrow flies toward Donkey who jumps into Shrek's arms to 
get out of the way. The arrow proceeds to just bounce off a tree.


Another fight sequence begins and Fiona gives a karate yell and 
then proceeds to beat the crap out of the Merry Men. There is 
a very interesting 'Matrix' moment here when Fiona pauses in 
mid-air to fix her hair. Finally all of the Merry Men are down, 
and Fiona begins walking away.

FIONA
Uh, shall we?

SHREK
Hold the phone. (drops Donkey and begins 
walking after Fiona) Oh! Whoa, whoa, 
whoa. Hold on now. Where did that come 
from?

FIONA
What?

SHREK
That! Back there. That was amazing! 
Where did you learn that?

FIONA
Well...(laughs) when one lives alone, 
uh, one has to learn these things in 
case there's a...(gasps and points) 
there's an arrow in your butt!

SHREK
What? (turns and looks) Oh, would you 
look at that? (he goes to pull it out 
but flinches because it's tender)


FIONA
Oh, no. This is all my fault. I'm so 
sorry.

BURRO
(walking up) Why? What's wrong?

FIONA
Shrek's hurt.

BURRO
Shrek's hurt. Shrek's hurt? Oh, no, 
Shrek's gonna die.

SHREK
Donkey, I'm okay.

BURRO
You can't do this to me, Shrek. I'm 
too young for you to die. Keep you legs 
elevated. Turn your head and cough. 
Does anyone know the Heimlich?

FIONA
Donkey! Calm down. If you want to help 
Shrek, run into the woods and find me 
a blue flower with red thorns.

BURRO
Blue flower, red thorns. Okay, I'm on 
it. Blue flower, red thorns. Don't die 
Shrek. If you see a long tunnel, stay 
away from the light!

SHREK & FIONA
Donkey!

BURRO
Oh, yeah. Right. Blue flower, red thorns. 
(runs off)

SHREK
What are the flowers for?

FIONA
(like it's obvious) For getting rid 
of Donkey.

SHREK
Ah.

FIONA
Now you hold still, and I'll yank this 
thing out. (gives the arrow a little 
pull)

SHREK
(jumps away) Ow! Hey! Easy with the 
yankin'.

As they continue to talk Fiona keeps going after the arrow and 
Shrek keeps dodging her hands.

FIONA
I'm sorry, but it has to come out.


SHREK
No, it's tender.

FIONA
Now, hold on.

SHREK
What you're doing is the opposite of 
help.

FIONA
Don't move.

SHREK
Look, time out.

FIONA
Would you...(grunts as Shrek puts his 
hand over her face to stop her from 
getting at the arrow) Okay. What do 
you propose we do?

ELSEWHERE

Donkey is still looking for the special flower.

BURRO
Blue flower, red thorns. Blue flower, 
red thorns. Blue flower, red thorns. 
This would be so much easier if I wasn't 
color-blind! Blue flower, red thorns.


SHREK
(os) Ow!

BURRO
Hold on, Shrek! I'm comin'! (rips a 
flower off a nearby bush that just happens 
to be a blue flower with red thorns)


THE FOREST PATH

SHREK
Ow! Not good.

FIONA
Okay. Okay. I can nearly see the head. 
(Shrek grunts as she pulls) It's just 
about...

SHREK
Ow! Ohh! (he jerks and manages to fall 
over with Fiona on top of him)

BURRO
Ahem.

SHREK
(throwing Fiona off of him) Nothing 
happend. We were just, uh - -

BURRO
Look, if you wanted to be alone, all 
you had to do was ask. Okay?

SHREK
Oh, come on! That's the last thing on 
my mind. The princess here was just- 
- (Fiona pulls the arrow out) Ugh! (he 
turns to look at Fiona who holds up 
the arrow with a smile) Ow!

BURRO
Hey, what's that? (nervous chuckle) 
That's...is that blood?

Donkey faints. Shrek walks over and picks him up as they continue 
on their way.

There is a montage of scenes as the group heads back to DuLoc. 
Shrek crawling up to the top of a tree to make it fall over a 
small brook so that Fiona won't get wet. Shrek then gets up as 
Donkey is just about to cross the tree and the tree swings back 
into it's upright position and Donkey flies off. Shrek swatting 
and a bunch of flies and mosquitoes. Fiona grabs a nearby spiderweb 
that's on a tree branch and runs through the field swinging it 
around to catch the bugs. She then hands it to Shrek who begins 
eating like it's a treat. As he walks off she licks her fingers. 
Shrek catching a toad and blowing it up like a balloon and presenting 
it to Fiona. Fiona catching a snake, blowing it up, fashioning 
it into a balloon animal and presenting it to Shrek. The group 
arriving at a windmill that is near DuLoc.

WINDMILL

SHREK
There it is, Princess. Your future awaits 
you.

FIONA
That's DuLoc?

BURRO
Yeah, I know. You know, Shrek thinks 
Lord Farquaad's compensating for something, 
which I think means he has a really...(Shrek 
steps on his hoof) Ow!

SHREK
Um, I, uh- - I guess we better move 
on.

FIONA
Sure. But, Shrek? I'm - - I'm worried 
about Donkey.

SHREK
What?

FIONA
I mean, look at him. He doesn't look 
so good.

BURRO
What are you talking about? I'm fine.


FIONA
(kneels to look him in the eyes) That's 
what they always say, and then next 
thing you know, you're on your back. 
(pause) Dead.

SHREK
You know, she's right. You look awful. 
Do you want to sit down?

FIONA
Uh, you know, I'll make you some tea.


BURRO
I didn't want to say nothin', but I 
got this twinge in my neck, and when 
I turn my head like this, look, (turns 
his neck in a very sharp way until his 
head is completely sideways) Ow! See?


SHREK
Who's hungry? I'll find us some dinner.


FIONA
I'll get the firewood.

BURRO
Hey, where you goin'? Oh, man, I can't 
feel my toes! (looks down and yelps) 
I don't have any toes! I think I need 
a hug.

SUNSET

Shrek has built a fire and is cooking the rest of dinner while 
Fiona eats.

FIONA
Mmm. This is good. This is really good. 
What is this?

SHREK
Uh, weed rat. Rotisserie style.

FIONA
No kidding. Well, this is delicious.


SHREK
Well, they're also great in stews. Now, 
I don't mean to brag, but I make a mean 
weed rat stew. (chuckles)

Fiona looks at DuLoc and sighs.

FIONA
I guess I'll be dining a little differently 
tomorrow night.

SHREK
Maybe you can come visit me in the swamp 
sometime. I'll cook all kind of stuff 
for you. Swamp toad soup, fish eye tartare 
- - you name it.

FIONA
(smiles) I'd like that.

They smiles at each other.

SHREK
Um, Princess?

FIONA
Yes, Shrek?

SHREK
I, um, I was wondering...are you...(sighs) 
Are you gonna eat that?

BURRO
(chuckles) Man, isn't this romantic? 
Just look at that sunset.

FIONA
(jumps up) Sunset? Oh, no! I mean, it's 
late. I-It's very late.

SHREK
What?

BURRO
Wait a minute. I see what's goin' on 
here. You're afraid of the dark, aren't 
you?

FIONA
Yes! Yes, that's it. I'm terrified. 
You know, I'd better go inside.

BURRO
Don't feel bad, Princess. I used to 
be afraid of the dark, too, until - 
- Hey, no, wait. I'm still afraid of 
the dark.

Shrek sighs

FIONA
Good night.

SHREK
Good night.

Fiona goes inside the windmill and closes the door. Donkey looks 
at Shrek with a new eye.

BURRO
Ohh! Now I really see what's goin' on 
here.

SHREK
Oh, what are you talkin' about?

BURRO
I don't even wanna hear it. Look, I'm 
an animal, and I got instincts. And 
I know you two were diggin' on each 
other. I could feel it.

SHREK
You're crazy. I'm just bringing her 
back to Farquaad.

BURRO
Oh, come on, Shrek. Wake up and smell 
the pheromones. Just go on in and tell 
her how you feel.

SHREK
I- - There's nothing to tell. Besides, 
even if I did tell her that, well, you 
know - - and I'm not sayin' I do 'cause 
I don't - - she's a princess, and I'm 
- -

BURRO
An ogre?

SHREK
Yeah. An ogre.

BURRO
Hey, where you goin'?

SHREK
To get... move firewood. (sighs)

Donkey looks over at the large pile of firewood there already 
is.

TIME LAPSE

Donkey opens the door to the Windmill and walks in. Fiona is 
nowhere to be seen.

BURRO
Princess? Princess Fiona? Princess, 
where are you? Princess?

Fiona looks at Donkey from the shadows, but we can't see her.


BURRO
It's very spooky in here. I ain't playing 
no games.

Suddenly Fiona falls from the railing. She gets up only she doesn't 
look like herself. She looks like an ogre and Donkey starts freaking 
out.

BURRO
Aah!

FIONA
Oh, no!

BURRO
No, help!

FIONA
Shh!

BURRO
Shrek! Shrek! Shrek!

FIONA
No, it's okay. It's okay.

BURRO
What did you do with the princess?


FIONA
Donkey, I'm the princess.

BURRO
Aah!

FIONA
It's me, in this body.

BURRO
Oh, my God! You ate the princess. (to 
her stomach) Can you hear me?

FIONA
Donkey!

BURRO
(still aimed at her stomach) Listen, 
keep breathing! I'll get you out of 
there!

FIONA
No!

BURRO
Shrek! Shrek! Shrek!

FIONA
Shh.

BURRO
Shrek!

FIONA
This is me.

Donkey looks into her eyes as she pets his muzzle, and he quiets 
down.

BURRO
Princess? What happened to you? You're, 
uh, uh, uh, different.

FIONA
I'm ugly, okay?

BURRO
Well, yeah! Was it something you ate? 
'Cause I told Shrek those rats was a 
bad idea. You are what you eat, I said. 
Now - -

FIONA
No. I - - I've been this way as long 
as I can remember.

BURRO
What do you mean? Look, I ain't never 
seen you like this before.

FIONA
It only happens when sun goes down. 
"By night one way, by day another. This 
shall be the norm... until you find 
true love's first kiss... and then take 
love's true form."

BURRO
Ah, that's beautiful. I didn't know 
you wrote poetry.

FIONA
It's a spell. (sigh) When I was a little 
girl, a witch cast a spell on me. Every 
night I become this. This horrible, 
ugly beast! I was placed in a tower 
to await the day my true love would 
rescue me. That's why I have to marry 
Lord Farquaad tomorrow before the sun 
sets and he sees me like this. (begins 
to cry)

BURRO
All right, all right. Calm down. Look, 
it's not that bad. You're not that ugly. 
Well, I ain't gonna lie. You are ugly. 
But you only look like this at night. 
Shrek's ugly 24-7.

FIONA
But Donkey, I'm a princess, and this 
is not how a princess is meant to look.


BURRO
Princess, how 'bout if you don't marry 
Farquaad?

FIONA
I have to. Only my true love's kiss 
can break the spell.

BURRO
But, you know, um, you're kind of an 
orge, and Shrek - - well, you got a 
lot in common.

FIONA
Shrek?

OUTSIDE

Shrek is walking towards the windmill with a sunflower in his 
hand.

SHREK
(to himself) Princess, I - - Uh, how's 
it going, first of all? Good? Um, good 
for me too. I'm okay. I saw this flower 
and thought of you because it's pretty 
and - - well, I don't really like it, 
but I thought you might like it 'cause 
you're pretty. But I like you anyway. 
I'd - - uh, uh...(sighs) I'm in trouble. 
Okay, here we go.

He walks up to the door and pauses outside when he hears Donkey 
and Fiona talking.

FIONA
(os) I can't just marry whoever I want. 
Take a good look at me, Donkey. I mean, 
really, who can ever love a beast so 
hideous and ugly? "Princess" and "ugly" 
don't go together. That's why I can't 
stay here with Shrek.

Shrek steps back in shock.

FIONA
(os) My only chance to live happily 
ever after is to marry my true love.


Shrek heaves a deep sigh. He throws the flower down and walks 
away.

INSIDE

FIONA
Don't you see, Donkey? That's just how 
it has to be. It's the only way to break 
the spell.

BURRO
You at least gotta tell Shrek the truth.


FIONA
No! You can't breathe a word. No one 
must ever know.

BURRO
What's the point of being able to talk 
if you gotta keep secrets?

FIONA
Promise you won't tell. Promise!

BURRO
All right, all right. I won't tell him. 
But you should. (goes outside) I just 
know before this is over, I'm gonna 
need a whole lot of serious therapy. 
Look at my eye twitchin'.

Fiona comes out the door and watches him walk away. She looks 
down and spots the sunflower. She picks it up before going back 
inside the windmill.

MORNING

Donkey is asleep. Shrek is nowhere to be seen. Fiona is still 
awake. She is plucking petals from the sunflower.

FIONA
I tell him, I tell him not. I tell him, 
I tell him not. I tell him. (she quickly 
runs to the door and goes outside) Shrek! 
Shrek, there's something I want...(she 
looks and sees the rising sun, and as 
the sun crests the sky she turns back 
into a human.)

Just as she looks back at the sun she sees Shrek stomping towards 
her.

FIONA
Shrek. Are you all right?

SHREK
Perfect! Never been better.

FIONA
I - - I don't - - There's something 
I have to tell you.

SHREK
You don't have to tell me anything, 
Princess. I heard enough last night.


FIONA
You heard what I said?

SHREK
Every word.

FIONA
I thought you'd understand.

SHREK
Oh, I understand. Like you said, "Who 
could love a hideous, ugly beast?"


FIONA
But I thought that wouldn't matter to 
you.

SHREK
Yeah? Well, it does. (Fiona looks at 
him in shock. He looks past her and 
spots a group approaching.) Ah, right 
on time. Princess, I've brought you 
a little something.

Farquaad has arrived with a group of his men. He looks very regal 
sitting up on his horse. You would never guess that he's only 
like 3 feet tall. Donkey wakes up with a yawn as the soldiers 
march by.

BURRO
What'd I miss? What'd I miss? (spots 
the soldiers) (muffled) Who said that? 
Couldn't have been the donkey.

FARQUAAD
Princess Fiona.

SHREK
As promised. Now hand it over.

FARQUAAD
Very well, ogre. (holds out a piece 
of paper) The deed to your swamp, cleared 
out, as agreed. Take it and go before 
I change my mind. (Shrek takes the paper) 
Forgive me, Princess, for startling 
you, but you startled me, for I have 
never seen such a radiant beauty before. 
I'm Lord Farquaad.

FIONA
Lord Farquaad? Oh, no, no. (Farquaad 
snaps his fingers) Forgive me, my lord, 
for I was just saying a short... (Watches 
as Farquaad is lifted off his horse 
and set down in front of her. He comes 
to her waist.) farewell.

FARQUAAD
Oh, that is so sweet. You don't have 
to waste good manners on the ogre. It's 
not like it has feelings.

FIONA
No, you're right. It doesn't.

Donkey watches this exchange with a curious look on his face.


FARQUAAD
Princess Fiona, beautiful, fair, flawless 
Fiona. I ask your hand in marriage. 
Will you be the perfect bride for the 
perfect groom?

FIONA
Lord Farquaad, I accept. Nothing would 
make - -

FARQUAAD
(interrupting) Excellent! I'll start 
the plans, for tomorrow we wed!

FIONA
No! I mean, uh, why wait? Let's get 
married today before the sun sets.


FARQUAAD
Oh, anxious, are you? You're right. 
The sooner, the better. There's so much 
to do! There's the caterer, the cake, 
the band, the guest list. Captain, round 
up some guests! (a guard puts Fiona 
on the back of his horse)

FIONA
Fare-thee-well, ogre.

Farquaad's whole party begins to head back to DuLoc. Donkey watches 
them go.

BURRO
Shrek, what are you doing? You're letting 
her get away.

SHREK
Yeah? So what?

BURRO
Shrek, there's something about her you 
don't know. Look, I talked to her last 
night, She's - -

SHREK
I know you talked to her last night. 
You're great pals, aren't ya? Now, if 
you two are such good friends, why don't 
you follow her home?

BURRO
Shrek, I - - I wanna go with you.

SHREK
I told you, didn't I? You're not coming 
home with me. I live alone! My swamp! 
Me! Nobody else! Understand? Nobody! 
Especially useless, pathetic, annoying, 
talking donkeys!

BURRO
But I thought - -

SHREK
Yeah. You know what? You thought wrong! 
(stomps off)

BURRO
Shrek.

Montage of different scenes. Shrek arriving back home. Fiona 
being fitted for the wedding dress. Donkey at a stream running 
into the dragon. Shrek cleaning up his house. Fiona eating dinner 
alone. Shrek eating dinner alone.

SHREK'S HOME

Shrek is eating dinner when he hears a sound outside. He goes 
outside to investigate.

SHREK
Donkey? (Donkey ignores him and continues 
with what he's doing.) What are you 
doing?

BURRO
I would think, of all people, you would 
recognize a wall when you see one.


SHREK
Well, yeah. But the wall's supposed 
to go around my swamp, not through it.


BURRO
It is around your half. See that's your 
half, and this is my half.

SHREK
Oh! Your half. Hmm.

BURRO
Yes, my half. I helped rescue the princess. 
I did half the work. I get half the 
booty. Now hand me that big old rock, 
the one that looks like your head.


SHREK
Back off!

BURRO
No, you back off.

SHREK
This is my swamp!

BURRO
Our swamp.

SHREK
(grabs the tree branch Donkey is working 
with) Let go, Donkey!

BURRO
You let go.

SHREK
Stubborn jackass!

BURRO
Smelly ogre.

SHREK
Fine! (drops the tree branch and walks 
away)

BURRO
Hey, hey, come back here. I'm not through 
with you yet.

SHREK
Well, I'm through with you.

BURRO
Uh-uh. You know, with you it's always, 
"Me, me, me!" Well, guess what! Now 
it's my turn! So you just shut up and 
pay attention! You are mean to me. You 
insult me and you don't appreciate anything 
that I do! You're always pushing me 
around or pushing me away.

SHREK
Oh, yeah? Well, if I treated you so 
bad, how come you came back?

BURRO
Because that's what friends do! They 
forgive each other!

SHREK
Oh, yeah. You're right, Donkey. I forgive 
you... for stabbin' me in the back! 
(goes into the outhouse and slams the 
door)

BURRO
Ohh! You're so wrapped up in layers, 
onion boy, you're afraid of your own 
feelings.

SHREK
(os) Go away!

BURRO
There you are , doing it again just 
like you did to Fiona. All she ever 
do was like you, maybe even love you.


SHREK
(os) Love me? She said I was ugly, a 
hideous creature. I heard the two of 
you talking.

BURRO
She wasn't talkin' about you. She was 
talkin' about, uh, somebody else.


SHREK
(opens the door and comes out) She wasn't 
talking about me? Well, then who was 
she talking about?

BURRO
Uh-uh, no way. I ain't saying anything. 
You don't wanna listen to me. Right? 
Right?

SHREK
Donkey!

BURRO
No!

SHREK
Okay, look. I'm sorry, all right? (sigh) 
I'm sorry. I guess I am just a big, 
stupid, ugly ogre. Can you forgive me?


BURRO
Hey, that's what friends are for, right?


SHREK
Right. Friends?

BURRO
Friends.

SHREK
So, um, what did Fiona say about me?


BURRO
What are you asking me for? Why don't 
you just go ask her?

SHREK
The wedding! We'll never make it in 
time.

BURRO
Ha-ha-ha! Never fear, for where, there's 
a will, there's a way and I have a way. 
(whistles)

Suddenly the dragon arrives overhead and flies low enough so 
they can climb on.

SHREK
Donkey?

BURRO
I guess it's just my animal magnetism.


They both laugh.

SHREK
Aw, come here, you. (gives Donkey a 
noogie)

BURRO
All right, all right. Don't get all 
slobbery. No one likes a kiss ass. All 
right, hop on and hold on tight. I haven't 
had a chance to install the seat belts 
yet.

They climb aboard the dragon and she takes off for DuLoc.

DULOC - CHURCH

Fiona and Farquaad are getting married. The whole town is there. 
The prompter card guy holds up a card that says 'Revered Silence'.


PRIEST
People of DuLoc, we gather here today 
to bear witness to the union....

FIONA
(eyeing the setting sun) Um-

PRIEST
...of our new king...

FIONA
Excuse me. Could we just skip ahead 
to the "I do's"?

FARQUAAD
(chuckles and then motions to the priest 
to indulge Fiona) Go on.

COURTYARD

Some guards are milling around. Suddenly the dragon lands with 
a boom. The guards all take off running.

BURRO
(to Dragon) Go ahead, HAVE SOME FUN. 
If we need you, I'll whistle. How about 
that? (she nods and goes after the guards) 
Shrek, wait, wait! Wait a minute! You 
wanna do this right, don't you?

SHREK
(at the Church door) What are you talking 
about?

BURRO
There's a line you gotta wait for. The 
preacher's gonna say, "Speak now or 
forever hold your peace." That's when 
you say, "I object!"

SHREK
I don't have time for this!

BURRO
Hey, wait. What are you doing? Listen 
to me! Look, you love this woman, don't 
you?

SHREK
Yes.

BURRO
You wanna hold her?

SHREK
Yes.

BURRO
Please her?

SHREK
Yes!

BURRO
(singing James Brown style) Then you 
got to, got to try a little tenderness. 
(normal) The chicks love that romantic 
crap!

SHREK
All right! Cut it out. When does this 
guy say the line?

BURRO
We gotta check it out.

INSIDE CHURCH

As the priest talks we see Donkey's shadow through one of the 
windows Shrek tosses him up so he can see.

PRIEST
And so, by the power vested in me...


Outside

SHREK
What do you see?

BURRO
The whole town's in there.

Inside

PRIEST
I now pronounce you husband and wife...


Outside

BURRO
They're at the altar.

Inside

PRIEST
...king and queen.

Outside

BURRO
Mother Fletcher! He already said it.


SHREK
Oh, for the love of Pete!

He runs inside without catching Donkey, who hits the ground hard.


INSIDE CHURCH

SHREK
(running toward the alter) I object!


FIONA
Shrek?

The whole congregation gasps as they see Shrek.

FARQUAAD
Oh, now what does he want?

SHREK
(to congregation as he reaches the front 
of the Church) Hi, everyone. Havin' 
a good time, are ya? I love DuLoc, first 
of all. Very clean.

FIONA
What are you doing here?

SHREK
Really, it's rude enough being alive 
when no one wants you, but showing up 
uninvited to a wedding...

SHREK
Fiona! I need to talk to you.

FIONA
Oh, now you wanna talk? It's a little 
late for that, so if you'll excuse me 
- -

SHREK
But you can't marry him.

FIONA
And why not?

SHREK
Because- - Because he's just marring 
you so he can be king.

FARQUAAD
Outrageous! Fiona, don't listen to him.


SHREK
He's not your true love.

FIONA
And what do you know about true love?


SHREK
Well, I - - Uh - - I mean - -

FARQUAAD
Oh, this is precious. The ogee has fallen 
in love with the princess! Oh, good 
Lord. (laughs)

The prompter card guy holds up a card that says 'Laugh'. The 
whole congregation laughs.

FARQUAAD
An ogre and a princess!

FIONA
Shrek, is this true?

FARQUAAD
Who cares? It's preposterous! Fiona, 
my love, we're but a kiss away from 
our "happily ever after." Now kiss me! 
(puckers his lips and leans toward her, 
but she pulls back.)

FIONA
(looking at the setting sun) "By night 
one way, by day another." (to Shrek) 
I wanted to show you before.

She backs up and as the sun sets she changes into her ogre self. 
She gives Shrek a sheepish smile.

SHREK
Well, uh, that explains a lot. (Fiona 
smiles)

FARQUAAD
Ugh! It's disgusting! Guards! Guards! 
I order you to get that out of my sight 
now! Get them! Get them both!

The guards run in and separate Fiona and Shrek. Shrek fights 
them.

SHREK
No, no!

FIONA
Shrek!

FARQUAAD
This hocus-pocus alters nothing. This 
marriage is binding, and that makes 
me king! See? See?

FIONA
No, let go of me! Shrek!

SHREK
No!

FARQUAAD
Don't just stand there, you morons.


SHREK
Get out of my way! Fiona! Arrgh!

FARQUAAD
I'll make you regret the day we met. 
I'll see you drawn and quartered! You'll 
beg for death to save you!

FIONA
No, Shrek!

FARQUAAD
(hold a dagger to Fiona's throat) And 
as for you, my wife...

SHREK
Fiona!

FARQUAAD
I'll have you locked back in that tower 
for the rest of your days! I'm king!


Shrek manages to get a hand free and he whistles.

FARQUAAD
I will have order! I will have perfection! 
I will have - - (Donkey and the dragon 
show up and the dragon leans down and 
eats Farquaad) Aaaah! Aah!

BURRO
All right. Nobody move. I got a dragon 
here, and I'm not afraid to use it. 
(The dragon roars.) I'm a donkey on 
the edge!

The dragon belches and Farquaad's crown flies out of her mouth 
and falls to the ground.

BURRO
Celebrity marriages. They never last, 
do they?

The congregation cheers.

BURRO
Go ahead, Shrek.

SHREK
Uh, Fiona?

FIONA
Yes, Shrek?

SHREK
I - - I love you.

FIONA
Really?

SHREK
Really, really.

FIONA
(smiles) I love you too.

Shrek and Fiona kiss. Thelonius takes one of the cards and writes 
'Awwww' on the back and then shows it to the congregation.


CONGREGATION
Aawww!

Suddenly the magic of the spell pulls Fiona away. She's lifted 
up into the air and she hovers there while the magic works around 
her.

WHISPERS
"Until you find true love's first kiss 
and then take love's true form. Take 
love's true form. Take love's true form."


Suddenly Fiona's eyes open wide. She's consumed by the spell 
and then is slowly lowered to the ground.

SHREK
(going over to her) Fiona? Fiona. Are 
you all right?

FIONA
(standing up, she's still an ogre) Well, 
yes. But I don't understand. I'm supposed 
to be beautiful.

SHREK
But you ARE beautiful.

They smile at each other.

BURRO
(chuckles) I was hoping this would be 
a happy ending.

Shrek and Fiona kiss...and the kiss fades into...

THE SWAMP

...their wedding kiss. Shrek and Fiona are now married. 'I'm 
a Believer' by Smashmouth is played in the background. Shrek 
and Fiona break apart and run through the crowd to their awaiting 
carriage. Which is made of a giant onion. Fiona tosses her bouquet 
which both Cinderella and Snow White try to catch. But they end 
up getting into a cat fight and so the dragon catches the bouquet 
instead. The Gingerbread man has been mended somewhat and now 
has one leg and walks with a candy cane cane. Shrek and Fiona 
walk off as the rest of the guests party and Donkey takes over 
singing the song.

GINGERBREAD MAN
God bless us, every one.

BURRO
(as he's done singing and we fade to 
black) Oh, that's funny. Oh. Oh. I can't 
breathe. I can't breathe.

THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
