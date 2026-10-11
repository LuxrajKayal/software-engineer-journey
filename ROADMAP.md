# Software Engineer Roadmap

This is the detailed syllabus for my software-engineering journey. It is designed to build skills in a deliberate order, with practical evidence at every stage. The main path uses **Python for programming and backend work**, while web development continues through my technical-blog project. Java and machine learning remain optional tracks until the foundations are stronger.

> **Rule:** A topic is not complete just because I read about it. I should be able to explain it, use it in a small working example, and debug common mistakes.

## How to use this roadmap

1. Work on one primary learning goal at a time.
2. Read a book section, practise the concept, and write a short note in my own words.
3. Save exercises and projects in this repository or link to their separate repositories.
4. Record evidence, blockers, and the next action in [PROGRESS.md](PROGRESS.md).
5. Mark a phase complete only when its completion criteria are met.
6. Use current official documentation when a book's tools, commands, or examples are outdated.

## Phase 0 — Learning workflow and GitHub

**Purpose:** Set up a repeatable learning process.

### Topics
- Understand repositories, files, folders, commits, and the default branch.
- Practise meaningful commit messages and frequent small commits.
- Learn Markdown for notes and project documentation.
- Use the README as a dashboard and keep goals and weekly notes in separate files.
- Learn to avoid committing secrets, passwords, API keys, generated files, and private information.

### Deliverables
- [ ] README dashboard is understandable and linked to the other project documents.
- [ ] ROADMAP.md, GOALS.md, and PROGRESS.md are maintained.
- [ ] Make a small documentation change and commit it with a clear message.

### Completion criteria
I can explain what a commit records, find earlier changes, and update this repository without losing work.

## Phase 1 — Programming foundations with Python

**Purpose:** Learn to solve small problems in code and develop independent debugging habits.

### Topics
- Set up Python, an editor, the terminal, and a simple project folder.
- Variables, core types, expressions, operators, strings, and input/output.
- Boolean logic, conditional statements, loops, and iteration.
- Functions, parameters, return values, scope, and decomposition.
- Lists, tuples, dictionaries, sets, and basic data processing.
- Files, paths, exceptions, modules, and imports.
- Introductory object-oriented programming: classes, objects, methods, and composition.
- Debugging, readable naming, comments, and basic automated tests.
- Git basics while saving practice and project progress.

