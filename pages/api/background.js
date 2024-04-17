const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Imperial College London',
                degree: 'MSci, Advanced Computing',
                detail: "Masters Degree in Advanced Computing from Imperial College London.\n" +
                "Modules: Machine Learning, Reinforcement Learning, Distributed Algorithms, NLP, Deep Learning.\n" +
                "Worked with Elliptic to analyse Ethereum transactions wor my dissertation, uncovering patterns that helped prevent around 37 billion in potential fraud in 2021.\n" +
                "Second class with 73.78% overall.\n" +
                "Programming languages taught/used: Elixir, Javascript, Python, Pytorch, Numpy, Scikit-learn",
                year: '2020-2021'
            },
            {
                id: 1,
                title: 'Kings College London',
                degree: 'BSc, Computer Science',
                detail: "Bachelor's Degree in Computer Science from Kings College London\n" +
                "First class honours with 80+ overall",
                year: '2017-2020'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Torstone Technology',
                role: 'Full Stack Engineer',
                url: '',
                desc: "Led maintenance and improvement of the Torstone Risk application, a risk analytics automation and regulatory compliance product.\n" +
                "Divided time to market of new features by 2.\n" +
                        "Developed tests to formally validate our financial risk models, contributing to a £5M deal closure.\n" +
                    "Oversaw the onboarding process for one of our main customers.\n" +
                    "Developed an LLM app to facilitate question answering over company data, reducing information retrieval time by 7 hours per employee per month.\n" +
                    "Currently leading, in collaboration with the Head of Product, the unification of multiple products into a single platform to optimize user experience.\n" +
                    "Actively involved in the ongoing initiative to integrate AI and ML technologies for enhancing customer experience and automating back/middle office processes.\n" +
                    "Technical Proficiency: Kotlin, React, Node.js, Python, TypeScript, Elasticsearch.",
                year: '10/2022 - Present',
                location: 'London, United Kingdom'
            },
            {
                id: 2,
                title: 'DataCamp',
                role: 'Full Stack Engineer',
                url: 'no website',
                desc: "Led and implemented high-impact promotional campaigns that generated over £1M in cash and 10M subscriptions while optimizing customer experience.\n" +
                    "Designed and maintained all logged-out landing pages, attracting an average of 35k organic traffic on weekdays.\n" +
                    "Led an initiative to implement a new business model aimed at increasing subscriptions and consequently annual recurring revenue through credit card trials.\n" +
                    "Technical Proficiency: Node.js, React, Redux, JavaScript, Elasticsearch, Python.",
                year: '09/2021 - 09/2022',
                location: 'London, United Kingdom'
            },
            {
                id: 2,
                title: 'R3',
                role: 'Software Engineer in Test Intern',
                url: 'no website',
                desc: "Led and implemented high-impact promotional campaigns that generated over £1M in cash and 10M subscriptions while optimizing customer experience.\n" +
                    "Designed and maintained all logged-out landing pages, attracting an average of 35k organic traffic on weekdays.\n" +
                    "Led an initiative to implement a new business model aimed at increasing subscriptions and consequently annual recurring revenue through credit card trials.\n" +
                    "Technical Proficiency: Node.js, React, Redux, JavaScript, Elasticsearch, Python.",
                year: '06/2020 - 09/2020',
                location: 'London, United Kingdom'
            },

            {
                id: 3,
                title: 'IBM',
                role: 'Software Engineer Intern',
                url: 'no website',
                desc: "Built a bin assistant using Machine Learning, AI, and Computer Vision in order to make the process of recycling people's trash as frictionless as possible.\n" +
                    "Was in charge of the mobile app part of the product.\n" +
                    "Received press and TV coverage for our product: BBC South Today, NS Packaging, Daily Echo, BusinessGreen.\n" +
                    "Obtained the award for the best technical project among 12 intern teams across Europe.\n" +
                    "Technical Proficiency: Python, React, Node.js, TensorFlow, OpenCV, Elasticsearch.",
                year: '07/2019 - 09/2019',
                location: 'Hursley, United Kingdom'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
