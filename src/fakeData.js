export default {
    fakeFetchArticles: [
        {
            title: 'Este es un Título',
            subTitle: 'Esto es un subtítulo. Lorem ipsum dolor sit',
            description: 'Esto es una descripción del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit dignissim, efficitur dolor sit amet, dignissim nisl. Donec nec velit vel metus rutrum blandit vitae ac massa. Suspendisse ut congue massa, ac feugiat purus. Fusce scelerisque commodo lacus, ut sodales ipsum egestas non. Integer viverra metus velit, quis faucibus orci lacinia maximus. Sed sollicitudin, felis quis facilisi.',
            content: [
                { type: 'ovTitle', value: 'Esto es un Título' },
                { type: 'ovSubtitle', value: 'Esto es un Subtitle' },
                { type: 'ovSummary', value: 'Esto es un Summary. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { type: 'ovText', value: 'Lorem ipsum dolor sit ametconsectetur adipiscing elit.  Morbi varius erat at tortor posuere, egestas molestie ante posuere. Proin ultrices turpis eu mi pretium hendrerit. Proin blandit vitae leo eu luctus. Phasellus tempor imperdiet purus, in imperdiet purus dignissim nec. Donec semper ex sit amet ligula maximus, in varius arcu placerat. Quisque in lacus quis nisl gravida sodales. Nullam commodo turpis dolor, et lacinia arcu aliquam quis. Sed ac risus ac nibh iaculis dictum. Praesent molestie feugiat nisl vel pharetra. Maecenas porta gravida lorem, ut porta risus lobortis imperdiet. Fusce a urna molestie purus sodales consequat semper at odio. Praesent efficitur tincidunt tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius erat at tortor posuere, egestas molestie ante posuere. Proin ultrices turpis eu mi pretium hendrerit.<br><br> Proin blandit vitae leo eu luctus. Phasellus tempor imperdiet purus, in imperdiet purus dignissim nec. Donec semper ex sit amet ligula maximus, in varius arcu placerat. Quisque in lacus quis nisl gravida sodales. <br><br> Nullam commodo turpis dolor, et lacinia arcu aliquam quis. Sed ac risus ac nibh iaculis dictum. Praesent molestie feugiat nisl vel pharetra. Maecenas porta gravida lorem, ut porta risus lobortis imperdiet. Fusce a urna molestie purus sodales consequat semper at odio. Praesent efficitur tincidunt tincidunt.' },
                { type: 'ovOrderList', value: ['item1', 'item2'] },
                { type: 'ovList', value: ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'] },
                { type: 'ovBold', value: 'Esto es letra negrita' },
                { type: 'ovQuote', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor consectetur justo. Etiam in facilisis purus. Sed placerat erat consequat, gravida turpis dignissim, faucibus velit.' },
                { type: 'ovNote', value: 'Esto es una nota. Para ver más visite el siguiente sitio: www.google.com' },
                { type: 'ovBlock', value: 'Esto es un bloque de texto.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit dignissim, efficitur dolor sit amet, dignissim nisl. Donec nec velit vel metus rutrum blandit vitae ac massa. Suspendisse ut congue massa, ac feugiat purus. Fusce scelerisque commodo lacus, ut sodales ipsum egestas non. Integer viverra metus velit, quis faucibus orci lacinia maximus. Sed sollicitudin, felis quis facilisis auctor, magna justo fermentum arcu, et sagittis ex ante quis mauris. Fusce viverra risus ut lacus cursus, et blandit nibh molestie. Quisque feugiat egestas nisl nec ultricies. Mauris sapien elit, pharetra id nisl eu, tristique venenatis purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel gravida nulla.' },
                { type: 'ovFrame', value: 'Esto es un frame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor consectetur justo. Etiam in facilisis purus. Sed placerat erat consequat, gravida turpis dignissim, faucibus velit.' },
                { type: 'ovLink', value1: "https://www.google.com/", value2: 'Link' },
                { type: 'ovPhoto', value1: "https://s2.n4g.com/news/1790681_0.jpg", value2: 'Soy un robot de barrio' },
                { type: 'ovQuoteFirm', value1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor consectetur justo. Etiam in facilisis purus. Sed placerat erat consequat, gravida turpis dignissim, faucibus velit.', value2: 'Nombre de Autor' },
                { type: 'ovSeparator' },
                { type: 'ovImage', value: "https://image.freepik.com/vector-gratis/planeta-espacio-fondo-plano-design-vector-e-ilustracion_35136-182.jpg" },
                { type: 'ovGoshButtom', value1: "https://www.google.com.ar/", value2: 'Ver' },
                {
                    type: 'ovDetail', value: [
                        { label: 'Nombre', value: 'Leonardo' },
                        { label: 'Apellido', value: 'Larrosa' },
                        { label: 'Género', value: 'Masculino' }
                    ]
                }
            ],
            banner: "https://i.pinimg.com/originals/54/f5/3f/54f53fa4fd47f55b64580dbf3ab53e83.jpg",
            date: '2018-05-12',
            firm: 'Esto es una firma'
        },
        {
            title: 'Este es otro título',
            subTitle: 'Este es otro subtítulo',
            description: 'Esto es una descripción del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit dignissim, efficitur dolor sit amet, dignissim nisl. Donec nec velit vel metus rutrum blandit vitae ac massa. Suspendisse ut congue massa, ac feugiat purus. Fusce scelerisque commodo lacus, ut sodales ipsum egestas non. Integer viverra metus velit, quis faucibus orci lacinia maximus. Sed sollicitudin, felis quis facilisi.',
            content: [{ type: 'text', value: 'Esto es el texto' }],
            banner: "https://superdevresources.com/wp-content/uploads/2017/11/free-flat-space-background.jpg",
            date: '2018-03-06',
            firm: 'Esto es una firma'
        },
        {
            title: 'Este es un tercer título',
            subTitle: 'Este es un tercer subtítulo',
            description: 'Esto es una descripción del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit dignissim, efficitur dolor sit amet, dignissim nisl. Donec nec velit vel metus rutrum blandit vitae ac massa. Suspendisse ut congue massa, ac feugiat purus. Fusce scelerisque commodo lacus, ut sodales ipsum egestas non. Integer viverra metus velit, quis faucibus orci lacinia maximus. Sed sollicitudin, felis quis facilisi.',
            content: [{ type: 'text', value: 'Esto es el texto' }],
            banner: "https://pbs.twimg.com/media/DYKKRJlW0AErBGc.jpg",
            date: '2018-04-07',
            firm: 'Esto es una firma'
        }
    ]
}