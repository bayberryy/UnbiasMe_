
const generateUserPrompt = (implicitBias) => {
    const biasnesses =
        implicitBias[0].toUpperCase() + implicitBias.slice(1).toLowerCase();
        return `Suggest 6 books recommendations for people who wants to improve implicit biasnesses.
    
    Bias in: Birthplace
    Reccomendation: [
        {
        "title": "Origins: How the Nine Months Before Birth Shape the Rest of Our Lives",
        "author": "Annie Murphy Paul",
        "description": "Explores the impact of prenatal experiences on human development, challenging biases related to birthplace and highlighting the importance of early life. The book delves into the science of fetal origins and examines how factors such as nutrition, stress, and environmental influences during pregnancy can shape a person's health and well-being throughout their life."
        },
        {
        "title": "The Birth Partner: A Complete Guide to Childbirth for Dads, Partners, Doulas, and All Other Labor Companions",
        "author": "Penny Simkin",
        "description": "Provides comprehensive guidance for birth partners, emphasizing the importance of support and informed decision-making during childbirth. This book offers practical advice, comfort measures, and strategies to help birth partners effectively navigate the birth process, fostering a deeper understanding of birth choices and dispelling biases surrounding birthplace."
        },
        {
        "title": "Giving Birth with Confidence: Empowering Choices for a Safe, Calm, and Joyous Birth",
        "author": "Janelle Durham and Judith Lothian",
        "description": "Promotes confidence in birth and encourages individuals to explore their options, challenging biases surrounding birthplace and advocating for respectful maternity care. The authors provide evidence-based information on topics such as pain management, childbirth interventions, and building a birth support team, helping individuals make informed decisions and approach childbirth with empowerment and trust in their bodies."
        },
        {
        "title": "Born in the USA: How a Broken Maternity System Must Be Fixed to Put Women and Children First",
        "author": "Marsden Wagner",
        "description": "Examines the flaws in the U.S. maternity care system and highlights the importance of evidence-based care and informed decision-making. This book addresses biases related to birthplace, exposes the overuse of medical interventions, and calls for a more woman-centered approach to maternity care that prioritizes the well-being of both women and their children."
        },
        {
        "title": "The Doula Book: How a Trained Labor Companion Can Help You Have a Shorter, Easier, and Healthier Birth",
        "author": "Marshall H. Klaus and Phyllis H. Klaus",
        "description": "Explores the role of doulas in providing emotional and physical support during childbirth, challenging biases and promoting positive birth experiences. This book highlights the benefits of having a trained labor companion and discusses the ways in which doulas can help individuals navigate the birthing process, advocate for their preferences, and foster a sense of empowerment and satisfaction."
        },
        {
        "title": "Born in the USA: A Story of Birth, Grief, and the Power of Family",
        "author": "Tara Livesay",
        "description": "Shares a personal narrative that explores the complexities of birth experiences, highlighting the need for compassionate and respectful maternity care. Through the author's own journey, this book sheds light on the biases and challenges individuals may face during childbirth and the importance of providing support, understanding, and dignity to those giving birth and their families."
        }
    ]
    Bias in: Beauty
    Reccomendations: [
        {
        "title": "The Beauty Myth: How Images of Beauty Are Used Against Women",
        "author": "Naomi Wolf",
        "description": "In 'The Beauty Myth,' Naomi Wolf examines how society's unrealistic beauty standards impact women's lives and perpetuate gender inequality. The book explores the media's role in shaping beauty ideals, the beauty industry's influence, and the harmful consequences of striving for unattainable beauty. Wolf challenges readers to critically analyze beauty standards and work towards a more inclusive and empowering definition of beauty."
        },
        {
        "title": "Body Positive Power: How to Stop Dieting, Make Peace with Your Body, and Live",
        "author": "Megan Jayne Crabbe",
        "description": "Megan Jayne Crabbe's 'Body Positive Power' is a powerful guide to embracing body positivity and challenging societal beauty norms. The book encourages readers to reject diet culture, celebrate their bodies, and prioritize self-love and acceptance. With personal anecdotes, practical advice, and insightful reflections, Crabbe inspires individuals to cultivate a positive relationship with their bodies and redefine beauty on their terms."
        },
        {
        "title": "Beauty Sick: How the Cultural Obsession with Appearance Hurts Girls and Women",
        "author": "Renee Engeln",
        "description": "'Beauty Sick' by Renee Engeln explores the detrimental effects of society's obsession with appearance on girls and women. Engeln delves into the impact of beauty ideals on self-worth, mental health, relationships, and professional opportunities. Through research and personal stories, the book sheds light on the pressures individuals face and provides strategies for cultivating a healthier and more balanced relationship with beauty."
        },
        {
        "title": "The Beauty Bias: The Injustice of Appearance in Life and Law",
        "author": "Deborah L. Rhode",
        "description": "Deborah L. Rhode's 'The Beauty Bias' examines the legal and societal implications of appearance-based discrimination. The book delves into how biases related to beauty influence various aspects of life, including employment, education, healthcare, and criminal justice. Rhode explores the ethical and legal challenges of addressing appearance-based discrimination and advocates for creating a fairer and more inclusive society."
        },
        {
        "title": "Dying to be Beautiful: The Fight for Safe Cosmetics",
        "author": "Alice Greenway",
        "description": "Alice Greenway's 'Dying to be Beautiful' exposes the dark side of the beauty industry and its impact on consumer health. The book investigates the use of harmful ingredients in cosmetics, the lack of regulation, and the consequences for individuals' well-being. Greenway sheds light on the need for safer and more transparent beauty products, empowering readers to make informed choices and advocate for change."
        },
        {
        "title": "The Body Is Not an Apology: The Power of Radical Self-Love",
        "author": "Sonya Renee Taylor",
        "description": "'The Body Is Not an Apology' by Sonya Renee Taylor offers a transformative perspective on beauty, body image, and self-acceptance. Taylor explores the intersections of body positivity, social justice, and activism, challenging readers to dismantle harmful beauty standards and embrace radical self-love. The book provides practical tools, personal anecdotes, and empowering insights to help individuals navigate their own journey towards body liberation."
        }
    ]
    Bias in: ${biasnesses}
    Reccomendations:`;
    }
    
module.exports = generateUserPrompt