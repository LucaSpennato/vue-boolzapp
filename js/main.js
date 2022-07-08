const app = new Vue(
    {
        el: '#app',
        data:{
            activeElement: 0,
            newMessage: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        },
        methods:{

            imageToGo: function(elementToGo){
                return './img/avatar' + elementToGo + '.jpg';
            },

            altForImages: function(elementToGo){
                return 'avatar' + elementToGo;
            },

            selectContactOnClick: function(contactIndex){
                this.activeElement = contactIndex;
            },

            cleanDate: function(element){

                // TODO: Prova ad usare .filter (resituiva un array giusto?), forse alleggerisco il codice con questo!
                // TODO: Metti i numeri in slice come elementi della funzione per poterla riutilizzare
                let cleanedDate = element.slice(11,-3);
                return cleanedDate;
            },

            pushNewMessage: function(){
                
                this.newMessage.trim();
                let spacesCheck;

                if( spacesCheck = this.newMessage.trim().length === 0){

                } else{
                    this.contacts[this.activeElement].messages.push({
                        date: '10/01/2020 15:51:00',
                        message: this.newMessage,
                        status: 'sent'
                    }); 
                    this.botReply();
                }

                this.newMessage = '';
            },

            botReply: function(){

                let reply;
                let message;
                message = this.newMessage.toLowerCase();

                if(message === 'ciao'){
                    reply = 'Ciao!';
                } else if(message === 'usciamo?'){
                    reply = 'Non sto molto bene, scusami!';
                } else{
                    reply = 'Ok';
                }

                setTimeout(() =>{

                    this.contacts[this.activeElement].messages.push({
                        date: '10/01/2020 15:51:00',
                        message:  reply,
                        status: 'received',
                    });

                }, 1000);
                
            }


        },
    },
)
/**
 * !Idea ricerca
 * creo la variabile che prenderà la stringa dal cerca
 * creo una funzione dove prima tolgo gli spazi alla stringa
 * metto tutti i caratteri in piccolo, rendo grande solo il primo 
 * 
 * itero in un for o se si può in un while
 * cerco nell'array per nome, se il while mi restituisce un index allora uso il while
 * 
 * (se while, per non rendere infinito il ciclo
 *  la condizione di uscita sarà quando hai fatto
 *  scorrere tutta la lunghezza dell'array senza trovarlo)
 * 
 * se lo trova, cambio l'activeIndex con il numero dell'iterazione
 * che dovrebbe corrispondere alla posizione del nome nell'array durante la ricerca (iterazione del ciclo)
 * 
 * essendo cambiato l'active la chat dovrebbe popparmi sulla destra
 * ma come lo dico a sinistra?
 * 
 * dovrei in qualche modo dire alla condizione della classe nella lista laterale
 * che ora il valore è diverso
 * 
 * 
 * prendo l'iterazione associata all'array col cerca, 
 * e creo un class con condizione indexRicerca (o se modifico activeElement prendo questo)
 * e gli dico che {'active' : indexRicerca(o activeElement) === contactIndex}
 */