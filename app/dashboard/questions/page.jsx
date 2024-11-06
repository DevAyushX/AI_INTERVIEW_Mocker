
const questions = [
  {
    question: "What are your strengths?",
    answer: "My strengths include being a quick learner, problem-solving, and adaptability to different situations. I also work well in teams and can manage time effectively."
  },
  {
    question: "What are your weaknesses?",
    answer: "Sometimes, I focus too much on details, which can slow down progress. However, I am working on balancing quality and efficiency."
  },
  {
    question: "Why do you want to work here?",
    answer: "I admire the company's innovative approach and its impact on the industry. I believe my skills and values align with the company's mission and goals."
  },
  {
    question: "Where do you see yourself in five years?",
    answer: "In five years, I see myself growing both personally and professionally, taking on more responsibilities, and contributing significantly to the company's success."
  },
  {
    question: "Can you describe a challenging work situation and how you overcame it?",
    answer: "I once worked on a project with a tight deadline and limited resources. By prioritizing tasks and collaborating closely with the team, we were able to meet the deadline with great results."
  },
  {
    question: "How do you handle stress or pressure?",
    answer: "I handle stress by staying organized, focusing on one task at a time, and taking short breaks when needed. I also use stress as motivation to work efficiently."
  },
  {
    question: "What motivates you to work hard?",
    answer: "I am motivated by challenges, the opportunity to learn new skills, and achieving goals. Knowing that my efforts contribute to the team's success also drives me."
  },
  {
    question: "How do you prioritize your work?",
    answer: "I prioritize my tasks based on deadlines and the overall impact on the project. I like to break down large tasks into smaller, manageable steps."
  },
  {
    question: "How do you handle conflicts with coworkers?",
    answer: "I believe in open communication and resolving conflicts by discussing the issue calmly. I try to understand the other person's perspective and work together to find a solution."
  },
  {
    question: "Why should we hire you?",
    answer: "You should hire me because I have the skills, experience, and passion to contribute to the success of your company. I am eager to learn and grow within your team."
  },
  {
    question: "Tell me about yourself.",
    answer: "I am a motivated and hardworking individual with a passion for technology. I have a background in software development and enjoy solving complex problems."
  },
  {
    question: "What are your career goals?",
    answer: "My career goal is to take on leadership roles in the tech industry and continue improving my skills, particularly in software development and project management."
  },
  {
    question: "How do you stay organized?",
    answer: "I stay organized by using task management tools, setting deadlines, and maintaining a clear to-do list. This helps me stay focused and manage my time effectively."
  },
  {
    question: "Describe a time when you worked as part of a team.",
    answer: "I once worked on a project where the team had diverse skill sets. By collaborating effectively and dividing tasks based on strengths, we were able to complete the project successfully."
  },
  {
    question: "How do you deal with failure?",
    answer: "I view failure as a learning experience. When I encounter setbacks, I analyze what went wrong, learn from it, and apply those lessons to future tasks."
  },
  {
    question: "What do you know about our company?",
    answer: "I know that your company is a leader in [industry] and has made a significant impact through [products/services]. I admire your commitment to innovation and customer satisfaction."
  },
  {
    question: "What is your biggest professional achievement?",
    answer: "My biggest professional achievement was leading a project that increased efficiency by 30%. It involved collaborating with multiple teams and delivering results ahead of schedule."
  },
  {
    question: "How do you handle multiple tasks or deadlines?",
    answer: "I handle multiple tasks by prioritizing them based on deadlines and importance. I make sure to allocate enough time for each task and avoid procrastination."
  },
  {
    question: "What type of work environment do you prefer?",
    answer: "I prefer a collaborative and positive work environment where communication is open, and team members support each other. It helps foster creativity and productivity."
  },
  {
    question: "How do you handle feedback and criticism?",
    answer: "I welcome feedback and use it to improve myself. Constructive criticism helps me grow and become better at what I do."
  },
  {
    question: "How do you ensure your work meets deadlines?",
    answer: "I break down tasks into manageable parts, set clear deadlines for each, and stay focused to complete them on time. I also communicate with my team if there's a delay."
  },
  {
    question: "What is your management style?",
    answer: "My management style is collaborative. I believe in empowering team members, providing guidance, and encouraging open communication to achieve goals."
  },
  {
    question: "Tell me about a time you solved a difficult problem at work.",
    answer: "I once solved a technical issue by thoroughly researching the problem and testing various solutions. Through persistence and collaboration, I found an effective fix."
  },
  {
    question: "What are your salary expectations?",
    answer: "I expect a salary that reflects my skills and experience. I am open to discussing compensation in line with the market standards and company budget."
  },
  {
    question: "What is your greatest professional strength?",
    answer: "My greatest professional strength is my ability to adapt quickly to new technologies and challenges, which allows me to deliver effective solutions."
  },
  {
    question: "How do you stay updated with industry trends?",
    answer: "I stay updated by reading industry blogs, attending webinars, and participating in online forums and discussions with other professionals."
  },
  {
    question: "Do you prefer to work independently or as part of a team?",
    answer: "I enjoy both, but I believe that teamwork brings out the best in everyone. Collaborating with others often leads to more innovative solutions."
  },
  {
    question: "What is the most difficult decision you’ve had to make?",
    answer: "The most difficult decision I had to make was choosing between two equally important projects. I prioritized based on impact and communicated with the stakeholders to make the best choice."
  },
  {
    question: "How do you ensure quality in your work?",
    answer: "I ensure quality by reviewing my work thoroughly, following best practices, and taking time to understand the requirements before starting a task."
  },
  {
    question: "What do you think makes you a good fit for this role?",
    answer: "I believe my technical skills, combined with my ability to communicate effectively and work in teams, make me a good fit for this role."
  },
];

function Page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Common HR Interview Questions</h1>
      {questions.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{item.question}</h3>
          <details className="mt-2 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <summary className="cursor-pointer text-cyan-600">Show Answer</summary>
            <p className="mt-2">{item.answer}</p>
          </details>
        </div>
      ))}
    </div>
  );
}

export default Page;
