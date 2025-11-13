import React, { useState, useEffect } from 'react';
import { MinusIcon, Code, Database, Server, GitBranch, Cloud, Terminal, Package, Shield, Bug, Monitor, LayoutGrid, Zap, Rocket, HardDrive, Percent, TextIcon, ComputerIcon, Code2Icon } from "lucide-react";
import { DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiJqueryLogo, DiLaravel, DiPhp, DiPostgresql, DiPython, DiSqllite, DiSymfony } from 'react-icons/di';
import { FaLaravel, FaSquareFull } from 'react-icons/fa';

const skills = [
  { name: 'Html', icon: DiHtml5, percentage: 90 },
  { name: 'CSS', icon: DiCss3, percentage: 75 },
  { name: 'Boostrap', icon: DiBootstrap, percentage: 80 },
  { name: 'JavaScript', icon: DiJavascript, percentage: 70 },
  { name: 'JQuery', icon: DiJqueryLogo, percentage: 70 },
  { name: 'Php', icon: DiPhp, percentage: 90 },
  { name: 'Laravel', icon: FaLaravel, percentage: 60 },
  { name: 'Symfony', icon: DiSymfony, percentage: 85 }, // Added Symfony
  { name: 'PostgreSQL', icon: DiPostgresql, percentage: 80 },
  { name: 'Sql', icon: DiSqllite, percentage: 95 },
  { name: 'Conception', icon: TextIcon, percentage: 95 },
  { name: 'Git', icon: GitBranch, percentage: 80 },
  { name: 'VsCode', icon: Code2Icon, percentage: 90 },
];

const FavoryteToll = () => {
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24 2xl:px-32 py-10 sm:py-16 md:py-20">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-extrabold flex gap-2 items-center justify-center my-2 sm:my-4">
            <MinusIcon className="text-yellow-500"/>Mes Compétences et Outils
          </h1>
          <h1 className="italic text-yellow-500 text-xl sm:text-2xl md:text-4xl">Explorer Mon Niveau</h1>
          <h1 className="text-lg sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-white">Dans Divers Domaines de Développement</h1>
          <p className='text-gray-400 text-sm sm:text-base'>Explorez mes compétences techniques et créatives alliant innovation et performance : <br className="hidden sm:block" />
           langages de programmation, bibliothèques, frameworks modernes.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-2 sm:p-4 my-8 sm:my-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-2 sm:p-4 bg-gray-100 rounded-lg shadow-lg w-28 h-40 sm:w-36 sm:h-52 justify-center text-center transition-colors duration-700
                    hover:bg-yellow-200
                    ${animateCards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white mb-1 sm:mb-2">
                <skill.icon className="w-10 h-10 sm:w-16 sm:h-16 text-gray-700" />
              </div>
              <p className="text-base sm:text-xl font-semibold text-gray-800 mt-1 sm:mt-2">{skill.name}</p>
              <div className="flex items-center mt-1">
                <Percent className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mr-1" />
                <p className="text-sm sm:text-lg font-bold text-yellow-600">{skill.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoryteToll;