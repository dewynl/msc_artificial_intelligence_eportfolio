import { css } from '@emotion/css';
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import default_pearson_result from './default_pearson_result.png'

const wrapper = css`
	display: flex;
	flex-direction: column;
	text-align: start;
  padding: 16px 180px;

   p {
      margin: 8px;
    }

  table {
    border: 1px solid black;
    td, th {
      border: 1px solid black;
      padding: 0;
      margin: 0;
    }
   
  }
`;

const moduleTitle = css`
    display: flex;
    flex-direction: column;
    height: 30vh;
    align-items: start;
    padding-left: 128px;
    justify-content: center;
    background-color: lightgray;
    background-size: cover;
    background-position: center;
    background-image: url('cover1.png');
    color: white;
`;

const ModulePage = () => {
	const { moduleId } = useParams();

	return <div >
        <div className={moduleTitle}>
          <h1>Machine Learning</h1>
        </div>
        <div className={wrapper}>
          <h2>Learning Outcomes</h2>
      <ul>
        <li>Learn about the key paradigms and algorithms in machine learning.</li>
        <li>
          Get an understanding of data analytics based on machine learning and using
          modern programming tools, such as Python or R.
        </li>
        <li>
          Experience how machine learning and data analytics can be used in
          real-world applications.
        </li>
        <li>
          Acquire the ability to gather and synthesise information from multiple
          sources to aid in the systematic analysis of complex problems using
          machine learning tools and algorithms.
        </li>
      </ul>
      <h1 id="4th-industrial-revolution-discussion-forum-">
        4th Industrial Revolution (Discussion Forum)
      </h1>
      <p>
        Coined by Klaus Schwab, the 4th Industrial Revolution represents a
        transformative era characterized by the widespread integration of artificial
        intelligence, the Internet of Things, robotics, and other cutting-edge
        technologies. This revolution is reshaping industries, economies, and
        societies, impacting not only production processes but also the nature of
        work, communication, and governance. Scholars analyze its implications for
        innovation, socio-economic structures, and global competitiveness,
        emphasizing the need for adaptive policies and educational frameworks to
        navigate this rapidly evolving landscape.
      </p>
      <p>
        The <strong>Fourth Industrial Revolution (4IR)</strong> is a term used to
        describe the current era of technological change, which is characterized by
        the convergence of digital, physical, and biological technologies. It is
        also known as Industry 4.0, and is often seen as the next phase of the
        Industrial Revolution, following the mechanization of the 18th century, the
        mass production of the 20th century, and the use of electronics and
        information technology to automate production in the late 20th century.
      </p>
      <p>
        The 4IR is being driven by a number of key technologies, including
        artificial intelligence (AI), robotics, the Internet of Things (IoT), 3D
        printing, and cloud computing. These technologies are enabling new products,
        services, and business models, and are transforming the way we live and
        work.
      </p>
      <p>
        Our exploration of the impact of AI in the fourth industrial revolution,
        centered around the Boeing 737 Max incident, has yielded valuable insights.
        The economic and reputational costs incurred by Boeing due to the MCAS
        failure emphasize the need for a nuanced understanding of AI's capabilities,
        as highlighted by Nicholas referencing Chanda and Banerjee.
      </p>
      <p>
        Tasweem’s introduction of IoT showcased its potential benefits and pitfalls
        in aviation safety, referencing Bauer et al. and Kaushik et al. This
        broadened our understanding of the implications of integrating IoT into
        aviation systems.
      </p>
      <p>
        Giuseppe’s focus on the increasing frequency of AI incidents, as tracked by{" "}
        <a href="http://incidentdatabase.ai/">incidentdatabase.ai</a>, served as a
        stark reminder of the need for vigilance. The call for ethics and caution in
        AI deployment aligns with the growing responsibility we bear as technology
        evolves.
      </p>
      <p>
        Ruminating on our course topics—Exploratory Data Analysis and
        Correlation/Regression—it becomes evident that a more robust application of
        these methodologies could have helped prevent issues like the Boeing 737 Max
        incident. Exploratory Data Analysis is pivotal in uncovering patterns and
        potential risks within data, while the application of Correlation and
        Regression aids in assessing the impact of various factors on system
        performance. Had these methodologies been applied rigorously, it might have
        flagged potential issues in the MCAS system, leading to proactive measures.
      </p>
      <p>
        As we conclude, it's clear that AI integration in safety-critical industries
        demands a multi-faceted approach. Rigorous testing, clear communication, and
        continuous monitoring are crucial. The lessons from the Boeing incident
        underscore the need for ongoing learning and adaptation as technology
        evolves. In essence, our collective exploration has not only deepened our
        understanding of the challenges posed by AI but also emphasized our shared
        responsibility in navigating these challenges wisely and ethically.
      </p>
      <a href="https://www.my-course.co.uk/mod/forum/discuss.php?d=177281">
        Link to the discussion forum
      </a>

      <a href="https://www.my-course.co.uk/mod/forum/discuss.php?d=192418">
        Summary post
      </a>
      <h2 id="references">References</h2>
      <p>
        Chanda, A., &amp; Banerjee, T. (2021). The Boeing 737 MAX crisis: A case
        study in technology failure. <em>Business Horizons.</em>
      </p>
      <p>
        Bauer, A., &amp; Heesen, W. (2018). Internet of Things in aviation:
        Applications, challenges, and future directions.{" "}
        <em>Journal of Air Transportation Management</em>.
      </p>
      <p>
        Kaushik, V., &amp; Verma, S. (2019). Security and privacy challenges in the
        Internet of Things (IoT). <em>Journal of Systems and Software</em>.
      </p>
      <p>
        Nicholas, J. (2019). The Boeing 737 MAX crisis: A cautionary tale for
        artificial intelligence. <em>MIT Sloan Management Review.</em>
      </p>
      <p>
        Schwab, K. (2016). The Fourth Industrial Revolution.{" "}
        <em>World Economic Forum</em>.
      </p>


      <h1 id="correlation-and-regression">Correlation and Regression</h1>
      <p>
        Correlation is a measure of how much two things change together. For
        example, if we have data on the height and weight of people, we might find
        that taller people tend to weigh more. This means that height and weight are
        positively correlated.
      </p>
      <p>
        Regression is a way to use the relationship between two things to predict
        one thing from the other. For example, we could use the regression model to
        predict a person's weight based on their height.
      </p>
      <p>
        For these exercises we updated some scripts provided and changed variables
        as needed to observe how the change in data points impacts correlation and
        regression.
      </p>
      <h2 id="covariance-pearson-correlation">Covariance Pearson Correlation</h2>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "50%", padding: 10 }}>
          <img
            src={require('../../data/machine-learning/default_pearson_result.png')}
            alt="default_pearson_result.png"
          />
        </div>
        <div style={{ flex: "50%", padding: 10 }}>
          <ul>
            <li><b>data1</b>: mean=100.776 stdv=19.620 </li>
            <li><b>data2</b>: mean=151.050 stdv=22.358</li>
            <li><b>Covariance</b>: 389.755</li>
            <li><b>Pearsons correlation</b>: 0.888</li>
          </ul>
        </div>
      </div>
      <p>
        By tweaking the values in the given script, we could observe the following
        that if the the number of data points is increased, the accuracy of the
        calculated mean, standard deviation, covariance, and correlation, would
        generally improve. With more data points, the calculations would better
        represent the underlying distribution and relationships between the
        variables.
      </p>
      <p>
        In the example below, we changed the variables so data1 has 10 times more
        data points that the given by default. Which causes the plot to be denser
        and better represent the covariance of the data.
      </p>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "50%", padding: 10 }}>
          <img src={require('../../data/machine-learning/default_pearson.png')} alt="default_pearson.png" />
        </div>
        <div style={{ flex: "50%", padding: 10 }}>
          <ul>
            <li><b>data1</b>: mean=107.762 stdv=196.201</li>
            <li><b>data2</b>: mean=158.036 stdv=196.696</li>
            <li><b>Covariance</b>: 38577.514</li>
            <li><b>Pearson's correlation</b>: 0.999</li>
          </ul>
        </div>
      </div>
      <p>
        On the other hand, when decreasing the amount of data points, the plot looks
        more sparse and wouldn’t represent the distribution of the data and
        correlation between the two variables. In the case of the calculated
        statistics value, their accuracy decrease and won’t be as reliable.
      </p>
      <p>
        In the image below we have 10 times less datapoints than the one given by
        default.
      </p>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "50%", padding: 10 }}>
          <img src={require('../../data/machine-learning/less_data_pearson.png')} alt="less_data_pearson.png" />
        </div>
        <div style={{ flex: "50%", padding: 10 }}>
          <ul>
            <li><b>data1</b>: mean=99.987 stdv=2.020</li>
            <li><b>data2</b>: mean=149.616 stdv=9.972</li>
            <li><b>Covariance</b>: 4.834</li>
            <li><b>Pearsons correlation</b>: 0.240</li>
          </ul>


        </div>
      </div>
      In general, with a larger number of data points, the correlation calculation
      would be more reliable and closer to the true underlying relationship. With a
      smaller number of data points, the calculated correlation might be less
      representative and could vary more due to random fluctuations. The difference
      between each case is the strength of the tendency for the variables to vary
      together. ## Linear Regression
      <div style={{ display: "flex" }}>
        <div style={{ flex: "50%", padding: 10 }}>
          <img src={require('../../data/machine-learning/linear_regression.png')} alt="linear_regresion.png" />
        </div>
        <div style={{ flex: "50%", padding: 10 }}>
          As you change the value to predict the speed (the argument passed to
          myfunc), you are essentially trying to estimate the y-value on the
          regression line for a different x-value. This can be useful in making
          predictions based on the observed relationship between the variables. You
          can experiment with different x-values to see how the predicted y-values
          change, providing insights into the behavior of the linear regression
          model for this particular dataset.
        </div>
      </div>
      <p>
        The following table are shows the predictions in different times of the day:
      </p>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "right" }}>X</th>
            <th style={{ textAlign: "center" }}>Predicted Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: "right" }}>6.0</td>
            <td style={{ textAlign: "center" }}>92.598234</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>17.0</td>
            <td style={{ textAlign: "center" }}>73.33406917</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>9.0</td>
            <td style={{ textAlign: "center" }}>87.34437086</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>0.0</td>
            <td style={{ textAlign: "center" }}>103.10596026</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>6.0</td>
            <td style={{ textAlign: "center" }}>92.598234</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>11.0</td>
            <td style={{ textAlign: "center" }}>83.84179544</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>6.0</td>
            <td style={{ textAlign: "center" }}>92.598234</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>7.0</td>
            <td style={{ textAlign: "center" }}>90.84694628</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>14.0</td>
            <td style={{ textAlign: "center" }}>78.5879323</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>2.0</td>
            <td style={{ textAlign: "center" }}>99.60338484</td>
          </tr>
        </tbody>
      </table>
      <h2 id="multiple-linear-regression">Multiple Linear Regression</h2>
      <p>
        The coefficients of the linear regression model are the values that
        determine the relationship between the independent variables and the
        dependent variable. In this case, the coefficients are:
      </p>
      <ul>
        <li>
          <strong>Weight coefficient</strong>: 0.00755095
        </li>
        <li>
          <strong>Volume coefficient</strong>: 0.00780526
        </li>
      </ul>
      <p>
        This means that for every <strong>1kg</strong> increase in weight, the CO2
        emission is expected to increase by <strong>0.00755095g</strong>. For every{" "}
        <strong>1cm3</strong> increase in volume, the CO2 emission is expected to
        increase by <strong>0.00780526g</strong>.
      </p>
      <p>
        If you change the values of the independent variables, the predicted CO2
        emission will change accordingly. For example, if you change the weight from{" "}
        <strong>2300kg</strong> to <strong>3300kg</strong>, the predicted CO2
        emission will increase from <strong>107.2087328g</strong> to{" "}
        <strong>124.7182781g</strong>.
      </p>
      <p>
        This is because the linear regression model assumes that the relationship
        between the independent variables and the dependent variable is linear. In
        other words, the model assumes that the change in the dependent variable is
        directly proportional to the change in the independent variables.
      </p>
      <p>
        The following table shows the predicted CO2 emissions for different
        combinations of weight and volume:
      </p>
      <table>
        <thead>
          <tr>
            <th>Weight (kg)</th>
            <th>Volume (cm3)</th>
            <th>Predicted CO2 emission (g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2300</td>
            <td>1300</td>
            <td>107.2087328</td>
          </tr>
          <tr>
            <td>3300</td>
            <td>1300</td>
            <td>114.75968007</td>
          </tr>
          <tr>
            <td>2300</td>
            <td>1500</td>
            <td>108.7697843</td>
          </tr>
          <tr>
            <td>3300</td>
            <td>1500</td>
            <td>116.32073157</td>
          </tr>
          <tr>
            <td>2000</td>
            <td>1000</td>
            <td>102.60187136</td>
          </tr>
        </tbody>
      </table>
      <h2 id="polynomial-regression">Polynomial Regression</h2>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "50%", padding: 10 }}>
          <img src={require('../../data/machine-learning/polynomial_regression.png')} alt="polynomial_regression.png" />
        </div>
        <div style={{ flex: "50%", padding: 10 }}>
          The code uses polynomial regression to model the relationship between the
          time of day (represented by 'x') and the speed of cars passing a tollbooth
          (represented by 'y'). It visualizes the data with a scatter plot and a
          cubic polynomial curve. The R-squared score is then calculated to assess
          the goodness of fit of the model.
        </div>
      </div>
      <p>
        The degree of the polynomial is an important parameter in polynomial
        regression. A higher degree polynomial will be able to fit more complex
        relationships between the independent and dependent variables. However, a
        higher degree polynomial is also more likely to overfit the data.
        Overfitting occurs when the model learns the training data too well and is
        unable to generalize to new data.
      </p>
      <p>
        The following table are shows the predictions in different times of the day:
      </p>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "right" }}>X</th>
            <th style={{ textAlign: "center" }}>Predicted Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: "right" }}>18.0</td>
            <td style={{ textAlign: "center" }}>92.4867375</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>20.0</td>
            <td style={{ textAlign: "center" }}>97.76768833</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>13.0</td>
            <td style={{ textAlign: "center" }}>72.17820742</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>17.0</td>
            <td style={{ textAlign: "center" }}>88.8733127</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>14.0</td>
            <td style={{ textAlign: "center" }}>76.32434409</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>17.0</td>
            <td style={{ textAlign: "center" }}>88.8733127</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>21.0</td>
            <td style={{ textAlign: "center" }}>99.07136381</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>1.0</td>
            <td style={{ textAlign: "center" }}>99.54274393</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>13.0</td>
            <td style={{ textAlign: "center" }}>72.17820742</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>14.0</td>
            <td style={{ textAlign: "center" }}>76.32434409</td>
          </tr>
        </tbody>
      </table>

      <>
      <h1 id="clustering">Clustering</h1>
      <p>
        Clustering, a pivotal concept in machine learning, involves the
        categorization of data points into groups based on their inherent
        similarities. The ability to effectively cluster data is crucial for
        uncovering patterns, making predictions, and gaining valuable insights. One
        powerful tool in this endeavor is the Jaccard Coefficient, renowned for
        measuring the similarity between sets. Unlike traditional metrics, Jaccard
        excels in scenarios where the focus is on the intersection of elements
        rather than their absolute values, making it particularly well-suited for
        analyzing categorical data.
      </p>
      <p>
        In this exercise, we harnessed the power of Jaccard Coefficient to analyze
        pathological test results for individuals named Jack, Mary, and Jim, we
        aimed to quantify the similarity between their health profiles. For this we
        need to also consider that there are values that are represented differently
        in the table but for our purposes, they are the same. Specifically A and N
        are equals, for our symmetric table, these will be both <strong>0</strong>.
        As for the Y and P values, these are both going to have the value of{" "}
        <strong>1</strong>.
      </p>
      <p>
        <strong>Original Table</strong>:
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Fever</th>
            <th>Cough</th>
            <th>Test-1</th>
            <th>Test-2</th>
            <th>Test-3</th>
            <th>Test-4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jack</td>
            <td>M</td>
            <td>Y</td>
            <td>N</td>
            <td>P</td>
            <td>N</td>
            <td>N</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>F</td>
            <td>Y</td>
            <td>N</td>
            <td>P</td>
            <td>A</td>
            <td>P</td>
            <td>N</td>
          </tr>
          <tr>
            <td>Jim</td>
            <td>M</td>
            <td>Y</td>
            <td>P</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Symmetric Table</strong>:
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Fever</th>
            <th>Cough</th>
            <th>Test-1</th>
            <th>Test-2</th>
            <th>Test-3</th>
            <th>Test-4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jack</td>
            <td>M</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>F</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Jim</td>
            <td>M</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <p>The Jaccard coefficients for the three pairs are as follows:</p>
      <ul>
        <li>(Jack, Mary) = 0.6666666666666666</li>
        <li>(Jack, Jim) = 0.3333333333333333</li>
        <li>(Jim, Mary) = 0.25</li>
      </ul>
      <p>
        These values were the result of running the following code to compute
        Jaccard's coefficient:
      </p>
      <pre>
        <code>
          {"\n"}jack = <span className="hljs-built_in">set</span>([
          <span className="hljs-string">'Fever'</span>,{" "}
          <span className="hljs-string">'Test-1'</span>]){"\n"}mary ={" "}
          <span className="hljs-built_in">set</span>([
          <span className="hljs-string">'Fever'</span>,{" "}
          <span className="hljs-string">'Test-1'</span>,{" "}
          <span className="hljs-string">'Test-3'</span>]){"\n"}jim ={" "}
          <span className="hljs-built_in">set</span>([
          <span className="hljs-string">'Fever'</span>,{" "}
          <span className="hljs-string">'Cough'</span>]){"\n"}
          {"\n"}def get_jaccard_coefficient(s1, s2):{"\n"}
          {"  "}intersection = s1.intersection(s2){"\n"}
          {"  "}
          <span className="hljs-built_in">union</span> = s1.
          <span className="hljs-built_in">union</span>(s2){"\n"}
          {"  "}
          <span className="hljs-literal">return</span>{" "}
          <span className="hljs-built_in">len</span>(intersection) /{" "}
          <span className="hljs-built_in">len</span>(
          <span className="hljs-built_in">union</span>){"\n"}
          {"\n"}jack_mary = get_jaccard_coefficient(jack, mary){"\n"}jack_jim =
          get_jaccard_coefficient(jack, jim){"\n"}jim_mary =
          get_jaccard_coefficient(jim, mary){"\n"}
          {"\n"}print(<span className="hljs-string">' (Jack, Mary):'</span> ,
          jack_mary){"\n"}print(<span className="hljs-string">' (Jack, Jim):'</span>{" "}
          , jack_jim){"\n"}print(
          <span className="hljs-string">' (Jim, Mary):'</span> , jim_mary){"\n"}
        </code>
      </pre>
      <h2 id="clustering-with-python-group-project-">
        Clustering with Python (Group Project)
      </h2>
      <p>
        For this assignment we were a team of 3. This reports aimed to make an
        analysis of the <strong>AB_NYC_2019</strong> dataset, which contains a lot
        of information encompassing listing activities and metrics for the year
        2019. The report should get key insights that will not only address a
        substantive issue for Airbnb but also pave the way for strategic
        decision-making. As we navigate through the tasks of posing a compelling
        business analytic question, conducting in-depth data analysis, and crafting
        a concise yet informative analytical report, the goal is to provide the
        executive board members of Airbnb with actionable intelligence derived from
        the nuances of the dataset.
      </p>
      <p>
        This report aims to forecast Airbnb listing prices in New York City and
        identify the key factors that influence pricing. A comprehensive analytical
        approach was employed, merging quantitative and qualitative data analysis
        (DA). The key findings are as follows:
      </p>
      <ul>
        <li>
          Location, room type, availability, and minimum nights are the primary
          determinants of price.
        </li>
        <li>
          The duration a listing stays on the platform may also be relevant in
          determining pricing.
        </li>
        <li>
          A prediction accuracy of approximately 60% was achieved using a quantile
          pricing forecast model.
        </li>
        <li>
          Geographic price dispersion is evident, with desirable locations
          commanding higher prices, limited availability, and more reviews.
        </li>
        <li>
          Multivariate Regression with clustering is effective to assess variable
          effects on price but explains only a fraction of the variance.
        </li>
        <li>
          Non-linear models perform better, yet Generalised Linear Models (GLM)
          yield low coefficients, and Gaussian Distribution occasionally produces
          unlikely results.
        </li>
      </ul>
      <p>Clustering was relevant in this report in two ways:</p>
      <ol>
        <li>
          <strong>Identifying geographical price dispersion</strong>: Clustering was
          used to group Airbnb listings into clusters with similar price patterns.
          This revealed that there is significant geographical price dispersion,
          with desirable locations commanding higher prices, limited availability,
          and more reviews. This information can be used by Airbnb to develop more
          targeted pricing strategies and by hosts to make more informed decisions
          about their pricing.
        </li>
        <li>
          <strong>Assessing variable effects on price</strong>: Clustering was also
          used to group Airbnb listings into clusters with similar characteristics.
          This allowed the researchers to assess the impact of different variables
          on price within each cluster. For example, they found that the impact of
          amenities on price varies depending on the location of the listing. This
          information can be used by Airbnb to develop more sophisticated pricing
          algorithms and by hosts to optimize their listings for specific markets.
        </li>
      </ol>
      <p>
        In this assignment, one of the findings that I found interesting and
        suggested including in the report is correlating the average minimum stay
        duration by neighborhood group and then by room type. This could help answer
        the question of the average price per room type and neighborhood group,
        while also analyzing the average minimum days the rooms tend to have in
        these neighborhood groups.
      </p>
      <p>
        <img src={require('../../data/machine-learning/correlation_room_type.jpg')} alt="correlation_room_type" />
      </p>
      <p>
        <strong>Recommendations</strong>:
      </p>
      <ul>
        <li>
          Improve price predictability by augmenting the dataset with additional and
          diverse variables such as property size, amenities, and age.
        </li>
        <li>
          Once price predictability improves, multivariate models can forecast
          variable impacts in specific clusters, benefiting hosts with
          revenue-boosting recommendations and increasing Airbnb's commissions.
        </li>
        <li>
          Develop sophisticated analytical tools to offer real-time, data-driven
          pricing recommendations to hosts, thereby elevating both profitability and
          stakeholder satisfaction.
        </li>
      </ul>
      <p>
        <strong>Team Meetings</strong>:
      </p>
      <ul>
        <li>
          <p>
            <strong>Team Structure and Meetings</strong>: The team adopted a
            structured weekly meeting schedule to discuss the assignment's progress.
            Each team member initially took an individual approach, creating their
            own implementations and generating ideas for measurement.
          </p>
        </li>
        <li>
          <p>
            <strong>Individual Contributions</strong>: Team members took the
            initiative to independently work on the assignment, bringing diverse
            perspectives and ideas to the table.
          </p>
        </li>
        <li>
          <p>
            <strong>Collaborative Discussions</strong>: The weekly meetings
            facilitated collaborative discussions, allowing team members to share
            thoughts, ideas, and rationales behind specific measurements. This
            ensured a comprehensive understanding of the assignment and its
            relevance to Airbnb as a company.
          </p>
        </li>
        <li>
          <p>
            <strong>Final Problem Definition</strong>: Through collaborative
            discussions, the team collectively decided on the final problem to
            solve, honing in on the price study aspect.
          </p>
        </li>
        <li>
          <p>
            <strong>Data Exploration</strong>: The team engaged in hands-on data
            exploration, actively working with the dataset until meaningful insights
            emerged. This iterative process allowed for a deeper understanding of
            the data and the identification of useful findings.
          </p>
        </li>
      </ul>
      <p>
        The team maintained a productive pace throughout the meeting, which resulted
        in a fruitful outcome and a strong sense of synergy.
      </p>
      <p>
        <a href={require('../../data/machine-learning/clustering/peer_report_code.ipynb')}
           download={'peer_report_code.ipynb'}>
          Link to the peer report code
        </a>
      </p>
      <p>
        <a 
        href={require('../../data/machine-learning/clustering/group3_report.docx')}
           download={'group3_report.ipynb'} >Written Report
           </a>
      </p>
    </>
    <>
      <h1 id="artificial-neural-networks-anns-">
        Artificial Neural Networks (ANNs)
      </h1>
      <p>
        Artificial neural networks (ANNs) are a type of machine learning algorithm
        that are inspired by the structure and function of the human brain. ANNs are
        made up of interconnected nodes, called neurons, which process information
        and communicate with each other. ANNs can be trained to perform a wide
        variety of tasks, including image recognition, natural language processing,
        and machine translation.
      </p>
      <p>
        In this unit, we worked on exercises where we simulated logical operators
        with perceptrons. Perceptrons are simple computational units that can be
        used to implement a variety of logical functions.
      </p>
      <h2 id="simple-perceptron">Simple Perceptron</h2>
      <p>
        A perceptron is a simple type of artificial neuron that can be used to
        perform linear classification tasks. It takes a set of inputs and produces a
        single output, which is determined by a weighted sum of the inputs and a
        threshold function. This code implements a simple perceptron with two inputs
        and one output.
      </p>
      <p>
        <strong>How changes in the variables affect the outcomes</strong>
        The output of the perceptron will change as we experiment changing the
        values of the weights and the threshold.
      </p>
      <ul>
        <li>
          <strong>Weights:</strong> If we increase the value of a weight, then the
          output of the perceptron will be more sensitive to changes in the
          corresponding input.
        </li>
        <li>
          <strong>Threshold:</strong> If we increase the threshold value, then the
          output of the perceptron will be more likely to be 0.
        </li>
      </ul>
      <h3 id="examples">Examples</h3>
      <p>
        Here are some examples of how the output of the perceptron would change as
        the values of the weights and the threshold changes:
      </p>
      <ul>
        <li>
          <p>
            <strong>Example 1:</strong> Let's say we have a perceptron with the
            following weights: <code>[0.5, 0.5]</code>
          </p>
          <p>
            {" "}
            This perceptron will be more sensitive to changes in both inputs
            equally. If we input the following values:
          </p>
          <p>
            {" "}
            <code>inputs = [4, 5]</code>
          </p>
          <p>
            {" "}
            The output of the perceptron will be <code>1</code>. This is because the
            weighted sum of the inputs is greater than or equal to the threshold
            value of <code>0</code>.
          </p>
        </li>
        <li>
          <p>
            <strong>Example 2:</strong> Now, let's say we increase the value of the
            first weight to <strong>1</strong> <code>[1, 0.5]</code>:
          </p>
          <p>
            {" "}
            This perceptron will now be more sensitive to changes in the first
            input. If we input the same values as before:
          </p>
          <p>
            {" "}
            <code>inputs = [4, 5]</code>
          </p>
          <p>
            {" "}
            The output of the perceptron will now be <code>1</code>.
          </p>
          <p>
            {" "}
            This is because the weighted sum of the inputs is now greater than or
            equal to the threshold value of 0, even though the second input has a
            lower weight.
          </p>
        </li>
        <li>
          <p>
            <strong>Example 3:</strong> Now, let's reduce the value of the first
            input to <strong>2</strong>:
          </p>
          <p>
            {" "}
            <code>inputs = [2, 5]</code>
          </p>
          <p>
            {" "}
            The weighted sum of the inputs is now less than the threshold value of{" "}
            <strong>0</strong>, even though the weights have not changed. Therefore,
            the output of the perceptron will now be <strong>0</strong>.
          </p>
        </li>
      </ul>
      <h3 id="conclusion">Conclusion</h3>
      <p>
        Perceptrons are a simple but powerful tool for performing linear
        classification tasks. By adjusting the weights and the threshold, we can
        train a perceptron to perform a variety of tasks, such as classifying data
        points into two different categories or predicting whether a data point
        belongs to a particular class.
      </p>
      <h2 id="perceptron-and-operator">Perceptron AND Operator</h2>
      <p>
        The provided Python code implements a simple perceptron, a fundamental unit
        in neural networks. The primary goal of the code is to train the perceptron
        to perform the logical <strong>AND</strong> operation on binary inputs. The
        perceptron is trained iteratively using a training loop, adjusting its
        weights based on the error in predictions until the total error becomes
        zero.
      </p>
      <p>
        We could easily do the same for the other logical operators, such as an{" "}
        <strong>OR</strong> operator. We would only need to update the output
        variable to <code>[0, 1, 1, 1]</code>.
      </p>
      <p>
        We could also update the <code>learning_rate</code> variable, this parameter
        controls how quickly the perceptron model updates its weights. A higher
        learning rate will cause the model to update its weights more quickly, while
        a lower learning rate will cause the model to update its weights more
        slowly.
      </p>
      <p>
        If you increase the learning rate, the model will learn the training data
        more quickly. However, there is a risk that the model will overshoot the
        optimal solution, which can lead to poor performance on new data.
      </p>
      <p>
        If you decrease the learning rate, the model will learn the training data
        more slowly. However, there is a risk that the model will get stuck in a
        local minimum, which can also lead to poor performance on new data.
      </p>
      <h2 id="multilayered-perceptron">Multilayered Perceptron</h2>
      <p>
        <strong>Multilayer perceptron (MLP)</strong>, also known as a feedforward
        neural network, is a type of artificial neural network (ANN) that consists
        of a set of interconnected neurons organized in layers. Each neuron in a
        layer is connected to all of the neurons in the next layer, and the weights
        of these connections are what the network learns during training. MLP's are
        typically used for supervised learning tasks, such as classification and
        regression. MLP's are able to learn complex relationships between the input
        and output data, even if those relationships are non-linear.{" "}
      </p>
      <p>
        This code implements a simple feedforward neural network in Python. It takes
        input data and predicts an output. The neural network is trained using a
        process called backpropagation, which updates the weights of the neural
        network to minimize the error between the predicted output and the desired
        output.
      </p>
        <b>Updating variables:</b>
      <ul>  
        <li>
          <b>epochs</b>: Increasing the number of epochs allows the neural
          network to train more thoroughly, which can lead to better performance.
          However, it also increases the training time.
        </li>
        <li>
          <b>learning_rate</b>: Increasing the learning rate causes the neural
          network to update its weights more quickly, which can lead to faster
          training. However, it can also make the neural network more likely to
          overfit the training data.
        </li>
        <li>
          <b>weights_0</b>: Changing the weights of the input layer affects
          the way that the neural network processes the input data, which can lead
          to changes in performance.
        </li>
        <li>
          <b>weights_1</b>: Changing the weights of the output layer affects
          the way that the neural network produces its output, which can lead to
          changes in performance.
        </li>
      </ul>
      <h3 id="references">References</h3>
      <p>
        McCulloch, W. S., &amp; Pitts, W. (1943). A logical calculus of the ideas
        immanent in nervous activity. The Bulletin of Mathematical Biophysics, 5(4),
        115-133.
      </p>
      <p>
        Singh, J., &amp; Banerjee, R. (2019). A study on single and multi-layer
        perceptron neural network. In 2019 3rd International Conference on Computing
        Methodologies and Communication (ICCMC)
      </p>
      <h2 id="gradient-cost-function">Gradient Cost Function</h2>
      <p>
        The Mayo, 2017 article discusses the use of gradient descent to train a
        linear regression model. Gradient descent is an algorithm that iteratively
        updates the parameters of a model to minimize the cost function. The cost
        function is a measure of how well the model fits the data.
      </p>
      <p>
        The article also discusses the importance of choosing the right learning
        rate. The learning rate controls how big of a step to take in the direction
        of the gradient. If the learning rate is too high, the algorithm may
        overshoot the minimum of the cost function. If the learning rate is too low,
        the algorithm may take a long time to converge to the minimum.
      </p>
      <p>
        Adjusting the iteration and learning rate values can have a significant
        impact on the performance of gradient descent.
      </p>
      <ul>
        <li>
          <p>
            <strong>Iterations</strong>: More iterations give the algorithm more
            tries to find the best outcome. Yet, doing too many iterations can cause
            problems like overfitting or using too much computing power.
          </p>
        </li>
        <li>
          <p>
            <strong>Learning Rate</strong>: A higher learning rate means the
            algorithm takes bigger steps in figuring out the best values. This can
            make things faster, but if the rate is too high, the algorithm might
            miss the best result and not work well.
          </p>
        </li>
      </ul>
      <h1 id="convolutional-neural-networks-cnn-">
        Convolutional Neural Networks (CNN)
      </h1>
      <p>
        Convolutional neural networks, or CNNs, are a class of deep neural networks
        commonly used in image and video analysis. They're designed to automatically
        and adaptively learn spatial hierarchies of features from input data. The
        key innovation lies in their ability to capture local patterns through
        convolutional layers, making them particularly effective for tasks like
        image recognition and classification.
      </p>
      <h2 id="exercise">Exercise</h2>
      <p>
        To see how Convolutional Neural Networks works we did an exercise where we
        use CNN to classify images from the CIFAR-10 dataset. These were the steps
        followed:
      </p>
      <ol>
        <li>
          <p>
            <strong>Preprocessing</strong>: The first step is to load and preprocess
            the data. This involves normalizing the images and converting the class
            labels to one-hot vectors. The pixel values of the images are normalized
            to the range [0, 1].
          </p>
        </li>
        <li>
          <p>
            <strong>Building the model</strong>: The next step is to build the CNN
            model. The model consists of several convolutional layers, followed by
            max pooling layers and fully connected layers. The convolutional layers
            learn to extract features from the images, while the max pooling layers
            reduce the size of the feature maps. The fully connected layers learn to
            classify the feature maps into the different classes.
          </p>
        </li>
        <li>
          <p>
            <strong>Training the model</strong>: The model is trained on the
            preprocessed dataset using the Adam optimizer and the categorical
            crossentropy loss function. Early stopping is implemented to stop
            training if there is no improvement in validation loss after a certain
            number of epochs.
          </p>
        </li>
        <li>
          <p>
            <strong>Evaluating the model</strong>: Once the model is trained, it is
            evaluated on a held-out test set. The accuracy of the model is
            calculated as the percentage of images that are correctly classified. In
            this case, the model had an accuracy of around 66%.
          </p>
        </li>
      </ol>
      <p>
        <strong>Prediction</strong>
      </p>
      <p>
        To make a prediction, the model is given an image as input. The model then
        extracts features from the image and classifies the feature maps into the
        different classes. The class with the highest probability is predicted to be
        the class of the image.
      </p>
      <p>
        <strong>Results</strong>
      </p>
      <p>
        To show the model in action, we iterated over the first <strong>15</strong>{" "}
        images in the test set to see what we would have as a result. Here is a
        table showing the predictions of the model for the first <strong>15</strong>{" "}
        images in the test set:
      </p>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>Predicted Class</th>
            <th>Actual Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>cat</td>
            <td>cat</td>
          </tr>
          <tr>
            <td>1</td>
            <td>ship</td>
            <td>ship</td>
          </tr>
          <tr>
            <td>2</td>
            <td>automobile</td>
            <td>ship</td>
          </tr>
          <tr>
            <td>3</td>
            <td>airplane</td>
            <td>airplane</td>
          </tr>
          <tr>
            <td>4</td>
            <td>deer</td>
            <td>frog</td>
          </tr>
          <tr>
            <td>5</td>
            <td>frog</td>
            <td>frog</td>
          </tr>
          <tr>
            <td>6</td>
            <td>cat</td>
            <td>automobile</td>
          </tr>
          <tr>
            <td>7</td>
            <td>frog</td>
            <td>frog</td>
          </tr>
          <tr>
            <td>8</td>
            <td>cat</td>
            <td>cat</td>
          </tr>
          <tr>
            <td>9</td>
            <td>automobile</td>
            <td>automobile</td>
          </tr>
          <tr>
            <td>10</td>
            <td>dog</td>
            <td>airplane</td>
          </tr>
          <tr>
            <td>11</td>
            <td>truck</td>
            <td>truck</td>
          </tr>
          <tr>
            <td>12</td>
            <td>cat</td>
            <td>dog</td>
          </tr>
          <tr>
            <td>13</td>
            <td>horse</td>
            <td>horse</td>
          </tr>
          <tr>
            <td>14</td>
            <td>truck</td>
            <td>truck</td>
          </tr>
        </tbody>
      </table>
    </>
    <>
      <p>
        There are a couple of misclassifications, like predicting{" "}
        <code>automobile</code> instead of <code>ship</code> for{" "}
        <strong>Image 2</strong>, and predicting <code>cat</code> instead of{" "}
        <code>automobile</code> for <strong>Image 6</strong>. But overall, it's
        getting many of them right. These discrepancies could be due to the
        complexity of the dataset or the need for further tuning of the model. It
        might be worth experimenting with different architectures, hyperparameters,
        or increasing the dataset size to see if performance can be improved.
      </p>
      <h1 id="model-performance-measurement">Model Performance Measurement</h1>
      <p>
        Model performance measurement is the process of evaluating the performance
        of a machine learning model on a given task. It is important for machine
        learning and artificial neural networks because it allows us to:
      </p>
      <ul>
        <li>
          <strong>Identify and fix problems with our models</strong>: By evaluating
          the performance of our models, we can identify areas where they are not
          performing well and make changes to improve them.
        </li>
        <li>
          <strong>Compare different models</strong>: If we are considering using
          multiple models for a given task, we can use performance metrics to
          compare them and choose the model that performs the best.
        </li>
        <li>
          <strong>Set expectations for our models</strong>: By understanding the
          performance of our models, we can set realistic expectations for what they
          can and cannot do.
        </li>
      </ul>
      <p>
        There are a variety of different performance metrics that can be used for
        machine learning and artificial neural networks. The specific metrics that
        are used will depend on the type of task and the type of model. For example,
        classification tasks typically use metrics such as accuracy, precision,
        recall, and F1 score. Regression tasks typically use metrics such as mean
        squared error (MSE), mean absolute error (MAE), and R-squared.
      </p>
      <p>
        For this unit, the exercise is to used the script provided to calculate the
        performance of a machine learning model on a classification task using the
        following metrics: accuracy, precision, recall, and F1 score. Then we will
        change different parameters and observe its impact on AUC and R2 error.
      </p>
      <h2 id="auc">AUC</h2>
      <p>
        The AUC score is a measure of how well a classifier can distinguish between
        positive and negative cases. It is calculated by plotting the receiver
        operating characteristic (ROC) curve and calculating the area under the
        curve.
      </p>
      <p>The following parameters have a significant impact on AUC:</p>
      <ul>
        <li>
          <strong>Choice of classifier</strong>: Some classifiers are better suited
          for certain types of data than others. For example, support vector
          machines (SVMs) are often used for high-dimensional data with a few
          features, while logistic regression is often used for lower-dimensional
          data with more features.
        </li>
        <li>
          <strong>Hyperparameter tuning</strong>: Hyperparameters are parameters
          that control the learning process of a classifier. For example, the
          regularization parameter in SVMs controls how much the model should
          penalize complexity. Hyperparameter tuning can be done manually or using a
          grid search or random search algorithm.
        </li>
        <li>
          <strong>Feature selection</strong>: Feature selection is the process of
          identifying and selecting the most important features for a given task.
          This can improve the performance of a classifier by reducing the amount of
          noise in the data.
        </li>
      </ul>
      <h2 id="r2-error">R2 error</h2>
      <p>
        The R2 error is a measure of how well a regression model explains the
        variation in the data. It is calculated by taking the one minus the
        proportion of the variance in the data that is unexplained by the model.
      </p>
      <p>The following parameters have a significant impact on R2 error:</p>
      <ul>
        <li>
          <strong>Choice of model</strong>: Some regression models are better suited
          for certain types of data than others. For example, linear regression is
          often used for linear data, while polynomial regression is often used for
          non-linear data.
        </li>
        <li>
          <strong>Hyperparameter tuning</strong>: Hyperparameters are parameters
          that control the learning process of a regression model. For example, the
          learning rate in stochastic gradient descent controls how quickly the
          model updates its parameters. Hyperparameter tuning can be done manually
          or using a grid search or random search algorithm.
        </li>
        <li>
          <strong>Data preprocessing</strong>: Data preprocessing can improve the
          performance of a regression model by reducing the amount of noise in the
          data. For example, normalizing the data can improve the performance of
          models that are sensitive to the scale of the features.
        </li>
      </ul>
      <h2 id="references">References</h2>
      <p>
        Panesar, A. (2020). Evaluating Machine Learning Models. Apress eBooks,
        pp.189–205.{" "}
        <a href="https://doi.org/10.1007/978-1-4842-6537-6_7">
          https://doi.org/10.1007/978-1-4842-6537-6_7
        </a>
      </p>
      <p>
        ‌Ghosh, Samadrita. “The Ultimate Guide to Evaluation and Selection of Models
        in Machine Learning.” Neptune.ai, 21 July 2022,{" "}
        <a href="https://neptune.ai/blog/ml-model-evaluation-and-selection">
          https://neptune.ai/blog/ml-model-evaluation-and-selection
        </a>
      </p>
      <h1 id="legal-and-ethical-views-on-ann-applications-discussion-forum-">
        Legal and Ethical Views on ANN Applications (Discussion Forum)
      </h1>
      <p>
        As we explore the landscape of AI authors, the discussion focuses on the
        transformative potential and inherent risks in various fields. My first post
        highlighted the versatility of artificial neural network (ANN)-powered AI
        authors, from administrative tasks to creative endeavors, while
        acknowledging the risks of inaccuracies and biases. Referring to Hutson
        (2021) and other scholarly works, I emphasized the need for responsible use
        and careful content control.
      </p>
      <p>
        Ruth's contribution moved the discussion into the educational space and
        highlighted the growing use of AI tools by students. Her insights shed light
        on concerns about academic integrity, legal issues surrounding intellectual
        property, and the broader impact on employment, citing the Hollywood
        writers' strike as a pertinent example.
      </p>
      <p>
        Tasweem further added further depth to the discussion by delving into
        existential questions about AI-generated content, particularly its potential
        impact on human creativity and uniqueness. Based on references such as Hu
        (2020) and UNESCO (2021), the convergence of ideas underscores the need for
        a fine balance between the usefulness of AI authors and the preservation of
        authenticity, especially in educational settings. The digitization of
        education, as UNESCO (2021) points out, brings both potential benefits and
        cultural-ethical challenges that require a different approach.
      </p>
      <p>
        When navigating the evolving landscape of AI authors, it is clear that
        constant dialogue and reflection are necessary. As we move forward, the
        lessons learned from this forum will lead to a thoughtful consideration of
        the risks and benefits of integrating AI in various professional and
        creative fields.
      </p>
      <p>
        <a href="https://www.my-course.co.uk/mod/forum/discuss.php?d=192423">
          Link to the discussion forum
        </a>
      </p>
      <p>
        <a href="https://www.my-course.co.uk/mod/forum/discuss.php?d=193663">
          Summary post
        </a>
      </p>
      <h2 id="references">References</h2>
      <p>Hutson, M. (2021). Robo-writers. Nature, 590(7846).</p>
      <p>
        Purington, A., Taft, J., Sannon, S., &amp; Scheutz, M. (2017). ' I know you
        didn't write that' : Identifying and detecting machine-generated creative
        text. In Proceedings of the 2017 ACM Conference on Computer Supported
        Cooperative Work and Social Computing.
      </p>
      <p>
        Brembs, B. (2020). Artificial intelligence in education: Promises and
        perils. Nature Reviews Education.
      </p>
      <p>
        Hu, 2020. ' Bias in Generative AI Models' , AI Ethics Journal, vol. 12, no.
        3, pp. 45-56.
      </p>
      <p>
        UNESCO, 2021. The Digital Transformation of Education: An Overview, UNESCO
        Publishing, Paris.
      </p>
      <p>
        Pedersen and Duin, 2022. ' The Rise of AI Teachers in Modern Education' ,
        Educational Technology Review, vol. 29, no. 2, pp. 89-104.
      </p>
      <p>
        Beckett, L. (May 26, 2023) ‘Those who hate AI are insecure’: inside
        Hollywood’s battle over artificial intelligence. The Guardian. Available
        from:{" "}
        <a href="https://www.theguardian.com/us-news/2023/may/26/hollywood-writers-strike-artificial-intelligence">
          https://www.theguardian.com/us-news/2023/may/26/hollywood-writers-strike-artificial-intelligence
        </a>
      </p>
      <p>
        Cotton, D., Cotton, P., Reuben Shipway, J. (2023) Chatting and cheating:
        Ensuring academic integrity in the era of ChatGPT Innovations in Teaching
        International. DOI:{" "}
        <a href="https://doi.org/10.1080/14703297.2023.2190148">
          https://doi.org/10.1080/14703297.2023.2190148
        </a>
      </p>
      <h1 id="final-submission-group-project-">Final Submission (Group Project)</h1>
      <p>
        For this assignment we were a team of 3. This assignment focuses on building
        a neural network model for image recognition using the CIFAR-10 dataset. The
        CIFAR-10 dataset contains 60,000 images of 10 different object classes, and
        is a popular benchmark for evaluating object recognition algorithms.
      </p>
      <p>
        In this report we discuss the key aspects of deep learning model
        development, including data preparation, model architecture, training
        paradigms, and evaluation metrics. We also reflect on the ethical
        implications of image recognition technology.
      </p>
      <p>
        We began by preparing the CIFAR-10 dataset, normalizing the pixel values and
        augmenting the data to increase its diversity. Then, we designed and trained
        a convolutional neural network (CNN) model to classify the images. We used
        the Adam optimizer and early stopping to ensure that the model trained
        efficiently and avoided overfitting.
      </p>
      <p>
        Something that I brought to the group was the idea of doubling the number of
        filters as the network goes deeper. This is a common practice in
        convolutional neural networks, as it allows the network to learn more
        complex features as it processes the inputs. Additionally, it can help to
        reduce overfitting, as it forces the network to rely on more abstract
        features.
      </p>
      <p>
        Our model achieved an overall accuracy of around 90% on the CIFAR-10
        dataset, with some classes, such as ' Ship' and ' Automobile' , performing
        particularly well. However, we also identified some areas where the model
        could be improved, such as its recall score for the ' Cat' class.
      </p>
      <p>
        We gained valuable insights from our exploration of deep learning with
        CIFAR-10. We learned that data preprocessing is essential for image
        classification tasks, and that CNNs are a powerful tool for this task. We
        also learned about the importance of balancing precision and recall, and the
        need to carefully select optimization methods and training paradigms.
      </p>
      <p>
        <strong>Team Meetings</strong>:
      </p>
      <ul>
        <li>
          <p>
            <strong>Team Structure and Meetings</strong>: The team maintained the
            weekly meeting schedule from the previous project to discuss the
            assignment's progress.
          </p>
        </li>
        <li>
          <p>
            <strong>Individual Contributions</strong>: We adopted the same approach
            as last time, where each team member generated an initial simple
            solution to the problem at hand. This method allowed everyone to engage
            with the subject, become comfortable with Python implementation, and
            brainstorm interesting ideas for us to explore.
          </p>
        </li>
        <li>
          <p>
            <strong>Collaborative Discussions</strong>: Weekly, we conducted reviews
            of individual work, identifying the most accurate models and sharing
            strategies. Discussions on next steps were documented to facilitate the
            synthesis of our findings.
          </p>
        </li>
        <li>
          <p>
            <strong>Final Problem Definition</strong>: We established a final
            deadline for completing our solution, enabling us to compile all
            documentation and prepare for the presentation.
          </p>
        </li>
        <li>
          <p>
            <strong>Team Presentation</strong>: Topics for the final presentation
            video were assigned, and each team member prepared their segment. We
            scheduled a recording day to ensure everyone felt confident and
            satisfied with their presentation.
          </p>
        </li>
      </ul>
      <p>
        <a href={require('../../data/machine-learning/ann/Team_Presentation_Group_3_Transcript.pdf')} download={'Team_Presentation_Group_3_Transcript.pdf'}>
          Link to transcript
        </a>
      </p>
      <p>
        <a 
        href={require('../../data/machine-learning/ann/Team_Presentation_Group_3_Code.ipynb')} download={'Team_Presentation_Group_3_Code.pdf'}
        >
          Link to solution code
        </a>
      </p>
      <h1 id="reflection">Reflection</h1>
      <p>
        This module was really eye-opening for me. I had a general idea of what
        machine learning is and how it was being used, but this module helped me
        understand more in depth not just what machine learning is, but also how it
        is implemented and how everything works on the back end in some of the most
        popular paradigms and algorithms.
      </p>
      <p>
        I found the concept of the 4th Industrial Revolution to be really
        interesting and intriguing. The concerns behind human privacy and safety are
        topics that are always top of mind for me, which is why I decided to talk
        about the Boeing 737 Max incident and its MCAS failure. Improperly regulated
        automated systems can cause devastating and irreparable issues like human
        losses. This is why this topic is so important to me personally.
      </p>
      <p>
        Some concepts such as correlation, regression, and clustering were familiar
        from the past module of Numerical Analysis, but others such as the Jaccard
        Coefficient were new. This meant that I needed to spend more time on them,
        especially in the cases of symmetric values, where the table must be
        converted accordingly. In the end, the easiest way to understand this was to
        code the implementation of a function that computes the Jaccard Coefficient.
      </p>
      <p>
        In our first team project, we had to come up with an interesting report that
        would help Airbnb make interesting business decisions based on their 2019
        listings dataset. Each person in the team tried to find interesting ideas,
        and by listening to their findings in our team meetings, I also learned new
        ways of poking the data to get something useful back. This made the
        experience really pleasant for the most part. In the end, we decided on the
        idea we liked the most and focused on getting the most data we could around
        it.
      </p>
      <p>
        Right after that, we started right away on our next assignment, which was
        the final project based on Artificial Neural Networks, which was the main
        topic of the second half of the module. Concepts like Perceptrons and
        Convolutional Neural Networks were particularly interesting to me,
        especially the fact that this Machine Learning approach is inspired by how
        biological brains work. Being able to play with image processing and image
        recognition was also fun. The team applied the same approach as last time
        and we met weekly to discuss what each of us had found out and whether the
        model was getting more accurate at identifying images and why. A topic that
        was quite challenging for me was the Model Performance Measurement topic. I
        understand that it is important to be able to objectively know what model to
        pick based on data, but the way it is decided based on the AUC and the R2
        Errors is still a little bit unclear to me. This is a topic that I want to
        read more about on my own time.
      </p>
      <p>
        Overall, I enjoyed this module a lot. It encapsulates what I want to learn
        during this course, and being able to have first-hand experiences in
        real-life-like projects makes the journey more interesting and engaging. I
        was provided with valuable opportunities to learn new skills and grow my
        machine learning skills exponentially. It has allowed me to learn new
        aspects of Artificial Intelligence and how to work effectively with a team.
        The skills I’ve gotten from this module are set to be helpful in real-world
        scenarios. In future modules, I plan to apply the learnings from this course
        to avoid making the same mistakes and learn more quickly. I am looking
        forward to what’s to come in the next modules.
      </p>
    </>
        </div>

		</div>;
};

export default ModulePage;
