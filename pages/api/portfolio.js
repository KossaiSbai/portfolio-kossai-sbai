const portfolio = [
    {
        projectName: "Torstone",
        url: "https://youtu.be/u4Kw_cBS614",
        image: "projects/torstone.png",
        projectDetail: "Led maintenance and improvement of the Torstone Risk application, a risk analytics automation and regulatory compliance product.",
        technologiesUsed: [
            {
                tech: "ReactTS"
            },
            {
                tech: "Material UI"
            },
            {
                tech: "Kotlin"
            },
            {
                tech: "MySQL"
            },
        ]
    },
    {
        projectName: "Torstone Expert",
        url: "https://youtu.be/T3qrndREnEM",
        image: "projects/llm.png",
        projectDetail: "Internal AI user agent that integrates with existing platforms like Confluence, Slack, and Email. This agent is designed to automatically answer common questions, thereby freeing up employees from routine inquiries and enabling them to focus on more complex tasks.\n" +
            "\n",
        technologiesUsed: [
            {
                tech: "ReactTS"
            },
            {
                tech: "Flask"
            },
            {
                tech: "Python"
            },
            {
                tech: "Material UI"
            },
            {
                tech: "Langchain"
            },
        ]
    },
    {
        projectName: "DataCamp",
        url: "https://datacamp.com",
        image: "projects/datacamp homepage.png",
        projectDetail: "Designed and maintained all logged-out landing pages, attracting an average of 35k organic traffic on weekdays. " +
            "The home DataCamp page is an example of those.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "Ruby On Rails"
            },
            {
                tech: "Material UI"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        projectName: "Skylone Technology",
        url: "https://skylone-education.vercel.app/",
        image: "projects/skylon.png",
        projectDetail: " Co-founded Skylone Education to address the challenges you faced with the French education system by using generative AI to create virtual teaching assistants. Initially, the project aimed to cover a broad range of services, but due to limited resources, you focused on tutoring. As a key contributor, you developed the MVP, recruited and trained developers, and managed the team and budget effectively. You enhanced the tutoring service by allowing students to specify their learning needs in advance. ",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "Material UI"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Supabase"
            },
            {
                tech: "MySQL"
            },

        ]
    },
    {
        projectName: "Kaggle competitions",
        url: "https://www.kaggle.com/code/kossasbai/store-sales-time-series-forecasting-ks",
        image: "projects/kaggle.png",
        projectDetail: "Engaging in Kaggle competitions provides a superb platform for honing my skills. It enables me to refine my data science, machine learning, and analytics abilities by addressing real-world challenges. These competitions are also a gateway to learning new techniques and algorithms, ensuring I stay abreast of the latest industry trends. Moreover, they offer a unique opportunity to put theoretical knowledge into practice, connecting academic concepts with practical applications. The element of challenge and competition in these contests keeps me motivated and focused on crafting the most effective solutions.",
        technologiesUsed: [
            {
                tech: "Pytorch"
            },
            {
                tech: "Tensorflow"
            },
            {
                tech: "Python"
            },
            {
                tech: "Scikit-learn"
            },
            {
                tech: "Matplotlib"
            },
        ]
    },
    {
        projectName: "SDV Coursework KCL",
        url: "https://sdv-kossai-sbai.vercel.app/",
        image: "projects/SDVCW2.png",
        projectDetail: "The purpose of this proposal is to provide a data visualisation that will give a better insight on European football, in particular be able to assess teams performances. In fact, football is a low- scoring sport: the overall average number of goals scored per game at the FIFA World Cups between 1930 and 2018, is 3.08. This shows us that we cannot evaluate a teams’ performance on the number of goals scored. It is important to be able to judge how well a team did on given games: it enables the club to improve team strategies and hopefully increase number of won games.\n" +
            "Therefore, we can ask ourselves: what are appropriate metrics to use in order to get a reliable measure of the performance of a team? Can analysing the game style of a team help us explain why it might have done better/worse on a given season/game?",
        technologiesUsed: [
            {
                tech: "D3.js"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Javascript"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
