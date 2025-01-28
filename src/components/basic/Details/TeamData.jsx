import React from 'react';

const TeamData = {
    'S Md Ishrath': {
      designation: 'UI/UX Designer',
      department: 'UI/UX',
      skills: ['Figma - UI/UX', 'Canva - Graphic Design'],
      projects: [
        'Company Website Redesign',
        'Mobile App UI/UX',
        'Design System Development'
      ],
      bio: 'Creative UI/UX designer with expertise in creating intuitive user interfaces.',
      contact:'https://www.linkedin.com/in/shaikmahammadishrath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    'C Samsundar': {
      designation: 'UI/UX Designer',
      department: 'UI/UX',
      skills: ['Graphic Design', 'Basic UI/UX', 'Canva'],
      projects: [
        'E-commerce Platform Design',
        'Customer Portal Interface',
        'Brand Identity Guidelines'
      ],
      bio: 'Passionate about creating user-centered designs that drive engagement and satisfaction.',
      contact: 'https://www.linkedin.com/in/sam-chitrala-91b416305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    'N. Pawan': {
      designation: 'UI/UX Designer',
      department: 'UI/UX',
      skills: ['Interface Design', 'User Testing', 'Design Thinking', 'Figma'],
      projects: [
        'Mobile App Redesign',
        'User Experience Optimization',
        'Interactive Prototype Development'
      ],
      bio: 'Specialized in creating seamless user experiences through innovative design solutions.',
      contact: 'https://www.linkedin.com/in/bhuma-naga-pavan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    'R Gnana Prakash': {
      designation: 'Founder',
      department: 'Leadership',
      skills: ['Management', 'Marketing', 'Leadership'],
      projects: [
        'Company Formation',
        'Product Vision & Roadmap',
        'Strategic Partnerships'
      ],
      bio: 'Visionary leader with extensive experience in building and scaling technology companies.',
      contact: 'https://www.linkedin.com/in/gnana-r-310644261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    'B Krishna Arjun': {
      designation: 'Founder',
      department: 'Leadership',
      skills: ['Technical Architecture', 'System Design', 'Team Management', 'Innovation'],
      projects: [
        'Technical Infrastructure',
        'Architecture Design',
        'Technology Strategy'
      ],
      bio: 'Technology leader focused on building scalable and innovative solutions.',
      contact: 'krishnarjun.banoth@gmail.com'
    },
    'G Sudarshan': {
      designation: 'Founder',
      department: 'Leadership',
      skills: ['C++', 'HTML', 'CSS', 'JavaScript', 'Verilog'],
      projects: [
        'Operations Setup',
        'Process Implementation',
        'Team Expansion'
      ],
      bio: 'Operational expert with a focus on efficiency and organizational growth.',
      contact: 'https://www.linkedin.com/in/sudarshan-reddy-23386b20a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    'Koteswar Mani': {
      designation: 'DevOps Engineer',
      department: 'DevOps',
      skills: ['AWS', 'GCP','cloud'],
      projects: [
        'Cloud Infrastructure Setup',
        'Automation Pipeline Implementation',
        'Security Framework Development'
      ],
      bio: 'DevOps specialist focused on building robust and scalable infrastructure.',
      contact: 'https://www.linkedin.com/in/gkemhcs'
    },
    'S Sainath': {
      designation: 'Frontend Developer',
      department: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Redux'],
      projects: [
        'Web Application Development',
        'Frontend Architecture',
        'Performance Optimization'
      ],
      bio: 'Frontend developer passionate about creating responsive and performant web applications.',
      contact: 'https://www.linkedin.com/in/sana-sainath-893a8b26b/'
    },
    'N Teja Kumar': {
      designation: 'Frontend Developer',
      department: 'Frontend',
      skills: ['Python', 'C', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'MongoDB'],
      projects: [
        'SPA Development',
        'Frontend Testing Framework',
        'UI Component Library'
      ],
      bio: 'Experienced frontend developer specializing in modern JavaScript frameworks.',
      contact: 'https://www.linkedin.com/in/tejakumar-narayana'
    },
    'B Nani': {
      designation: 'Frontend Developer',
      department: 'Frontend',
      skills: ['Node.js', 'C++', 'Java', 'JavaScript', 'SQL'],
      projects: [
        'E-commerce Frontend',
        'Dashboard Development',
        'Mobile-First Design Implementation'
      ],
      bio: 'Frontend developer focused on building elegant and efficient user interfaces.',
      contact: 'https://www.linkedin.com/in/nani-prabhakar-038618255/'
    },
    'G Ganesh': {
      designation: 'Frontend Developer',
      department: 'Frontend',
      skills: ['Node.js', 'Python', 'JavaScript', 'SQL'],
      projects: [
        'Admin Dashboard',
        'Client Portal Frontend',
        'Component Library'
      ],
      bio: 'Frontend specialist with expertise in React ecosystem.',
      contact: 'http://www.linkedin.com/in/ganesh-gone-8b23201a8'
    },
    'K Chaithanya': {
      designation: 'Frontend Developer',
      department: 'Frontend',
      skills: ['Node.js', 'Python', 'Java', 'JavaScript', 'MongoDB', 'MySQL'],
      projects: [
        'Customer Portal',
        'Analytics Dashboard',
        'Responsive Web Design'
      ],
      bio: 'Frontend developer specializing in Vue.js and modern web technologies.',
      contact: 'https://www.linkedin.com/in/chaithanya-kanipakam-3b5751280/'
    },
    'B Ganesh': {
      designation: 'Frontend Developer',
      department: 'Frontend',
      skills: ['React', 'JavaScript', 'Bootstrap', 'jQuery', 'Responsive Design'],
      projects: [
        'Marketing Website',
        'Product Landing Pages',
        'Interactive Web Components'
      ],
      bio: 'Frontend developer focused on creating engaging user experiences.',
      contact: 'https://linkedin.com/in/b-ganesh-5b33a7219'
    },
    'B Srinu': {
      designation: 'Backend Developer',
      department: 'Backend',
      skills: ['Node.js', 'Java', 'Dart', 'JavaScript', 'SQL'],
      projects: [
        'Microservices Architecture',
        'Payment Integration',
        'Authentication System'
      ],
      bio: 'Backend developer with expertise in Java and microservices architecture.',
      contact: 'https://www.linkedin.com/in/bandlamudi-srinu-324172247'
    },
    'V Phanindra': {
      designation: 'Backend Developer',
      department: 'Backend',
      skills: ['Python', 'Java', 'C', 'Flask', 'Django', 'FastAPI', 'MySQL', 'MongoDB'],
      projects: [
        'Data Processing Pipeline',
        'Content Management System',
        'API Gateway Implementation'
      ],
      bio: 'Backend developer focused on building efficient and scalable systems.',
      contact: 'phanivutla2004@gmail.com'
    },
    'Y Santi Kumar': {
      designation: 'Backend Developer',
      department: 'Backend',
      skills:  ['Python', 'SQL', 'JavaScript', 'Django', 'Flask', 'React.js', 'Next.js'],
      projects: [
        'Real-time Communication System',
        'Data Analytics Backend',
        'Cloud Infrastructure'
      ],
      bio: 'Backend developer specialized in Node.js and cloud technologies.',
      contact: 'http://linkedin.com/in/to-the-sky'
    },
    'G Jayanth Kumar': {
      designation: 'Backend Developer',
      department: 'Backend',
      skills: ['Python', 'JavaScript', 'Java', 'C', 'Django', 'Flask', 'React.js', 'Next.js'],
      projects: [
        'Authentication Service',
        'Data Migration Tools',
        'API Development'
      ],
      bio: 'Backend developer with a focus on Python and modern backend technologies.',
      contact: 'https://www.linkedin.com/in/sai-jayanth-gujjala-907929253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  };
  
  export default TeamData;