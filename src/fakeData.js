export default {
    fakeFetchArticles: [
        {
            title: 'Este es un Título',
            subTitle: 'Esto es un subtítulo',
            description: 'Esto es una descripción del artículo',
            banner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/galaxy-cat-universe-kitten-launch-------------johnnie-art.jpg",
            date: '2018-05-12',
        },
        {
            title: 'Este es otro título',
            subTitle: 'Este es otro subtítulo',
            description: 'Esto es otra descripción del artículo',
            banner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/galaxy-cat-universe-kitten-launch-------------johnnie-art.jpg",
            date: '2018-03-06',
        },
        {
            title: 'Este es un tercer título',
            subTitle: 'Este es un tercer subtítulo',
            description: 'Esto es una tercera descripción del artículo',
            banner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/galaxy-cat-universe-kitten-launch-------------johnnie-art.jpg",
            date: '2018-04-07',
        }
    ],
    fakeFetchContent: [
        {
            title: 'Este es un Título',
            subTitle: 'Esto es un subtítulo',
            description: 'Esto es una descripción del artículo',
            content: [
                { type: 'ovTitle', value: 'Esto es un Título' },
                { type: 'ovSubtitle', value: 'Esto es un Subtitle' },
                { type: 'ovSummary', value: 'Esto es un Summary' },
                { type: 'ovText', value: 'Esto es el texto' },
                { type: 'ovOrderList', value: ['item1', 'item2'] },
                { type: 'ovList', value: ['Elemento 1', 'Elemento 2'] },
                { type: 'ovBold', value: 'Esto es letra negrita' },
                { type: 'ovQuote', value: 'Esto es una cita' },
                { type: 'ovNote', value: 'Esto es una nota' },
                { type: 'ovBlock', value: 'Esto es un block' },
                { type: 'ovFrame', value: 'Esto es un frame' },
                { type: 'ovSeparator' },
                { type: 'ovPhoto', value1: "https://www.nocreasnada.com/wp-content/uploads/2018/03/2018-03-05_5a9dd71726385_dwvw.jpg", value2:'Esto es un figcaption' },
                { type: 'ovQuoteFirm', value1: 'Esto es una cita', value2:'Este es el autor' },
                { type: 'ovImage', value: "https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg" },
                { type: 'ovLink', value1: "https://www.google.com/", value2: 'Link' },
                { type: 'ovDetail', value: [ 
                    { label: 'nombre', value: 'Leonardo' },
                    { label: 'apellido', value: 'Larrosa' }        
                ]}
            ],
            banner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/galaxy-cat-universe-kitten-launch-------------johnnie-art.jpg",
            date: '2018-05-12',
            firm: 'Esto es una firma'
        },
        {
            title: 'Este es otro título',
            subTitle: 'Este es otro subtítulo',
            description: 'Esto es otra descripción del artículo',
            content: [{ type: 'text', value: 'Esto es el texto' }],
            banner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/galaxy-cat-universe-kitten-launch-------------johnnie-art.jpg",
            date: '2018-03-06',
            firm: 'Esto es una firma'
        },
        {
            title: 'Este es un tercer título',
            subTitle: 'Este es un tercer subtítulo',
            description: 'Esto es una tercera descripción del artículo',
            content: [{ type: 'text', value: 'Esto es el texto' }],
            banner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/galaxy-cat-universe-kitten-launch-------------johnnie-art.jpg",
            date: '2018-04-07',
            firm: 'Esto es una firma'
        }
    ],
}