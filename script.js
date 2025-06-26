// --- QUIZ DATA ---
// NOTE: Ceci est un exemple de données. Vous devrez compléter les 6 provinces et les catégories "Mystères"
// avec 5 questions de géographie/5 d'histoire pour chaque province, et 10 questions de géo/10 d'histoire pour les Mystères.
const quizData = {
    mg: {
        provinces: {
            antananarivo: {
                geography: [
                    { question: "Firifiry ny isam-ponina ao Antananarivo?", answers: ["2 tapitrisa", "3 tapitrisa", "1 tapitrisa", "4 tapitrisa"], correct: 1 },
                    { question: "Tendrombohitra inona no misy eo akaikin'Antananarivo?", answers: ["Ankaratra", "Ibity", "Angavo", "Ambohimanga"], correct: 0 },
                    { question: "Inona no farihy malaza indrindra ao Antananarivo?", answers: ["Farihin'Anosy", "Farihin'i Mantasoa", "Farihin'Itasy", "Farihin'Alaotra"], correct: 0 },
                    { question: "Faritra inona no misy an'Antananarivo?", answers: ["Analamanga", "Itasy", "Vakinankaratra", "Bongolava"], correct: 0 },
                    { question: "Renirano inona no mamakivaky an'Antananarivo?", answers: ["Ikopa", "Betsiboka", "Mangoky", "Tsiribihina"], correct: 0 }
                ],
                history: [
                    { question: "Iza no Mpanjaka nanorina an'Antananarivo?", answers: ["Andrianampoinimerina", "Ralambo", "Andriamanelo", "Radama I"], correct: 2 },
                    { question: "Inona no Rova malaza ao Antananarivo?", answers: ["Rova Manjakamiadana", "Rova Ambohimanga", "Rova Alasora", "Rova Analamanga"], correct: 0 },
                    { question: "Inona no renivohitry ny fanjakana Imerina talohan'Antananarivo?", answers: ["Ambohimanga", "Alasora", "Ilafy", "Antongona"], correct: 0 },
                    { question: "Inona no zava-nitranga lehibe teo amin'ny tantaran'Antananarivo tamin'ny 1895?", answers: ["Fianaran'ny Rova", "Nalain'ny Frantsay ny tanàna", "Fihanaky ny pesta mainty", "Fanorenana ny tonelina Ambohidahy"], correct: 1 },
                    { question: "Inona no anaran'ny tsena manan-tantara ao Antananarivo, foiben'ny varotra?", answers: ["Andravoahangy", "Digue", "Analakely", "Isotry"], correct: 2 }
                ]
            },
            antsiranana: {
                geography: [
                    { question: "Helodrano inona no malaza any Antsiranana?", answers: ["Helodranon'i Antsiranana", "Helodranon'i Antongil", "Helodranon'i Saint-Augustin", "Helodranon'i Toliara"], correct: 0 },
                    { question: "Inona no anaran'ny vato malaza ao Antsiranana?", answers: ["Pain de Sucre", "Tsingy Rouge", "Canyon", "Montagne des Français"], correct: 0 },
                    { question: "Faritra arovana inona no misy gidro satro-boninahitra eo akaikin'Antsiranana?", answers: ["Ankarana", "Tendrombohitra Ambre", "Tsingy de Bemaraha", "Analamazaotra"], correct: 1 },
                    { question: "Inona no anaran'ny valan-javaboary an-dranomasina eo akaikin'Antsiranana?", answers: ["Nosy Tanikely", "Nosy Be", "Nosy Komba", "Nosy Iranja"], correct: 0 },
                    { question: "Iza amin'ireto nosy ireto no TSY ao amin'ny faritanin'Antsiranana?", answers: ["Nosy Be", "Nosy Komba", "Nosy Mitsio", "Nosy Boraha (Sainte Marie)"], correct: 3 }
                ],
                history: [
                    { question: "Nandray anjara tamin'ny ady lehibe faharoa ny Seranantsambon'i Antsiranana. Marina sa diso?", answers: ["Marina", "Diso"], correct: 0 },
                    { question: "Inona no anarana faha-zanatany an'Antsiranana?", answers: ["Diego Suarez", "Fort Dauphin", "Tamatave", "Majunga"], correct: 0 },
                    { question: "Hery mpanjanaka inona no nanorina toby an-dranomasina tany Antsiranana tamin'ny taonjato faha-19?", answers: ["Fanjakana Mitambatra", "Frantsa", "Alemaina", "Portugal"], correct: 1 },
                    { question: "Iza amin'ireo mpanjaka malagasy no nanakambana ny faritr'Antsiranana tamin'ny fanjakana Imerina?", answers: ["Radama I", "Ranavalona I", "Andrianampoinimerina", "Rasoherina"], correct: 0 },
                    { question: "Mpikaroka frantsay malaza iza no nitsidika ny faritr'Antsiranana?", answers: ["Alfred Grandidier", "Étienne de Flacourt", "Jean-Baptiste Commerson", "Jacques de Laborde"], correct: 0 }
                ]
            },
            fianarantsoa: {
                geography: [
                    { question: "Inona no valan-javaboary malaza indrindra ao Fianarantsoa, fantatra amin'ny gidro sy ny ala matevina?", answers: ["Ranomafana", "Isalo", "Andringitra", "Midongy du Sud"], correct: 0 },
                    { question: "Renirano lehibe inona no loharano akaikin'i Fianarantsoa?", answers: ["Mangoky", "Tsiribihina", "Onilahy", "Mananjary"], correct: 0 },
                    { question: "Fianarantsoa dia fantatra amin'ny hoe renivohitry ny vokatra fambolena inona?", answers: ["Vary", "Kafe", "Divay", "Dite"], correct: 2 },
                    { question: "Inona no endrika jeolojika mampiavaka ny faritr'i Fianarantsoa?", answers: ["Tendrombohitra afovoany", "Lemak'ala", "Faobe volkanika", "Lembalemba vatosokay"], correct: 0 },
                    { question: "Inona no anaran'ny lalan-dalamby mampitohy an'i Fianarantsoa amin'ny morontsiraka Atsinanana?", answers: ["FCE", "Tana-Côte", "Vakinankaratra Express", "Sud-Est"], correct: 0 }
                ],
                history: [
                    { question: "Fianarantsoa dia naorina tamin'ny taonjato faha-19 tamin'ny alalan'ny tarana-mpanjaka inona?", answers: ["Sakalava", "Merina", "Betsileo", "Antemoro"], correct: 1 },
                    { question: "Inona no anaran'ny tanàn-drazana mpanjaka akaikin'i Fianarantsoa, voasokajy ho vakoka eran-tany?", answers: ["Ambohimanga", "Analamanga", "Isandra", "Manjakamiadana"], correct: 2 },
                    { question: "Hetsika fanoherana ny fanjanahantany frantsay inona no nanana toby lehibe tany Fianarantsoa?", answers: ["MDC", "Padesm", "MNM", "Jiny"], correct: 3 },
                    { question: "Fianarantsoa dia foibe lehibe amin'ny asan'ny fivavahana inona?", answers: ["Katolika", "Protestanta", "Animisme", "Silamo"], correct: 0 },
                    { question: "Inona no anaran'ny kolejy jésuite manan-tantara ao Fianarantsoa, mpisava lalana amin'ny fampianarana?", answers: ["Saint Michel", "Saint François Xavier", "Saint Joseph", "Sainte Famille"], correct: 1 }
                ]
            },
            mahajanga: {
                geography: [
                    { question: "Renirano inona no mikoriana ao amin'ny Helodranon'i Mahajanga?", answers: ["Betsiboka", "Tsiribihina", "Manambolo", "Mangoky"], correct: 0 },
                    { question: "Inona no endrika jeolojika malaza akaikin'i Mahajanga?", answers: ["Cirque Rouge", "Tsingy de Bemaraha", "Tendrombohitra Ambre", "Lalan'ny Baobab"], correct: 0 },
                    { question: "Inona no toetra mampiavaka ny toetrandro ao Mahajanga?", answers: ["Toetrandro maina tropikaly", "Toetrandro ekioatorialy", "Toetrandro antonony", "Toetrandro an-tendrombohitra"], correct: 0 },
                    { question: "Inona no sakafo manokana ao Mahajanga, sakafo atao amin'ny hazan-dranomasina?", answers: ["Laoka", "Brochettes de zébu", "Ceviche de poisson", "Kitoza"], correct: 2 },
                    { question: "Fari-dranomasina lehibe inona no hita ao Mahajanga?", answers: ["Grand Pavois", "Ambondro", "Chacard", "Antsaholana"], correct: 0 }
                ],
                history: [
                    { question: "Mahajanga dia toeram-pivarotana lehibe ho an'ny mpivarotra inona tamin'ny taonjato faha-18?", answers: ["Arabo sy Indiana", "Portiogey sy Holandey", "Britanika sy Amerikana", "Sinoa sy Japoney"], correct: 0 },
                    { question: "Tarana-mpanjaka Sakalava inona no nanana an'i Mahajanga ho renivohiny?", answers: ["Menabe", "Boina", "Vakinankaratra", "Sihanaka"], correct: 1 },
                    { question: "Inona no anaran'ny 'hazo masina' na 'hazon'ny mpandeha' malaza mampiavaka an'i Mahajanga?", answers: ["Baobab goavambe", "Palmier Ravinala", "Tamarina", "Figuier Banyan"], correct: 0 },
                    { question: "Inona no anaran'ny faritra manan-tantara ao Mahajanga, miaraka amin'ny trano tranainy nentin-drazana?", answers: ["Manga", "Marovato", "Anakely", "Mangarivotra"], correct: 0 },
                    { question: "Inona no zava-nitranga lehibe nanamarika ny fivoaran'i Mahajanga tamin'ny fiandohan'ny taonjato faha-20?", answers: ["Fanorenana ny lalan-dalamby", "Fananganana ny seranana maoderina", "Fahitana volamena", "Fananganana oniversite"], correct: 1 }
                ]
            },
            toamasina: {
                geography: [
                    { question: "Inona no seranan-tsambo lehibe indrindra eto Madagasikara?", answers: ["Toamasina", "Mahajanga", "Toliara", "Antsiranana"], correct: 0 },
                    { question: "Karazana toetrandro inona no manjaka ao Toamasina?", answers: ["Toetrandro tropikaly mando", "Toetrandro tropikaly maina", "Toetrandro antonony", "Toetrandro an-tany efitra"], correct: 0 },
                    { question: "Lalana lehibe inona no misy palma maro ao Toamasina?", answers: ["Lalan'ny Fahaleovantena", "Boulevard Poincaré", "Lalan'ny Fanafahana", "Boulevard de la Corne"], correct: 1 },
                    { question: "Lakana artifisialy inona no manomboka ao Toamasina ary manaraka ny morontsiraka?", answers: ["Lakan'i Suez", "Lakan'i Panama", "Lakan-dranon'ny Pangalanes", "Lakan'i Mozambika"], correct: 2 },
                    { question: "Ala orana tropikaly inona no eo akaikin'i Toamasina?", answers: ["Masoala", "Andasibe-Mantadia", "Ranomafana", "Zahamena"], correct: 1 }
                ],
                history: [
                    { question: "Toamasina dia fantatra taloha tamin'ny anarana inona?", answers: ["Tamatave", "Farafangana", "Vatomandry", "Mahanoro"], correct: 0 },
                    { question: "Mpanjaka inona no nanamafy an'i Toamasina tamin'ny taonjato faha-19?", answers: ["Radama I", "Ranavalona I", "Andrianampoinimerina", "Rainilaiarivony"], correct: 1 },
                    { question: "Kolontsaina inona no tena nisy fiantraikany tamin'ny tanànan'i Toamasina noho ny seranany?", answers: ["Arabo", "Indiana", "Eoropeana", "Ireo kolontsaina rehetra ireo"], correct: 3 },
                    { question: "Inona no anaran'ny fonja manan-tantara ao Toamasina, tandindon'ny famoretana tamin'ny fanjanahantany?", answers: ["Ambatolampy", "Manjakamiadana", "Béhoririka", "Tsiafahy"], correct: 0 },
                    { question: "Anjara asa inona no nilalaovan'i Toamasina nandritra ny fanjanahantany frantsay?", answers: ["Foibe fitantanana lehibe", "Toby miaramila stratejika", "Seranan-tsambo varotra lehibe", "Foibe fitrandrahana harena an-kibon'ny tany"], correct: 2 }
                ]
            },
            toliara: {
                geography: [
                    { question: "Toliara dia hita eo amin'ny morontsirak'ilay lakana inona?", answers: ["Mozambika", "Suez", "Panama", "Pangalanes"], correct: 0 },
                    { question: "Inona no zavamaniry manokana ao amin'ny faritr'i Toliara, ampiasaina matetika amin'ny asa tanana?", answers: ["Sisal", "Raphia", "Vetiver", "Baobab"], correct: 0 },
                    { question: "Inona no valan-javaboary an-dranomasina akaikin'i Toliara, malaza amin'ny haran-dranomasiny?", answers: ["Ifaty", "Nosy Ve", "Sainte Luce", "Anakao"], correct: 0 },
                    { question: "Foko inona no maro an'isa ao amin'ny faritr'i Toliara?", answers: ["Sakalava", "Betsileo", "Bara", "Mahafaly"], correct: 3 },
                    { question: "Toliara dia fantatra amin'ny zaridaina botanika tsy manam-paharoa, inona no anarany?", answers: ["Arboretum d'Antsokay", "Jardin d'Anosy", "Parc de Tsimbazaza", "Parc Ivoloina"], correct: 0 }
                ],
                history: [
                    { question: "Toliara dia toeram-pivarotana taloha ho an'ny mpikaroka sy mpivarotra frantsay inona tamin'ny taonjato faha-17?", answers: ["Étienne de Flacourt", "Jean de Laborde", "François Pyrard", "Pierre Poivre"], correct: 0 },
                    { question: "Asa ara-toekarena manan-tantara inona no zava-dehibe tany Toliara?", answers: ["Fivarotana andevo", "Fanjonoana trozona", "Fambolena vary", "Fitrandrahana harena an-kibon'ny tany"], correct: 0 },
                    { question: "Inona no anaran'i Toliara tamin'ny vanim-potoana zanatany?", answers: ["Fort Dauphin", "Tuléar", "Majunga", "Tamatave"], correct: 1 },
                    { question: "Fianakaviambe inona no manana tantara sy toekarena lehibe ao Toliara?", answers: ["Sinoa", "Indiana", "Comorienne", "Yéménite"], correct: 1 },
                    { question: "Mpanjaka Sakalava inona no nanitatra ny fahefany hatrany amin'ny faritr'i Toliara?", answers: ["Andriamisara", "Andrianampoinimerina", "Andriamandisoarivo", "Ranavalona I"], correct: 2 }
                ]
            }
        },
        mystery: {
            history: [
                { question: "Iza no mpanjakavavy farany teto Madagasikara?", answers: ["Ranavalona I", "Ranavalona III", "Rasoherina", "Ravolana"], correct: 1 },
                { question: "Rahoviana no nahazo ny fahaleovantenany i Madagasikara tamin'i Frantsa?", answers: ["1958", "1960", "1947", "1972"], correct: 1 },
                { question: "Fifanarahana inona no nanamarika ny fiandohan'ny fanjanahantany frantsay teto Madagasikara?", answers: ["Fifanarahana tao Toamasina", "Fifanarahana tao Antananarivo (1895)", "Fifanarahana tao Londres", "Fifanarahana tao Berlin"], correct: 1 },
                { question: "Iza no Praiminisitra malaza nanambady mpanjakavavy telo nisesy?", answers: ["Rainiharo", "Andriamampandry", "Rainilaiarivony", "Radama II"], correct: 2 },
                { question: "Inona no zava-nitranga lehibe tamin'ny 1947 teto Madagasikara?", answers: ["Ny fahaleovantena", "Ny fikomiana", "Ny mosary lehibe", "Ny fananganana ny Repoblika Voalohany"], correct: 1 },
                { question: "Tarana-mpanjaka inona no nanambatra ny ankamaroan'i Madagasikara tamin'ny taonjato faha-19?", answers: ["Sakalava", "Merina", "Betsileo", "Antemoro"], correct: 1 },
                { question: "Iza no 'Rain'ny Fahaleovantenan'i Madagasikara'?", answers: ["Philibert Tsiranana", "Didier Ratsiraka", "Albert Zafy", "Marc Ravalomanana"], correct: 0 },
                { question: "Inona no anaran'ilay mpikaroka frantsay nanoratra ny asa feno voalohany momba an'i Madagasikara tamin'ny taonjato faha-17?", answers: ["Alfred Grandidier", "Étienne de Flacourt", "Jean-Baptiste Commerson", "Pierre Poivre"], correct: 1 },
                { question: "Inona no anaran'ny Rova (lapan'ny mpanjaka) masina sy manan-tantara indrindra, voasokajy ao amin'ny UNESCO?", answers: ["Ambohimanga", "Manjakamiadana", "Fianarantsoa", "Analamanga"], correct: 0 },
                { question: "Rahoviana no nambaran'i Radama I fa empira ny fanjakan'i Madagasikara?", answers: ["1810", "1817", "1820", "1828"], correct: 1 }
            ],
            geography: [
                { question: "Inona no farihy lehibe indrindra eto Madagasikara?", answers: ["Farihin'Alaotra", "Farihin'Itasy", "Farihin'Anosy", "Farihin'i Tritriva"], correct: 0 },
                { question: "Tendrombohitra inona no mamakivaky ny halavan'i Madagasikara?", answers: ["Andringitra", "Ankaratra", "Tendrombohitra Atsinanana", "Ireo rehetra ireo"], correct: 2 },
                { question: "Karazana ala inona no mampiavaka ny morontsiraka Andrefan'i Madagasikara?", answers: ["Ala orana tropikaly mando", "Ala maina mandatsaka ravina", "Ala honko", "Ala tsilo"], correct: 1 },
                { question: "Inona no loharano lehibe indrindra amin'ny angovo azo havaozina ampiasaina eto Madagasikara?", answers: ["Masom-pahazavana", "Rivotra", "Angovo avy amin'ny rano", "Geothermie"], correct: 2 },
                { question: "Inona no anaran'ny renirano lava indrindra eto Madagasikara?", answers: ["Mangoky", "Tsiribihina", "Ikopa", "Betsiboka"], correct: 3 },
                { question: "Inona no nosy lehibe indrindra eo avaratra andrefan'i Madagasikara?", answers: ["Nosy Be", "Nosy Komba", "Nosy Iranja", "Nosy Mitsio"], correct: 0 },
                { question: "Inona no anaran'ny tendrombohitra afovoany eto Madagasikara?", answers: ["Hautes Terres", "Plateau de l'Ankaratra", "Plateau de l'Androy", "Plateau de l'Isalo"], correct: 0 },
                { question: "Inona no anaran'ny tanàna seranana faharoa lehibe indrindra eto Madagasikara?", answers: ["Mahajanga", "Toliara", "Antsiranana", "Fort Dauphin"], correct: 0 },
                { question: "Inona no loharano lehibe indrindra ahazoan-karena ho an'ny mponina any ambanivohitra eto Madagasikara?", answers: ["Jono", "Fiompiana", "Fambolena", "Asa tanana"], correct: 2 },
                { question: "Inona no toetrandro manjaka any atsimon'i Madagasikara?", answers: ["Maina somary maina", "Tropikaly mando", "Antonony", "Mediteraneana"], correct: 0 }
            ]
        }
    },
    fr: {
        provinces: {
            antananarivo: {
                geography: [
                    { question: "Quelle est la population d'Antananarivo (environ) ?", answers: ["2 millions", "3 millions", "1 million", "4 millions"], correct: 1 },
                    { question: "Quelle montagne est proche d'Antananarivo ?", answers: ["Ankaratra", "Ibity", "Angavo", "Ambohimanga"], correct: 0 },
                    { question: "Quel est le lac le plus célèbre d'Antananarivo ?", answers: ["Lac Anosy", "Lac Mantasoa", "Lac Itasy", "Lac Alaotra"], correct: 0 },
                    { question: "Dans quelle région se trouve Antananarivo ?", answers: ["Analamanga", "Itasy", "Vakinankaratra", "Bongolava"], correct: 0 },
                    { question: "Quel fleuve traverse Antananarivo ?", answers: ["Ikopa", "Betsiboka", "Mangoky", "Tsiribihina"], correct: 0 }
                ],
                history: [
                    { question: "Quel Roi a fondé Antananarivo ?", answers: ["Andrianampoinimerina", "Ralambo", "Andriamanelo", "Radama I"], correct: 2 },
                    { question: "Quel célèbre palais se trouve à Antananarivo ?", answers: ["Rova Manjakamiadana", "Rova Ambohimanga", "Rova Alasora", "Rova Analamanga"], correct: 0 },
                    { question: "Quelle est l'ancienne capitale du royaume d'Imerina avant Antananarivo ?", answers: ["Ambohimanga", "Alasora", "Ilafy", "Antongona"], correct: 0 },
                    { question: "Quel événement majeur a marqué l'histoire d'Antananarivo en 1895 ?", answers: ["L'incendie du Rova", "La prise de la ville par les Français", "La peste noire", "La construction du tunnel d'Ambohidahy"], correct: 1 },
                    { question: "Quel est le nom du marché historique d'Antananarivo, centre d'échanges ?", answers: ["Andravoahangy", "Digue", "Analakely", "Isotry"], correct: 2 }
                ]
            },
            antsiranana: {
                geography: [
                    { question: "Quelle célèbre baie se trouve à Antsiranana ?", answers: ["Baie de Diego Suarez", "Baie d'Antongil", "Baie de Saint-Augustin", "Baie de Toliara"], correct: 0 },
                    { question: "Quel est le nom de la formation rocheuse emblématique d'Antsiranana ?", answers: ["Pain de Sucre", "Tsingy Rouge", "Canyon", "Montagne des Français"], correct: 0 },
                    { question: "Quelle réserve naturelle abrite des lémuriens couronnés près d'Antsiranana ?", answers: ["Ankarana", "Montagne d'Ambre", "Tsingy de Bemaraha", "Analamazaotra"], correct: 1 },
                    { question: "Quel est le nom du parc marin proche d'Antsiranana ?", answers: ["Nosy Tanikely", "Nosy Be", "Nosy Komba", "Nosy Iranja"], correct: 0 },
                    { question: "Laquelle de ces îles n'est PAS dans la province d'Antsiranana ?", answers: ["Nosy Be", "Nosy Komba", "Nosy Mitsio", "Nosy Boraha (Sainte Marie)"], correct: 3 }
                ],
                history: [
                    { question: "Le port d'Antsiranana a joué un rôle important lors de la Seconde Guerre Mondiale. Vrai ou Faux ?", answers: ["Vrai", "Faux"], correct: 0 },
                    { question: "Quel était le nom colonial d'Antsiranana ?", answers: ["Diego Suarez", "Fort Dauphin", "Tamatave", "Majunga"], correct: 0 },
                    { question: "Quelle puissance coloniale a établi une base navale à Antsiranana au 19ème siècle ?", answers: ["Royaume-Uni", "France", "Allemagne", "Portugal"], correct: 1 },
                    { question: "Quel souverain malgache a rattaché la région d'Antsiranana au royaume Imerina ?", answers: ["Radama I", "Ranavalona I", "Andrianampoinimerina", "Rasoherina"], correct: 0 },
                    { question: "Quel célèbre explorateur français a visité la région d'Antsiranana ?", answers: ["Alfred Grandidier", "Étienne de Flacourt", "Jean-Baptiste Commerson", "Jacques de Laborde"], correct: 0 }
                ]
            },
            fianarantsoa: {
                geography: [
                    { question: "Quel est le parc national le plus célèbre de Fianarantsoa, connu pour ses lémuriens et sa forêt dense ?", answers: ["Ranomafana", "Isalo", "Andringitra", "Midongy du Sud"], correct: 0 },
                    { question: "Quel fleuve important prend sa source près de Fianarantsoa ?", answers: ["Mangoky", "Tsiribihina", "Onilahy", "Mananjary"], correct: 0 },
                    { question: "Fianarantsoa est surnommée la capitale de quel produit agricole ?", answers: ["Riz", "Café", "Vin", "Thé"], correct: 2 },
                    { question: "Quelle formation géologique est caractéristique de la région de Fianarantsoa ?", answers: ["Hautes Terres centrales", "Plaines côtières", "Massifs volcaniques", "Plateaux calcaires"], correct: 0 },
                    { question: "Quel est le nom de la voie ferrée reliant Fianarantsoa à la côte Est ?", answers: ["FCE", "Tana-Côte", "Vakinankaratra Express", "Sud-Est"], correct: 0 }
                ],
                history: [
                    { question: "Fianarantsoa a été fondée au 19ème siècle par quelle dynastie royale ?", answers: ["Sakalava", "Merina", "Betsileo", "Antemoro"], correct: 1 },
                    { question: "Quel est le nom de l'ancienne cité royale près de Fianarantsoa, classée au patrimoine mondial ?", answers: ["Ambohimanga", "Analamanga", "Isandra", "Manjakamiadana"], correct: 2 },
                    { question: "Quel mouvement de résistance à la colonisation française a eu des bases importantes à Fianarantsoa ?", answers: ["MDC", "Padesm", "MNM", "Jiny"], correct: 3 },
                    { question: "Fianarantsoa est un centre important de quelle activité religieuse ?", answers: ["Catholicisme", "Protestantisme", "Animisme", "Islam"], correct: 0 },
                    { question: "Quel est le nom du collège jésuite historique à Fianarantsoa, pionnier de l'éducation ?", answers: ["Saint Michel", "Saint François Xavier", "Saint Joseph", "Sainte Famille"], correct: 1 }
                ]
            },
            mahajanga: {
                geography: [
                    { question: "Quel fleuve se jette dans la baie de Mahajanga ?", answers: ["Betsiboka", "Tsiribihina", "Manambolo", "Mangoky"], correct: 0 },
                    { question: "Quelle formation géologique est célèbre près de Mahajanga ?", answers: ["Cirque Rouge", "Tsingy de Bemaraha", "Montagne d'Ambre", "Allée des Baobabs"], correct: 0 },
                    { question: "Quelle est la principale caractéristique climatique de Mahajanga ?", answers: ["Climat tropical sec", "Climat équatorial", "Climat tempéré", "Climat de montagne"], correct: 0 },
                    { question: "Quelle est la spécialité culinaire de Mahajanga, un plat à base de fruits de mer ?", answers: ["Laoka", "Brochettes de zébu", "Ceviche de poisson", "Kitoza"], correct: 2 },
                    { question: "Quelle grande plage se trouve à Mahajanga ?", answers: ["Grand Pavois", "Ambondro", "Chacard", "Antsaholana"], correct: 0 }
                ],
                history: [
                    { question: "Mahajanga était un important comptoir commercial pour quels marchands au 18ème siècle ?", answers: ["Arabes et Indiens", "Portugais et Hollandais", "Britanniques et Américains", "Chinois et Japonais"], correct: 0 },
                    { question: "Quelle dynastie royale Sakalava avait Mahajanga comme capitale ?", answers: ["Menabe", "Boina", "Vakinankaratra", "Sihanaka"], correct: 1 },
                    { question: "Quel est le nom de l'ancien 'arbre sacré' ou 'arbre du voyageur' emblématique de Mahajanga ?", answers: ["Baobab géant", "Palmier Ravinala", "Tamarina", "Figuier Banyan"], correct: 0 },
                    { question: "Quel est le nom du quartier historique de Mahajanga, avec son architecture coloniale ?", answers: ["Manga", "Marovato", "Anakely", "Mangarivotra"], correct: 0 },
                    { question: "Quel événement majeur a marqué le développement de Mahajanga au début du 20ème siècle ?", answers: ["La construction du chemin de fer", "L'établissement du port moderne", "La découverte de mines d'or", "La création d'une université"], correct: 1 }
                ]
            },
            toamasina: {
                geography: [
                    { question: "Quel est le principal port de Madagascar ?", answers: ["Toamasina", "Mahajanga", "Toliara", "Antsiranana"], correct: 0 },
                    { question: "Quel type de climat prédomine à Toamasina ?", answers: ["Tropical humide", "Tropical sec", "Tempéré", "Désertique"], correct: 0 },
                    { question: "Quelle est la grande avenue bordée de palmiers à Toamasina ?", answers: ["Avenue de l'Indépendance", "Boulevard Poincaré", "Avenue de la Libération", "Boulevard de la Corne"], correct: 1 },
                    { question: "Quel canal artificiel débute à Toamasina et longe la côte ?", answers: ["Canal de Suez", "Canal de Panama", "Canal des Pangalanes", "Canal du Mozambique"], correct: 2 },
                    { question: "Quelle forêt tropicale humide se trouve à proximité de Toamasina ?", answers: ["Masoala", "Andasibe-Mantadia", "Ranomafana", "Zahamena"], correct: 1 }
                ],
                history: [
                    { question: "Toamasina était autrefois connue sous quel nom ?", answers: ["Tamatave", "Farafangana", "Vatomandry", "Mahanoro"], correct: 0 },
                    { question: "Quel souverain a fortifié Toamasina au 19ème siècle ?", answers: ["Radama I", "Ranavalona I", "Andrianampoinimerina", "Rainilaiarivony"], correct: 1 },
                    { question: "Quelle culture a fortement influencé la ville de Toamasina en raison de son port ?", answers: ["Arabe", "Indienne", "Européenne", "Toutes ces cultures"], correct: 3 },
                    { question: "Quel est le nom de la prison historique de Toamasina, symbole de la répression coloniale ?", answers: ["Ambatolampy", "Manjakamiadana", "Béhoririka", "Tsiafahy"], correct: 0 },
                    { question: "Quel rôle Toamasina a-t-elle joué pendant la colonisation française ?", answers: ["Centre administratif principal", "Base militaire stratégique", "Port de commerce majeur", "Centre d'exploitation minière"], correct: 2 }
                ]
            },
            toliara: {
                geography: [
                    { question: "Toliara est située sur la côte de quel canal ?", answers: ["Mozambique", "Suez", "Panama", "Pangalanes"], correct: 0 },
                    { question: "Quelle est la spécialité végétale de la région de Toliara, souvent utilisée en artisanat ?", answers: ["Sisal", "Raphia", "Vétiver", "Baobab"], correct: 0 },
                    { question: "Quel est le parc national marin près de Toliara, réputé pour ses coraux ?", answers: ["Ifaty", "Nosy Ve", "Sainte Luce", "Anakao"], correct: 0 },
                    { question: "Quel groupe ethnique est majoritaire dans la région de Toliara ?", answers: ["Sakalava", "Betsileo", "Bara", "Mahafaly"], correct: 3 },
                    { question: "Toliara est connue pour son jardin botanique unique, quel est son nom ?", answers: ["Arboretum d'Antsokay", "Jardin d'Anosy", "Parc de Tsimbazaza", "Parc Ivoloina"], correct: 0 }
                ],
                history: [
                    { question: "Toliara était un ancien comptoir de quel explorateur et marchand français au 17ème siècle ?", answers: ["Étienne de Flacourt", "Jean de Laborde", "François Pyrard", "Pierre Poivre"], correct: 0 },
                    { question: "Quelle activité économique historique était importante à Toliara ?", answers: ["Commerce d'esclaves", "Pêche à la baleine", "Culture du riz", "Extraction minière"], correct: 0 },
                    { question: "Quel nom portait Toliara à l'époque coloniale ?", answers: ["Fort Dauphin", "Tuléar", "Majunga", "Tamatave"], correct: 1 },
                    { question: "Quelle communauté est présente historiquement et économiquement importante à Toliara ?", answers: ["Chinoise", "Indienne", "Comorienne", "Yéménite"], correct: 1 },
                    { question: "Quel roi Sakalava a étendu son influence jusqu'à la région de Toliara ?", answers: ["Andriamisara", "Andrianampoinimerina", "Andriamandisoarivo", "Ranavalona I"], correct: 2 }
                ]
            }
        },
        mystery: {
            history: [
                { question: "Quel est le nom de la dernière reine de Madagascar ?", answers: ["Ranavalona I", "Ranavalona III", "Rasoherina", "Ravolana"], correct: 1 },
                { question: "En quelle année Madagascar est-elle devenue indépendante de la France ?", answers: ["1958", "1960", "1947", "1972"], correct: 1 },
                { question: "Quel traité a marqué le début de la colonisation française de Madagascar ?", answers: ["Traité de Tamatave", "Traité de Tananarive (1895)", "Traité de Londres", "Traité de Berlin"], correct: 1 },
                { question: "Quel est le nom du célèbre Premier ministre qui a épousé trois reines successives ?", answers: ["Rainiharo", "Andriamampandry", "Rainilaiarivony", "Radama II"], correct: 2 },
                { question: "Quel événement majeur s'est produit en 1947 à Madagascar ?", answers: ["L'indépendance", "L'insurrection", "Le grand famine", "La création de la Première République"], correct: 1 },
                { question: "Quelle est la dynastie royale qui a unifié la majeure partie de Madagascar au 19ème siècle ?", answers: ["Sakalava", "Merina", "Betsileo", "Antemoro"], correct: 1 },
                { question: "Qui est le 'Père de l'Indépendance' de Madagascar ?", answers: ["Philibert Tsiranana", "Didier Ratsiraka", "Albert Zafy", "Marc Ravalomanana"], correct: 0 },
                { question: "Quel est le nom de l'explorateur français qui a rédigé le premier ouvrage détaillé sur Madagascar au 17e siècle ?", answers: ["Alfred Grandidier", "Étienne de Flacourt", "Jean-Baptiste Commerson", "Pierre Poivre"], correct: 1 },
                { question: "Quel est le nom du Rova (palais royal) le plus sacré et historique, classé à l'UNESCO ?", answers: ["Ambohimanga", "Manjakamiadana", "Fianarantsoa", "Analamanga"], correct: 0 },
                { question: "En quelle année le royaume de Madagascar a-t-il été proclamé empire par Radama Ier ?", answers: ["1810", "1817", "1820", "1828"], correct: 1 }
            ],
            geography: [
                { question: "Quel est le plus grand lac de Madagascar ?", answers: ["Lac Alaotra", "Lac Itasy", "Lac Anosy", "Lac Tritriva"], correct: 0 },
                { question: "Quelle est la chaîne de montagnes qui s'étend sur la longueur de Madagascar ?", answers: ["Andringitra", "Ankaratra", "Chaîne Orientale", "Toutes ces réponses"], correct: 2 },
                { question: "Quel type de forêt est typique de la côte Ouest de Madagascar ?", answers: ["Forêt tropicale humide", "Forêt sèche caducifoliée", "Forêt de mangrove", "Forêt épineuse"], correct: 1 },
                { question: "Quelle est la principale source d'énergie renouvelable utilisée à Madagascar ?", answers: ["Solaire", "Éolienne", "Hydroélectrique", "Géothermique"], correct: 2 },
                { question: "Quel est le nom de la rivière la plus longue de Madagascar ?", answers: ["Mangoky", "Tsiribihina", "Ikopa", "Betsiboka"], correct: 3 },
                { question: "Quelle est l'île la plus grande au large de la côte nord-ouest de Madagascar ?", answers: ["Nosy Be", "Nosy Komba", "Nosy Iranja", "Nosy Mitsio"], correct: 0 },
                { question: "Quel est le nom du plateau central de Madagascar ?", answers: ["Hautes Terres", "Plateau de l'Ankaratra", "Plateau de l'Androy", "Plateau de l'Isalo"], correct: 0 },
                { question: "Quel est le nom de la deuxième plus grande ville portuaire de Madagascar ?", answers: ["Mahajanga", "Toliara", "Antsiranana", "Fort Dauphin"], correct: 0 },
                { question: "Quelle est la principale source de revenus pour la population rurale à Madagascar ?", answers: ["Pêche", "Élevage", "Agriculture", "Artisanat"], correct: 2 },
                { question: "Quel est le climat prédominant dans le sud de Madagascar ?", answers: ["Semi-aride", "Tropical humide", "Tempéré", "Méditerranéen"], correct: 0 }
            ]
        }
    },
    en: {
        provinces: {
            antananarivo: {
                geography: [
                    { question: "What is the approximate population of Antananarivo?", answers: ["2 million", "3 million", "1 million", "4 million"], correct: 1 },
                    { question: "Which mountain is near Antananarivo?", answers: ["Ankaratra", "Ibity", "Angavo", "Ambohimanga"], correct: 0 },
                    { question: "What is the most famous lake in Antananarivo?", answers: ["Lake Anosy", "Lake Mantasoa", "Lake Itasy", "Lake Alaotra"], correct: 0 },
                    { question: "Which region is Antananarivo located in?", answers: ["Analamanga", "Itasy", "Vakinankaratra", "Bongolava"], correct: 0 },
                    { question: "Which river flows through Antananarivo?", answers: ["Ikopa", "Betsiboka", "Mangoky", "Tsiribihina"], correct: 0 }
                
                ],
                history: [
                    { question: "Which King founded Antananarivo?", answers: ["Andrianampoinimerina", "Ralambo", "Andriamanelo", "Radama I"], correct: 2 },
                    { question: "What is the famous Rova (palace) in Antananarivo?", answers: ["Rova Manjakamiadana", "Rova Ambohimanga", "Rova Alasora", "Rova Analamanga"], correct: 0 },
                    { question: "What was the former capital of the Imerina kingdom before Antananarivo?", answers: ["Ambohimanga", "Alasora", "Ilafy", "Antongona"], correct: 0 },
                    { question: "What major event marked the history of Antananarivo in 1895?", answers: ["The Rova fire", "The French capture of the city", "The spread of the Black Death", "The construction of the Ambohidahy tunnel"], correct: 1 },
                    { question: "What is the name of the historic market in Antananarivo, a center of trade?", answers: ["Andravoahangy", "Digue", "Analakely", "Isotry"], correct: 2 }
                
                ]
            },
            antsiranana: {
                geography: [
                    { question: "Which famous bay is in Antsiranana?", answers: ["Diego Suarez Bay", "Antongil Bay", "Saint-Augustin Bay", "Toliara Bay"], correct: 0 },
                    { question: "What is the name of the iconic rock formation in Antsiranana?", answers: ["Sugarloaf", "Red Tsingy", "Canyon", "French Mountain"], correct: 0 },
                    { question: "Which protected area near Antsiranana is home to crowned lemurs?", answers: ["Ankarana", "Montagne d'Ambre (Amber Mountain)", "Tsingy de Bemaraha", "Analamazaotra"], correct: 1 },
                    { question: "What is the name of the marine park near Antsiranana?", answers: ["Nosy Tanikely", "Nosy Be", "Nosy Komba", "Nosy Iranja"], correct: 0 },
                    { question: "Which of these islands is NOT in the Antsiranana province?", answers: ["Nosy Be", "Nosy Komba", "Nosy Mitsio", "Nosy Boraha (Sainte Marie)"], correct: 3 }
               
                ],
                history: [
                    { question: "Antsiranana's port played a significant role in WWII. True or False?", answers: ["True", "False"], correct: 0 },
                    { question: "What was the colonial name of Antsiranana?", answers: ["Diego Suarez", "Fort Dauphin", "Tamatave", "Majunga"], correct: 0 },
                    { question: "Which colonial power established a naval base in Antsiranana in the 19th century?", answers: ["United Kingdom", "France", "Germany", "Portugal"], correct: 1 },
                    { question: "Which Malagasy sovereign annexed the Antsiranana region to the Imerina kingdom?", answers: ["Radama I", "Ranavalona I", "Andrianampoinimerina", "Rasoherina"], correct: 0 },
                    { question: "Which famous French explorer visited the Antsiranana region?", answers: ["Alfred Grandidier", "Étienne de Flacourt", "Jean-Baptiste Commerson", "Jacques de Laborde"], correct: 0 }
                
                ]
            },
            fianarantsoa: {
                geography: [
                    { question: "What is the most famous national park in Fianarantsoa, known for its lemurs and dense forest?", answers: ["Ranomafana", "Isalo", "Andringitra", "Midongy du Sud"], correct: 0 },
                    { question: "Which important river originates near Fianarantsoa?", answers: ["Mangoky", "Tsiribihina", "Onilahy", "Mananjary"], correct: 0 },
                    { question: "Fianarantsoa is known as the capital of which agricultural product?", answers: ["Rice", "Coffee", "Wine", "Tea"], correct: 2 },
                    { question: "Which geological formation is characteristic of the Fianarantsoa region?", answers: ["Central Highlands", "Coastal Plains", "Volcanic Massifs", "Limestone Plateaus"], correct: 0 },
                    { question: "What is the name of the railway connecting Fianarantsoa to the East Coast?", answers: ["FCE", "Tana-Côte", "Vakinankaratra Express", "Sud-Est"], correct: 0 }
                ], 
                history: [
                    { question: "Fianarantsoa was founded in the 19th century by which royal dynasty?", answers: ["Sakalava", "Merina", "Betsileo", "Antemoro"], correct: 1 },
                    { question: "What is the name of the ancient royal city near Fianarantsoa, a World Heritage site?", answers: ["Ambohimanga", "Analamanga", "Isandra", "Manjakamiadana"], correct: 2 },
                    { question: "Which resistance movement against French colonization had important bases in Fianarantsoa?", answers: ["MDC", "Padesm", "MNM", "Jiny"], correct: 3 },
                    { question: "Fianarantsoa is an important center for which religious activity?", answers: ["Catholicism", "Protestantism", "Animism", "Islam"], correct: 0 },
                    { question: "What is the name of the historic Jesuit college in Fianarantsoa, a pioneer in education?", answers: ["Saint Michel", "Saint François Xavier", "Saint Joseph", "Sainte Famille"], correct: 1 }
                ]
            },
            mahajanga: { 
              geography: [
                    { question: "Which river flows into Mahajanga Bay?", answers: ["Betsiboka", "Tsiribihina", "Manambolo", "Mangoky"], correct: 0 },
                    { question: "Which geological formation is famous near Mahajanga?", answers: ["Red Circus", "Tsingy de Bemaraha", "Montagne d'Ambre (Amber Mountain)", "Avenue of Baobabs"], correct: 0 },
                    { question: "What is the main climatic characteristic of Mahajanga?", answers: ["Dry tropical climate", "Equatorial climate", "Temperate climate", "Mountain climate"], correct: 0 },
                    { question: "What is the culinary specialty of Mahajanga, a seafood dish?", answers: ["Laoka", "Zebu skewers", "Fish ceviche", "Kitoza"], correct: 2 },
                    { question: "Which large beach is located in Mahajanga?", answers: ["Grand Pavois", "Ambondro", "Chacard", "Antsaholana"], correct: 0 }
              ],
              history: [
                    { question: "Mahajanga was an important trading post for which merchants in the 18th century?", answers: ["Arabs and Indians", "Portuguese and Dutch", "British and Americans", "Chinese and Japanese"], correct: 0 },
                    { question: "Which Sakalava royal dynasty had Mahajanga as its capital?", answers: ["Menabe", "Boina", "Vakinankaratra", "Sihanaka"], correct: 1 },
                    { question: "What is the name of the famous 'sacred tree' or 'traveler's tree' emblematic of Mahajanga?", answers: ["Giant Baobab", "Ravinala Palm", "Tamarind", "Banyan Fig"], correct: 0 },
                    { question: "What is the name of the historic district of Mahajanga, with its colonial architecture?", answers: ["Manga", "Marovato", "Anakely", "Mangarivotra"], correct: 0 },
                    { question: "What major event marked the development of Mahajanga in the early 20th century?", answers: ["The construction of the railway", "The establishment of the modern port", "The discovery of gold mines", "The creation of a university"], correct: 1 }
              ]
            },
            toamasina: {
              geography: [
                    { question: "What is the main port of Madagascar?", answers: ["Toamasina", "Mahajanga", "Toliara", "Antsiranana"], correct: 0 },
                    { question: "What type of climate predominates in Toamasina?", answers: ["Humid tropical", "Dry tropical", "Temperate", "Desert"], correct: 0 },
                    { question: "What is the large palm-lined avenue in Toamasina?", answers: ["Avenue de l'Indépendance", "Boulevard Poincaré", "Avenue de la Libération", "Boulevard de la Corne"], correct: 1 },
                    { question: "Which artificial canal starts in Toamasina and runs along the coast?", answers: ["Suez Canal", "Panama Canal", "Pangalanes Canal", "Mozambique Channel"], correct: 2 },
                    { question: "Which humid tropical forest is located near Toamasina?", answers: ["Masoala", "Andasibe-Mantadia", "Ranomafana", "Zahamena"], correct: 1 }
              ],
              history: [
                    { question: "Toamasina was formerly known by what name?", answers: ["Tamatave", "Farafangana", "Vatomandry", "Mahanoro"], correct: 0 },
                    { question: "Which sovereign fortified Toamasina in the 19th century?", answers: ["Radama I", "Ranavalona I", "Andrianampoinimerina", "Rainilaiarivony"], correct: 1 },
                    { question: "Which culture strongly influenced the city of Toamasina due to its port?", answers: ["Arab", "Indian", "European", "All of these cultures"], correct: 3 },
                    { question: "What is the name of the historic prison in Toamasina, a symbol of colonial repression?", answers: ["Ambatolampy", "Manjakamiadana", "Béhoririka", "Tsiafahy"], correct: 0 },
                    { question: "What role did Toamasina play during the French colonization?", answers: ["Main administrative center", "Strategic military base", "Major commercial port", "Mining exploitation center"], correct: 2 }
              ]
            },
            toliara: { 
              geography: [
                    { question: "Toliara is located on the coast of which channel?", answers: ["Mozambique", "Suez", "Panama", "Pangalanes"], correct: 0 },
                    { question: "What is the special plant of the Toliara region, often used in crafts?", answers: ["Sisal", "Raphia", "Vetiver", "Baobab"], correct: 0 },
                    { question: "What is the marine national park near Toliara, famous for its corals?", answers: ["Ifaty", "Nosy Ve", "Sainte Luce", "Anakao"], correct: 0 },
                    { question: "Which ethnic group is dominant in the Toliara region?", answers: ["Sakalava", "Betsileo", "Bara", "Mahafaly"], correct: 3 },
                    { question: "Toliara is known for its unique botanical garden, what is its name?", answers: ["Arboretum d'Antsokay", "Jardin d'Anosy", "Parc de Tsimbazaza", "Parc Ivoloina"], correct: 0 }
              ],
              history: [
                    { question: "Toliara was an ancient trading post for which French explorer and merchant in the 17th century?", answers: ["Étienne de Flacourt", "Jean de Laborde", "François Pyrard", "Pierre Poivre"], correct: 0 },
                    { question: "What historical economic activity was important in Toliara?", answers: ["Slave trade", "Whaling", "Rice cultivation", "Mining"], correct: 0 },
                    { question: "What was Toliara's name during the colonial period?", answers: ["Fort Dauphin", "Tuléar", "Majunga", "Tamatave"], correct: 1 },
                    { question: "Which community is historically and economically important in Toliara?", answers: ["Chinese", "Indian", "Comorian", "Yemeni"], correct: 1 },
                    { question: "Which Sakalava king extended his influence to the Toliara region?", answers: ["Andriamisara", "Andrianampoinimerina", "Andriamandisoarivo", "Ranavalona I"], correct: 2 }
              ]
            }
        },
        mystery: {
            history: [
                { question: "Who was the last Queen of Madagascar?", answers: ["Ranavalona I", "Ranavalona III", "Rasoherina", "Ravolana"], correct: 1 },
                { question: "When did Andrianampoinimerina reign?", answers: ["1787-1810", "1810-1828", "1750-1780", "1828-1861"], correct: 0 },
                { question: "Which treaty marked the beginning of French colonization in Madagascar?", answers: ["Treaty of Tamatave", "Treaty of Tananarive (1895)", "Treaty of London", "Treaty of Berlin"], correct: 1 },
                { question: "What is the name of the famous Prime Minister who married three successive queens?", answers: ["Rainiharo", "Andriamampandry", "Rainilaiarivony", "Radama II"], correct: 2 },
                { question: "What major event occurred in 1947 in Madagascar?", answers: ["Independence", "The insurrection", "The Great Famine", "The creation of the First Republic"], correct: 1 },
                { question: "Which royal dynasty unified most of Madagascar in the 19th century?", answers: ["Sakalava", "Merina", "Betsileo", "Antemoro"], correct: 1 },
                { question: "Who is considered the 'Father of Independence' of Madagascar?", answers: ["Philibert Tsiranana", "Didier Ratsiraka", "Albert Zafy", "Marc Ravalomanana"], correct: 0 },
                { question: "What is the name of the French explorer who wrote the first detailed work on Madagascar in the 17th century?", answers: ["Alfred Grandidier", "Étienne de Flacourt", "Jean-Baptiste Commerson", "Pierre Poivre"], correct: 1 },
                { question: "What is the name of the most sacred and historic Rova (royal palace), classified by UNESCO?", answers: ["Ambohimanga", "Manjakamiadana", "Fianarantsoa", "Analamanga"], correct: 0 },
                { question: "In what year was the kingdom of Madagascar proclaimed an empire by Radama I?", answers: ["1810", "1817", "1820", "1828"], correct: 1 }
            ],
            geography: [
                { question: "What is the highest mountain in Madagascar?", answers: ["Maromokotro", "Pic Boby", "Tsiafajavona", "Andringitra"], correct: 0 },
                { question: "What is the longest river in Madagascar?", answers: ["Mangoky", "Tsiribihina", "Ikopa", "Betsiboka"], correct: 3 },
                { question: "What type of forest is typical of the West Coast of Madagascar?", answers: ["Humid tropical forest", "Dry deciduous forest", "Mangrove forest", "Spiny forest"], correct: 1 },
                { question: "What is the main source of renewable energy used in Madagascar?", answers: ["Solar", "Wind", "Hydroelectricity", "Geothermal"], correct: 2 },
                { question: "What is the name of the longest river in Madagascar?", answers: ["Mangoky", "Tsiribihina", "Ikopa", "Betsiboka"], correct: 3 },
                { question: "What is the largest island in northwestern Madagascar?", answers: ["Nosy Be", "Nosy Komba", "Nosy Iranja", "Nosy Mitsio"], correct: 0 },
                { question: "What is the name of the central mountain range of Madagascar?", answers: ["Highlands", "Ankaratra Massif", "Androy Plateau", "Isalo Plateau"], correct: 0 },
                { question: "What is the name of Madagascar's second largest port city?", answers: ["Mahajanga", "Toliara", "Antsiranana", "Fort Dauphin"], correct: 0 },
                { question: "What is the main source of income for the rural population in Madagascar?", answers: ["Fishing", "Livestock farming", "Agriculture", "Crafts"], correct: 2 },
                { question: "What climate predominates in southern Madagascar?", answers: ["Semi-arid to arid", "Humid tropical", "Temperate", "Mediterranean"], correct: 0 }
            ]
        }
    }
};


