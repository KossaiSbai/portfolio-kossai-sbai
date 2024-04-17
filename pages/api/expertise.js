const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'As a full-stack developer, I am proficient in both front-end and back-end technologies, including Python, Kotlin, and React.js. This combination allows me to build comprehensive applications that are robust, scalable, and user-friendly. I am adept at integrating complex back-end logic with dynamic front-end interfaces, ensuring a seamless user experience across all parts of the application.',
    },
    {
        id: 1,
        title: 'Cloud Technologies and Infrastructure',
        desc: "My expertise includes utilizing cloud platforms such as AWS to develop and deploy scalable applications. I am experienced in managing cloud-based infrastructures that support high-availability applications and services, optimizing performance and cost-effectiveness. My ability to leverage cloud technologies enhances my capability to deliver cutting-edge solutions.",
    },
    {
        id: 2,
        title: 'AI and Machine Learning',
        desc: 'While my direct commercial experience in artificial intelligence and machine learning is still developing, my passion and commitment to these fields are evident through my involvement in projects like the LLM-powered question-answering app at Torstone Technology. This project allowed me to apply theoretical knowledge to real-world applications, using advanced frameworks such as TensorFlow, PyTorch, and Scikit-Learn. My dedication to self-study and practical experimentation has equipped me to tackle complex challenges innovatively across various domains. This hands-on experience, coupled with a relentless drive for continuous learning, underscores my potential to contribute significantly to AI and machine learning advancements.',
    },
    {
        id: 3,
        title: 'Open Source Contribution and Competitive Data Science',
        desc: "I actively contribute to the open source community, focusing on improving and maintaining prominent ML/AI libraries such as PyTorch and Hugging Face. My contributions range from bug fixes to adding new features that enhance the functionality and usability of these tools, helping to advance the field of machine learning. Additionally, I participate in Kaggle competitions, which sharpens my data science skills and allows me to apply theoretical knowledge in solving practical, real-world problems. This engagement not only keeps me at the cutting edge of machine learning technology but also enhances my problem-solving capabilities in competitive environments.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
