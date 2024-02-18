# Knowledge Representation and Reasoning

## Learning Outcomes
1. Critique the need for formal approaches to knowledge representation and reasoning.
2. Review critically properties of a knowledge-based system.
3. Appraise critically modelling techniques for knowledge representation and reasoning.
4. Examine and incorporate different modelling approaches to solving KRR problems.

---

KRR is a fascinating subfield of Artificial Intelligence (AI) that delves into the very essence of "thinking" for machines. It's about how information about the world can be encoded in a way that computers can understand and utilize to solve complex problems.

Knowledge Representation it's like creating a dictionary for computers. KRR devises formal languages and structures to capture facts, relationships, and concepts about the world. From simple rules to intricate ontologies, the goal is to build a knowledge base that computers can understand.


## Knowledge Representation: A Historical Analysis and Its Relationship with Reasoning (Forum Discussion 1)

As we were introduced into the realm of knowledge representation and reasoning (KRR), we started a conversation on whether or not KRR is a recent phenomenon and if it only became a topic of discussion with the development of computing technology and the need to represent knowledge in computer systems.

The discussion forum revolves around the historical significance and evolution of Knowledge Representation (KR). The initial post provides a concise overview, tracing KR's journey from ancient civilizations like Sumeria and Egypt to its contemporary applications in AI and knowledge graphs. You emphasize the enduring human drive to understand and represent knowledge, regardless of advanced reasoning capabilities.

Maria's insightful response effectively reinforced the value of structured knowledge beyond reasoning with the indigenous petroglyph example. Their personal experience with OWL grounded the discussion in concrete terms and prompted a deeper exploration of reasoning through the intriguing example of Egyptian hieroglyphics and their deciphering process. While their observation of the "lost knowledge" period sparked my curiosity, exploring the socio-cultural context could enrich my understanding.

This collaborative interaction has highlighted the multifaceted nature of Knowledge Representation, prompting me to delve deeper into the intricate interplay between representation and reasoning. I invite further exploration of this captivating topic, where questions and contributions from diverse perspectives can illuminate new avenues of knowledge.

### Reference
Ancient civilizations and knowledge representation: Brachman, R. J., & Levesque, H. J. (1985). Knowledge representation in five paradigms. AI Magazine, 1(4), 10-30.

Medieval logicians and formal languages: Guarino, N. (1998). Formal ontology in information systems. In N. Guarino (Ed.), Formal ontology in information systems (pp. 3-18). Springer.

AI and expert systems: Russell, S. J., & Norvig, P. (2016). Artificial intelligence: A modern approach. Pearson Education.

Knowledge sharing and discovery: Staab, S., & Studer, R. (Eds.). (2004). Handbook of ontologies (2nd ed.). Springer

Cruz-Uribe, E. (2010) The Death of Demotic Redux*: Pilgrimage, Nubia and the Preservation of Egyptian Culture.

DeBellis, M. (2021) A Practical Guide to Building OWL Ontologies Using Protégé 5.5 and Plugins. Available from: https://www.researchgate.net/publication/351037551_A_Practical_Guide_to_Building_OWL_Ontologies_Using_Protege_55_and_Plugins [Accessed 15 December 2023].

Loprieno, A. and Müller, M. (2012) Ancient Egyptian and Coptic, in The Afroasiatic Languages. Cambridge University Press 102–144.

Malik, N., Hijam, D. & Sharan, A. (2021) Ontology based knowledge representation: Case study from agriculture domain, International Journal of Knowledge-Based and Intelligent Engineering Systems 25(1): 97–108. DOI: https://doi.org/10.3233/KES-210055.

## Data & Information
In the realm of knowledge representation and reasoning, the distinction between data and information is crucial. While often used interchangeably, they carry distinct roles:

- **Data**: The raw, unprocessed material forming the foundation. Think of it as individual bricks, numbers, symbols, or characters awaiting meaning. Data may be stored and transmitted within systems but holds no inherent significance on its own.

- **Information**: The processed and contextualized understanding derived from data. Imagine the bricks arranged into a complex structure, forming a meaningful picture. Information emerges from applying operations, analysis, and interpretation to data, giving it context and relevance.


## Knowledge Representation
In the world of Knowledge Representation and Reasoning (KRR), understanding the interplay between knowledge and its representation is fundamental.