// --- GLOBAL VARIABLES ---
let currentLanguage = 'mg'; // Default to Malagasy
let currentCategory = ''; // 'antananarivo', 'mystery-history', etc.
let currentQuestionIndex = 0;
let currentScore = 0;
let quizQuestions = [];
let timerInterval;
const TIME_PER_QUESTION = 30; // seconds

// --- DOM ELEMENTS ---
const introScreen = document.getElementById('intro-screen');
const categorySelectScreen = document.getElementById('category-select-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const introTitle = document.getElementById('intro-title');
const startButton = document.getElementById('start-button');
const languageSelectIntro = document.getElementById('language-select-intro');
const toggleThemeIntro = document.getElementById('toggle-theme-intro');

const provinceButtons = document.querySelectorAll('.provinces-grid .category-button');
const mysteryButtons = document.querySelectorAll('.mystery-buttons .category-button');

const currentScoreDisplay = document.getElementById('current-score');
const timerBarContainer = document.getElementById('timer-bar-container');
const timerBar = document.getElementById('timer-bar');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');

const finalScoreText = document.getElementById('final-score-text');
const restartButton = document.getElementById('restart-button');

// --- TRANSLATIONS ---
const translations = {
    mg: {
        introTitle: "Fantatrao ve Madagasikara?",
        startButton: "Manomboka",
        languageLabel: "Fiteny:",
        chooseCategory: "Fidio ny sokajy :",
        mysteryHistory: "Tantara Mistery",
        mysteryGeography: "Jeografia Mistery",
        quizResult: "Valin'ny Fanontaniana",
        yourScore: "Isa azonao: ",
        restart: "Manomboka Indray",
        scoreLabel: "Isa:",
        provinces: {
            antananarivo: "Antananarivo",
            antsiranana: "Antsiranana",
            fianarantsoa: "Fianarantsoa",
            mahajanga: "Mahajanga",
            toamasina: "Toamasina",
            toliara: "Toliara"
        },
        orChooseThemes: "Na fidio ny lohahevitra :"
    },
    fr: {
        introTitle: "Connaissez-vous Madagascar ?",
        startButton: "Commencer",
        languageLabel: "Langue:",
        chooseCategory: "Choisissez une catégorie :",
        mysteryHistory: "Mystères - Histoire",
        mysteryGeography: "Mystères - Géographie",
        quizResult: "Résultat du Quiz",
        yourScore: "Votre score : ",
        restart: "Recommencer",
        scoreLabel: "Score:",
        provinces: {
            antananarivo: "Antananarivo",
            antsiranana: "Antsiranana",
            fianarantsoa: "Fianarantsoa",
            mahajanga: "Mahajanga",
            toamasina: "Toamasina",
            toliara: "Toliara"
        },
        orChooseThemes: "Ou choisissez des thèmes :"
    },
    en: {
        introTitle: "Do you know Madagascar?",
        startButton: "Start",
        languageLabel: "Language:",
        chooseCategory: "Choose a category :",
        mysteryHistory: "Mystery - History",
        mysteryGeography: "Mystery - Geography",
        quizResult: "Quiz Result",
        yourScore: "Your score: ",
        restart: "Restart",
        scoreLabel: "Score:",
        provinces: {
            antananarivo: "Antananarivo",
            antsiranana: "Antsiranana",
            fianarantsoa: "Fianarantsoa",
            mahajanga: "Mahajanga",
            toamasina: "Toamasina",
            toliara: "Toliara"
        },
        orChooseThemes: "Or choose themes :"
    }
};

// --- FUNCTIONS ---

function updateContentLanguage() {
    introTitle.textContent = translations[currentLanguage].introTitle;
    startButton.textContent = translations[currentLanguage].startButton;
    document.querySelector('.settings-group label').textContent = translations[currentLanguage].languageLabel;
    
    // Category Select Screen
    document.querySelector('#category-select-screen h2').textContent = translations[currentLanguage].chooseCategory;
    document.querySelector('#category-select-screen h3').textContent = translations[currentLanguage].orChooseThemes;
    
    provinceButtons.forEach(button => {
        const provinceKey = button.dataset.category;
        button.textContent = translations[currentLanguage].provinces[provinceKey];
    });
    document.querySelector('.mystery-buttons [data-category="mystery-history"]').textContent = translations[currentLanguage].mysteryHistory;
    document.querySelector('.mystery-buttons [data-category="mystery-geography"]').textContent = translations[currentLanguage].mysteryGeography;

    // Quiz Screen
    currentScoreDisplay.textContent = `${translations[currentLanguage].scoreLabel} ${currentScore}`;

    // Result Screen
    document.querySelector('#result-screen h2').textContent = translations[currentLanguage].quizResult;
    restartButton.textContent = translations[currentLanguage].restart;
    // finalScoreText content is updated in showResult()
}

function showScreen(screenToShow) {
    const screens = [introScreen, categorySelectScreen, quizScreen, resultScreen];
    screens.forEach(screen => {
        if (screen === screenToShow) {
            screen.classList.remove('hidden');
        } else {
            screen.classList.add('hidden');
        }
    });
}

function startIntro() {
    showScreen(introScreen);
    updateContentLanguage();
    languageSelectIntro.value = currentLanguage; // Set initial language in dropdown
}

function startCategorySelection() {
    showScreen(categorySelectScreen);
    updateContentLanguage(); // Update category names in chosen language
}

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    currentScore = 0;

    if (category.startsWith('mystery-')) {
        const type = category.split('-')[1]; // 'history' or 'geography'
        quizQuestions = [...quizData[currentLanguage].mystery[type]]; // Shallow copy to avoid modifying original
    } else {
        // For provinces, we need to combine history and geography
        quizQuestions = [
            ...quizData[currentLanguage].provinces[category].geography,
            ...quizData[currentLanguage].provinces[category].history
        ];
        // Shuffle questions for selected province
        quizQuestions = shuffleArray(quizQuestions);
    }
    
    showScreen(quizScreen);
    displayQuestion();
    updateScoreDisplay();
}

