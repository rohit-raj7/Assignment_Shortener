import html from "./images/html.webp";
import css from "./images/css.webp";
import js from "./images/js.webp";
import react from "./images/react.webp";
import node from "./images/node.webp";       
import aws from "./images/aws.webp";
import spring from "./images/spring.webp";
import sql from "./images/sql.webp";
import ai from "./images/ai.webp";



export const skillsData = [
    //html
    {
        new: true,
        instructor: "John Doe",
        name: "HTML",
        level: "Beginner",
        category: "Web Development",
        subtitle: "Learn HTML from Scratch with me",
        desc: "Know how to structure web pages using semantic tags for future builds.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        image: html,
        duration: "4h 30m",
        lessons: 12,
        rating: 4.5,
        ratersCount: 120,
        price: "799",
        updated: "August 2023",
        content: [
          {
            sectionTitle: "Getting Started",
            lessons: [
              { title: "Introduction to HTML", videoUrl: "https://example.com/videos/html-intro.mp4", order: 1 },
              { title: "Setting Up Editor", videoUrl: "https://example.com/videos/setup-editor.mp4", order: 2 }
            ]
          },
          {
            sectionTitle: "HTML Basics",
            lessons: [
              { title: "Headings and Paragraphs", videoUrl: "https://example.com/videos/headings.mp4", order: 3 },
              { title: "Links and Images", videoUrl: "https://example.com/videos/links-images.mp4", order: 4 }
            ]
          },
          {
            sectionTitle: "Forms and Tables",
            lessons: [
              { title: "Creating Forms", videoUrl: "https://example.com/videos/forms.mp4", order: 5 },
              { title: "Working with Tables", videoUrl: "https://example.com/videos/tables.mp4", order: 6 }
            ]
          },
          {
            sectionTitle: "Final Project",
            lessons: [
              { title: "Building a Portfolio Page", videoUrl: "https://example.com/videos/project.mp4", order: 7 }
            ]
          }
        ]
      },
      //css
      {
        instructor: "John Doe",
        name: "CSS",
        level: "Beginner",
        category: "Web Development",
        subtitle: "Master Modern CSS3 and Layouts",
        desc: "Style websites using modern CSS3 techniques, Flexbox, and Grid layouts.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        image: css,
        duration: "5h 10m",
        lessons: 15,
        rating: 4.6,
        ratersCount: 180,
        price: " 899",
        updated: "September 2023",
        content: [
          {
            sectionTitle: "Introduction to CSS",
            lessons: [
              { title: "What is CSS?", videoUrl: "https://example.com/videos/css-intro.mp4", order: 1 },
              { title: "How CSS Works", videoUrl: "https://example.com/videos/how-css-works.mp4", order: 2 }
            ]
          },
          {
            sectionTitle: "Selectors and Properties",
            lessons: [
              { title: "CSS Selectors", videoUrl: "https://example.com/videos/selectors.mp4", order: 3 },
              { title: "Colors and Backgrounds", videoUrl: "https://example.com/videos/colors.mp4", order: 4 }
            ]
          },
          {
            sectionTitle: "Layout and Positioning",
            lessons: [
              { title: "Box Model", videoUrl: "https://example.com/videos/box-model.mp4", order: 5 },
              { title: "Flexbox Basics", videoUrl: "https://example.com/videos/flexbox.mp4", order: 6 },
              { title: "CSS Grid", videoUrl: "https://example.com/videos/grid.mp4", order: 7 }
            ]
          },
          {
            sectionTitle: "Responsive Design",
            lessons: [
              { title: "Media Queries", videoUrl: "https://example.com/videos/media-queries.mp4", order: 8 },
              { title: "Responsive Units", videoUrl: "https://example.com/videos/units.mp4", order: 9 }
            ]
          },
          {
            sectionTitle: "Project",
            lessons: [
              { title: "Designing a Responsive Website", videoUrl: "https://example.com/videos/css-project.mp4", order: 10 }
            ]
          }
        ]
      },
      //javascript
      {
        new: true,
        instructor: "John Doe",
        name: "JavaScript",
        level: "Intermediate",
        category: "Web Development",
        subtitle: "Add Interactivity and Logic to Web Applications",
        desc: "Learn core JavaScript concepts to make your web pages dynamic and interactive.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        image: js,
        duration: "7h 45m",
        lessons: 20,
        rating: 4.7,
        ratersCount: 250,
        price: " 1099",
        updated: "October 2023",
        content: [
          {
            sectionTitle: "JavaScript Basics",
            lessons: [
              { title: "What is JavaScript?", videoUrl: "https://example.com/videos/js-intro.mp4", order: 1 },
              { title: "Variables and Data Types", videoUrl: "https://example.com/videos/variables.mp4", order: 2 },
              { title: "Operators and Expressions", videoUrl: "https://example.com/videos/operators.mp4", order: 3 }
            ]
          },
          {
            sectionTitle: "Functions and Scope",
            lessons: [
              { title: "Functions Explained", videoUrl: "https://example.com/videos/functions.mp4", order: 4 },
              { title: "Scope and Hoisting", videoUrl: "https://example.com/videos/scope.mp4", order: 5 }
            ]
          },
          {
            sectionTitle: "DOM Manipulation",
            lessons: [
              { title: "Accessing the DOM", videoUrl: "https://example.com/videos/dom-access.mp4", order: 6 },
              { title: "Event Handling", videoUrl: "https://example.com/videos/events.mp4", order: 7 }
            ]
          },
          {
            sectionTitle: "ES6 and Beyond",
            lessons: [
              { title: "Arrow Functions and let/const", videoUrl: "https://example.com/videos/es6-basics.mp4", order: 8 },
              { title: "Destructuring and Spread Operator", videoUrl: "https://example.com/videos/destructuring.mp4", order: 9 },
              { title: "Modules and Imports", videoUrl: "https://example.com/videos/modules.mp4", order: 10 }
            ]
          },
          {
            sectionTitle: "Mini Projects",
            lessons: [
              { title: "Build a Calculator", videoUrl: "https://example.com/videos/calculator.mp4", order: 11 },
              { title: "Interactive Quiz App", videoUrl: "https://example.com/videos/quiz.mp4", order: 12 }
            ]
          }
        ]
      },
      //reactjs
      {
        instructor: "John Doe",
        name: "ReactJS",
        level: "Intermediate",
        category: "Frontend Development",
        subtitle: "Build Reusable Components and Dynamic UIs with React",
        desc: "Learn how to create modern, interactive web applications using React components and hooks.",
        link: "https://react.dev/",
        image: react,
        duration: "8h 20m",
        lessons: 22,
        rating: 4.8,
        ratersCount: 310,
        price: "1299",
        updated: "November 2023",
        
        content: [
          {
            sectionTitle: "Getting Started with React",
            lessons: [
              { title: "Introduction to React", videoUrl: "https://example.com/videos/react-intro.mp4", order: 1 },
              { title: "Setting up React Environment", videoUrl: "https://example.com/videos/react-setup.mp4", order: 2 },
              { title: "JSX and Rendering Elements", videoUrl: "https://example.com/videos/jsx.mp4", order: 3 }
            ]
          },
          {
            sectionTitle: "Components and Props",
            lessons: [
              { title: "Functional Components", videoUrl: "https://example.com/videos/components.mp4", order: 4 },
              { title: "Props and Data Flow", videoUrl: "https://example.com/videos/props.mp4", order: 5 }
            ]
          },
          {
            sectionTitle: "State and Hooks",
            lessons: [
              { title: "useState Hook", videoUrl: "https://example.com/videos/usestate.mp4", order: 6 },
              { title: "useEffect Hook", videoUrl: "https://example.com/videos/useeffect.mp4", order: 7 },
              { title: "Custom Hooks", videoUrl: "https://example.com/videos/custom-hooks.mp4", order: 8 }
            ]
          },
          {
            sectionTitle: "Routing and Context",
            lessons: [
              { title: "React Router Basics", videoUrl: "https://example.com/videos/router.mp4", order: 9 },
              { title: "Using Context API", videoUrl: "https://example.com/videos/context.mp4", order: 10 }
            ]
          },
          {
            sectionTitle: "Project Work",
            lessons: [
              { title: "Build a Todo App", videoUrl: "https://example.com/videos/todo.mp4", order: 11 },
              { title: "Portfolio Website Project", videoUrl: "https://example.com/videos/portfolio.mp4", order: 12 }
            ]
          }
        ]
      },
      //spring boot
      {
        instructor: "John Doe",
        name: "Spring Boot",
        level: "Advanced",
        category: "Backend Development",
        subtitle: "Develop Scalable and Robust Java-Based Backends",
        desc: "Master Spring Boot to build production-grade REST APIs and enterprise-level applications with ease.",
        link: "https://spring.io/projects/spring-boot",
        image: spring,
        duration: "10h 15m",
        lessons: 25,
        rating: 4.9,
        ratersCount: 280,
        price: " 1499",
        updated: "December 2023",
        content: [
          {
            sectionTitle: "Introduction to Spring Boot",
            lessons: [
              { title: "What is Spring Boot?", videoUrl: "https://example.com/videos/spring-intro.mp4", order: 1 },
              { title: "Spring Boot Setup", videoUrl: "https://example.com/videos/setup.mp4", order: 2 },
              { title: "Project Structure Overview", videoUrl: "https://example.com/videos/structure.mp4", order: 3 }
            ]
          },
          {
            sectionTitle: "REST API Development",
            lessons: [
              { title: "Creating REST Controllers", videoUrl: "https://example.com/videos/controllers.mp4", order: 4 },
              { title: "Request Mapping and Validation", videoUrl: "https://example.com/videos/validation.mp4", order: 5 },
              { title: "Service and Repository Layers", videoUrl: "https://example.com/videos/layers.mp4", order: 6 }
            ]
          },
          {
            sectionTitle: "Database and JPA",
            lessons: [
              { title: "Connecting to MySQL", videoUrl: "https://example.com/videos/mysql.mp4", order: 7 },
              { title: "Spring Data JPA Basics", videoUrl: "https://example.com/videos/jpa.mp4", order: 8 },
              { title: "CRUD Operations", videoUrl: "https://example.com/videos/crud.mp4", order: 9 }
            ]
          },
          {
            sectionTitle: "Security and Deployment",
            lessons: [
              { title: "Spring Security Fundamentals", videoUrl: "https://example.com/videos/security.mp4", order: 10 },
              { title: "JWT Authentication", videoUrl: "https://example.com/videos/jwt.mp4", order: 11 },
              { title: "Deploying to Cloud", videoUrl: "https://example.com/videos/deploy.mp4", order: 12 }
            ]
          },
          {
            sectionTitle: "Capstone Project",
            lessons: [
              { title: "Build a RESTful Employee Management System", videoUrl: "https://example.com/videos/project.mp4", order: 13 }
            ]
          }
        ]
      },
      //sql
      {
        instructor: "John Doe",
        name: "SQL",
        level: "Intermediate",
        category: "Database Management",
        subtitle: "Master SQL for Efficient Data Storage and Querying",
        desc: "Learn how to create, query, and manage relational databases effectively using SQL.",
        link: "https://www.w3schools.com/sql/",
        image: sql,
        duration: "6h 40m",
        lessons: 18,
        rating: 4.7,
        ratersCount: 230,
        price: "999",
        updated: "October 2023",
        content: [
          {
            sectionTitle: "Introduction to Databases",
            lessons: [
              { title: "What is a Database?", videoUrl: "https://example.com/videos/db-intro.mp4", order: 1 },
              { title: "Overview of SQL", videoUrl: "https://example.com/videos/sql-overview.mp4", order: 2 }
            ]
          },
          {
            sectionTitle: "Basic SQL Commands",
            lessons: [
              { title: "CREATE and DROP", videoUrl: "https://example.com/videos/create-drop.mp4", order: 3 },
              { title: "INSERT, UPDATE, DELETE", videoUrl: "https://example.com/videos/crud.mp4", order: 4 }
            ]
          },
          {
            sectionTitle: "Querying Data",
            lessons: [
              { title: "SELECT Statements", videoUrl: "https://example.com/videos/select.mp4", order: 5 },
              { title: "WHERE and ORDER BY", videoUrl: "https://example.com/videos/where-orderby.mp4", order: 6 },
              { title: "LIMIT and DISTINCT", videoUrl: "https://example.com/videos/limit.mp4", order: 7 }
            ]
          },
          {
            sectionTitle: "Advanced SQL Concepts",
            lessons: [
              { title: "Joins and Relationships", videoUrl: "https://example.com/videos/joins.mp4", order: 8 },
              { title: "GROUP BY and HAVING", videoUrl: "https://example.com/videos/groupby.mp4", order: 9 },
              { title: "Subqueries and Views", videoUrl: "https://example.com/videos/subqueries.mp4", order: 10 }
            ]
          },
          {
            sectionTitle: "Project Work",
            lessons: [
              { title: "Designing a Student Database", videoUrl: "https://example.com/videos/student-db.mp4", order: 11 },
              { title: "Complex Query Practice", videoUrl: "https://example.com/videos/complex-queries.mp4", order: 12 }
            ]
          }
        ]
      },
      //nodejs
      {
        instructor: "John Doe",
        name: "Node.js",
        level: "Intermediate",
        category: "Backend Development",
        subtitle: "Build Fast and Scalable Server-Side Applications",
        desc: "Learn how to build backend applications using Node.js, Express, and APIs with database integration.",
        link: "https://nodejs.org/en/docs",
        image: node,
        duration: "9h 30m",
        lessons: 20,
        rating: 4.8,
        ratersCount: 270,
        price: " 1199",
        updated: "November 2023",
        content: [
          {
            sectionTitle: "Introduction to Node.js",
            lessons: [
              { title: "What is Node.js?", videoUrl: "https://example.com/videos/node-intro.mp4", order: 1 },
              { title: "Installing Node and NPM", videoUrl: "https://example.com/videos/node-setup.mp4", order: 2 },
              { title: "Running Your First Script", videoUrl: "https://example.com/videos/first-script.mp4", order: 3 }
            ]
          },
          {
            sectionTitle: "Core Modules and File System",
            lessons: [
              { title: "Using Core Modules", videoUrl: "https://example.com/videos/core-modules.mp4", order: 4 },
              { title: "Working with File System", videoUrl: "https://example.com/videos/fs-module.mp4", order: 5 }
            ]
          },
          {
            sectionTitle: "Express.js Framework",
            lessons: [
              { title: "Introduction to Express", videoUrl: "https://example.com/videos/express-intro.mp4", order: 6 },
              { title: "Building REST APIs", videoUrl: "https://example.com/videos/rest-api.mp4", order: 7 },
              { title: "Middleware and Routing", videoUrl: "https://example.com/videos/middleware.mp4", order: 8 }
            ]
          },
          {
            sectionTitle: "Database Integration",
            lessons: [
              { title: "Connecting MongoDB", videoUrl: "https://example.com/videos/mongodb-connect.mp4", order: 9 },
              { title: "CRUD Operations with Mongoose", videoUrl: "https://example.com/videos/mongoose-crud.mp4", order: 10 }
            ]
          },
          {
            sectionTitle: "Authentication and Deployment",
            lessons: [
              { title: "User Authentication (JWT)", videoUrl: "https://example.com/videos/jwt-auth.mp4", order: 11 },
              { title: "Error Handling", videoUrl: "https://example.com/videos/error-handling.mp4", order: 12 },
              { title: "Deploying Node App", videoUrl: "https://example.com/videos/deploy.mp4", order: 13 }
            ]
          },
          {
            sectionTitle: "Final Project",
            lessons: [
              { title: "Build a RESTful API for Blog App", videoUrl: "https://example.com/videos/blog-api.mp4", order: 14 }
            ]
          }
        ]
      },
      //aws
      {
        instructor: "John Doe",
        name: "AWS (Amazon Web Services)",
        level: "Intermediate",
        category: "Cloud Computing",
        subtitle: "Master AWS Cloud Infrastructure and Services",
        desc: "Learn to deploy, manage, and scale web applications using key AWS services like EC2, S3, and Lambda.",
        link: "https://aws.amazon.com/getting-started/",
        image: aws,
        duration: "8h 55m",
        lessons: 21,
        rating: 4.8,
        ratersCount: 320,
        price: "1399",
        updated: "December 2023",
        content: [
          {
            sectionTitle: "Introduction to Cloud and AWS",
            lessons: [
              { title: "What is Cloud Computing?", videoUrl: "https://example.com/videos/cloud-intro.mp4", order: 1 },
              { title: "Getting Started with AWS", videoUrl: "https://example.com/videos/aws-intro.mp4", order: 2 },
              { title: "AWS Global Infrastructure", videoUrl: "https://example.com/videos/aws-infra.mp4", order: 3 }
            ]
          },
          {
            sectionTitle: "Compute Services",
            lessons: [
              { title: "EC2 Instances", videoUrl: "https://example.com/videos/ec2.mp4", order: 4 },
              { title: "Elastic Load Balancer", videoUrl: "https://example.com/videos/elb.mp4", order: 5 },
              { title: "Auto Scaling Groups", videoUrl: "https://example.com/videos/auto-scaling.mp4", order: 6 }
            ]
          },
          {
            sectionTitle: "Storage Services",
            lessons: [
              { title: "Amazon S3 Basics", videoUrl: "https://example.com/videos/s3.mp4", order: 7 },
              { title: "EBS and EFS", videoUrl: "https://example.com/videos/ebs.mp4", order: 8 },
              { title: "CloudFront and Caching", videoUrl: "https://example.com/videos/cloudfront.mp4", order: 9 }
            ]
          },
          {
            sectionTitle: "Databases and Lambda",
            lessons: [
              { title: "RDS and DynamoDB", videoUrl: "https://example.com/videos/rds.mp4", order: 10 },
              { title: "Serverless with AWS Lambda", videoUrl: "https://example.com/videos/lambda.mp4", order: 11 },
              { title: "API Gateway Integration", videoUrl: "https://example.com/videos/api-gateway.mp4", order: 12 }
            ]
          },
          {
            sectionTitle: "Security and Deployment",
            lessons: [
              { title: "IAM Roles and Policies", videoUrl: "https://example.com/videos/iam.mp4", order: 13 },
              { title: "VPC Networking Basics", videoUrl: "https://example.com/videos/vpc.mp4", order: 14 },
              { title: "Deploying an App on AWS", videoUrl: "https://example.com/videos/deploy-app.mp4", order: 15 }
            ]
          },
          {
            sectionTitle: "Final Project",
            lessons: [
              { title: "Host a Full-Stack App on AWS", videoUrl: "https://example.com/videos/final-project.mp4", order: 16 }
            ]
          }
        ]
      },
      //artificial intelligence
      {
        instructor: "John Doe",
        name: "Artificial Intelligence (AI)",
        level: "Advanced",
        category: "Machine Learning & AI",
        subtitle: "Master AI Concepts, Neural Networks, and Real-World Applications",
        desc: "Learn to build intelligent systems using Python, TensorFlow, and advanced algorithms for image, text, and decision-making tasks.",
        link: "https://developers.google.com/machine-learning",
        image: ai,
        duration: "12h 40m",
        lessons: 24,
        rating: 4.9,
        ratersCount: 450,
        price: "1999",
        updated: "February 2024",
        content: [
          {
            sectionTitle: "Introduction to AI",
            lessons: [
              { title: "What is Artificial Intelligence?", videoUrl: "https://example.com/videos/ai-intro.mp4", order: 1 },
              { title: "History and Applications of AI", videoUrl: "https://example.com/videos/ai-history.mp4", order: 2 },
              { title: "AI vs Machine Learning vs Deep Learning", videoUrl: "https://example.com/videos/ai-ml-dl.mp4", order: 3 }
            ]
          },
          {
            sectionTitle: "Machine Learning Basics",
            lessons: [
              { title: "Supervised and Unsupervised Learning", videoUrl: "https://example.com/videos/ml-basics.mp4", order: 4 },
              { title: "Linear and Logistic Regression", videoUrl: "https://example.com/videos/regression.mp4", order: 5 },
              { title: "Model Evaluation Metrics", videoUrl: "https://example.com/videos/model-metrics.mp4", order: 6 }
            ]
          },
          {
            sectionTitle: "Neural Networks and Deep Learning",
            lessons: [
              { title: "Understanding Neural Networks", videoUrl: "https://example.com/videos/nn-intro.mp4", order: 7 },
              { title: "Building Networks with TensorFlow", videoUrl: "https://example.com/videos/tensorflow.mp4", order: 8 },
              { title: "CNNs for Image Recognition", videoUrl: "https://example.com/videos/cnn.mp4", order: 9 }
            ]
          },
          {
            sectionTitle: "Natural Language Processing (NLP)",
            lessons: [
              { title: "Text Preprocessing and Tokenization", videoUrl: "https://example.com/videos/nlp-prep.mp4", order: 10 },
              { title: "Word Embeddings and Transformers", videoUrl: "https://example.com/videos/transformers.mp4", order: 11 },
              { title: "Building a Chatbot", videoUrl: "https://example.com/videos/chatbot.mp4", order: 12 }
            ]
          },
          {
            sectionTitle: "AI in Practice",
            lessons: [
              { title: "AI for Computer Vision", videoUrl: "https://example.com/videos/computer-vision.mp4", order: 13 },
              { title: "AI for Recommendation Systems", videoUrl: "https://example.com/videos/recommendation.mp4", order: 14 },
              { title: "AI in Robotics", videoUrl: "https://example.com/videos/robotics.mp4", order: 15 }
            ]
          },
          {
            sectionTitle: "Final Project",
            lessons: [
              { title: "Build an AI Image Classifier", videoUrl: "https://example.com/videos/ai-project.mp4", order: 16 }
            ]
          }
        ]
      },
  ];
  
  export const levelColor = {
    Beginner: "bg-green-500",
    Intermediate: "bg-yellow-500",
    Advanced: "bg-red-500",
  };
  
  export const hoverGradient = {
    Beginner: "from-green-400/30 via-emerald-300/30 to-transparent",
    Intermediate: "from-yellow-300/30 via-orange-200/30 to-transparent",
    Advanced: "from-red-400/30 via-pink-300/30 to-transparent",
  };