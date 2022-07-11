const app = new Vue(
    {
        el: '#app',
        data: {
            activeElement: 0,
            newMessage: '',
            search: '',
            openedMess: -1,
            messageToShowDate: false,
            messageToShow: '',
            messageToShowStatus: '',
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
        methods: {
            imageToGo: function (elementToGo) {
                return './img/avatar' + elementToGo + '.jpg';
            },

            altForImages: function (elementToGo) {
                return 'avatar' + elementToGo;
            },

            selectContactOnClick: function (contactIndex) {
                this.activeElement = contactIndex;
                this.cleanSearchInput();
            },

            cleanDate: function (element) {
                return element.slice(11, -3);
            },

            pushNewMessage: function () {

                let spacesCheck = this.newMessage.trim();
                if (spacesCheck.length === 0) {

                } else {
                    this.contacts[this.activeElement].messages.push({
                        date: this.nowTime(),
                        message: this.newMessage,
                        status: 'sent'
                    });
                    this.botReply();
                }
                this.newMessage = '';
            },

            botReply: function () {

                let reply;
                let message = this.newMessage.toLowerCase();

                if (message === 'ciao' || message === 'ciao!') {
                    reply = 'Ciao!';
                } else if (message === 'usciamo?') {
                    reply = 'Non sto molto bene, scusami!';
                } else {
                    reply = 'Ok';
                }

                setTimeout(() => {

                    this.contacts[this.activeElement].messages.push({
                        date: this.nowTime(),
                        message: reply,
                        status: 'received',
                    });

                }, 1000);
            },

            searchInput: function () {

                let spacesCheck = this.search.trim();
                if (spacesCheck.length === 0) {
                    // se ci sono solo spazi, magari tornando indietro
                    // pulisce resetta la ricerca mettendo tutti in true!!
                    for (let i = 0; i < this.contacts.length; i++) {
                        this.contacts[i].visible = true;
                    }
                } else {
                    for (let i = 0; i < this.contacts.length; i++) {

                        let nameToLower = this.contacts[i].name.toLowerCase();
                        if (nameToLower.includes(spacesCheck.toLowerCase())) {
                            this.contacts[i].visible = true;
                        } else {
                            this.contacts[i].visible = false;
                        }
                    };
                }
            },

            // this clean the search input, it have to be used in events
            cleanSearchInput: function () {
                this.search = '';

                for (let i = 0; i < this.contacts.length; i++) {
                    this.contacts[i].visible = true;
                };
            },

            optionsDropdown: function (index) {
                if (this.openedMess !== index) {
                    this.openedMess = index;
                } else {
                    this.openedMess = -1;
                }
            },

            // deleteMessage: function (messagetoDelete) {
            //     messagetoDelete.status = false;
            //     messagetoDelete.message = '[Il messaggio è stato eliminato]';
            // },


            nowTime: function () {
                return moment().format("DD/MM/YYYY hh:mm:ss");
            },

            latestMessage: function (array) {         
                let messages = array.messages;
                if(messages.length > 0){
                    return messages[messages.length-1].message;
                }else{
                    return messages = 'Nessun messaggio.'
                }       
            },

            latestDate: function (array) {
                let messages = array.messages;
                if(messages.length > 0){
                    return messages[messages.length- 1].date;
                }else{
                    return messages = ''
                }
            },

            hardDeleteMessage: function (indexElement) {
                this.contacts[this.activeElement].messages.splice(indexElement, 1);
            },

            softDeleteMessage: function (messageSoftDelete) {
                messageSoftDelete.message = '[Il messaggio è stato eliminato]';
            },

            showInfos(elementInfos, index) {

                let shortCut = this.contacts[this.activeElement].messages[index];
                this.messageToShowDate = elementInfos.date;
                console.log(elementInfos)
                console.log(this.messageToShow);
                this.messageToShow = shortCut.message;
                console.log(this.messageToShow)
                this.messageToShowStatus = shortCut.status;
            },

            closeInfos: function () {
                this.messageToShowDate = false;
            },

        },
    },
)