function displayQuestion() {
    clearInterval(timerInterval); // Clear any existing timer
    if (currentQuestionIndex < quizQuestions.length) {
        const question = quizQuestions[currentQuestionIndex];
        questionText.textContent = question.question;
        answersDiv.innerHTML = '';

        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.onclick = () => selectAnswer(index);
            answersDiv.appendChild(button);
        });
        startTimer();
    } else {
        showResult();
    }
}

function startTimer() {
    let timeLeft = TIME_PER_QUESTION;
    timerBar.style.width = '100%'; // Start full
    timerBar.style.transition = `width ${TIME_PER_QUESTION}s linear`; // Animate over full duration

    // Use a small timeout before starting interval to allow transition to apply
    setTimeout(() => {
        timerBar.style.width = '0%';
    }, 50); // A very small delay

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimerEnd();
        }
    }, 1000); // Update every second
}

function handleTimerEnd() {
    // Question not answered, so it doesn't count. Just move to next.
    answersDiv.querySelectorAll('button').forEach(button => {
        button.disabled = true; // Disable answers
    });
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1000); // Small delay before next question
}

function selectAnswer(selectedIndex) {
    clearInterval(timerInterval); // Stop the timer
    const question = quizQuestions[currentQuestionIndex];
    const answerButtons = answersDiv.querySelectorAll('button');

    answerButtons.forEach(button => {
        button.disabled = true; // Disable all answer buttons
    });

    if (selectedIndex === question.correct) {
        currentScore++;
        answerButtons[selectedIndex].classList.add('correct');
    } else {
        answerButtons[selectedIndex].classList.add('incorrect');
        answerButtons[question.correct].classList.add('correct'); // Show correct answer
    }

    updateScoreDisplay();

    // Automatically move to the next question after a short delay for feedback
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 30); 
}

function updateScoreDisplay() {
    currentScoreDisplay.textContent = `${translations[currentLanguage].scoreLabel} ${currentScore}`;
}

function showResult() {
    clearInterval(timerInterval);
    showScreen(resultScreen);
    finalScoreText.textContent = `${translations[currentLanguage].yourScore} ${currentScore} / ${quizQuestions.length}`;
}

function restart() {
    currentQuestionIndex = 0;
    currentScore = 0;
    quizQuestions = [];
    startIntro();
}

// --- UTILITIES ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


document.addEventListener('DOMContentLoaded', startIntro);

startButton.addEventListener('click', startCategorySelection);

languageSelectIntro.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    updateContentLanguage();
    if (!categorySelectScreen.classList.contains('hidden')) {
        updateContentLanguage();
    }
});

toggleThemeIntro.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

provinceButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const province = event.target.dataset.category;
        startQuiz(province); 
    });
});

mysteryButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        startQuiz(event.target.dataset.category);
    });
});

restartButton.addEventListener('click', restart);