### Resources
- **Main practice book:** *Python Crash Course* from the learn_python repository. Check the PDF's edition before following version-specific instructions.
- **Supporting reference:** *Learning Python* when a concept needs a deeper explanation.
- **Conceptual overview:** *Beginning Programming All-in-One Desk Reference For Dummies*, especially its programming-basics material.
- **Later references:** *Effective Python*, *Python Cookbook*, and *Fluent Python* are better used after I can comfortably write small programs.
- **Repository:** [lpvcpp/learn_python](https://github.com/lpvcpp/learn_python)

### Projects
1. **CLI Task Manager:** add, list, complete, and remove tasks; then save tasks to a file.
2. **Hardware/Flight Log Parser:** read a sample or safely shareable log, extract selected fields, and produce a clear summary report.

### Completion criteria
- [ ] I can write a small program from a written problem without copying a complete solution.
- [ ] I can use functions and collections to avoid repeating logic.
- [ ] I can read and write files and handle invalid input.
- [ ] I can explain and debug errors using tracebacks and print/debugger tools.
- [ ] At least one project has a README with setup and usage instructions.

## Phase 2 — Web foundations and the technical blog

**Purpose:** Build a website progressively and understand how the browser renders and interacts with it.

### Topics
- Semantic HTML, headings, paragraphs, links, images, lists, tables, and forms.
- CSS selectors, cascade, inheritance, box model, spacing, typography, and layout.
- Flexbox, Grid, responsive design, and accessible color/contrast practices.
- Browser developer tools, inspecting elements, and debugging layout problems.
- JavaScript fundamentals: variables, types, conditions, loops, functions, arrays, and objects.
- DOM selection and updates, events, form validation, and browser APIs.
- JSON, HTTP basics, fetch, promises, and async/await after the fundamentals.
- Clear page structure, maintainable CSS, accessibility, and basic web performance.

### Resources
- **Main applied reference:** *Coding All-in-One For Dummies* — focus on Books 3–5 for HTML/CSS, JavaScript, and its introductory web-application example.
- **Conceptual supplement:** *Beginning Programming All-in-One Desk Reference For Dummies* for its introductory web-programming overview.
- Both books are older editions. Use current official documentation for modern browser behavior, APIs, and frameworks.

### Project
**Technical Blog:** improve my existing site in small increments. Start with a readable article layout, then add responsive navigation, reusable styles, accessible markup, and a small interactive feature using JavaScript. Keep article content and site styling organized.

### Completion criteria
- [ ] The site works at mobile and desktop widths.
- [ ] HTML structure is semantic and links/images work.
- [ ] CSS is organized in a separate stylesheet and layout issues can be debugged.
- [ ] At least one JavaScript feature works and is explained in the project README.
- [ ] The site is committed to GitHub and published if suitable.

## Phase 3 — Data structures and algorithms

**Purpose:** Learn to choose suitable ways to store data and analyze problem-solving approaches.

### Topics
- Time and space complexity; Big-O notation and trade-offs.
- Arrays/lists, strings, linked lists, stacks, queues, hash tables, sets, and maps/dictionaries.
- Trees, binary search trees, heaps, graphs, and representations of graphs.
- Searching, sorting, recursion, and basic divide-and-conquer.
- Breadth-first search (BFS), depth-first search (DFS), and shortest-path algorithms.
- Introductory dynamic programming and greedy algorithms.
- Test edge cases and compare approaches rather than memorizing solutions.

### Resources
- *Grokking Algorithms* by Aditya Bhargava as the visual introduction.
- *Introduction to Algorithms* (CLRS) as a deeper reference when required; it is not necessary to read cover to cover at the start.
- *Beginning Programming All-in-One Desk Reference For Dummies*, Book III (data structures) and Book IV (algorithms), as a broad conceptual supplement.

### Projects
1. Implement a simple hash map/dictionary-like structure for learning.
2. Build a pathfinding visualizer or command-line pathfinder using BFS and then Dijkstra's algorithm.
3. Build a small Huffman-coding experiment after understanding trees and priority queues.

### Completion criteria
- [ ] I can explain the time/space trade-offs of common structures.
- [ ] I can implement and test basic searching and sorting.
- [ ] I can solve beginner problems without following a line-by-line tutorial.
- [ ] I can explain the reasoning, complexity, and edge cases of my solutions.

## Phase 4 — Core Computer Science and databases

**Purpose:** Understand what software relies on underneath the application layer.

### Topics
- **Operating systems:** processes, threads, virtual memory, filesystems, permissions, and shell basics.
- **Networking:** IP, DNS, TCP/UDP, HTTP/HTTPS, request/response, ports, and basic troubleshooting.
- **Databases:** relational tables, keys, joins, constraints, indexes, normalization, transactions, and ACID concepts.
- **SQL:** SELECT, filtering, sorting, aggregation, joins, INSERT, UPDATE, and DELETE.
- **Data modelling:** translate a practical problem into entities, relationships, and constraints.
- Connect conceptual knowledge to logs, command-line tools, and small experiments.

### Resources
- *Operating System Concepts* by Silberschatz, Galvin, and Gagne.
- *Computer Networking: A Top-Down Approach* by Kurose and Ross.
- Official documentation for the chosen SQL database and shell.

### Projects
1. Design an inventory-management schema and write useful SQL queries.
2. Write a small shell/script utility to organize or inspect files. A custom shell can be an advanced extension, not a prerequisite.
3. Experiment with HTTP requests and document a simple client/server interaction.

### Completion criteria
- [ ] I can design related tables with appropriate keys and constraints.
- [ ] I can write joins and aggregate queries for a small dataset.
- [ ] I can explain, at a basic level, what happens between entering a URL and receiving a web page.
- [ ] I can distinguish a process from a thread and describe why resource management matters.

## Phase 5 — Backend development and full-stack applications

**Purpose:** Build an application that receives requests, validates data, applies logic, and stores information.

### Topics
- Choose **one** Python backend framework first (Django or FastAPI); do not try to learn several at once.
- REST API basics, HTTP methods and status codes, request validation, and error responses.
- SQL database integration, migrations, and environment configuration.
- Authentication and authorization concepts; input validation and safe handling of secrets.
- Frontend-to-backend communication using JavaScript and JSON.
- Testing API behavior and handling common failure cases.
- Introductory architecture: separation of concerns, modules, and clear boundaries.

### Resources
- Current official documentation for the chosen Python framework and database.
- Use the web chapters and application example in *Coding All-in-One For Dummies* for background, not as the sole modern framework guide.
- *Designing Data-Intensive Applications* by Martin Kleppmann after I have practical database experience.

### Projects
1. **Inventory API:** create, list, update, and delete products using a database.
2. Extend the technical blog with a small backend feature if this supports my learning goals.
3. Later options: a URL shortener or a simple chat application. Add real-time communication only after the API and database fundamentals are working.

### Completion criteria
- [ ] The application exposes documented endpoints and validates input.
- [ ] Data persists in a database and can be queried.
- [ ] Automated tests cover important success and failure cases.
- [ ] The README explains installation, configuration, and how to run the project locally.
- [ ] Secrets are held outside source control.

## Phase 6 — Software quality, deployment, and operations

**Purpose:** Make projects repeatable to test, deploy, observe, and maintain.

### Topics
- Unit and integration tests; regression testing and testable design.
- Code review habits, refactoring, documentation, and clear error messages.
- Git branches, pull requests, and small, reviewable changes.
- Docker fundamentals and environment variables.
- GitHub Actions for running automated checks.
- Deploy an application to a suitable hosting platform; understand logs, configuration, and rollback basics.
- Introductory security, dependency updates, backups, and monitoring.
- Study caching, load balancing, microservices, and system design only when the simpler application gives those ideas context.

### Resources
- *Clean Code* by Robert C. Martin as a discussion/reference for code quality; evaluate advice against project context rather than applying every rule mechanically.
- *The Phoenix Project* by Gene Kim and co-authors for DevOps culture and workflow concepts.
- *Kubernetes Up & Running* by Brendan Burns, Joe Beda, and Kelsey Hightower only when container orchestration becomes relevant.
- *System Design Interview* by Alex Xu as a later interview-preparation reference.

### Projects
1. Add tests and basic CI to a previous project.
2. Containerize the backend project with Docker.
3. Deploy one portfolio project and document its public URL, limitations, and operating instructions.
4. Add a GitHub Actions workflow to run tests on changes.

### Completion criteria
- [ ] A fresh checkout can be installed and run using documented steps.
- [ ] Tests and automated checks run successfully.
- [ ] The deployed application has documented configuration and known limitations.
- [ ] I can explain the build, test, deployment, and basic troubleshooting process.

## Optional specialization tracks — only after core foundations

### Java backend development
Choose this track if Java becomes a deliberate career goal. Learn core Java and object-oriented programming first, then collections, exceptions, testing, SQL, and a backend framework. After that:
- *Advanced Java* for topics such as object design, generics, exceptions, concurrency, serialization, and reflection.
- *Apache Maven Cookbook* for project configuration, dependency management, and packaging.
- [imac1/java-miscellaneous](https://github.com/imac1/java-miscellaneous) as a reference collection, not a guaranteed course sequence.

The supplied Java resources use older examples, so check current Java and Maven documentation. Do not study advanced Java and Python backend frameworks at the same time while foundations are still developing.

### Data analysis and machine learning
Begin only after Python fundamentals and basic statistics are comfortable:
- Learn data cleaning and exploration with pandas, numerical work with NumPy, and visualization with Matplotlib.
- Use Books 6–9 of *Coding All-in-One For Dummies* as a conceptual starting point; examples may require updating.
- Build one data-analysis project before moving to model training and evaluation.
- Study probability, statistics, model validation, overfitting, and data leakage before trusting model results.

## Reference books: how to use them

| Resource | Use it for | Timing |
|---|---|---|
| *Python Crash Course* | Main hands-on Python learning | Phase 1 |
| *Learning Python* | Deeper explanations/reference | Phase 1 onward |
| *Beginning Programming All-in-One Desk Reference For Dummies* (2008) | Broad concepts, selected data structures/algorithms | Phases 1 and 3 |
| *Coding All-in-One For Dummies* (2017) | Web development and overview of data analysis/ML | Phase 2; optional ML track later |
| *Effective Python* | Idiomatic code and better practices | After Python basics |
| *Python Cookbook* (3rd edition, 2013) | Problem-solving reference | As needed after basics |
| *Fluent Python* (2015 edition in the repository) | Advanced Python language features | Later reference |
| *Grokking Algorithms* | Accessible DSA introduction | Phase 3 |
| CLRS | Detailed algorithms reference | Phase 3, selectively |
| OS and networking textbooks | CS foundations | Phase 4 |
| *Advanced Java* and *Apache Maven Cookbook* | Optional Java track | After core Java |
| *Designing Data-Intensive Applications* | Data systems and architecture | Phase 5 onward |
| *Clean Code*, *The Phoenix Project*, *System Design Interview*, *Kubernetes Up & Running* | Quality, DevOps, design, and deployment perspectives | Phase 6 or later |

## Progress rule

Use [GOALS.md](GOALS.md) to define measurable targets and [PROGRESS.md](PROGRESS.md) to log actual work. Do not claim a phase is complete based on time spent or pages read. Record evidence: code, tests, a working feature, a written explanation, or a project demonstration.

The target is not to learn every technology listed here. It is to build solid fundamentals, finish useful projects, and develop the ability to learn new tools independently.
