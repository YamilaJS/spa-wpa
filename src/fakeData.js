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
            banner: "https://www.thesprucepets.com/thmb/-dY_W4edPcFENqO9wH-tsIQeotc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/37348687_179210919505845_8579658165484781568_n-5b69b1b346e0fb00500b0880.jpg",
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
                { type: 'ovText', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius erat at tortor posuere, egestas molestie ante posuere. Proin ultrices turpis eu mi pretium hendrerit. Proin blandit vitae leo eu luctus. Phasellus tempor imperdiet purus, in imperdiet purus dignissim nec. Donec semper ex sit amet ligula maximus, in varius arcu placerat. Quisque in lacus quis nisl gravida sodales. Nullam commodo turpis dolor, et lacinia arcu aliquam quis. Sed ac risus ac nibh iaculis dictum. Praesent molestie feugiat nisl vel pharetra. Maecenas porta gravida lorem, ut porta risus lobortis imperdiet. Fusce a urna molestie purus sodales consequat semper at odio. Praesent efficitur tincidunt tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius erat at tortor posuere, egestas molestie ante posuere. Proin ultrices turpis eu mi pretium hendrerit. Proin blandit vitae leo eu luctus. Phasellus tempor imperdiet purus, in imperdiet purus dignissim nec. Donec semper ex sit amet ligula maximus, in varius arcu placerat. Quisque in lacus quis nisl gravida sodales. Nullam commodo turpis dolor, et lacinia arcu aliquam quis. Sed ac risus ac nibh iaculis dictum. Praesent molestie feugiat nisl vel pharetra. Maecenas porta gravida lorem, ut porta risus lobortis imperdiet. Fusce a urna molestie purus sodales consequat semper at odio. Praesent efficitur tincidunt tincidunt.' },
                { type: 'ovOrderList', value: ['item1', 'item2'] },
                { type: 'ovList', value: ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'] },
                { type: 'ovBold', value: 'Esto es letra negrita' },
                { type: 'ovQuote', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor consectetur justo. Etiam in facilisis purus. Sed placerat erat consequat, gravida turpis dignissim, faucibus velit.' },
                { type: 'ovNote', value: 'Esto es una nota' },
                { type: 'ovBlock', value: 'Esto es un block' },
                { type: 'ovFrame', value: 'Esto es un frame' },
                { type: 'ovSeparator' },
                { type: 'ovPhoto', value1: "https://www.nocreasnada.com/wp-content/uploads/2018/03/2018-03-05_5a9dd71726385_dwvw.jpg", value2:'Esto es un figcaption' },
                { type: 'ovQuoteFirm', value1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor consectetur justo. Etiam in facilisis purus. Sed placerat erat consequat, gravida turpis dignissim, faucibus velit.', value2:'Nombre de Autor' },
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
            banner: "https://www.thesprucepets.com/thmb/-dY_W4edPcFENqO9wH-tsIQeotc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/37348687_179210919505845_8579658165484781568_n-5b69b1b346e0fb00500b0880.jpg",
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