- **Knowledge**: This isn't simply information. It's the deeper understanding derived from processing and integrating information. It's the "how" and "why" behind the "what," the connections and insights gleaned from data. Imagine data as scattered pieces, information as organized blocks, and knowledge as the completed edifice - a structure with purpose and meaning.

- **Representation**: This involves expressing knowledge in a form computers can understand and manipulate. It's like choosing the best language to convey a complex idea. We might use logic statements, graphs, or even visual symbols, depending on the specific knowledge and reasoning tasks at hand.

Knowledge representation (KR) is the art of capturing and expressing knowledge in a way computers can understand. Imagine it as building a bridge between the human mind and the digital world.

## Reasoning
The course text offers a technical definition of reasoning as the manipulation of symbols representing propositions to arrive at new ones. Reasoning sits at the heart of Artificial Intelligence (AI). The very question of "Can machines think?" posed by pioneers like Turing and McCarthy hinged on whether machines could reason like humans.

Graham-Lengrand offers a more succinct perspective: reasoning is "the art of establishing truth." This resonates with the idea of using logic and knowledge to uncover deeper understandings.

By understanding these varied perspectives, we gain a richer appreciation of reasoning's role. It's not just about manipulating symbols, but about the profound ability to use logic and knowledge to draw conclusions, establish truth, and ultimately, approach the elusive concept of "thinking" machines.

## Why do we need KRR?
Internal Efficiency: Complex systems, like AI algorithms, operate based on internal representations of knowledge (symbolic structures, algorithms, etc.). KRR provides essential tools and frameworks for building these internal representations in a way that efficiently generates intelligent behavior. These representations act as the hidden drivers of the system's actions, analogous to the chess-playing computer whose moves "appear" driven by intentions like protecting the queen, but are actually driven by underlying algorithms interacting with its knowledge base.

Also, we often need to understand and interact with complex systems like AI. KRR allows us to interpret their behavior not by understanding the nitty-gritty details of their internal workings, but by analyzing the outcomes and attributing them to intentional states like beliefs and desires. This "intentional stance" helps us bridge the gap between the system's internal representation and its output, making it easier to interact with and predict its behavior.

Therefore, KRR plays a dual role: within the system, it provides efficient knowledge structures for intelligent behavior, and outside the system, it helps humans understand and interact with those intelligent systems.

### References
Dennett, D. C. (1971). "Intentional systems in cognitive science". Brain Research, 15(1): 173-202.

Bostrom, N. (2008). "What is artificial intelligence?". In: Black, J. (ed.), Philosophy of mind: A guide for the twenty-first century. Oxford University Press.

## Ontologies
Ontologies play a crucial role as "specifications of conceptualizations." This means they formalize how specific domains understand and categorize concepts, relationships, and entities. Historically, the term derived from philosophy, reflecting on the nature of existence and being. However, AI research pioneered by McCarthy (1987) repurposed it as a tool for constructing knowledge models within computer systems. Today, ontologies find diverse applications in KRR, ranging from medical systems and research to the Semantic Web.

Their role in the Semantic Web is particularly noteworthy. This ambitious project envisions an interconnected web of knowledge, where machines can understand and reason with information represented in a standardized way. Ontologies become essential here, providing the shared vocabulary and structure for machines to interpret and utilize knowledge across different domains and sources. In essence, they act as the bridge between data and meaningful understanding, enabling the true potential of intelligent systems to reason and solve problems effectively.

### References
McCarthy, J. (1987). "Circumscription: An artificial intelligence approach to formal reasoning". Artificial Intelligence, 30(1-2), 87-129.


## Set Theory
![Ven Diagram](./venn-diagram.png)

Set theory is a branch of mathematics that deals with the properties of collections of objects, called sets. Sets are often represented by Venn diagrams, which are pictures that show the relationships between different sets.

Set theory is a powerful tool that can be used to solve a wide variety of problems in mathematics, logic, and computer science. It is an essential part of the foundation of modern mathematics.

## ZFC Axioms
Set theory, once plagued by paradoxes, found stability through axioms, focusing on relationships and properties over the nature of sets. These axioms ensure consistency, plausibility, and resemblance to the intuitive "naive" set theory.

**Key Axioms**:

