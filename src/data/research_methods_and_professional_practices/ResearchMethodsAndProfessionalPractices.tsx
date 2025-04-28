import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';

import {
  BookOpen,
  Search,
  BookText,
  FileText,
  BarChart2,
  Users,
  Settings,
  Lightbulb,
  Award,
  Grid,
  Book,
  ArrowUp,
} from 'lucide-react';

const sectionStyle = css`
  margin-top: 1.5rem;
  position: relative;
`;

const headingStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5rem;
  border-left: 4px solid #4b6ef5;
  padding-left: 12px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 2px;
    background-color: #4b6ef5;
  }
`;

const paragraphStyle = css`
  margin-bottom: 1.25rem;
  line-height: 1.8;
  font-size: 16px;
  color: #2e2e2e;
  letter-spacing: 0.25px;
`;

const ResearchMethodsAndProfessionalPractices = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <BookOpen size={28} />
          Module Overview
        </h2>

        <p className={paragraphStyle}>
          This module offered a comprehensive and intellectually stimulating foundation in research
          methodologies and professional practice. It was designed to equip us with both the
          theoretical frameworks and practical tools required to conduct <strong>ethical</strong>,
          evidence-based research in academic and real-world settings. From the outset, we explored
          the fundamentals of the research process — how to formulate research questions, design
          studies, select appropriate data collection methods, and carry out robust statistical
          analysis.
        </p>

        <p className={paragraphStyle}>
          A major strength of the module was its balanced emphasis on both quantitative and
          qualitative research traditions. We developed practical skills in areas such as hypothesis
          testing, regression analysis, and inferential statistics through hands-on exercises and
          datasets. These statistical exercises (covered in Units 7 to 9) were not just academic
          tasks — they demonstrated how to <strong>critically interpret data</strong>, identify
          trends, and avoid common analytical pitfalls. Simultaneously, qualitative approaches such
          as thematic analysis and observational methods were discussed in the context of
          understanding complex human behavior and perceptions — especially valuable when
          investigating how users engage with AI systems.
        </p>

        <p className={paragraphStyle}>
          Ethics was not treated as a checkbox, but as a core theme running through the entire
          research process. From data collection to dissemination, the module emphasized the
          importance of <strong>ethical reasoning</strong>, <strong>transparency</strong>, and{' '}
          <strong>accountability</strong>. Case studies on real-world dilemmas — such as algorithmic
          bias, AI regulation, and digital manipulation — brought these issues to life and
          challenged us to reflect on the role of researchers as both scientists and stewards of
          public trust.
        </p>

        <p className={paragraphStyle}>
          The module also highlighted the evolving challenges of AI governance. In class, we
          discussed how emerging technologies — especially large-scale language models — are
          reshaping industries and societal interactions. However, with this transformation comes
          risk: systems that summarize or generate content can hallucinate information, amplify
          bias, or mislead users without proper oversight. These concerns resonate strongly with my
          current dissertation topic, which focuses on the <strong>ethical challenges</strong>{' '}
          involved in developing deep learning-based text summarization systems. This module gave me
          the conceptual lens to assess those risks not only technically, but ethically and
          methodologically.
        </p>

        <p className={paragraphStyle}>
          Overall, this learning experience deepened my understanding of what it means to conduct{' '}
          <strong>responsible research</strong> in a rapidly evolving digital world. It reinforced
          that in fields like AI, research is not just about what is possible — it's about what is
          justifiable, explainable, and fair. These lessons are now shaping the way I approach my
          final project and will continue to guide my professional practice long after the degree
          concludes.
        </p>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <Search size={28} />
          Research Topic
        </h2>

        <p className={paragraphStyle}>
          I selected my research topic based on the increasing relevance and complexity of
          AI-generated content: the challenges and ethical considerations in developing{' '}
          <strong>deep learning-based text summarization systems</strong>. These systems — built on
          architectures such as BERT, GPT, and T5 — are widely used in areas like journalism,
          education, legal research, and business intelligence to condense large volumes of
          information into digestible summaries.
        </p>

        <p className={paragraphStyle}>
          While powerful, these systems raise important concerns. They can unintentionally introduce{' '}
          <strong>bias</strong>, omit critical nuances, or <strong>hallucinate facts</strong>{' '}
          entirely — generating summaries that are misleading or factually incorrect. The
          consequences of such errors are particularly serious when users rely on summaries for
          decision-making, unaware of the system's limitations or its potential for distortion.
        </p>

        <p className={paragraphStyle}>
          My research investigates these issues through two main avenues: a critical analysis of
          current model behaviors, and the development of a practical{' '}
          <strong>ethical evaluation framework</strong>. This framework will propose measurable
          criteria to assess transparency, factuality, bias mitigation, and user trust. Alongside
          this, I aim to build a prototype toolkit that helps researchers and developers evaluate
          the ethical reliability of summarization systems in real-world use cases.
        </p>

        <p className={paragraphStyle}>
          This topic aligns closely with the core values emphasized in this module —{' '}
          <strong>responsible research design</strong>, ethical reflection, and the importance of
          contextual integrity in AI applications. It also contributes to broader conversations
          around AI safety, explainability, and the role of developers in safeguarding information
          integrity at scale.
        </p>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <Settings size={28} />
          Early Project Planning and Methodological Considerations
        </h2>

        <p className={paragraphStyle}>
          As I began shaping the direction of my research project, I spent time reflecting on the
          appropriate research methods, data sources, and skills that would be necessary to address
          my area of interest: the ethical challenges in deep learning-based text summarization.
        </p>

        <p className={paragraphStyle}>
          Given the nature of the topic, I anticipated that a{' '}
          <strong>mixed-methods approach</strong> would be most appropriate. On the one hand, I
          would need to engage with quantitative methods — evaluating outputs from summarization
          models using established performance and factuality metrics. This would allow for a
          structured, data-driven assessment of model reliability. On the other hand, I saw clear
          value in incorporating qualitative techniques such as surveys or expert interviews, to
          better understand how users perceive these summaries and what factors influence trust or
          skepticism.
        </p>

        <p className={paragraphStyle}>At this early stage, I considered using a combination of:</p>
        <ul className={styles.bulletList}>
          <li>Automated output collection from models like T5 or PEGASUS</li>
          <li>User-centered surveys focused on perceived clarity and factuality</li>
          <li>Literature-based criteria for ethical evaluation benchmarks</li>
        </ul>

        <p className={paragraphStyle}>
          In terms of required skills, I identified a few areas I would need to strengthen or build
          on:
        </p>
        <ul className={styles.bulletList}>
          <li>Evaluating NLP outputs using tools such as HuggingFace Transformers</li>
          <li>Designing effective survey instruments for collecting user feedback</li>
          <li>Conducting statistical comparisons (e.g., t-tests, regression)</li>
          <li>
            Structuring an <strong>ethical evaluation framework</strong> that could be both
            principled and practical
          </li>
        </ul>

        <p className={paragraphStyle}>
          While my thinking was still evolving at this point, these early reflections gave me a
          useful scaffold to build on. They helped clarify that my project would benefit from
          blending <strong>technical rigor</strong> with <strong>human-centered evaluation</strong>,
          and that the work would involve both computational tools and qualitative judgment. These
          planning insights set the stage for the literature review and proposal development that
          followed.
        </p>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <BookText size={28} />
          Literature Review
        </h2>

        <p className={paragraphStyle}>
          The literature review process allowed me to explore a rapidly growing body of academic
          work surrounding deep learning-based text summarization systems. My focus was on
          identifying both the technical advancements in summarization architectures and the
          associated <strong>ethical challenges</strong> that arise when these systems are applied
          in real-world contexts.
        </p>

        <p className={paragraphStyle}>
          I structured the review thematically, beginning with the evolution of summarization models
          — from traditional extractive approaches to advanced transformer-based architectures such
          as BERTSum, T5, and PEGASUS (Zhang et al., 2020; Raffel et al., 2020). From there, I
          examined empirical studies on common failure modes in these systems, including{' '}
          <strong>factual inaccuracies</strong>, <strong>hallucinations</strong>, and content
          omission (Maynez et al., 2020; Kryściński et al., 2020). This led naturally into a review
          of the ethical dimensions associated with these failures, particularly regarding user
          trust, bias amplification, and the propagation of misinformation (Binns, 2018; Sambasivan
          et al., 2021).
        </p>

        <p className={paragraphStyle}>
          One challenge I encountered was balancing technical depth with ethical critique. Many
          sources offered detailed model performance metrics but lacked engagement with the human
          impact of model outputs. Conversely, ethical discussions often lacked technical
          specificity. Bridging these two perspectives required careful selection of{' '}
          <strong>interdisciplinary sources</strong> from computer science, information ethics, and
          human-computer interaction.
        </p>

        <p className={paragraphStyle}>
          A major insight from the review was the growing recognition that summarization systems
          must be evaluated using more than just ROUGE scores or compression rates. There is
          increasing support for <strong>human-centric evaluation frameworks</strong> that
          incorporate transparency, explainability, and the potential societal impact of generated
          summaries (Pérez-Mayos et al., 2021). This directly informed my proposal to build a
          practical ethical scoring framework — one that reflects both performance and human values.
        </p>

        <p className={paragraphStyle}>
          Overall, the literature review not only grounded my research in the current state of the
          field but also highlighted the urgent need for cross-disciplinary standards to ensure that
          automated summarization tools are used responsibly and transparently. It laid the
          foundation for my continued focus on <strong>ethical evaluation</strong> as an integral
          part of AI system design.
        </p>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <FileText size={28} />
          Research Proposal Development
        </h2>

        <p className={paragraphStyle}>
          The development of my research proposal was both a conceptual and methodological
          challenge, as it required synthesizing complex technical concerns with ethical reasoning.
          The proposal focused on designing a practical framework for evaluating the{' '}
          <strong>ethical reliability</strong> of deep learning-based text summarization systems —
          tools that, despite their utility, can introduce risks of misinformation, bias
          propagation, and opacity in knowledge dissemination.
        </p>

        <p className={paragraphStyle}>
          The central idea of the proposal was to treat ethical evaluation not as an abstract
          principle, but as a <strong>measurable and testable process</strong>. This meant
          translating values like factual accuracy, bias awareness, transparency, and user trust
          into structured evaluation criteria. I was influenced by works that emphasize the need for
          human-aligned benchmarking in natural language generation (Gehrmann et al., 2022; Durmus
          et al., 2020), as well as by research advocating for practical ethics toolkits in machine
          learning (Mökander & Floridi, 2021).
        </p>

        <p className={paragraphStyle}>
          Designing the proposal also required careful scoping. While the literature highlighted
          many possible directions — from dataset fairness to interpretability techniques — I chose
          to focus specifically on the <strong>evaluation layer</strong> of summarization systems.
          This decision was guided by the realization that many risks manifest not in how summaries
          are generated, but in how they are assessed — a gap that current metrics like ROUGE or
          BLEU do not fully address (Fabbri et al., 2021).
        </p>

        <p className={paragraphStyle}>
          I also proposed the development of a <strong>prototype toolkit</strong>, designed to
          visualize and score summaries across ethical dimensions such as hallucination likelihood,
          context sensitivity, and perceived trust. While still early in development, this artefact
          was included in the proposal to demonstrate practical alignment with research outcomes — a
          key aspect encouraged by this module's emphasis on applied learning and solution-oriented
          thinking.
        </p>

        <p className={paragraphStyle}>
          Overall, writing the proposal reinforced the importance of integrating ethical reflection
          with technical design. It also sharpened my ability to define research boundaries, build
          structured arguments, and align methodological rigor with real-world applicability. These
          are skills I expect to draw on throughout the execution of the full project and beyond.
        </p>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <BarChart2 size={28} />
          Statistical Exercises
        </h2>

        <div className={styles.statExercise}>
          <h3 className={styles.exerciseTitle}>
            Exercise 7.1B – Summary Statistics on Policyholders
          </h3>
          <p className={styles.exerciseMeta}>
            <strong>Dataset:</strong> Policyholders.xlsx · <strong>Method:</strong> Descriptive
            statistics & histogram
          </p>
          <p className={paragraphStyle}>
            This exercise involved calculating basic descriptive statistics to understand the
            distribution of license years among policyholders. The analysis aimed to explore how
            experience levels varied across age groups, insurance types, and gender. The histogram
            below reveals a skewed distribution — most policyholders in this sample held licenses
            for fewer than 15 years, with only a few highly experienced drivers skewing the range.
          </p>
          <img
            src={require('./images/exercise-7.1b-license-histogram.png')}
            alt="Histogram of license years"
            className={styles.exerciseGraph}
          />
        </div>

        <div className={styles.statExercise}>
          <h3 className={styles.exerciseTitle}>
            Exercise 7.4F – Visual Comparison by Gender and Policy Type
          </h3>
          <p className={styles.exerciseMeta}>
            <strong>Dataset:</strong> Policyholders.xlsx · <strong>Method:</strong> Boxplot grouped
            by category
          </p>
          <p className={paragraphStyle}>
            This task explored whether driving experience (measured in license years) differed
            meaningfully across gender and policy type. The boxplot below groups individuals by both
            gender and their chosen insurance policy, revealing patterns in experience distribution.
            The results suggest that male drivers holding comprehensive policies tend to have
            significantly more experience, while newer drivers are more common among third-party
            policyholders — especially among females.
          </p>
          <img
            src={require('./images/exercise-7.4f-boxplot.png')}
            alt="Boxplot grouped by gender and policy type"
            className={styles.exerciseGraph}
          />
        </div>

        <div className={styles.statExercise}>
          <h3 className={styles.exerciseTitle}>
            Exercise 8.2B – Comparing Weight Loss by Diet Group
          </h3>
          <p className={styles.exerciseMeta}>
            <strong>Dataset:</strong> Diets.xlsx · <strong>Method:</strong> Independent samples
            t-test
          </p>
          <p className={paragraphStyle}>
            This exercise tested whether there was a statistically significant difference in weight
            loss between Diet A and Diet B groups. The mean weight loss for Diet A was higher, and
            the t-test confirmed this difference was significant at the 95% confidence level (p &lt;
            0.05). These results supported the hypothesis that Diet A is more effective for
            short-term weight reduction.
          </p>
          <img
            src={require('./images/exercise-8.2b-boxplot.png')}
            alt="Boxplot comparing Diet A and B"
            className={styles.exerciseGraph}
          />
        </div>

        <div className={styles.statExercise}>
          <h3 className={styles.exerciseTitle}>
            Exercise 8.3D – Brand Preference by Demographic Area
          </h3>
          <p className={styles.exerciseMeta}>
            <strong>Dataset:</strong> Brandprefs.xlsx · <strong>Method:</strong> Chi-square test of
            independence
          </p>
          <p className={paragraphStyle}>
            This analysis tested whether cereal brand preferences differed between two demographic
            areas. The Chi-square test revealed a statistically significant association between
            brand choice and area (p &lt; 0.05), suggesting that regional preferences may play a
            role in consumer decision-making. The stacked bar chart below visually confirms that
            Area 1 showed stronger preference for Brand A, while Area 2 had a more balanced
            distribution between Brands A and B.
          </p>
          <img
            src={require('./images/exercise-8.3d-stacked-bar.png')}
            alt="Stacked bar chart of brand preferences by area"
            className={styles.exerciseGraph}
          />
        </div>

        <div className={styles.statExercise}>
          <h3 className={styles.exerciseTitle}>Exercise 8.4G – Income Comparison by Gender</h3>
          <p className={styles.exerciseMeta}>
            <strong>Dataset:</strong> Superplus.xlsx · <strong>Method:</strong> Independent samples
            t-test & boxplot
          </p>
          <p className={paragraphStyle}>
            This task examined income differences between male and female holders of a premium
            credit card. A t-test was conducted to evaluate whether the observed difference in
            average income was statistically significant. The boxplot below shows that while male
            incomes clustered slightly higher in this sample, female income distribution included
            greater variability, including one notably higher outlier. These findings suggest the
            importance of considering both central tendency and spread when analyzing income-related
            data.
          </p>
          <img
            src={require('./images/exercise-8.4g-boxplot.png')}
            alt="Boxplot of income comparison by gender"
            className={styles.exerciseGraph}
          />
        </div>

        <div className={styles.statExercise}>
          <h3 className={styles.exerciseTitle}>
            Exercise 9.1D – Relationship Between Income and Loan Amount
          </h3>
          <p className={styles.exerciseMeta}>
            <strong>Dataset:</strong> Carloan.xlsx · <strong>Method:</strong> Correlation and simple
            linear regression
          </p>
          <p className={paragraphStyle}>
            This exercise analyzed whether a relationship exists between an individual's income and
            the loan amount they were approved for when purchasing a vehicle. A scatterplot with a
            regression line reveals a clear positive correlation, suggesting that individuals with
            higher incomes tend to secure larger loans. The linear model provides a simple yet
            effective tool for predicting loan limits based on reported income within this sample.
          </p>
          <img
            src={require('./images/exercise-9.1d-regression.png')}
            alt="Scatterplot of income vs loan amount"
            className={styles.exerciseGraph}
          />
        </div>

        <div className={styles.statExercise}>
          <h3 className={styles.exerciseTitle}>
            Exercise 9.2D – Comparison of Blood Pressure: Leg vs Arm
          </h3>
          <p className={styles.exerciseMeta}>
            <strong>Dataset:</strong> Limb SBP.xlsx · <strong>Method:</strong> Correlation and
            simple linear regression
          </p>
          <p className={paragraphStyle}>
            This exercise explored whether systolic blood pressure (SBP) measured in the leg could
            be used to estimate SBP in the arm — a common challenge in certain surgical contexts.
            The regression analysis revealed a moderate positive correlation, indicating that leg
            SBP can provide a reasonably predictive estimate for arm SBP in many cases. However,
            some variation remains, highlighting the need for careful calibration in clinical use.
          </p>
          <img
            src={require('./images/exercise-9.2d-sbp-regression.png')}
            alt="Scatterplot of SBP measured in leg and arm"
            className={styles.exerciseGraph}
          />
        </div>

        <div className={styles.statExercise}>
          <h3 className={styles.exerciseTitle}>
            Exercise 9.3B – Blood Pressure Relationship (Expanded Dataset)
          </h3>
          <p className={styles.exerciseMeta}>
            <strong>Dataset:</strong> Limb SBP.xlsx · <strong>Method:</strong> Correlation and
            linear regression
          </p>
          <p className={paragraphStyle}>
            This final analysis revisited the relationship between systolic blood pressure (SBP)
            measured in the leg and the arm, using an expanded dataset for improved statistical
            power. The resulting regression plot indicates a strong linear correlation, reinforcing
            earlier findings and demonstrating consistency across a broader sample. These insights
            strengthen the argument for using leg SBP as a proxy measurement under clinical
            constraints.
          </p>
          <img
            src={require('./images/exercise-9.3b-sbp-regression.png')}
            alt="Scatterplot of SBP leg vs arm (expanded)"
            className={styles.exerciseGraph}
          />
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <Users size={28} />
          Collaborative Learning Discussions
        </h2>

        <p className={paragraphStyle}>
          Throughout this module, collaborative learning played a significant role in shaping my
          understanding of ethical research practices and responsible AI development. Although the
          discussions were asynchronous, they provided meaningful opportunities to engage with peers
          from a variety of academic and professional backgrounds.
        </p>

        <p className={paragraphStyle}>
          One of the most thought-provoking exchanges occurred during our debate on{' '}
          <strong>accountability in AI systems</strong>. I initiated a thread questioning whether
          responsibility should lie primarily with the developer, the data source, or the end user
          when a model produces harmful outcomes. The responses I received broadened my perspective
          — some peers framed the issue through legal accountability, others through design
          transparency and the ethical obligations of engineers. The diversity of viewpoints helped
          me move beyond simplistic conclusions and better appreciate the layered nature of AI
          responsibility.
        </p>

        <p className={paragraphStyle}>
          Another insightful discussion centered around{' '}
          <strong>explainability in machine learning systems</strong>. I initially expressed
          skepticism about how feasible "explainable AI" is in domains like natural language
          processing, where models often function as black boxes. A peer responded with a real-world
          example from educational technology, explaining how even surface-level transparency
          improved user trust. That comment shifted my thinking and later influenced how I framed
          the transparency criterion in my own ethical evaluation framework.
        </p>

        <p className={paragraphStyle}>
          What I found most valuable across all these discussions was the willingness to challenge
          ideas in a respectful and constructive way. Rather than reinforcing pre-existing views,
          the discussions often introduced conflicting interpretations that forced me to refine or
          rethink my assumptions. It also made me aware of disciplinary blind spots — things I might
          not have considered had I been working in isolation.
        </p>

        <p className={paragraphStyle}>
          These conversations not only enhanced my learning, but also reminded me that research —
          especially in applied fields like AI — is inherently <strong>collaborative</strong>. It
          involves navigating multiple perspectives, reconciling competing values, and building
          shared understanding across disciplines. These are lessons I'll carry forward into both
          academic research and professional environments, where open dialogue and ethical awareness
          are increasingly indispensable.
        </p>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <Lightbulb size={28} />
          Reflective Piece
        </h2>

        <p className={paragraphStyle}>
          Over the course of this module, I've experienced a genuine shift in how I understand and
          approach academic research. I came in with a general sense of what "research" meant —
          collect data, analyze it, write something insightful — but the structure, activities, and
          challenges of this module showed me that research is much more layered than I had
          realized. It's not just a process; it's a <strong>mindset</strong> — one that requires not
          only critical thinking and technical skill, but also ethical awareness, creativity, and
          the ability to navigate uncertainty. These themes emerged repeatedly, whether I was
          analyzing weight loss datasets or debating the ethical implications of automated
          decision-making systems.
        </p>

        <p className={paragraphStyle}>
          One of the most significant areas of growth for me was in{' '}
          <strong>research design and methodology</strong>. I had previously encountered
          methodological frameworks in a theoretical sense, but applying them through the process of
          designing my own research proposal gave me a far more grounded understanding. It became
          clear that designing a research project is not just about answering a question — it's
          about framing a problem in a way that is researchable, relevant, and responsible. My
          chosen topic — the ethical challenges involved in developing deep learning-based text
          summarization systems — required particular care in this regard. These models are widely
          used, technically complex, and socially impactful. I had to make sure my proposal
          addressed not only what could be studied but also what should be studied. That reflection
          alone was a huge takeaway.
        </p>

        <p className={paragraphStyle}>
          The literature review component was particularly formative. Diving into research on
          hallucinations in summarization systems, the limits of existing evaluation metrics like
          ROUGE, and ethical concerns around bias and transparency, I found myself at the
          intersection of computer science, information ethics, and human-computer interaction.
          Synthesizing insights across disciplines was initially daunting — the language, methods,
          and assumptions often differ — but it ultimately helped me grow as a researcher. I learned
          how to extract value from each domain and weave it into a coherent,{' '}
          <strong>interdisciplinary approach</strong>. This ability to connect dots across fields
          will, I believe, be increasingly essential in AI-related research moving forward.
        </p>

        <p className={paragraphStyle}>
          The module's sustained focus on <strong>ethics</strong> was another area that resonated
          with me deeply. It wasn't just a footnote at the end of each lecture; it was integrated
          into everything — from statistical exercises to proposal design to case study discussions.
          Topics like algorithmic fairness, AI governance, and user transparency were approached not
          just in principle, but with a practical eye: What does it mean to embed these values in
          system design? That question stayed with me throughout the module and now shapes the
          foundation of my dissertation. For instance, as I developed an ethical evaluation
          framework for summarization systems, I had to confront tough design questions: How do we
          measure "trustworthiness" of an AI-generated summary? What thresholds of factuality or
          bias are acceptable? These are not purely academic questions — they are design decisions
          with real-world consequences.
        </p>

        <p className={paragraphStyle}>
          My <strong>statistical skillset</strong> also developed in meaningful ways. While I had a
          baseline understanding of techniques like correlation and t-tests, working through the
          exercises from Units 7 to 9 solidified not just my competence, but my confidence. I moved
          from memorizing how to run a test to understanding when and why it was appropriate.
          Exercises like the comparison of diet plans using an independent samples t-test, or the
          use of regression analysis to assess the link between income and loan approvals, helped
          ground statistical theory in real-world application. Moreover, I gained a deeper
          appreciation for how easily data can be misrepresented, and how essential sound
          statistical practice is for building credible, ethical research outcomes.
        </p>

        <p className={paragraphStyle}>
          Equally important was the growth I experienced in terms of{' '}
          <strong>independent learning</strong> and project ownership. The module demanded a lot of
          self-direction — especially in navigating the literature, shaping the proposal, and
          managing the broader project timeline. I had to make difficult decisions about scope,
          methodology, and focus. There were points where I had to reassess my assumptions and pivot
          accordingly. While this was sometimes frustrating, it was ultimately empowering. I now
          feel more capable of managing complex, open-ended research tasks — something that's
          invaluable for my dissertation and beyond.
        </p>

        <p className={paragraphStyle}>
          One of the most rewarding aspects of this experience was designing a prototype scoring
          framework for evaluating the ethical performance of text summarization systems. This
          artefact tied together multiple strands of the module: methodological rigor, ethical
          accountability, and practical implementation. It was particularly gratifying to see
          abstract concepts like "hallucination risk" or "contextual integrity" translated into
          something measurable and potentially actionable. It gave me a real sense of how research
          can inform tool-building — and how ethical reflection can become a design feature, not
          just a constraint.
        </p>

        <p className={paragraphStyle}>
          Reflecting back on the collaborative elements of this module, I've come to appreciate how
          peer interaction and dialogue can expand and deepen individual understanding. The
          collaborative discussions gave me access to a diversity of viewpoints — some technical,
          others philosophical — and often prompted me to rethink or refine my assumptions. Whether
          we were debating the boundaries of algorithmic accountability or sharing case studies of
          explainable AI, these exchanges highlighted the social dimension of research. As I
          mentioned in the Collaborative Learning Discussions section, this module reminded me that
          ethical research doesn't happen in isolation. It's enriched by challenge, refined through
          dialogue, and ultimately strengthened by interdisciplinary conversation.
        </p>

        <p className={paragraphStyle}>
          I also now see how the early planning stage — detailed in my Unit 3 reflection — laid the
          groundwork for the project I would later propose. Revisiting those notes, I can trace how
          initial thoughts about methodology, data, and skill gaps matured over time. My original
          instinct to pursue a mixed-methods approach proved sound, but it was through structured
          proposal work, literature engagement, and statistical exercises that those methods became
          clearly defined and practically actionable. That process — moving from abstract ideas to
          concrete plans — was one of the most rewarding aspects of this module.
        </p>

        <p className={paragraphStyle}>
          In summary, this module has not only strengthened my{' '}
          <strong>technical competencies</strong> but also shifted my perspective on what it means
          to be a <strong>responsible researcher</strong>. It taught me to ask better questions, to
          reflect more deeply on the implications of my work, and to strive for outcomes that serve
          both innovation and the public good. I feel more equipped — not just to complete my
          dissertation, but to contribute meaningfully to the ongoing dialogue about ethics, trust,
          and transparency in AI.
        </p>

        <p className={paragraphStyle}>
          Most importantly, this experience helped me define what kind of researcher I want to be:
          someone who values critical inquiry, ethical reflection, and collaborative growth. And in
          a field as powerful and fast-evolving as artificial intelligence, that mindset may be just
          as important as any technical skill I've learned along the way.
        </p>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <Award size={28} />
          Professional Skills Matrix
        </h2>

        <div className={styles.tableContainer}>
          <table className={styles.skillsTable}>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Before the Module</th>
                <th>After the Module</th>
                <th>Evidence / Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Research Design</strong>
                </td>
                <td>Basic understanding of structure</td>
                <td>Able to frame, scope, and justify research questions</td>
                <td>
                  Developed proposal with clearly defined methodology and ethical considerations
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Literature Review</strong>
                </td>
                <td>Could summarize sources</td>
                <td>Can synthesize, critique, and structure them thematically</td>
                <td>Thematic review spanning NLP, HCI, and ethics with integrated references</td>
              </tr>
              <tr>
                <td>
                  <strong>Statistical Analysis</strong>
                </td>
                <td>Familiar with basic tests</td>
                <td>Confident applying t-tests, regression, and chi-square tests</td>
                <td>Completed 7 statistical exercises with visual and interpretative components</td>
              </tr>
              <tr>
                <td>
                  <strong>Ethical Reasoning</strong>
                </td>
                <td>General awareness</td>
                <td>Can apply ethical principles to AI development and evaluation</td>
                <td>
                  Designed ethical scoring framework; incorporated human-centric evaluation criteria
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Independent Working</strong>
                </td>
                <td>Needed structure and guidance</td>
                <td>Comfortable leading project planning, time management, self-review</td>
                <td>
                  Managed full project development independently from Unit 3 to proposal submission
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Communication & Collaboration</strong>
                </td>
                <td>Comfortable in structured environments</td>
                <td>More confident expressing ideas and receiving peer feedback</td>
                <td>
                  Peer discussions influenced transparency dimension in my proposal and reflection
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <Grid size={28} />
          SWOT Analysis – Content
        </h2>

        <div className={styles.swotContainer}>
          <div className={styles.swotRow}>
            <div className={styles.swotCell}>
              <h3 className={styles.swotHeading}>Strengths</h3>
              <ul className={styles.swotList}>
                <li>Strong foundation in research design and ethics</li>
                <li>Developed an interdisciplinary mindset</li>
                <li>Confident use of statistics and data tools</li>
                <li>Comfortable with independent project management</li>
              </ul>
            </div>
            <div className={styles.swotCell}>
              <h3 className={styles.swotHeading}>Weaknesses</h3>
              <ul className={styles.swotList}>
                <li>Limited experience in NLP model implementation at scale</li>
                <li>Initial challenges in scoping research appropriately</li>
                <li>Still refining academic writing to meet publication standards</li>
              </ul>
            </div>
          </div>
          <div className={styles.swotRow}>
            <div className={styles.swotCell}>
              <h3 className={styles.swotHeading}>Opportunities</h3>
              <ul className={styles.swotList}>
                <li>Opportunity to contribute to ethical AI discourse</li>
                <li>Apply evaluation toolkit to real-world systems</li>
                <li>Potential for publication or conference submission</li>
                <li>Skillset is highly relevant to AI policy and UX-focused teams</li>
              </ul>
            </div>
            <div className={styles.swotCell}>
              <h3 className={styles.swotHeading}>Threats</h3>
              <ul className={styles.swotList}>
                <li>
                  Risk of ethical tools being underutilized without strong stakeholder engagement
                </li>
                <li>Rapid changes in AI may shift focus or relevance</li>
                <li>Time constraints in validating the toolkit with actual user data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <Book size={28} />
          References
        </h2>

        <div className={styles.referencesList}>
          <p className={styles.reference}>
            Binns, R. (2018) 'Fairness in Machine Learning: Lessons from Political Philosophy',{' '}
            <em>
              Proceedings of the 2018 Conference on Fairness, Accountability, and Transparency
            </em>
            , ACM.
          </p>

          <p className={styles.reference}>
            Durmus, E., He, H. and Diab, M. (2020) 'FEQA: A Question Answering Evaluation Framework
            for Faithfulness Assessment in Abstractive Summarization',{' '}
            <em>
              Proceedings of the 58th Annual Meeting of the Association for Computational
              Linguistics
            </em>
            .
          </p>

          <p className={styles.reference}>
            Fabbri, A. R., Li, I., She, T., et al. (2021) 'SummEval: Re-evaluating Summarization
            Evaluation', <em>Transactions of the Association for Computational Linguistics</em>.
          </p>

          <p className={styles.reference}>
            Gehrmann, S., Strobelt, H. and Rush, A. M. (2022) 'GLTR: Statistical Detection and
            Visualization of Generated Text',{' '}
            <em>Proceedings of the 60th Annual Meeting of the ACL: System Demonstrations</em>.
          </p>

          <p className={styles.reference}>
            Kryściński, W., McCann, B., Xiong, C. and Socher, R. (2020) 'Evaluating the Factual
            Consistency of Abstractive Text Summarization',{' '}
            <em>
              Proceedings of the 58th Annual Meeting of the Association for Computational
              Linguistics
            </em>
            .
          </p>

          <p className={styles.reference}>
            Maynez, J., Narayan, S., Bohnet, B. and McDonald, R. (2020) 'On Faithfulness and
            Factuality in Abstractive Summarization',{' '}
            <em>
              Proceedings of the 58th Annual Meeting of the Association for Computational
              Linguistics
            </em>
            .
          </p>

          <p className={styles.reference}>
            Mökander, J. and Floridi, L. (2021) 'Ethics-based Auditing to Develop Trustworthy AI',{' '}
            <em>Minds and Machines</em>.
          </p>

          <p className={styles.reference}>
            Pérez-Mayos, M., González-Caro, C. and Tejedor, G. (2021) 'Towards a Framework for
            Ethical Evaluation in Automatic Text Summarization',{' '}
            <em>Journal of Information Ethics</em>.
          </p>

          <p className={styles.reference}>
            Raffel, C., Shazeer, N., Roberts, A., et al. (2020) 'Exploring the Limits of Transfer
            Learning with a Unified Text-to-Text Transformer',{' '}
            <em>Journal of Machine Learning Research</em>.
          </p>

          <p className={styles.reference}>
            Sambasivan, N., Kapania, S., Aoki, P. M., et al. (2021) 'Everyone wants to do the model
            work, not the data work: Data Cascades in High-Stakes AI',{' '}
            <em>Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems</em>.
          </p>

          <p className={styles.reference}>
            Zhang, J., Zhao, Y., Saleh, M. and Liu, P. J. (2020) 'PEGASUS: Pre-training with
            Extracted Gap-sentences for Abstractive Summarization',{' '}
            <em>Proceedings of the 37th International Conference on Machine Learning</em>.
          </p>
        </div>
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <FileText size={28} />
          Supporting Documents
        </h2>

        <p className={paragraphStyle}>Below are the supporting documents for this module:</p>

        <ul className={styles.bulletList}>
          <li>
            <a
              href={require('./Challenges and Ethical Considerations in Developing Deep Learning-Based Text Summarization Systems.pdf')}
              download={
                'Challenges and Ethical Considerations in Developing Deep Learning-Based Text Summarization Systems.pdf'
              }
            >
              Research Paper - Challenges and Ethical Considerations in Developing Deep
              Learning-Based Text Summarization Systems
            </a>
          </li>
          <li>
            <a
              href="https://vimeo.com/1079394744?share=copy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Research Presentation Video (External Link)
            </a>
          </li>
          <li>
            <a
              href={require('./Transcript - Research Presentation - Challenges and Ethical Considerations in Developing Deep Learning-Based Text Summarization Systems.pdf')}
              download={
                'Transcript - Research Presentation - Challenges and Ethical Considerations in Developing Deep Learning-Based Text Summarization Systems.pdf'
              }
            >
              Research Presentation Transcript
            </a>
          </li>
          <li>
            <a href={require('./Reflective Piece.pdf')} download={'Reflective Piece.pdf'}>
              Reflective Piece
            </a>
          </li>
        </ul>
      </section>

      {showBackToTop && (
        <button className={styles.backToTop} onClick={scrollToTop}>
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

const styles = {
  entryContainer: css`
    max-width: 768px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    background-color: #fcfcfc;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
    animation: fadeIn 0.4s ease-in;
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  entryContent: css`
    font-size: 17px;
    line-height: 1.8;
    color: #1f1f1f;
    letter-spacing: 0.25px;
  `,
  mainTitle: css`
    font-size: 32px;
    font-weight: 700;
    color: #222;
    margin-bottom: 2rem;
    text-align: center;
  `,
  section: css`
    margin-bottom: 2rem;
  `,
  sectionTitle: css`
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
    border-left: 4px solid #4b6ef5;
    padding-left: 12px;
    transition: color 0.2s ease;
    &:hover {
      color: #4b6ef5;
    }
  `,
  statExercise: css`
    margin-bottom: 2.5rem;
    padding: 1.5rem;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  `,

  exerciseTitle: css`
    font-size: 20px;
    font-weight: 600;
    color: #2c2c2c;
    margin-bottom: 0.75rem;
  `,

  exerciseMeta: css`
    font-size: 14px;
    color: #777;
    margin-bottom: 1rem;
  `,

  exerciseGraph: css`
    max-width: 300px;
    height: 300px;
    border-radius: 6px;
    margin: 0.5rem auto 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    display: block;
  `,

  bulletList: css`
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
    line-height: 1.7;

    li {
      margin-bottom: 0.5rem;
      color: #2e2e2e;
    }
  `,

  tableContainer: css`
    margin: 1.5rem 0;
    overflow-x: auto;
  `,

  skillsTable: css`
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;

    th,
    td {
      padding: 12px 15px;
      border: 1px solid #ddd;
    }

    th {
      background-color: #f5f7ff;
      color: #333;
      font-weight: 600;
      text-align: left;
    }

    tr:nth-of-type(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f0f4ff;
    }

    td:first-of-type {
      width: 15%;
    }

    td:nth-of-type(2),
    td:nth-of-type(3) {
      width: 20%;
    }

    td:nth-of-type(3) {
      background-color: #f7fbff;
      border-left: 2px solid #4b6ef5;
    }

    td:last-of-type {
      width: 45%;
    }
  `,

  swotContainer: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
  `,

  swotRow: css`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  swotCell: css`
    flex: 1;
    background-color: #f7f9fc;
    border-radius: 8px;
    padding: 1.25rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border: 1px solid #eaedf2;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    }
  `,

  swotHeading: css`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #dee2e6;
    color: #333;
  `,

  swotList: css`
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      line-height: 1.5;
      color: #444;

      &:before {
        content: '-';
        position: absolute;
        left: 0;
        color: #777;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  `,

  referencesList: css`
    margin: 1.5rem 0;
  `,

  reference: css`
    padding-left: 2rem;
    text-indent: -2rem;
    margin-bottom: 1rem;
    font-size: 15px;
    line-height: 1.6;
    color: #333;

    em {
      font-style: italic;
    }

    &:last-child {
      margin-bottom: 0;
    }
  `,

  sectionDivider: css`
    height: 1px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
    margin: 2rem 0 1rem;
    width: 100%;
  `,

  backToTop: css`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 45px;
    height: 45px;
    background-color: #4b6ef5;
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    z-index: 100;

    &:hover {
      background-color: #3a5bd9;
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }
  `,
};

export default ResearchMethodsAndProfessionalPractices;
