import {
  blockchain,
  backend,
  smart,
  web,
  javascript,
  sql,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  hardhat,
  mongodb,
  git,
  figma,
  solidity,
  magazine3,
  ejyhealth,
  samsung,
  ornamint,
  medbase,
  ticket,
  threejs,
  // solidity,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Web Developer',
    icon: web,
  },
  {
    title: 'Blockchain Developer',
    icon: blockchain,
  },
  {
    title: 'Smart Contract Developer',
    icon: smart,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'git',
    icon: git,
  },

  {
    name: 'Solidity',
    icon: solidity,
  },
  {
    name: 'Hardhat',
    icon: hardhat,
  },
  {
    name: 'SQL',
    icon: sql,
  },
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Magazine3',
    icon: magazine3,
    iconBg: '#383E56',
    date: 'Dec 2022 - March 2023',
    points: [
      'Developed a decentralized web-based application leveraging Ethereum blockchain technology for secure storage of images and documents in a distributed environment.',
      'Utilized Interplanetary File System (IPFS) to facilitate off-chain data storage, ensuring efficient data sharing among users within the decentralized network.',
      'Employed cutting-edge technologies, including Web Development, React.js, Blockchain Technology, and Smart Contract Development, to create a robust and secure platform.',
    ],
  },
  {
    title: 'Web3 & Blockchain Researcher',
    company_name: 'EJY Health',
    icon: ejyhealth,
    iconBg: '#E6DEDD',
    date: 'Dec 2022 - April 2023',
    points: [
      'Led a team in researching and implementing Blockchain and Web3 Technologies for secure healthcare document storage and decentralized identity verification.',
      'Conducted in-depth research on integrating the Ayushman Bharat Digital Mission Sandbox into a decentralized environment.',
      'Developed expertise in Research and Development, with a focus on Blockchain Technology and Smart Contracts.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Samsung R&D Institute',
    icon: samsung,
    iconBg: '#383E56',
    date: 'Dec 2022 - Present',
    points: [
      'Led a functional team of four members in successfully developing a Software as a Service application for real work object serialization using Blockchain Technology , Non Fungible Token (NFT) concepts and Web Development (React.JS) to prevent counterfeiting of real world products',
      'An advanced research project and work with Proof of origin consensus with ERC - 721,a standard for represent.',
      'Technology Used - React.JS, Web Development, Smart Contract Development, Blockchain Technology, Inter Planetary File System.',
    ],
  },
];

const projects = [
  {
    name: 'Ornamint',
    description:
      'Developed a decentralized application for secure ornament sales and resales using IPFS and Blockchain. Implemented Smart Contracts to generate unique NFTs, ensuring authenticity. Streamlined the process for users to upload ornament images and bills for sales.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'solidity',
        color: 'green-text-gradient',
      },
      {
        name: 'IPFS',
        color: 'pink-text-gradient',
      },
    ],
    image: ornamint,
    source_code_link: 'https://github.com/Devansh-Mehra/OrnaMint',
  },
  {
    name: 'MedBase',
    description:
      'Developed a secure web-based application with React.js for decentralized storage of electronic health records. Implemented Smart Contracts, including those for patients, doctors, and owners. Leveraged Blockchain Technology, Smart Contracts, and Web Development with a focus on Solidity.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'solidity',
        color: 'green-text-gradient',
      },
    ],
    image: medbase,
    source_code_link: 'https://github.com/Devansh-Mehra/MedBase',
  },
  {
    name: 'Ticket Reselling Website',
    description:
      'Created a software enabling users to sell NFT-based tickets, ensuring authenticity and facilitating event booking. Utilized Ethereum, Blockchain, Interplanetary File System, and Web Development technologies.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'solidity',
        color: 'green-text-gradient',
      },
      {
        name: 'IPFS',
        color: 'pink-text-gradient',
      },
    ],
    image: ticket,
    source_code_link:
      'https://github.com/Devansh-Mehra/The-Leaf-Coders-Ticket-Reselling-Website-',
  },
];

export { services, technologies, experiences, projects };