- Extensionality: Sets are defined by their members; sets with identical members are equal.
- Empty Set: There exists a set with no members, called the null set.
- Separation: For any set and property, a new set exists containing only members with that property.
- Pairing: Given any two sets A and B, a new set {A, B} containing only them exists.
- Union: Every set A has a union set (UA) containing all members of its member sets.
- Power Set: Every set A has a power set P(A) containing all its subsets.
- Infinity: There exists an infinite set.
- Replacement: For any definable function F(x, y) in set A, there's a set B containing all its function values.
- Choice: For any collection of non-empty, disjoint sets, there exists a set containing exactly one element from each. (This is the most controversial axiom.)
- These axioms form the foundation of modern set theory, ensuring a robust and consistent framework for studying sets and their relationships.

## Truth Tables
Truth tables are tools used to analyze and evaluate logic statements. Developed in 1881 by Christine Ladd and popularized by Wittgenstein, they offer a clear way to examine how logical operations like AND, OR, XOR, XNOR, and conditionals behave under different truth values.

Each statement (proposition) is assigned a truth value (True or False).
All possible combinations of truth values for the statements are listed.
Each logical operation is applied to each combination, resulting in a final truth value.
Benefits:

**Evaluate truth**: Determine the truth value of complex logic statements based on individual propositions.

**Identify patterns**: Understand how different logical operations interact with various truth combinations.

**Simplify expressions**: Rewrite complex statements into equivalent, easier-to-understand forms.
Example:

Imagine statements P and Q:

- P: The sun is shining.

- Q: It is raining.

A truth table can show how "**P AND Q**" (it is both sunny and raining) evaluates differently across various scenarios:
| P | Q | P AND Q |
|---|---|---|
| True | True | True |
| True | False | False |
| False | True | False |
| False | False | False |


This helps clarify that "**P AND Q**" is only true when both **P** and **Q** are true.

Truth tables offer a clear and systematic way to analyze and understand logical statements, making them valuable tools in various fields like mathematics, computer science, and philosophy.

## Propositional Logic
Propositional logic, also known as sentential logic, analyzes how to combine and manipulate statements (propositions) to form more complex ones. It explores the logic behind these combinations and the resulting properties.

Working with symbols (P, Q, etc.) like in math is often easier than handling lengthy statements themselves.

**Key Operators**:
- **AND**: Both statements must be true for the overall statement to be true.
- **OR**: At least one statement must be true for the overall statement to be true.
- **NOT**: Reverses the truth value of a statement.

Rules of Inference:
- **Modus Ponens**: If P implies Q, and P is true, then Q is true.
- **Modus Tollens**: If P implies Q, and Q is false, then P is false.

## FOL & Logic Quantifiers
Propositional logic lays the foundation, but First-Order Logic (FOL) opens up new possibilities for representing and reasoning about the world. It goes beyond basic statements (propositions) to consider relationships and properties of objects.

**Key Differences:**

**Atomic Formulas**: While propositions are indivisible units, FOL allows atomic formulas expressing relationships. Imagine a simple statement like "It rained yesterday." In FOL, we could represent this as Rain(Yesterday), showing the relation "Rain" holds for the object "Yesterday".

**Variables and Quantification**: FOL introduces variables, making statements more general. Instead of saying "Rain(Monday)", we could use Rain(X) where X represents any day of the week. This allows quantification:
- **Universal Quantifier (∀)**: "For all" instances. Like: ∀X Rain(X) meaning it rains on every day.
- **Existential Quantifier (∃)**: "There exists" some instance. Like: ∃X Rain(X) meaning it rains on at least one day.

**Example:**

Imagine a rule: "Students must pass all exams to graduate."

- Propositional logic: "John passed all exams" (True/False for John)
- FOL: Graduate(Student) ⇔ ∀Exam Passed(Student, Exam) This states a student graduates only if they pass all exa (∀Exam).

**Benefits of FOL:**
- Expresses complex relationships and rules.
- Handles variables for generality and flexibility.
- Enables reasoning and proof systems for drawing conclusions.

## Semantic Nets
Semantic nets are graphical structures like mind maps, used to represent knowledge as interconnected nodes (concepts) and arcs (relationships). They were first explored by Quillian (1968) and find applications in various fields.

**Advantages:**
1. **Easy inheritance**: Semantic nets naturally depict inheritance relationships between concepts, making them intuitive for representing taxonomic hierarchies like "cat is a mammal."
2. **Visual appeal**: The graphical layout provides a clear visual representation of connections, aiding human understanding and knowledge organization.

