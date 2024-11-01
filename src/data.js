// src/data.js

// Statements and roles mapping for each section based on the provided PDF.
export const sections = [
    {
      id: 'A',
      title: 'Section A',
      description: 'When involved in a project with others:',
      statements: [
        'I can be relied upon to see that work is organized.',
        'I pick up slips and omissions that others fail to notice.',
        'I react strongly when meetings look like losing track of the main objective.',
        'I produce original suggestions.',
        'I analyse other people’s ideas objectively, for both merits and failings.',
        'I am keen to find out the latest ideas and developments.',
        'I have an aptitude for organising people.',
        'I am always ready to support good suggestions that help to resolve a problem.'
      ]
    },
    {
      id: 'B',
      title: 'Section B',
      description: 'In seeking satisfaction through my work:',
      statements: [
        'I like to have a strong influence on decisions.',
        'I feel in my element where work requires a high degree of attention and concentration.',
        'I am concerned to help colleagues with their problems.',
        'I like to make critical discrimination between alternatives.',
        'I tend to have a creative approach to problem-solving.',
        'I enjoy reconciling different points of view.',
        'I am more interested in practicalities than new ideas.',
        'I particularly enjoy exploring different views and techniques.'
      ]
    },
    {
      id: 'C',
      title: 'Section C',
      description: 'When the team is trying to solve a particularly complex problem:',
      statements: [
        'I keep a watching eye on areas where difficulty may arise.',
        'I explore ideas that may have a wider application than in the immediate task.',
        'I like to weigh up and evaluate a range of suggestions thoroughly before choosing.',
        'I can co-ordinate and use productively other people’s abilities and talents.',
        'I maintain a steady systematic approach, whatever the pressures.',
        'I often produce a new approach to a long continuing problem.',
        'I am ready to make my personal views known in a forceful way if necessary.',
        'I am ready to help whenever I can.'
      ]
    },
    {
      id: 'D',
      title: 'Section D',
      description: 'In carrying out my day-to-day work:',
      statements: [
        'I am keen to see there is nothing vague about my task and objectives.',
        'I am not reluctant to emphasise my own point of view in meetings.',
        'I can work with all sorts of people provided that they have got something worthwhile to contribute.',
        'I make a point of following up interesting ideas and/or people.',
        'I can usually find the argument to refute unsound propositions.',
        'I tend to see patterns where others would see items as unconnected.',
        'Being busy gives me real satisfaction.',
        'I have a quiet interest in getting to know people better.'
      ]
    },
    {
      id: 'E',
      title: 'Section E',
      description: 'If I am suddenly given a difficult task with limited time and unfamiliar people:',
      statements: [
        'I often find my imagination frustrated by working in a group.',
        'I find my personal skill particularly appropriate in achieving agreement.',
        'My feelings seldom interfere with my judgment.',
        'I strive to build up an effective structure.',
        'I can work with people who vary widely in their personal qualities and outlook.',
        'I feel it is sometimes worth incurring some temporary unpopularity if one is to succeed in getting one’s views across in a group.',
        'I usually know someone whose specialist knowledge is particularly apt.',
        'I seem to develop a natural sense of urgency.'
      ]
    },
    {
      id: 'F',
      title: 'Section F',
      description: 'When suddenly asked to consider a new project:',
      statements: [
        'I start to look around for possible ideas and openings.',
        'I am concerned to finish and perfect current work before I start.',
        'I approach the problem in a carefully analytical way.',
        'I am able to assert myself to get other people involved if necessary.',
        'I am able to take an independent and innovative look at most situations.',
        'I am happy to take the lead when action is required.',
        'I can respond positively to my colleagues and their initiatives.',
        'I find it hard to give in a job where the goals are not clearly defined.'
      ]
    },
    {
      id: 'G',
      title: 'Section G',
      description: 'In contributing to group projects in general:',
      statements: [
        'I think I have a talent for sorting out the concrete steps that need to be taken given a broad brief.',
        'My considered judgment may take time but is usually near the mark.',
        'A broad range of personal contacts is important to my style of working.',
        'I have an eye for getting the details right.',
        'I try to make my mark in group meetings.',
        'I can see how ideas and techniques can be used in new relationships.',
        'I see both sides of a problem and take a decision acceptable to all.',
        'I get on well with others and work hard for the team.'
      ]
    }
  ];
  
  // Role descriptions based on the Belbin Team Roles document.
  export const rolesDescriptions = {
    SH: 'Shaper - Highly motivated, energetic, and dynamic. Shapers thrive on pressure and challenge others to push forward.',
    CO: 'Coordinator - Calm, self-confident, and good at delegating. Coordinators bring people together to achieve shared goals.',
    PL: 'Plant - Creative and innovative, generating new ideas and solving problems.',
    RI: 'Resource Investigator - Extroverted and curious, skilled at making contacts and exploring opportunities.',
    ME: 'Monitor Evaluator - Serious-minded and prudent, providing objective analysis and sound judgment.',
    IMP: 'Implementer - Practical, reliable, and efficient, with strong organizational skills.',
    TW: 'Team Worker - Supportive, diplomatic, and cooperative, improving team dynamics and morale.',
    CF: 'Completer Finisher - Conscientious and detail-oriented, ensuring tasks are completed accurately and on time.'
  };
  
  // Role mapping for each statement, matching the section and statement index to a role.
  export const roleMap = {
    A: ['IMP', 'CF', 'SH', 'PL', 'ME', 'RI', 'CO', 'TW'],
    B: ['SH', 'ME', 'TW', 'CF', 'PL', 'CO', 'IMP', 'RI'],
    C: ['SH', 'PL', 'ME', 'CO', 'IMP', 'RI', 'TW', 'CF'],
    D: ['IMP', 'SH', 'CO', 'RI', 'ME', 'PL', 'CF', 'TW'],
    E: ['TW', 'CO', 'ME', 'IMP', 'SH', 'PL', 'RI', 'CF'],
    F: ['PL', 'CF', 'ME', 'SH', 'RI', 'CO', 'TW', 'IMP'],
    G: ['IMP', 'SH', 'CO', 'RI', 'TW', 'ME', 'CF', 'PL']
  };
  