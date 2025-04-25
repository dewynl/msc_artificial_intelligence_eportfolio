import React from 'react';
import { css } from '@emotion/css';

const IntelligentAgents = () => {
  return (
    <div className={styles.entryContainer}>
      <div className={styles.entryContent}>
        <div className={styles.introduction}>
          <p>
            The "Intelligent Agents" module provided a comprehensive exploration of the foundational
            concepts and techniques underpinning autonomous entities capable of perceiving,
            reasoning, and acting in their environments. As the driving forces behind many AI
            innovations, intelligent agents were examined through topics like agent architectures,
            reasoning mechanisms, planning algorithms, and machine learning methodologies. The
            module covered different agent types, from reactive agents that respond directly to
            stimuli to deliberative agents employing sophisticated decision-making processes. It
            also addressed challenges in designing agents for dynamic, uncertain, and multi-agent
            environments, requiring coordination strategies.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Agents Based Systems (Discussion Forum 1)</h2>
          <p>
            The increasing complexity of systems across various domains has fueled the rise of
            agent-based systems (ABS), which offer a compelling alternative by decomposing a system
            into autonomous, intelligent agents that can interact with each other and their
            environment. The rise of ABS is driven by the need for decentralized control, modeling
            complex interactions, and studying emergent phenomena. Organizations can leverage ABS
            for improved decision-making, enhanced adaptability, and better risk management. In
            conclusion, ABS hold immense potential for organizations across various sectors.
          </p>

          <a
            href="https://www.my-course.co.uk/mod/forum/discuss.php?d=221488"
            target="_blank"
            rel="noreferrer"
          >
            Link to Forum
          </a>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>e-portfolio Activity: Creating Agent Dialogues</h2>
          <p>
            The e-portfolio activity focused on creating an agent dialogue using KQML and KIF
            between two agents, Alice and Bob. Alice, an agent designed to procure stock, queries
            Bob, an agent that controls warehouse stock levels, about the availability and
            specifications of 50-inch televisions. The dialogue demonstrates the use of KQML
            performatives like "tell", "reply", and "query", along with KIF expressions to represent
            the content of the messages exchanged between the agents. The following is the dialogue
            between Alice and Bob:
          </p>
          <div className={styles.section}>
            <pre className={styles.codeBlock}>
              <code>
                {`
  (tell
  :sender Alice
  :receiver Bob
  :language KIF
  :ontology warehouse-stock
  :content (available "50-inch television"))
  (reply
    :sender Bob
    :receiver Alice
    :language KIF
    :ontology warehouse-stock
    :content (available "50-inch television" 120))
  (query
    :sender Alice
    :receiver Bob
    :language KIF
    :ontology product-specs
    :content (and (television ?x) (screen-size ?x 50) (num-hdmi-ports ?x ?num)))
  (reply
    :sender Bob
    :receiver Alice
    :language KIF
    :ontology product-specs
    :content (= (num-hdmi-ports "50-inch television" 4)))
            `}
              </code>
            </pre>
          </div>
          <a
            href="https://www.my-course.co.uk/mod/page/view.php?id=958772"
            target="_blank"
            rel="noreferrer"
          >
            Link to Exercise
          </a>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Agent Communication Languages (Discussion Forum 2)
          </h2>
          <p>
            Agent communication languages (ACLs) like KQML provide a standardized way for software
            agents to exchange information and knowledge. ACLs offer advantages over method
            invocation, including increased flexibility, support for high-level communication, and
            explicit representation of mental states. However, they also come with challenges such
            as increased complexity, potential performance overhead, and lack of widespread
            adoption.
          </p>
          <a
            href="https://www.my-course.co.uk/mod/forum/discuss.php?d=232845"
            target="_blank"
            rel="noreferrer"
          >
            Link to Forum
          </a>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Intelligent Research Assistant Application for Online Academic Research
          </h2>
          <p>
            The module included a proposal for an intelligent software system specializing in
            facilitating online academic research tasks. The proposed "research assistant
            application" incorporates advanced functionalities to enhance its capabilities beyond
            basic web scraping. It aims to assist researchers by automating information retrieval
            from online sources based on user-defined criteria, intelligently searching websites,
            extracting relevant data points, and organizing them for offline storage and further
            analysis.
          </p>
          <img
            className={styles.imgStyles}
            src={require('./sequence-diagram.png')}
            alt="Sequence Diagram"
          />
          <p>
            The application consists of several modules, including an Intelligent Search Module,
            Data Extraction Module, Data Processing and Analysis Module, and Data Presentation
            Module. These modules leverage techniques such as natural language processing (NLP), web
            scraping, and natural language generation (NLG) to provide comprehensive research
            support. The strengths of the application include intelligent search capabilities,
            advanced data processing, customization options, efficiency, and data summarization.
            However, it also has weaknesses, such as potential compatibility issues with certain
            websites, reliance on data accuracy, data obsolescence, and a limited scope in capturing
            the full context of complex research papers.
          </p>
          <img
            className={styles.imgStyles}
            src={require('./user-diagram.png')}
            alt="User Diagram"
          />
        </div>

        <div className={styles.section}>
          <h4>Related Work and Development Tools</h4>
          <p>
            Several existing research tools, such as reference management software (Zotero,
            Mendeley) and academic search engines (Google Scholar, Web of Science), primarily focus
            on literature retrieval and organization. The proposed research assistant application
            differentiates itself by offering functionalities beyond basic retrieval, leveraging NLP
            to automate information extraction, processing, and analysis.
          </p>
          <p>
            The application will be developed using various tools and technologies, including Python
            for programming, web scraping libraries like BeautifulSoup or Scrapy, NLP libraries like
            spaCy or NLTK, and NLG libraries like Gensim or TextBlob.
          </p>

          <div>
            <a
              href={require('./Intelligent Research Assistant Application for Online Academic Research.pdf')}
              download={
                'Intelligent Research Assistant Application for Online Academic Research.pdf'
              }
            >
              Report
            </a>
            <br />
            <a
              href="https://www.my-course.co.uk/course/view.php?id=11408&section=12"
              target="_blank"
              rel="noreferrer"
            >
              Link to Assessment
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>e-Portfolio: Creating Parse Trees</h2>
          <p>
            The e-portfolio activity involved creating constituency-based parse trees for three
            example phrases: "The government raised interest rates.", "The internet gives everyone a
            voice.", and "The man saw the dog with the telescope." The parse trees break down each
            sentence into its constituent grammatical parts, with lexical categories like
            determiners (DT), nouns (NN), and verbs (VB) as the leaves, and phrase labels like NP
            and VP as the non-terminal nodes. The trees capture the hierarchical, nested structure
            of the phrases and demonstrate prepositional phrase attachment ambiguity in the third
            example.
          </p>
          <pre className={styles.codeBlock}>
            <code>
              {`
1. The government raised interest rates.

           S            
  _________|___________   
  |      |      |     |  
  NP    VP      NP    .  
  |   ___|___    |        
 DT  VBD   NP   NNS      
  |   |    |     |       
The  raised NN  rates    
      interest

2. The internet gives everyone a voice.

            S                   
  __________|____________         
  |       |         |    |        
  NP      VP        NP   .        
  |    ___|____   __|__            
  DT  VBZ   NP    DT  NN           
  |    |    |     |   |            
 The  gives NN    a  voice          
         everyone

3. The man saw the dog with the telescope.

               S                                  
      _________|________________                   
      |        VP              |                  
      |   _____|_________      |                  
      NP  |    |         PP    .                 
     _|_  VBD  NP     ___|___                      
    DT NN  |   _|_   IN       NP                   
    |  |   | DT  NN  |    ____|____                
   The man saw  dog with DT       NN               
                          |        |               
                         the   telescope   

`}
            </code>
          </pre>
          <a
            href="https://www.my-course.co.uk/mod/page/view.php?id=958786"
            target="_blank"
            rel="noreferrer"
          >
            Link to Exercise
          </a>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Deep Learning (Discussion Forum 3)</h2>
          <p>
            The emergence of deep learning technologies like Dall-E for image generation and ChatGPT
            for text generation opens up exciting possibilities but also raises important ethical
            considerations. These technologies have the potential to be used for creating and
            spreading disinformation, propaganda, and misleading content at an unprecedented scale.
            There are concerns about the training data and algorithms used to build these models,
            which may reflect and amplify societal biases related to race, gender, age, and other
            characteristics. Additionally, there are questions around intellectual property,
            attribution, and creative ownership when AI systems are used to generate "new" works
            derived from training data.
          </p>
          <p>
            While generative AI technologies have immense potential to augment human creativity and
            solve complex problems, it is critical to proactively consider the ethical implications
            and develop robust guidelines and safeguards to mitigate risks and ensure responsible
            deployment.
          </p>
          <a
            href="https://www.my-course.co.uk/mod/forum/discuss.php?d=232850"
            target="_blank"
            rel="noreferrer"
          >
            Link to Forum
          </a>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>e-portfolio Activity: Deep Learning in Action</h2>
          <p>
            In this e-portfolio activity, I explored deep learning's impact on natural language
            processing (NLP) and its potential to bridge linguistic barriers globally. As someone
            passionate about cross-cultural communication, I was drawn to AI language models that
            can accurately translate and understand diverse languages. Through my research, I was
            amazed by the capabilities of models like GPT and BERT, which can capture language
            nuances after training on massive text data. However, I also recognized ethical risks
            like perpetuating biases from training data and privacy concerns over sensitive text
            used. In crafting my post, I aimed to balance the exciting potential of NLP for enabling
            global knowledge sharing and inclusivity, with the need for responsible development to
            mitigate harms. Addressing challenges like bias and privacy is crucial as we harness
            this transformative technology. This project deepened my appreciation for AI's profound
            impact and my commitment to ethical tech development. I'm motivated to further explore
            NLP and AI apps that can uplift humanity through responsible innovation focused on
            cross-cultural understanding and cooperation.
          </p>

          <h4>References</h4>
          <div>
            <p>
              Lample, G. and Conneau, A., 2019. Cross-lingual language model pretraining.{' '}
              <em>neural information processing systems (NeurIPS 2019)</em>. [
              <a href="https://arxiv.org/abs/1901.07291">https://arxiv.org/abs/1901.07291</a>]
            </p>
          </div>
          <a
            href="https://www.my-course.co.uk/mod/page/view.php?id=958799"
            target="_blank"
            rel="noreferrer"
          >
            Link to Exercise
          </a>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Development Individual Project: Presentation</h2>
          <p>
            The individual development project presentation focused on developing an intelligent
            research assistant application to tackle the challenges faced by researchers in
            navigating the vast amount of online academic information. The proposed application
            leverages intelligent agents to streamline the research process, offering features such
            as intelligent search functionality, automated article preprocessing and summary
            generation, research categorization and classification, proactive suggestion of related
            articles, and collaborative features for sharing and annotating research collections.
          </p>
          <p>
            The application's MVP version successfully implemented key features demonstrating the
            involvement of intelligent agents, such as integration with the arXiv API, automatic
            summary generation, research categorization using machine learning, proactive suggestion
            of related articles, autonomous article preprocessing using NLP techniques, and keyword
            extraction.
          </p>
          <p>
            Future enhancements for the application include expanding data sources, implementing
            user authentication and personalized profiles, enhancing intelligent agents'
            capabilities with advanced NLP techniques, exploring NLG models for more sophisticated
            summaries, and allowing users to define custom search parameters and data extraction
            rules.
          </p>
          <img
            className={styles.imgStyles}
            src={require('./Intelligent Research Assistant.png')}
            alt="Intelligent Research Assistant"
          />
          <a
            href="https://www.my-course.co.uk/mod/assign/view.php?id=958807"
            target="_blank"
            rel="noreferrer"
          >
            Link to Assessment
          </a>
        </div>
        <div className={styles.reflection}>
          <h2 className={styles.sectionTitle}>Personal Reflection</h2>
          <p>
            As I reflect on my journey through the Intelligent Agents module, I can't help but feel
            a sense of accomplishment and excitement for the future. The development of my final
            project, an intelligent research assistant application for online academic research, has
            been an incredible learning experience that has pushed me to grow both personally and
            professionally.
          </p>
          <p>
            When I first embarked on this project, I was driven by the desire to tackle the
            challenges researchers face in navigating the vast landscape of online scholarly
            content. I wanted to create an AI-powered application that could streamline the research
            process, automating tasks, providing relevant suggestions, and generating valuable
            insights. It's amazing to see how far I've come in turning that vision into reality.
          </p>
          <p>
            Developing the MVP version of the application was a significant milestone. I
            successfully implemented key features that demonstrate the integration of intelligent
            agent capabilities, such as intelligent search functionality, automatic article
            preprocessing and summary generation, research categorization, and proactive
            recommendation of related articles. Seeing these features come to life was a true
            testament to the power of combining intelligent agents with modern web technologies.
          </p>
          <p>
            Throughout this project, I've gained a deeper understanding of intelligent agents and
            their potential to solve real-world problems. I've acquired valuable skills in
            leveraging AI and NLP techniques, working with web technologies and frameworks, and
            defining success criteria using the SMART framework. These skills have not only been
            crucial for this project but will undoubtedly serve me well in future endeavors.
          </p>
          <p>
            However, this journey has also taught me to recognize the limitations and challenges
            that come with relying on external data sources, AI models, and maintaining up-to-date
            data for offline access. It's important to consider the need for human verification of
            extracted insights and the potential impact of data inaccuracies on the user experience.
            These realizations have made me more critical and thoughtful in my approach to
            developing intelligent systems.
          </p>
          <p>
            Creating the final presentation for this project was an enriching experience in itself.
            It allowed me to step back and reflect on the entire journey, from the initial concept
            to the implemented solution. As I crafted the presentation, I focused on highlighting
            how intelligent agents were applied at various stages of the project.
          </p>
          <p>
            I explained how the search functionality leveraged intelligent agents to fetch relevant
            articles from the arXiv API based on user queries. I described the use of NLP techniques
            for automatic article preprocessing, summary generation, and research categorization,
            showcasing how intelligent agents can process and analyze large amounts of textual data.
            I also emphasized the proactive recommendation feature, which demonstrates how
            intelligent agents can learn from user interactions and provide personalized
            suggestions.
          </p>
          <p>
            Throughout the presentation, I made sure to communicate the value proposition of the
            intelligent research assistant application and how it can revolutionize the way
            researchers interact with online scholarly content. I also addressed potential
            limitations and areas for improvement, such as expanding data sources, enhancing NLP
            capabilities, and incorporating user feedback to refine the system.
          </p>
          <p>
            Looking ahead, I'm excited to build upon the strong foundation I've established in this
            module. I plan to continue enhancing the research assistant application by expanding
            data sources, personalizing the user experience, advancing NLP and NLG capabilities, and
            enabling more user control over search and extraction. I want to explore the integration
            of additional academic APIs, web scraping techniques, and advanced NLP techniques to
            provide even more sophisticated insights to researchers.
          </p>
          <p>
            To further improve the application, I would focus on incorporating user feedback and
            conducting usability testing to identify areas for refinement. This could include
            optimizing the user interface, improving the relevance of search results and
            recommendations, and providing more granular control over search parameters and filters.
            Additionally, I would investigate the integration of collaborative features, allowing
            researchers to share and annotate their research collections within the platform.
          </p>
          <p>
            But my ambitions don't stop there. I'm eager to apply the knowledge and skills I've
            gained in intelligent agents to other domains and challenges. I want to keep exploring
            the exciting possibilities at the intersection of AI and different fields, leveraging my
            newfound expertise to create innovative solutions that make a real impact.
          </p>
          <p>
            This module has equipped me with a solid foundation in intelligent agent concepts and
            their practical application, and I'm ready to embrace the challenges and opportunities
            that lie ahead. I can't wait to see where this journey takes me next, and I'm committed
            to continuing my growth and making a positive impact through the development of
            intelligent systems.
          </p>
        </div>

        <div className={styles.references}>
          <h2 className={styles.sectionTitle}>References</h2>
          <ul>
            <li>
              Bjerke, M. B., & Renger, R. (2017). Being smart about writing SMART objectives.
              Evaluation and Program Planning, 61(1), 125-127.{' '}
              <a href="https://doi.org/10.1016/j.evalprogplan.2016.12.009">
                https://doi.org/10.1016/j.evalprogplan.2016.12.009
              </a>
            </li>
            <li>
              Jennings, N. R. (2000). On agent-based software engineering. Artificial Intelligence,
              117(2), 277-296.{' '}
              <a href="https://doi.org/10.1016/S0004-3702(99)00107-1">
                https://doi.org/10.1016/S0004-3702(99)00107-1
              </a>
            </li>
            <li>
              Winikoff, M., & Padgham, L. (2004). The Prometheus methodology. Methodologies and
              Software Engineering for Agent Systems, 11(1), 217-234.{' '}
              <a href="https://doi.org/10.1007/1-4020-8058-1_14">
                https://doi.org/10.1007/1-4020-8058-1_14
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  entryContainer: css`
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,
  entryTitle: css`
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  `,
  entryContent: css`
    font-size: 16px;
    line-height: 1.6;
  `,
  introduction: css`
    margin-bottom: 30px;
  `,
  section: css`
    margin-bottom: 30px;
  `,
  sectionTitle: css`
    font-size: 22px;
    color: #333;
    margin-bottom: 10px;
  `,
  conclusion: css`
    margin-top: 30px;
  `,
  codeBlock: css`
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 16px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    overflow-x: auto;
  `,
  reflection: css`
    margin-top: 30px;
  `,
  references: css`
    margin-top: 30px;
  `,
  imgStyles: css`
    max-width: 100%;
  `,
};

export default IntelligentAgents;