**Limitations:**
- **Precision**: Compared to logic-based representations (like predicate logic), semantic nets offer less precision in expressing complex relationship.
- **Multiple inheritance**: Representing concepts with multiple parents can be cumbersome in traditional semantic nets due to their focus on binary relationships.

## Frames 
Developed by Minsky in 1975, frames offer a knowledge representation method similar to the familiar object-oriented programming paradigm. They serve as an alternative to semantic nets and predicate logic.

**Structure**:

- Frames represent entities (objects, situations) using a slot-value structure.
- Slots are like properties, holding specific information (values) about the entity.

**Key Features:**

- **Defaults**: Slots can have default values, which can be overridden with new information. Example: A car's default status might be "OK," but it changes to "Broken" if a flat tire is discovered.
- **Inheritance**: Frames can inherit properties and values from other related frames.
- **Reasoning**: Associated languages like KRL and KL-ONE enable inferences and reasoning based on frame knowledge.

**Advantages**:

- **Natural representation**: Frames offer a way to organize knowledge in a way that aligns with how humans perceive and reason about the world.
- **Flexibility**: Default values and inheritance make frames adaptable to different situations and contexts.
- **Reasoning capabilities**: Associated languages allow inferencing and drawing conclusions based on frame relationships.

**Limitations**:
- **Complexity**: Designing and managing complex frame systems can be challenging.
- **Efficiency**: Implementing frames using traditional methods can be less efficient than other representations.

## Horn Clauses
Horn clauses are a specific type of formula in First-Order Logic (FOL) with unique properties that make them valuable in logic programming languages like Prolog. They contribute to efficient theorem proving and offer a concise way to represent knowledge.

**Key Characteristics**:

Single positive literal: Each clause contains at most one literal without negation (a positive statement).
Disjunctive form: A clause expresses an "OR" combination of literals (statements).
Facts and Rules: Clauses can represent facts (known truths) or rules with conditions leading to a conclusion.
Example:

P ← Q ∧ R (read as: P is true if Q and R are true)

R ← U ∨ V (read as: R is true if U or V is true)

Q and V are facts (assumed true).

**Benefits**:

Efficiency: Horn clauses enable efficient automated theorem proving due to their simple structure and properties.
Expressiveness: They can represent both facts and rules, making them versatile for knowledge representation.
Programming applications: Languages like Prolog rely on Horn clauses to define logic programs and reason about knowledge.

**Converting statements**

Equations can be transformed into Horn clauses (e.g., "maternal-grandmother(X) = mother(mother(X))" becomes a rule).
Quantifiers can be adjusted to fit the Horn clause format.

**Types of Horn clauses:**
- **Positive/Definite**: Contains one positive literal (e.g., P ← Q ∧ R).
- **Negative**: No positive literals (all negated) or no literals at all (rare).

## Features of Logic Programming Languages
First proposed in the 1950s, differ from numeric manipulation languages like Fortran and data processing languages like COBOL by specializing in symbolic manipulation. This means they focus on processing symbols, logic, and relationships rather than just numbers.

Several key features characterize good logic programming languages:

1. **Support for Symbolic Computation**: They handle various data structures like Horn clauses, lists, and sets, enabling symbolic reasoning.
2. **Flexible Control:** Features like pattern matching, dynamic rule execution, message passing, and dynamic binding allow for flexible problem-solving approaches.
3. **Alternative Programming Methods:** They excel at solving complex AI problems that may lack complete specifications initially, often utilizing domain-specific approaches and heuristics.

4. **Modularity and Extensibility**: Modular code with localized scope and clear boundaries (functions, recursion) enhances maintainability and allows for easier extensibility through techniques like pattern matching and domain-specific languages.
5. **Dynamic Binding and Constraint Propagation**: Variables can be bound during program execution, enabling constraint propagation and flexible reasoning.
6. **Clear and Well-Defined Semantics**: Many logic programming languages are based on well-defined mathematical principles like predicate logic, leading to clear semantics and suitability for knowledge representation, correctness proofs, and automated code generation.

These features make logic programming languages powerful tools for symbolic reasoning, problem-solving, and knowledge representation, particularly in domains like artificial intelligence.
